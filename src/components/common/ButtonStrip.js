/**
 * Component: ButtonStrip:
 * Description: stripe for graph chart 
 */

import React, { Fragment, useState } from "react";
import { TouchableOpacity, Platform, ActivityIndicator, View, Text } from "react-native";
import PropTypes from 'prop-types';
import {Styles} from "./Styles";
import {CommonStyle} from "../../styles";


const ButtonStrip = props => {
    let {buttons, changePage} = props;
    const [selectedButton, setPageSize] = useState(0);
  


     return (<View style={Styles.ButtonStripConatiner}>
     {buttons.map((item, ind)=>{return(<TouchableOpacity  onPress={()=>{setPageSize(ind);changePage(item)}} style={[Styles.buttonStrip, ind==selectedButton && Styles.selectedButtonStrip]}>
                 <Text style={[CommonStyle.text, CommonStyle.textbold,Styles.gothicFont ]}>{item.value}</Text>
        </TouchableOpacity>)})}
      </View>);
};


ButtonStrip.propTypes = {
    changePage: PropTypes.func,
  
  };
ButtonStrip.defaultProps = {
    changePage: ()=>{},
    buttons : [{key : "day",value: "D", daysSub: 1},{key : "week",value: "W", daysSub: 7},{key : "month",value: "M", daysSub: 30},{key : "year",value: "Y",daysSub: 365}]
  };
  
export default ButtonStrip;
  
