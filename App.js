import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import StartGameScreen from './screens/StartGameScreen';
import IntroScreen from './screens/IntroScreen';
import AboutScreen from './screens/AboutScreen';
import RecordsScreen from './screens/RecordsScreen';
import LostGameScreen from './screens/LostGameScreen';
import WonGameScreen from './screens/WonGameScreen';


const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    StartGame: StartGameScreen, 
    Intro: IntroScreen,
    About: AboutScreen,
    Records: RecordsScreen,
    LostGame: LostGameScreen,
    Won: WonGameScreen
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      title: 'Презентація React Native'
    }
  }
);

export default createAppContainer(navigator);
