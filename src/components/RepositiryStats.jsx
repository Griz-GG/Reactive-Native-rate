import React from "react";
import {View} from "react-native";
import StyledText from './StyledText';

const parseThousands=value=>{
    return value >=1000
    ? `${Math.round(value/100)/10}K`
    :String(value)

}
const RepositoryStats =props=>{ 
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View >
                <StyledText align='center' fontWeight='bold'>review:</StyledText>
                <StyledText align='center' >{props.review}</StyledText>
            </View>
            <View > 
             <StyledText align='center' fontWeight='bold'>reting:</StyledText>
             <StyledText align='center' >{parseThousands(props.reting)}</StyledText>
            </View>
            <View > 
                <StyledText align='center' fontWeight='bold'>description:</StyledText>
                <StyledText align='center' >{props.description}</StyledText>
            </View>
        
        </View>
    )

}

export default RepositoryStats;