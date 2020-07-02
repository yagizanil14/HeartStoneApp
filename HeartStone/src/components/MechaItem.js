import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const MechaItem = props =>{
    return(
        <View>
           <TouchableOpacity style={styles.mechaItem.buttonStyle} onPress={()=>props.pressMechaItem(props.dataItem.item.name)}>
           <Text style={styles.mechaItem.textStyle}>{props.dataItem.item.name}</Text>
           </TouchableOpacity>
        </View>
    )
}
export {MechaItem}