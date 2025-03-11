import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function Comment( { id, text, onDelete } ){

    return (
        <View style={styles.listComment} key={id}>
            <View style={styles.commentArea}>
                <Text style={styles.username}>@ByLouiseJessen:</Text>
                <Text style={styles.commentText}>{text}</Text>
            </View>
            <Pressable onPress={() => onDelete(id)} style={styles.deleteButton}>
                <Image style={styles.deleteIcon} source={require('../assets/delete.png')} />
            </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    listComment: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 8, 
        marginVertical: 5,
        borderRadius: 10,

        // iOS SHADOW
        shadowColor: "rgba(0, 0, 0, 0.25)", 
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2, 
        shadowRadius: 2, 

        // Android SHADOW
        elevation: 5,

      },
      commentArea: {
        flex: 1,
      },
      username: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#333',
      },
      commentText: {
        fontSize: 14,
        color: '#555',
      },
      deleteButton: {
        padding: 8,
        borderRadius: 50,
        justifyContent: 'center',
      },
      deleteIcon: {
        width: 20,
        height: 20,
        tintColor: '#888', // Gør ikonet mere subtilt
      },
})

