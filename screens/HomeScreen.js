import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={styles.ImageBackground} source={require('../assets/bg_image.png')}>
                        <Text>ISS TRACKER</Text>
                        <TouchableOpacity style={styles.Button} onPress={() => { this.props.navigation.navigate('ISS') }}>
                            <Text style={styles.text}>ISS LOCATION</Text>
                            <Text style={styles.KnowMore}>{"KNOW MORE-->"}</Text>
                            <Text style={styles.digit}>1</Text>
                            <Image style={styles.imageStyle} source={require('../assets/iss_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => { this.props.navigation.navigate('meteor') }}>
                            <Text style={styles.text}>METEORS</Text>
                            <Text style={styles.KnowMore}>{"KNOW MORE-->"}</Text>
                            <Text style={styles.digit}>2</Text>
                            <Image style={styles.imageStyle} source={require('../assets/meteor_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => { this.props.navigation.navigate('update') }}>
                            <Text style={styles.text}>UPDATES</Text>
                            <Text style={styles.KnowMore}>{"KNOW MORE-->"}</Text>
                            <Text style={styles.digit}>3</Text>
                            <Image style={styles.imageStyle} source={require('../assets/rocket_icon.png')} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageStyle: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -50,
        right: -100,
    },
    ImageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    Button: {
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        width: 200,
        height: 100,
        alignSelf: 'center',
    },
    digit: {
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 80,
        right: 10,
        position: 'absolute',
    },
    KnowMore: {
        color: 'red',
        fontSize: 15,
        marginLeft: 30,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginTop: 20,
        paddingLeft: 50,
    },
});
