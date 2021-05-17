import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { getMovies } from '../../actions/MoviesActions'
import { Loading } from '../resuse/Loading'
import MovieListItem from '../resuse/MovieListItem'

const MoviesList = (props) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    let page = useRef(1)
    let hasMoreMovies = useRef(true)

    const getMoviesList = async () => {
        try {
            setLoading(true)
            const movieRes = await getMovies(page.current)
            const moviesList = movieRes?.results
            hasMoreMovies.current = moviesList?.length == 20
            setMovies([...movies, ...moviesList])
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
        }
    }


    const onMovieItemClick = (item) => {
        props.navigation?.navigate("MovieDetailsScreen", { movie: item })
    }

    /**
     * Called on list reach at bottom
     */
    const onEndReached = () => {
        if (hasMoreMovies.current) {
            page.current = ++page.current
            getMoviesList()
        }
    }

    useEffect(() => {
        getMoviesList()
    }, [])

    return (
        <View style={styles.container} >
            <FlatList
                numColumns={2}
                data={movies}
                keyExtractor={(item) => item?.id?.toString()}
                renderItem={({ item, index }) => {
                    return <MovieListItem
                        onMovieItemClick={() => onMovieItemClick(item)}
                        movie={item} />
                }}
                maxToRenderPerBatch={20}
                initialNumToRender={20}
                windowSize={200}
                onEndReachedThreshold={0.5}
                onEndReached={onEndReached}
            />
            {
                loading && <Loading />
            }
        </View>
    )
}

export default MoviesList

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
