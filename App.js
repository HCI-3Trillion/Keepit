import TabNavigation from './src/navigations/TabNavigation';
import ColorContext from './src/stores/ColorContext';

export default function App() {
  return (
    <ColorContext.Provider
      value={{
        Love: 'PINK',
        Angry: 'RED',
        Happy: 'YELLOW',
        Joyful: 'GREEN',
        Amazed: 'SKYBULE',
        Sick: 'BLUE',
        Shy: 'PURPLE',
        Panic: 'GRAY',
        Laugh: 'BEIGE',
      }}
    >
      <TabNavigation />
    </ColorContext.Provider>
  );
}
