import React from "react";
import { TouchableOpacity, Platform, ActivityIndicator, View, Text } from "react-native";
import {Styles} from "./Styles";
import {CommonStyle} from "../../styles";
import {Gradient} from "../"



const Button = props => {
  let { onPress = () => console.log("Button Pressed"), buttonStyle, name,
    textStyle, gradient=true, loader=false
  } = props;
     return gradient?(
        <Gradient style={Styles.buttonContainerStyle}>
          <TouchableOpacity disabled={loader} onPress={onPress} activeOpacity={1} style={[CommonStyle.center, Styles.buttonStyle, buttonStyle]}>
              {loader?<ActivityIndicator color="white"/>:<Text style={[CommonStyle.text, textStyle]}>{name}</Text>}
          </TouchableOpacity>
        </Gradient>)
      : 
      (<TouchableOpacity disabled={loader} onPress={onPress} style={[CommonStyle.center, CommonStyle.padding10, buttonStyle]}>
                  {loader?<ActivityIndicator color="white"/> : <Text style={[CommonStyle.text, textStyle]}>{name}</Text>}
        </TouchableOpacity>);
};


export default Button;
