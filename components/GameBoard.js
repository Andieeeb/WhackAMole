import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import Square from './Square.js';

const GameBoard = () => {
    const [timeLeft, setTimeLeft] = useState(60)

    useEffect(() => {
        if(!timeLeft) return
        const timerID = setInterval(() => {
            //happens every 100ms
            setTimeLeft(timeLeft -1)
        }, 1000)
        return () => clearInterval(timerID)
    }, [timeLeft])


    return (
      <View style={styles.container}>
        <Text>Whack-A-Mole App</Text>
        <Text>{timeLeft}</Text>
        <View style={styles.game}>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </View>
      </View>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
    }
  });

  export default GameBoard