import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function HomeScreen({navigation}) {
  return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      //   <Button
      //       title="Go to Details"
      //       onPress={() => navigation.navigate('Details')}
      //   />
          <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen name="Feed" component={Feed} />
              <Tab.Screen name="Messages" component={Messages} />
          </Tab.Navigator>
      // </View>
  );
}



function Feed({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Feed Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details',{ screen: 'Work' })}
            />
        </View>
    )
}

function Messages({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Messages Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details',{ screen: 'Work' })}
            />
        </View>
    )
}

function SportDetails({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sport Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

function WorkDetails({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Work Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}


function DetailsScreen({navigation}) {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Sport" component={SportDetails} />
          <Tab.Screen name="Work" component={WorkDetails} />
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
