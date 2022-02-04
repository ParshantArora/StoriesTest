import React, { useState, useEffect } from 'react';
import { View, Text, Image , Keyboard } from 'react-native';
import { useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { saveLoginData } from "../../../actions"
import { Strings } from '../../../constants';
import { FormTextInput, Button } from '../../../components';
import { useSelector } from 'react-redux';
import { Styles } from './styles';
import {submitLogin} from './bl';
import {LogoMain} from '../../../assets';
import {login} from '../../../actions';
import {Toast} from '../../../components';
import {Validations, pushnotifications,height} from '../../../helpers';

const SignIn = props => {
  const [statePhone, setStatePhone] = useState({
    username: '',
    usernameError: null,
  });
  const [statePassword, setStatePassword] = useState({
    password: '',
    passwordError: null,
  });

  const signIn = () =>{
    Keyboard.dismiss();
    if(!statePhone.username){
      Toast({ message: emailEmpty, type: 'error', delay: 4000 });
      return;
    }
    if(!statePassword.password){
      Toast({ message: passwordEmpty, type: 'error', delay: 4000 });
      return;
    }
    dispatch(login({userid : statePhone.username,password : statePassword.password}));
  //     /* 1. Navigate to the Details route with params */
  //     navigation.navigate('App', {
  //       itemId: 86,
  //       otherParam: 'anything you want here',
  //     });
  //   })

  }

  const dispatch = useDispatch();

  const { placeholder, auth, error: {emailError, emailEmpty, passwordEmpty} } = Strings;
  return (
    <KeyboardAwareScrollView
    scrollEnabled={true}
    extraHeight={height*.20}
    keyboardShouldPersistTaps={"handled"}
     contentContainerStyle={{ flexGrow: 1 }}
  >
    <View style={Styles.container}>
      <View style={Styles.headerConatiner}>

        <Image  
        resizeMethod={"resize"}
        resizeMode={"contain"}
                  source={LogoMain}
                  style={[Styles.logoStyle]}
              />
      </View>
      <View style={Styles.marginLogo}/>
      <FormTextInput
        label={placeholder.email}
        placeholder={placeholder.email}
        onChangeText={username =>
          setStatePhone({
            username,
            usernameError: null,
            //  !Validations.email(username)
            //   ? emailError
            //   : null,
          })
        }
        value={statePhone.username}
        returnKey="done"
        autoCapitalize={'none'}
        keyboardType={"default"}
        maxLength={40}
        error={statePhone.usernameError}
        inputStyle={Styles.gothicFont}
      />

      <FormTextInput
        label={placeholder.password}
        placeholder={placeholder.password}
        onChangeText={password =>
          setStatePassword({
            password,
            // phoneNumberError: !Validations.phoneNumber(phoneNumber)
            //   ? error.password
            //   : null,
          })
        }
        value={statePassword.password}
        returnKey="submit"
        // onSubmitEditing={() => {
        //   signIn()
        // }
        // }
        autoCapitalize={'none'}
        keyboardType={"default"}
        maxLength={40}
        error={statePassword.passwordError}
        keyboardType={"default"}
        secureTextEntry={true}
        inputStyle={Styles.gothicFont}
      />
      <Button
        // loader={loader}
        onPress={() => {
          signIn()
        }}
        name={auth.checkin}
        textStyle={[Styles.buttonText,Styles.gothicFont]}
        gradient={false}
        buttonStyle={Styles.buttonStyle}
      />
    </View>
    </KeyboardAwareScrollView>
  );

}
export default SignIn;