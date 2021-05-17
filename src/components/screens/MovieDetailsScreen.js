import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Config from '../../utils/Config'
import FastImage from 'react-native-fast-image'

const MovieDetailsScreen = () => {

    const movie = useRoute().params?.movie

    return (
        <SafeAreaView style={styles.container}>
            <FastImage
                source={{ uri: Config.server.imageUrl + movie?.poster_path }}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.imageStyle}
            />
            <View style={styles.subView}>
                <Text style={styles.movieTitle}>{movie?.title}</Text>
                <Text style={styles.subTitleText}>{movie?.overview}</Text>
                <Text style={[styles.subTitleText, { marginTop: 20 }]}>Release Date - {movie?.release_date}</Text>
                <Text style={styles.subTitleText}>Movie Raing - {movie?.vote_average}</Text>
                <Text style={styles.subTitleText}>Upvote count - {movie?.vote_count}</Text>
            </View>
        </SafeAreaView>
    )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    container: {
        flex: 1,
    },
    subTitleText: {
        fontSize: 15
    },
    imageStyle: {
        width: '100%',
        height: 200,
        backgroundColor: 'black'
    },
    subView: {
        padding: 10
    }
})
