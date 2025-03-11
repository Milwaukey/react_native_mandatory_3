import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import Comment from '../components/Comment'


export default function PostScreen() {

  // STATES TO CONTROL LIKE, IMAGE AND COMMENTS
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(778)
  const [postImageOne, setPostImageOne] = useState(true)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])


  // Handling the switch of the images (TODO: What if there was 3 images, and can we show somehow in dots how many images there is?)
  const catImage = postImageOne ? require('../assets/cat-1.jpg') : require('../assets/cat-2.jpg');


  // Handling switching from one image to another!
  function handleSwitchImage(){
    setPostImageOne(!postImageOne)
  }

  // Switch states from LIKE / UNLIKE and verse vesa
  function handleLike(){
    setLike(!like)
    if(like){setLikeCount(likeCount-1)}else{setLikeCount(likeCount+1)}
  }

  // Handling adding a comment to the image
  function handleAddComment(){
    if (newComment.trim() === '') { return; }

    setComments((prevComments) => {
      const commentId = Math.random()
      const newCommentObj = {id: commentId, text: newComment}
      
      return [...prevComments, newCommentObj]
    })
    setNewComment('')
  }

  //Handling removing a posted comment 
  function handleRemoveComment(id){
    setComments((prevComment) => {
      const updatedComments = prevComment.filter( comment => comment.id !== id)
      return updatedComments
    })
  }
 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
        
        <View style={styles.container}>

            <View style={styles.headContainer}>
                <Image style={styles.profileImage} source={require('../assets/profile-pic.jpg')}/>
                <Text style={{marginLeft: 10}}>@Bylouisejessen</Text>
            </View>
            <View style={styles.postImageContainer}>
                <Pressable onPress={handleSwitchImage}>
                    <Image style={styles.postImage} source={catImage} />
                </Pressable>
        </View>
        <View style={styles.reactionContainer}>
            <Pressable onPress={handleLike}>
                <Image style={styles.heartBtn} source={like ? require('../assets/heart-liked.png') : require('../assets/heart.png')}/>
            </Pressable>
                <Text>{likeCount} Has liked this Image!</Text>
        </View>


        <View style={styles.commentsContainer}>
            <ScrollView keyboardShouldPersistTaps="handled"> 
                {comments.map( (comment) => <Comment key={comment.id} id={comment.id} text={comment.text} onDelete={handleRemoveComment} />)}
            </ScrollView>
        </View>

        </View>
        {/* <KeyboardAvoidingView behavior="position"> */}
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={80}>
            <View style={styles.addCommentContainer}>
                <TextInput style={styles.writeComment} placeholder='Write your comment here...' value={newComment} onChangeText={setNewComment}/>
                <Pressable style={styles.addCommentBtn} onPress={handleAddComment}>
                <Image style={styles.sendBtn} source={require('../assets/send.png')}/>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
        </>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

// HEADER CONTAINER
    headContainer: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 22.5,
    },

// POST CONTAINER
    postImageContainer: {
        flex: 12,
        width: '100%',
    },

    postImage: {
        width: '100%',
        height: '100%',
    }, 

  // REACTION CONTAINER
  reactionContainer: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10
  },

    heartBtn : {
        width: 30,
        height: 30
    },

    // COMMENT CONTAINER
    commentsContainer: {
        flex: 6,
        paddingRight: 15,
        paddingLeft: 15
    },
    
    // ADD NEW COMMENT CONTAINER
    addCommentContainer : {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 25
    },

    writeComment : {
        flex: 4,
        borderRadius: 25,
        borderWidth: 1,
        padding: 10,
        marginRight: 15
    },

    addCommentBtn : {
        flex: 1,
        backgroundColor: '#282828',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 7
    },

    sendBtn : {
        width: 25,
        height: 25
    }
    

});
