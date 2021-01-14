import * as React from 'react';
import { StyleSheet, Image, Button, Alert, TouchableOpacity, Text, View, StatusBar, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function AdditionalSpeciality({ navigation }) {

    let address = "Pune fjdfjd fjd fjdf jd fdf djf h hdj "
    if (address.length > 45) address = address.substring(0, 45);

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#40A3F2"
        />
        <Text style={styles.welcome}>
          Ashwini Shinde
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,

    },

    firstContainer: {
        flex: 1,
        backgroundColor: "#00ced1",
    },

    secondContainer: {
        flex: 3,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },

    thirdContainer: {
        flex: 7,
        backgroundColor: "#FFFFFF",

    },

    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#17202A"
    },

    toptext: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#f0f8ff",
        padding: 8,
        marginTop: 7
    },

    thirdContainerstyle1: {
        flex: 3,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        height: 50,
        padding: 6,
        marginTop: 10
    },

    thirdContainerstyle2: {
        marginTop: 50,
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#FFFFFF",
        marginBottom: 40

    },

    thirdContainerstyle1part1: {
        flex: 1
    },

    thirdContainerstyle1part2: {
        flex: 1
    },

    textL: {
        flex: 4,
        paddingLeft: 10,
        paddingTop: 6
    },

    textR: {
        flex: 5,
        paddingTop: 6
    },

    textName: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 10,
        textAlign: "center",
        color: "black"
    },

    textTags: {
        fontSize: 18,
        fontWeight: "bold",
    },

    textTagsfill: {
        fontSize: 18,
    },

    button: {
        height: 60,
        width: 190,
        alignItems: 'center',
        backgroundColor: '#F7DC6F',
        borderWidth: 3,
        borderColor: "#F7DC6F",
        borderRadius: 50,
    },

    buttonText: {
        fontWeight: "bold",
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
        paddingTop: 13
    }

});
