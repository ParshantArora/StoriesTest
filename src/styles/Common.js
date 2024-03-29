import {heightScale, fontScale, height, width} from '../helpers';
import {Fonts, colors} from '../constants';
const commonFont = {};
const shadow = {
  shadowOffset: {width: 0, height: 2},
  shadowColor: colors.Black,
  shadowOpacity: 0.1,
  elevation: 5, 
  backgroundColor: colors.White,
  boxShadow: `0 0 5px 3px rgba(0,0,0,0.1)`,
};
const shadowBlue = {
  shadowOffset: {width: 0, height: 0},
  shadowColor: colors.Black,
  shadowOpacity: 0.5,
  elevation: 5,
  backgroundColor: colors.White,
  boxShadow: `0px 1px 3px rgba(0,0,0,0.3)`,
};
export const CommonStyle = {
  justifyContentCenter: {
    justifyContent: "center"
  },
  alignItemsCenter: {
   alignItems: "center"
  },
  textAlignCenter: {
  textAlign: "center"
  },
  flex1: {flex: 1},
  flexp2: {flex: 0.2},
  flexp3: {flex: 0.3},
  flexp4: {flex: 0.4},
  flexp5: {flex: 0.5},
  flexp6: {flex: 0.6},
  flexp7: {flex: 0.7},
  flexp8: {flex: 0.8},
  flexp9: {flex: 0.9},
  row: {flexDirection: 'row'},

  padding10: {padding: heightScale(10)},
  paddingH10: {paddingHorizontal: heightScale(10)},
  paddingV10: {paddingVertical: heightScale(10)},
  paddingL10: {paddingLeft: heightScale(10)},
  paddingR10: {paddingRight: heightScale(10)},
  paddingT10: {paddingTop: heightScale(10)},
  paddingB10: {paddingBottom: heightScale(10)},

  paddingT7: {paddingTop: heightScale(7)},

  padding7: {padding: heightScale(7)},
  padding15: {padding: heightScale(15)},
  paddingH15: {paddingHorizontal: heightScale(15)},
  paddingV15: {paddingVertical: heightScale(15)},
  paddingL15: {paddingLeft: heightScale(15)},
  paddingR15: {paddingRight: heightScale(15)},
  paddingT15: {paddingTop: heightScale(15)},
  paddingB15: {paddingBottom: heightScale(15)},

  padding20: {padding: heightScale(20)},
  paddingH20: {paddingHorizontal: heightScale(20)},
  paddingV20: {paddingVertical: heightScale(20)},
  paddingL20: {paddingLeft: heightScale(20)},
  paddingR20: {paddingRight: heightScale(20)},
  paddingT20: {paddingTop: heightScale(20)},
  paddingB20: {paddingBottom: heightScale(20)},

  padding5: {padding: heightScale(5)},
  paddingV5: {paddingVertical: heightScale(5)},
  paddingH5: {paddingHorizontal: heightScale(5)},
  paddingL5: {paddingLeft: heightScale(5)},
  paddingR5: {paddingRight: heightScale(5)},
  paddingT5: {paddingTop: heightScale(5)},
  paddingB5: {paddingBottom: heightScale(5)},

  marginH5: {marginHorizontal: heightScale(5)},
  marginH10: {marginHorizontal: heightScale(10)},
  marginH20: {marginHorizontal: heightScale(20)},
  marginV5: {marginVertical: heightScale(5)},
  marginV10: {marginVertical: heightScale(10)},
  marginV15: {marginVertical: heightScale(15)},
  marginV20: {marginVertical: heightScale(20)},

  margin5: {margin: heightScale(5)},
  margin10: {margin: heightScale(10)},
  margin15: {margin: heightScale(15)},
  margin20: {margin: heightScale(20)},
  margin3: {margin: heightScale(3)},

  marginT3: {marginTop: heightScale(3)},
  marginT5: {marginTop: heightScale(5)},
  marginT10: {marginTop: heightScale(10)},
  marginT15: {marginTop: heightScale(15)},
  marginT20: {marginTop: heightScale(20)},
  marginT50: {marginTop: heightScale(50)},


  marginL3: {marginLeft: heightScale(3)},
  marginR3: {marginRight: heightScale(3)},
  marginL5: {marginLeft: heightScale(5)},
  marginR5: {marginRight: heightScale(5)},
  marginL10: {marginLeft: heightScale(10)},
  marginR10: {marginRight: heightScale(10)},
  marginL15: {marginLeft: heightScale(15)},
  marginR15: {marginRight: heightScale(15)},
  marginL20: {marginLeft: heightScale(20)},
  marginR20: {marginRight: heightScale(20)},

  width10: {width: '10%'},
  width20: {width: '20%'},
  width30: {width: '30%'},
  width40: {width: '40%'},
  width50: {width: '50%'},
  width60: {width: '60%'},
  width70: {width: '70%'},
  width80: {width: '80%'},
  width90: {width: '90%'},
  width95: {width: '95%'},
  width100: {width: '100%'},
  center: {justifyContent: 'center', alignItems: 'center'},
  jcenter: {justifyContent: 'center'},
  acenter: {alignItems: 'center'},
  container: {
    paddingVertical: heightScale(5),
    paddingHorizontal: heightScale(10),
    backgroundColor: colors.container,
  },
  text: {
    fontSize: fontScale(16),
    ...commonFont,
    color: colors.DarkGray,
  },
  shadow,
  borderRadius: heightScale(10),
  imageHeight : {height : heightScale(200),width : heightScale(200)},
  zIndex1:{zIndex: 1},
  zIndex2: {zIndex: 2},
  datePickerStyle: {
    fontSize: fontScale(16),
    color: colors.lightBlue3,
    textAlign: 'left',
  },
  datePickerPlaceholderStyle: {
    fontSize: fontScale(16),
    color: colors.lightBlue2,
    textAlign: 'left',
  },
  datePickerConfirmStyle: {
    fontSize: fontScale(16),
    color: colors.lightBlue3,
  },
  transparentBorder: {borderColor: '#ffffff00'},
  deviceCenter:{
    height,
    width 
  },
  textbold: {
    fontWeight: "bold"
  }
};
