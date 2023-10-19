import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Text, 
  View,
  Pressable,
  useWindowDimensions,
  Image,
} from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
          <Text style={styles.title}>Electraton Telemetry</Text>
        </View>
      <View style={styles.logo }>
          <Image source={require('./assets/tecRacing.jpg')} style={styles.logoImage} />
        </View>
      <View style={styles.squareLeft}>
          <Text style={styles.generalInfo}>General Information</Text>

          <Text style={styles.driver}>DRIVER</Text>
          <View style={styles.driverInfo}>
            <TextInput
              style={styles.input}
              placeholder="Driver Name"
              onChangeText={(val) => setName(val)}
              />
          </View>

          <Text style={styles.engineer}>CHIEF ENGINEER</Text>
          <View style={styles.engineerInfo}>
            <TextInput
              style={styles.input}
              placeholder="Chief Engineer Name"
              onChangeText={(val) => setName(val)}
              />
          </View>

          <Text style={styles.location}>LOCATION</Text>
          <View style={styles.locationInfo}>
            <TextInput
              style={styles.input}
              placeholder="Location"
              onChangeText={(val) => setName(val)}
              />
          </View>

          <Text style={styles.date}>DATE</Text>
          <View style={styles.dateInfo}>
            <TextInput
              style={styles.input}
              placeholder="dd/mm/yyyy"
              onChangeText={(val) => setName(val)}
              />
          </View>

          <Text style={styles.laps}>LAPS RAN</Text>
          <View style={styles.lapsNum}>
            <TextInput
              style={styles.input2}
              placeholder="# of Laps"
              onChangeText={(val) => setName(val)}
              />
          </View>

          <Text style={styles.lapsTotal}>RACE LAPS</Text>
          <View style={styles.lapsTotalNum}>
            <TextInput
              style={styles.input2}
              placeholder="Total Laps"
              onChangeText={(val) => setName(val)}
              />
          </View>

          <Text style={styles.cars}>TOTAL CARS</Text>
          <View style={styles.carsTotal}>
            <TextInput
              style={styles.input2}
              placeholder="# of Cars"
              onChangeText={(val) => setName(val)}
              />
          </View>

          <Text style={styles.position}>FINAL POSITION</Text>
          <View style={styles.finalPosition}>
            <TextInput
              style={styles.input2}
              placeholder="Final Pos."
              onChangeText={(val) => setName(val)}
              />
          </View>

        </View>
      <View style={styles.squareRight}> 
            
        <View style={styles.grafica1}>
          <Text style={styles.input}>Titulo de Grafica</Text>
        </View>
        <View style={styles.grafica2}>
          <Text style={styles.input}>Titulo de Grafica</Text>
        </View>
        <View style={styles.grafica3}>
          <Text style={styles.input}>Titulo de Grafica</Text>
        </View>
        <View style={styles.grafica4}>
          <Text style={styles.input}>Titulo de Grafica</Text>
        </View>

      </View>



    </View>

  );
}
