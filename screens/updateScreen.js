import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class UpdateScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text>UPDATE SCREEN</Text>
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
});
