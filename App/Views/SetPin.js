import Icon from "react-native-vector-icons/Ionicons";
import React, { Component,useEffect, useRef, useState } from "react";
import { ImageBackground, SafeAreaView, StatusBar, Text, navigate } from "react-native";
import ReactNativePinView from "react-native-pin-view";


const SetPin = ({ navigation }) => {

  load = () =>{
     console.log("yes load method calling");
  }
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])

  return (
    <>
      <StatusBar barStyle="light-content" />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "#40A3F2", justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              paddingTop: 24,
              paddingBottom: 48,
              color: "#FFFFFF",
              fontSize: 48,
            }}>
            SET PIN
          </Text>
          <ReactNativePinView
            inputSize={32}
            ref={pinView}
            pinLength={4}
            buttonSize={60}
            onValueChange={value => setEnteredPin(value)}
            buttonAreaStyle={{
              marginTop: 24,
            }}
            inputAreaStyle={{
              marginBottom: 24,
            }}
            inputViewEmptyStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#FFFFFF",
            }}
            inputViewFilledStyle={{
              backgroundColor: "#FFFFFF",
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: "#FFFFFF",
            }}
            buttonTextStyle={{
              color: "#FFFFFF",
            }}
            onButtonPress={key => {
              if (key === "custom_left") {
                pinView.current.clear()
              }
              if (key === "custom_right") {
                //alert("Entered Pin: " + enteredPin)
                console.log(enteredPin);
              //  this.props.navigation.navigate('Hometabbar')
                navigation.navigate('Hometabbar')
              

              }

            }}
            customLeftButton={showRemoveButton ? <Icon name={"ios-backspace"} size={36} color={"#FFF"} /> : undefined}
            customRightButton={showCompletedButton ? <Icon name={"ios-checkmark-done"} size={36} color={"#FFF"} /> : undefined}
          />
        </SafeAreaView>
    </>
  )
}
export default SetPin
