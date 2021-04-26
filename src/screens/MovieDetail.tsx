import React from "react";
import { View, Text, StyleSheet } from "react-native";
export interface Props {
    navigation: {
        navigate: (route: string, params?: any) => void,

    },
    route: { params?: any }
}
const MovieDetail: React.FC<Props> = (props) => {
    const params = props.route.params
    console.log(params)
    return (
        <View>
            <View style={styles.headerView}>
                <Text style={styles.headerTextStyle}>{params.movieName}</Text>
            </View>

        </View>
    )
}
export default MovieDetail;
const styles = StyleSheet.create({
    headerView: {
        alignItems: "center"
    },
    headerTextStyle: {
        fontSize: 30
    }
})