import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import Wordle from "screens/Wordle";

const App: React.FC = () => (
  <SafeAreaProvider>
    <Wordle />
  </SafeAreaProvider>
);

export default App;
