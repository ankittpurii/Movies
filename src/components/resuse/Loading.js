import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { screenWidth, screenHeight } from '../../utils/Helper'

/**Loading Component */
export const Loading = (props) => {
    const {
        loaderColor
    } = props;
    return (
        <View style={styles.mainConatainer}>
            <View style={styles.container} />
            <ActivityIndicator color={loaderColor ? loaderColor : "black"} size="large" />
        </View>
    )
}

export const styles = StyleSheet.create({
    mainConatainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        height: screenHeight,
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.3,
    }
})