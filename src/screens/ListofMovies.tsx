import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, } from "react-native";
import { useSelector, useDispatch } from "react-redux"
import { moviesList } from "../Redux/api/api";
import { arrayEmptyAction } from "../Redux/action/index";

export interface Props {
    navigation: {
        navigate: (route: string, param?: any) => void
    }
}
const ListofMovies: React.FC<Props> = (props) => {
    const [searchText, setSearchText] = useState("");
    const [pgNum, setPgNum] = useState(1)
    const [listOfItems3, setListOfItems] = useState([{ name: "Rating", isSelected: true }, { name: "Title", isSeleted: false }, { name: "Date", isSelected: false }])
    const [filter, setFilter] = useState("movieByRating")
    const [selectedItem, setSelectedItem] = useState("movieByRating")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(moviesList(filter, pgNum))
    }, [])
    let movies = useSelector((state?: any) => state)
    // console.log("List of movies", movies.movieReducer)

    return (
        <View style={styles.mainView}>
            <View style={styles.headingViewStyle}>
                <Text style={styles.headingTextStyle}>Movies</Text>
            </View>
            <View style={styles.inputStyle}>
                <TextInput placeholder={'Search by Name or question'}
                    style={styles.inputFieldStyle}
                    value={searchText}
                    onChangeText={(text) => {
                        setSearchText(text)
                        if (text.length > 0) {
                            dispatch(arrayEmptyAction())
                            dispatch(moviesList("movieSearch", pgNum, text))
                        }
                        else {
                            dispatch(arrayEmptyAction())
                            dispatch(moviesList(filter, pgNum))
                        }

                    }} />
            </View>
            <View style={{ flexDirection: "row", height: 30, marginHorizontal: 10 }}>
                <TouchableOpacity style={[styles.filterViewStyle, { backgroundColor: "#e5e5e5", }]}
                    onPress={() => {
                        setSelectedItem("movieByRating")
                        dispatch(arrayEmptyAction())
                        setPgNum(1)
                        setFilter("movieByRating")
                        dispatch(moviesList("movieByRating", pgNum))
                    }}>
                    <Text style={{ fontSize: 16, color: selectedItem == "movieByRating" ? "white" : "black" }}>{"Rating"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterViewStyle, { backgroundColor: "#e5e5e5", }]}
                    onPress={() => {
                        setSelectedItem("movieByTitle")
                        dispatch(arrayEmptyAction())
                        setPgNum(1)
                        setFilter("movieByTitle")
                        dispatch(moviesList("movieByTitle", pgNum))
                    }}>
                    <Text style={{ fontSize: 16, color: selectedItem == "movieByTitle" ? "white" : "black" }}>{"Title"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterViewStyle, { backgroundColor: "#e5e5e5", }]}
                    onPress={() => {
                        setSelectedItem("movieByDate")
                        dispatch(arrayEmptyAction())
                        setPgNum(1)
                        setFilter("movieByDate")
                        dispatch(moviesList("movieByDate", pgNum))
                    }}>
                    <Text style={{ fontSize: 16, color: selectedItem == "movieByDate" ? "white" : "black" }}>{"Date"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    numColumns={1}
                    data={movies.movieReducer}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={{ list: movies.movieReducer }}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={false}
                    style={{ width: '100%' }}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        setPgNum(pgNum + 1)
                        dispatch(moviesList(filter, pgNum))
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.outerContainerStyle}>
                                <TouchableOpacity style={styles.itemContainer}
                                    onPress={() => { props.navigation.navigate("MovieDetail", { id:item.imdb_title_id }) }}>
                                    <View style={styles.innerCOntainerStyle}>
                                        <View style={styles.upperRowStyle}>
                                            <Text style={{ fontSize: 16, }}>{item.title}</Text>
                                            <Text style={{ fontSize: 16, }}>{item.votes}</Text>
                                        </View>
                                        <Text style={{ fontSize: 13, marginTop: 5, }}>{item.director}</Text>
                                        <Text style={{ fontSize: 13, marginTop: 5, }}>{item.genre}</Text>
                                        <View style={styles.upperRowStyle}>
                                            <Text style={{ fontSize: 12, }}>{"Year = " + item.year}</Text>
                                            <Text style={{ fontSize: 12, }}>{"Duration = " + item.duration}</Text>
                                            <Text style={{ fontSize: 12, }}>{"Average Votes = " + item.avg_vote}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
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
        marginTop: 20,
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

    headingViewStyle: {
        width: "100%",
        marginTop: 20,
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
        paddingHorizontal: 20
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
    },
    filterViewStyle: {
        paddingHorizontal: 35,
        marginHorizontal: 10,
        borderRadius: 20,
        justifyContent: "center"
    },
    upperRowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    }
})
