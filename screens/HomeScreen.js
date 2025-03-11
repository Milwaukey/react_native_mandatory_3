import { View, Text, StyleSheet, Button, Pressable } from "react-native";


export default function HomeScreen({navigation}){

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to the homescreen</Text>
            <Pressable style={styles.navBtn} onPress={() => navigation.navigate("Post")}>
                <Text style={styles.btnText}>Go To Comments</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#282828',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        color: 'white',
        fontSize: 24
    },
    navBtn: {
        width: '100%',
        backgroundColor: 'lightgreen',
        marginTop: 25,
        padding: 15,
    },
    btnText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '600'
    }

}) 


