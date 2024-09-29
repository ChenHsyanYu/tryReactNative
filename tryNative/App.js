import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/NavBar';
import ItemPage from './src/views/ItemPage';
import ItemDetailPage from './src/views/ItemDetailPage';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { store } from './src/redux-toolkit/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
              <View style={styles.container}>
                <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name='Home' style={styles.page} component={ItemPage} options={{ headerShown: false }}/>
                  <Stack.Screen name='Details' style={styles.page} component={ItemDetailPage} options={{ headerShown: false }}/>
                </Stack.Navigator>
                <NavBar style={styles.nav}/> 
              </View> 
            </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },
  page:{
    flex: 1,
  },
  nav:{
    position: 'absolute',
    bottom: 0,
  }
});
