import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import Searchbar from "../components/SearchBar";

const HomeScreen = (navigation) => {
    const [city, setCity] = React.useState('');
    const [newcity, setNewcity] = React.useState('');

    const handleSearch = () => {
        // navigation.navigate('Weather', { city });
        setCity();
        setNewcity(city);
    }

    return ( 
        <View style={styles.container}>
            {/* Search Bar */}
            <Text>Welcome to the Home Screen!  {newcity}</Text>
            <Searchbar city={city} setCity={setCity} onSearch={handleSearch} />
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
})
export default HomeScreen;





            
           