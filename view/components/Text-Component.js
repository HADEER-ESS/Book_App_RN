import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TextComponent = ({ title, content }) => {
    console.log("content is ", content);

    return (
        <Text style={styles.textViewStyle}>
            {title} : {content}
        </Text>
    )
}

const styles = StyleSheet.create({
    textViewStyle: {
        color: "#000000",
        fontSize: 17,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 4
    }
})

export default TextComponent;