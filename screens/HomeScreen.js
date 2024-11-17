import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

const HomeScreen = (navigation) => {
    return ( 
        <View style={StyleSheet.container}>
            <Text>Welcome to the Home Screen! </Text>
            
            <TouchableOpacity 
                // onPress={() => navigation.navigate('Details')} 
            >
                <Text style={styles.buttonText} > Go to Details</Text>
            </TouchableOpacity>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonText: {
        color: 'white',
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        width: '80%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
export default HomeScreen;
