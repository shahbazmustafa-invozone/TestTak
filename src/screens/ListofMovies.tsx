import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
export interface Props {
    
}
const ListofMovies:React.FC<Props> = (props) => {
    const [searchText, setSearchText] = useState("");
    const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])
    return (
        <View style={styles.mainView}>
            <View style={styles.inputStyle}>
                <TextInput placeholder={'Search by Name or question'}
                    style={styles.inputFieldStyle}
                    value={searchText}
                    onChangeText={(text) => {
                        setSearchText(text)
                    }} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.headingViewStyle}>
                    <Text style={styles.headingTextStyle}>Movies</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        numColumns={1}
                        data={list}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={{ list: list }}
                        showsVerticalScrollIndicator={false}
                        removeClippedSubviews={false}
                        style={{ flex: 1, width: '100%' }}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.outerContainerStyle}>
                                    <TouchableOpacity style={styles.itemContainer} 
                                    onPress={()=>{props.navigation.navigate("MovieDetail")}}>
                                        <View style={styles.innerCOntainerStyle}>
                                            <Text style={{ fontSize: 16, marginTop: 10, }}>{"Name"}</Text>
                                            <Text style={{ fontSize: 12, marginTop: 5 }}>{"Votes"}</Text>
                                            <Text style={{ fontSize: 13, marginBottom: 10, marginTop: 5, }}>{"get"}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                </View>
            </View>
        </View>
    )
}
export default ListofMovies;
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white"
    },
    inputStyle: {
        marginTop: 80,
        marginBottom: 20,
        width: "100%",
        alignItems: "center",
    },
    inputFieldStyle: {
        width: "90%",
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    headingViewStyle: {
        width: "100%",
        paddingHorizontal: 20
    },
    headingTextStyle: {
        fontSize: 22,
        color: "#333333",
    },

    listContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    outerContainerStyle: {
        width: '100%',
        alignItems: 'center'
    },
    innerCOntainerStyle: {
        flex: 1,
        height: '100%',
        paddingLeft: 30
    },
    itemContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
})
