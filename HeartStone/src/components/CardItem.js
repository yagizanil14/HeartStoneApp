import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native'
import axios from 'axios'
import styles from '../styles'

const CardItem = props => {
    const [flip, setFlip] = useState(true)
    const [cardItems, setCardItem] = useState([])
    useEffect(() => {
        fetchCardItem()
    }, [])
    const fetchCardItem = async () => {

        let res = await axios.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${props.dataItem.item.name}`,
            {
                headers: {
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                    "x-rapidapi-key": "d4e77d95f7msh930b34969fe52ecp1fdf46jsn709381ddd950"
                }
            })
        console.log("CARD ITEM")
        setCardItem(res.data[0])

    }

    return (
        <SafeAreaView>
            {console.log(cardItems)}
            {flip ?
                <TouchableOpacity
                    style={styles.cardItem.cardContainer}
                    onPress={() => setFlip(false)} >
                        <View style={styles.cardItem.titleView}>
                    <Text style={styles.cardItem.cardTitle}>{cardItems.name}</Text>
                        </View>
                    <Image style={styles.cardItem.cardImage} source={{ uri: cardItems.img }} resizeMode="contain" />
                </TouchableOpacity> :
                <TouchableOpacity
                    style={styles.cardItem.cardContainer}
                    onPress={() => setFlip(true)} >
                    <Text style={styles.cardItem.cardInfoText}>Card Set:  {cardItems.cardSet}</Text>
                    <Text style={styles.cardItem.cardInfoText}>Healt:  {cardItems.health}</Text>
                    <Text style={styles.cardItem.cardInfoText}>Attack:  {cardItems.attack}</Text>
                    <Text style={styles.cardItem.cardInfoText}>Rarity:  {cardItems.rarity}</Text>
                    <Text style={styles.cardItem.cardInfoText}>Race:  {cardItems.race}</Text>
                    <Text style={styles.cardItem.cardInfoText}>Mechanic:  {cardItems.mechanics[0].name}</Text>
                </TouchableOpacity>
            }
        </SafeAreaView>
    )
}

export { CardItem }