import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import ArticleList214850Navigator from '../features/ArticleList214850/navigator';
import ArticleList214849Navigator from '../features/ArticleList214849/navigator';
import ArticleList214848Navigator from '../features/ArticleList214848/navigator';
import BlankScreen0214847Navigator from '../features/BlankScreen0214847/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
ArticleList214850: { screen: ArticleList214850Navigator },
ArticleList214849: { screen: ArticleList214849Navigator },
ArticleList214848: { screen: ArticleList214848Navigator },
BlankScreen0214847: { screen: BlankScreen0214847Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
