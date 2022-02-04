import {heightScale, fontScale, widthScale, width} from '../../../helpers';
import {colors} from '../../../constants';
import {Platform} from "react-native";
export const Styles = {
  container: { flex: 1, backgroundColor: colors.White, justifyContent: 'center', paddingTop: heightScale(20)  },  
  logoStyle: {
    width: width*.16,
    height:width*.18,
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
    fontSize: widthScale(16),
    textAlign:'left',
  },
  gothicFont: { 

  },
  loadContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
      marginHorizontal:widthScale(100),
      marginVertical:widthScale(10),
     padding: widthScale(10),
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.DavyGrey,
},
  loadMoreText: {
    fontSize: widthScale(15),
    textAlign:'center'
  }
};
