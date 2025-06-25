import "@expo/metro-runtime";
import { registerRootComponent } from 'expo';

import MainMenu from './app/pages/MainMenu';
import Index from "./Index.tsx";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Index);
