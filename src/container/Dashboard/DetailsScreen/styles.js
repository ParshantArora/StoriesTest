import {heightScale, fontScale, widthScale, width, height} from '../../../helpers';
import {colors} from '../../../constants';
import {Platform} from "react-native";
export const Styles = {
  container: { flex: 1,  backgroundColor: colors.White, 
  //   justifyContent: 'center', 
  // paddingTop: heightScale(20) 
 },  
  logoStyle: {
    width: width*.16,
    height:width*.18,
  },
  attributesContainer:{
    flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      // marginHorizontal:widthScale(20),
       paddingHorizontal: widthScale(20),
       paddingVertical: widthScale(1),
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
    marginHorizontal:widthScale(30),
    paddingVertical: widthScale(15),
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,

  },
  textContainer:{
    marginLeft: width*0.05
  },
  label: {
    fontSize: widthScale(18),
    textAlign:'left'
  },
  boldData: {
    fontWeight: "bold",
  },
  name: {
    fontSize: widthScale(15),
    textAlign:'left',
  },
  gothicFont: { 

  },
  blankSpace: {
    height: height*.05
  },
  buttonText: {color: colors.White},
  buttonStyle: {
  
  },
  buttonBottomContainer: {
      paddingHorizontal: widthScale(20),
      paddingVertical: widthScale(10),
    //   flex: 1
  },
  dataListShow: { 
    marginTop : width*.10
  },
  flex1 :{flex:1},
  webViewHeight: { marginTop: 20 ,height : height}
};
