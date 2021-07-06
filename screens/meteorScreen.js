import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class MeteorScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            meteors: {},
        };
    }
    ComponentDidMount() {
        this.getMeteorInfo();
    }
    getMeteorInfo = () => {
        axios
            .get(
                'https://api.nasa.gov/neo/rest/v1/feed?api_key=QxjdOzvgIc4qjZpCXrYIEOXS97ufrqyKhw0aAS2c'
            )
            .then((response) => {
                this.setState({
                    meteors: response.data.near_earth_objects,
                });
            })
            .catch((error) => alert(error.message));
    };

    render() {
        if (Object.keys(this.state.meteors).length === 0) {
            return <Text>LOADING...</Text>;
        } else {
            var meteor_array = Object.keys(this.state.meteors).map((meteor_date) => {
                return this.state.meteors[meteor_date];
            });
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.text}>METEOR SCREEN</Text>
                    </View>
                </SafeAreaView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginTop: 20,
        alignSelf: 'center',
    },
});
