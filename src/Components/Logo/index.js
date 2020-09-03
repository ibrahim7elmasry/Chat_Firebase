import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'

export default () => (
    <View style={styles.root}> 
        <Image
            style={styles.imageStyle}
            source={require('../../Themes/Images/logo.png')}
      />


    </View>
);