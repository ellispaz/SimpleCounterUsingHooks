import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = props => {
  const TIME = 20;
  const TIME2 = 10;

  const [ticks, setTicks] = useState(TIME);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
      var timerID = setInterval(() => tick(), 1000)
      return function cleanup() {
          clearInterval(timerID);
      };
  }, [timerOn, ticks])

  function tick() {
    if (timerOn === true){
    setTicks(ticks - 1)};
    if (ticks <= 0){
      setTicks(TIME2);
      setTimerOn(false);
    }
  }

  function startStop() {
    setTimerOn(!timerOn)
  }

  function reset() {
    setTimerOn(false)
    setTicks(TIME)
  };

  let Timer = (
    <View style={styles.container}>
      <Text style ={styles.title}>Interesting Timer</Text>
      <Text style={timerOn ? styles.countRunning : styles.countNotRunning}>{ticks}</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button title={timerOn ? 'STOP' : 'START'} onPress={startStop} />
          <Button title='Reset' onPress={reset} />
        </View>
    </View>
  );

  return Timer
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countRunning: {
    fontSize: 60,
    color: 'black',
  },
  countNotRunning: {
    fontSize: 60,
    color: 'grey',
  },
  title: {
    fontSize: 30,
  },
});