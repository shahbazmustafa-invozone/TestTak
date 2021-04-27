import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux"
import { movieDetails } from "../Redux/api/api";
export interface Props {
    navigation: {
        navigate: (route: string, params?: any) => void,

    },
    route: { params?: any }
}
const MovieDetail: React.FC<Props> = (props) => {
    const params = props.route.params
    console.log(params.id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieDetails(params.id))
    }, [])
    let movies = useSelector((state?: any) => state)
    // const item = movies.movieDetail[0]
    // console.log("List of movies", item)
    if (typeof movies.movieDetail === 'undefined') {
        return(
            <View></View>
        )
    }
    else{
      const item=movies.movieDetail[0]
        return (
            <View style={{ alignItems: "center" }}>
                <View style={styles.headerView}>
                    <Text style={styles.headerTextStyle}>{item?.title?item.title:""}</Text>
                </View>
                <View style={{ width: "80%", marginTop: 20 }}>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{item?.actor?item.actor:""}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{item?.director?item.director:""}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{item?.duration?item.duration:""}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{ item?.genre?item.genre:""}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{ item?.year?item.year:""}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{ item?.avg_vote?item.avg_vote:""}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{item?.votes?item.votes:""}</Text>
                </View>
            </View>
        )
    }
  
}
export default MovieDetail;
const styles = StyleSheet.create({
    headerView: {
        alignItems: "center",
        marginTop: 10
    },
    headerTextStyle: {
        fontSize: 30
    }
})