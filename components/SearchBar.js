import React from "react"
import { TouchableOpacity, StyleSheet, Text, Button, TextInput, View } from "react-native";

const Searchbar = ({city, setCity, onSearch}) => {

    return ( 
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Search"
                value={city}
                onChangeText={setCity}
            />

             <TouchableOpacity 
                onPress={onSearch}
            >
                <Text style={styles.buttonText} > search </Text>
            </TouchableOpacity>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    input: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    buttonText: {
        color: 'white',
        backgroundColor: '#4CAF50',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        flexShrink: 1, // Prevents text from overflowing
        textAlign: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
        
        // width: '80%',
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

export default Searchbar;