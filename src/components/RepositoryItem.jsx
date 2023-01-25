import React from 'react'
import {Image, View, StyleSheet} from "react-native";
import StyledText from './StyledText';
import RepositoryStats from './RepositiryStats';
import theme from '../theme';

const RepositoryItemHeader=({ownerAvatarUrl,id,fullName,language})=>(
    <View style={{flexDirection:'row',paddingBottom:2}}>
        <Image style={styles.image} source={{uri:ownerAvatarUrl}}/>

    <View style={{paddingLeft:10}}>
        <StyledText >id:{id}</StyledText>
        <StyledText fontsize='subheading' fontWeight='bold' >fullName:{fullName}</StyledText>
        <StyledText style={styles.language}>language:{language}</StyledText>
    </View>
    </View>
)

const RepositoryItem =(props)=>(
    <View key={props.id} style={styles.container}>
        
        <RepositoryItemHeader {...props}/>
        <RepositoryStats {...props}/>
        
    </View>
)


const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    language:{
        padding:4,
        color:theme.colors.white,
        backgroundColor:theme.colors.primary,
        alignSelf:'flex-start',
        borderRadius:4,
        overflow:'hidden'
    },
    image:{
        width:48,
        height:48,
        borderRadius:4
    }
})

export default RepositoryItem


//1:14:57