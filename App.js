import react, { useState } from 'react';
import TabNavigation from './src/navigations/TabNavigation';
import ColorContext from './src/stores/ColorContext';

export default function App() {
  const [colors, setColors] = useState({
    Love: 'PINK',
    Angry: 'RED',
    Happy: 'YELLOW',
    Joyful: 'GREEN',
    Amazed: 'SKYBLUE',
    Sick: 'BLUE',
    Shy: 'PURPLE',
    Panic: 'GRAY',
    Laugh: 'BEIGE',
  });

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      <TabNavigation />
    </ColorContext.Provider>
  );
}
