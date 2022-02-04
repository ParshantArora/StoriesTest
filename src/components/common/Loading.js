import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import {Fonts, colors} from '../../constants';


const Loading = (props) => {


   const appState = useSelector(state => state.appState);
 
   console.log("appStateappState",appState)
   if (!appState.loading) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={'large'}
        color={colors.Black}
        style={{ size: 'large' }}
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFill,
  },
});

export default Loading;