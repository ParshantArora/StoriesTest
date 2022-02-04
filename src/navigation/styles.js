import { colors } from '../constants';
import {heightScale, fontScale, widthScale, width} from '../helpers';

export const Styles = {
  logoStyle: {
    width: width*.08,
    height:width*.08,
  },
  logoStyleDetails: {
    width: width*.10,
    height:width*.10,
  },
  backStyle: {
    width: width*.05,
    height:width*.05,
  },
  backContainer : {
    // marginLeft: width*.03,
    padding: width*.03
   },
  tabBarStyle: {
    backgroundColor: colors.lightestGrey,
    //----------add this line------------------------//
    height: width*.20
},
customTabConatiner : { flexDirection: 'row',
  backgroundColor: colors.lightestGrey,
  height: width*.20,
  // borderRadius:50,
  justifyContent:"center",
  alignItems:"center"
 }

};
