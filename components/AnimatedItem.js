import React from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class AnimagedItem extends React.Component {
    constructor(props) {
        super(props);
        this.moveAnimation = new Animated.ValueXY({ x: -30, y: 0 })
    }

    _moveBall = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: 350, y: 0 },
        }).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.tennisBall, this.moveAnimation.getLayout()]}>
                    <TouchableOpacity style={styles.button} onPress={this._moveBall}>
                        <Text style={styles.buttonText}></Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#ecf0f1',
        zIndex: 999,
        position: 'absolute'
      },
      tennisBall: {
       // display: 'flex',
       // justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 100,
        width: 50,
        height: 50,
      },
      button: {
      //  paddingTop: 24,
      //  paddingBottom: 24,
      width: 50,
      height: 50,
      elevation: 8,
      
      },
      buttonText: {
       // fontSize: 40,
        color: '#fff',
      }
});

export default AnimagedItem;