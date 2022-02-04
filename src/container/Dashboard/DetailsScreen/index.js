

import React, { Fragment , useState, useEffect } from 'react';
import { View, Text , FlatList , TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from './styles';


import { Strings } from '../../../constants';

const { activityData : {activityData}, deviceParameter: {deviceParameter} } = Strings;
import { useSelector } from 'react-redux';

import { WebView } from 'react-native-webview';




const DetailsScreen = ({ route, navigation })=> {

   let { item } = route.params.params;


    return (
      <ScrollView>
      <View style={Styles.container}>
  
        <View
          style={Styles.itemContainer}>
     
            <View style={Styles.textContainer}>
            {item.title && <Text style={[Styles.label,Styles.boldData, Styles.gothicFont]}>Title : {item.title}</Text>}
            {item.text && <Text style={[Styles.label,Styles.gothicFont]}>Text :  {item.text}</Text>}
            </View>

     
      </View>
      
      {item.url  && <WebView
        source={{ uri: item.url
       }}
        style={Styles.webViewHeight}
      />}
     
      </View></ScrollView>
    );
  
  }
  
  export default DetailsScreen;