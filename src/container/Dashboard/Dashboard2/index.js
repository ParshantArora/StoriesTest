
import React, {useState , useEffect} from 'react';
import { Button, View, Text , FlatList , TouchableOpacity, Image } from 'react-native';
import {login} from '../../../actions';
import { useDispatch } from 'react-redux'
import {getStories} from '../../../actions';
import {useSelector} from 'react-redux';
import {CommonStyle} from '../../../styles';
import {OffGrid, OnGrid , offline} from '../../../assets';
import { Styles } from './styles';
import { Strings } from '../../../constants';
const {common : {loadMore}, dashboard: { noDeviceFound } } = Strings;


const Dashboard2 = ({ navigation })=> {

  const [pageSize, setPageSize] = useState(30);
  const [page, setPage] = useState(0);
  const [refresh, setRefresh] = useState(false);


  const dispatch = useDispatch();
  const {storie } = useSelector(({StorieState}) => StorieState);
   
  
  useEffect(() => {
 
      loadStories(false,false);
 
  }, []);

  const loadStories = (append,refreshData) =>{
       
    dispatch(getStories(page , pageSize,append,()=>{
     

        setRefresh(false)
    
    }));
  }

  const renderItem = ({item, index}) => {
    let {text,title} = item;

    return(
    <TouchableOpacity
      style={Styles.itemContainer}
      onPress={() => {
        navigation.navigate('DetailsScreen', {
           params: {   item}
        });
      }}>
    
        <View style={Styles.textContainer}>
        <Text style={[Styles.label,Styles.boldData, Styles.gothicFont]}>Title : {title}</Text>
        {text && <Text style={[Styles.label,Styles.gothicFont]}> Text : {text}</Text>}
        </View>
    </TouchableOpacity>

    )
    }



    return (
      <View style={Styles.container}>
       {<FlatList
            data={storie}
            showsVerticalScrollIndicator={false}
      
            renderItem={renderItem}
      
          />}
         
      </View>
    );
  
  }
  export default Dashboard2;