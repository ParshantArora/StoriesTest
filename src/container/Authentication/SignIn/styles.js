import {heightScale, fontScale, widthScale, height, width} from '../../../helpers';
import {colors} from '../../../constants';
import { Dimensions, Platform } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const Styles = {
  container: {
    flex: 1, 
    // justifyContent: 'center',
    // padding:widthScale(10) ,  
  backgroundColor: colors.White, },
  inputStyle: {width: '70%'},
  inputContainer: {width: '100%'},
  buttonText: {
    fontWeight: "bold",
    color: colors.White},
  loginSpace: {paddingTop: heightScale(30)},
  checkinText: {fontWeight: 'bold', fontSize: fontScale(20)},
  checkoutConfirmText: {textAlign: 'center', fontSize: fontScale(12)},
  headerConatiner: {
    backgroundColor: colors.Black,
    // justifyContent : "center",
      alignItems : "center"
    },
  logoStyle: {
   width: windowWidth*.70,
   height:windowWidth*.2,
   padding : heightScale(80),
  },
  marginLogo:{
    marginTop : height*.10,
  },
  buttonStyle: {
    backgroundColor: colors.Yellow,
    margin: width*.06,
    padding: width*.04
  },
  gothicFont: { 

  },
};
