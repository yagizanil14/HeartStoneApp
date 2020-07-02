import React from 'react'
import { SafeAreaView,Text, View } from 'react-native'
import styles from '../styles'

const SearchItem = props =>{
    return(
        <SafeAreaView>
            <View style={styles.mechaItem.buttonStyle}>
            <Text style={styles.mechaItem.textStyle}>{props.searchCardItem.item.name}</Text>
            </View>
        </SafeAreaView>
    )
}
export {SearchItem}