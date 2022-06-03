import { useState } from 'react';
import TabNavigation from './src/navigations/TabNavigation';
import ColorContext from './src/stores/ColorContext';
import StoryContext from './src/stores/StoryContext';
import storiesdb from './src/stores/storiesdb';

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

  const [storyNum, setStoryNum] = useState(storiesdb.length + 2);
  const [stories, setStories] = useState(storiesdb);

  return (
    <StoryContext.Provider value={{ stories, setStories, storyNum, setStoryNum }}>
      <ColorContext.Provider value={{ colors, setColors }}>
        <TabNavigation />
      </ColorContext.Provider>
    </StoryContext.Provider>
  );
}
