import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Config from '../../utils/Config'
import FastImage from 'react-native-fast-image'

/**
 * 
 * @param {*} 
 * @returns Return UI of each n every item of flatlist
 */
const MovieListItem = (props) => {
    const movie = props?.movie
    return (
        <TouchableOpacity
            onPress={props?.onMovieItemClick}
            activeOpacity={1}
            style={styles.movieBoxContainer}>
            <FastImage
                source={{ uri: Config.server.imageUrl + movie?.poster_path }}
                style={
                    styles.movieImageStyle}
            />
            <View style={styles.innerView}>
                <Text style={styles.movieTitle}>{movie?.title}</Text>
                <Text style={styles.subTitleText}>Release Date - {movie?.release_date}</Text>
                <Text style={styles.subTitleText}>Movie Raing - {movie?.vote_average}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    movieImageStyle: {
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'grey'
    },
    movieBoxContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        margin: 10,

        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth
    },
    innerView: {
        marginTop: 10
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    subTitleText: {
        color: 'grey',
        fontSize: 11,
        marginTop: 5,

    }
})

export default MovieListItem
