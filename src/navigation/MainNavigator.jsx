import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../pages/Home"
import NewsDetails from "../pages/NewsDetails" 

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name="home" component={Home}></Stack.Screen>
                <Stack.Screen name="detail" component={NewsDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator