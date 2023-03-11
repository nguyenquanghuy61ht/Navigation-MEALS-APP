import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import FavoritesContextProvider from "./store/contex/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";


export default function App() {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  function DrawerNavigator(){
    return (<Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#351401',
      },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle:{
        backgroundColor:'#351401'
      },
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#e4baa1'
    }}>
      <Drawer.Screen name="categoryes" component={CategoriesScreen} options={{
        title:'All categories',
        drawerIcon:(color,size)=><Ionicons name='list' color={color} size={size} />
      }}/>
      <Drawer.Screen name="favorites" component={FavoritesScreen} options={{
        drawerIcon: (color, size) => <Ionicons name='star' color={color} size={size} />
      }} />
    </Drawer.Navigator>)
  }
  return <>
    <StatusBar style="light"/>
    <Provider store={store}>
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
          },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
            headerShown: false
          }} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen}
          //  options={({route,navigation})=>{
          //   const cartId=route.params.categoryId;
          //   return {
          //       title:cartId
          //   }
          // }}
          />
          <Stack.Screen name="MealsDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
    </Provider>
  </>
}

