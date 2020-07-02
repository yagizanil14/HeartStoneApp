import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'
import { MechaItem } from '../components'
import { connect } from 'react-redux'
import { updateUser } from '../redux/actions/user-actions'
import { updateMecha } from '../redux/actions/mecha-action'
import axios from 'axios'
import styles from '../styles'

const mechanics = props => {
    console.log(props)
    const [mechanicss, setMechanicss] = useState([])
    const [cards, setCard] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()

    }, [])

    const fetchData = async () => {
        const cardItem = []
        const mechaItem = []
        const nameArr = []
        setLoading(true)
        let res = await axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
            {
                headers: {
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                    "x-rapidapi-key": "d4e77d95f7msh930b34969fe52ecp1fdf46jsn709381ddd950"
                }
            })
        console.log(res.data.Basic[0])
        let mapDatas = await res.data.Basic.map((e) => {
            if (e.mechanics) {
                cardItem.push(e)
                let name = e.mechanics[0].name
                if (nameArr.indexOf(name) == -1) {
                    nameArr.push(name)
                    mechaItem.push(e.mechanics[0])
                }
            }
        })
        setCard(cardItem)
        setMechanicss(mechaItem)
        props.dispatch(updateUser(cardItem))
        props.dispatch(updateMecha(mechaItem))
        setLoading(false)
    }
    const pressMech = (text) => {
        props.navigation.navigate("card", { clickMech: text })
    }

    return (
        <SafeAreaView style={{flex:1}}>
            {loading == false ?
                <View>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={mechanicss}
                        renderItem={(item) => <MechaItem dataItem={item} pressMechaItem={pressMech} />} />
                </View>
                :
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


export default connect(mapStateToProps)(mechanics)






