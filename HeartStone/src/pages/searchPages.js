import React, { useState } from 'react'
import axios from 'axios'
import {ActivityIndicator ,View, TextInput, FlatList, SafeAreaView } from 'react-native'
import { SearchItem } from '../components'
import styles from '../styles'

const searchPages = () => {
    const [searchCards, setSearchCards] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchCards = async (text) => {
        setLoading(true)
        let res = await axios.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${text}`, {
            headers: {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "d4e77d95f7msh930b34969fe52ecp1fdf46jsn709381ddd950"
            }
        })
        if(res.data){
            setLoading(false)
        }
        setSearchCards(res.data)
    }
    return (
        <SafeAreaView>
            <View>
                <TextInput style={styles.searchCard.searchTextInput} onChangeText={fetchCards} placeholder="Search Name" />
            </View>
            {loading == false ?
                <View>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={searchCards}
                        renderItem={(item) => <SearchItem searchCardItem={item} />}
                    />
                </View> :
                <View style={styles.loadingSpinner.spinnerView}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
        </SafeAreaView>
    )
}
export { searchPages }