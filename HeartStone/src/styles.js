import {StyleSheet, Dimensions} from 'react-native'

const styles={
    
        cardItem:StyleSheet.create({
            cardContainer:{
                width:Dimensions.get("window").width * 0.8,
                height:Dimensions.get("window").height * 0.81,
                backgroundColor:"#e0e0e0",
                alignSelf:"center",
                borderRadius:15,
                borderColor:"#bdbdbd",
                borderWidth:5,
                marginVertical:15,
                justifyContent:"center"
            },
            cardTitle:{
                fontSize:22,
                fontWeight:"bold",
                alignSelf:"center",
                marginVertical:10,
            },
            cardImage:{
                width:Dimensions.get("window").width *0.85,
                height:Dimensions.get("window").height * 0.73,
                alignSelf:"center",
                
            },
            titleView:{
                width:Dimensions.get("window").width * 0.8,
                height:Dimensions.get("window").height * 0.07,
                backgroundColor:"#bdbdbd",
                borderTopLeftRadius:15,
                borderTopRightRadius:15,
                alignSelf:"center",
            },
            cardInfoText:{
                fontSize:20,
                fontWeight:"bold",
                textAlign:"center",
            }
        }),
        mechaItem:StyleSheet.create({
            buttonStyle:{
                width:Dimensions.get("window").width * 0.7,
                height:Dimensions.get("window").height / 12,
                alignSelf:"center",
                backgroundColor:"#9ccc65",
                borderRadius:15,
                marginVertical:5,
                justifyContent:"center"
            },
            textStyle:{
                fontSize:18,
                fontWeight:"bold",
                marginVertical:"auto",
                alignSelf:"center",
                color:"#f5f5f5"
            }
        }),
        loadingSpinner:StyleSheet.create({
            spinnerView:{
                flex:1,
                flexDirection:"row",
                justifyContent:"center",
            },
        }),
        searchCard:StyleSheet.create({
            searchTextInput:{
                width:Dimensions.get("window").width * 0.8,
                height:Dimensions.get("window").height / 12,
                alignSelf:"center",
                backgroundColor:"#e0e0e0",
                borderRadius:15,
                marginVertical:15
            }
        })
    
}
export default styles