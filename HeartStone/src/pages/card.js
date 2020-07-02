import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { CardItem } from '../components'
import styles from '../styles'

const card = props => {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        filterCard()
    }, [])

    const filterCard = () => {
        setLoading(true)
        const cardsData = []
        var filteredCard = props.cardss.map((elmn) => {

            if (elmn.mechanics[0].name == props.route.params.clickMech) {
                cardsData.push(elmn)
                console.log(elmn)
            }
        });

        console.log("DENEME CARDS DATA" + cardsData)
        setCards(cardsData)
        setLoading(false)
    }

    const searchPageNavigate = () => {
        props.navigation.navigate("searchPages")
    }
    return (
        <SafeAreaView>
            {loading == false ?
                <View>
                    <TouchableOpacity style={styles.mechaItem.buttonStyle} onPress={searchPageNavigate}>
                        <Text style={styles.mechaItem.textStyle}>Search Cards</Text>
                    </TouchableOpacity>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={cards}
                        renderItem={(item) => <CardItem dataItem={item} />}
                    />
                </View> :
                <View style={styles.loadingSpinner.spinnerView}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(card)