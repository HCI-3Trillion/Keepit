import React, { useContext } from 'react';
import ColorContext from '../stores/ColorContext';
import { ColorCode } from '../utils/constants';

import Amazed from '../emotions/Amazed';
import Angry from '../emotions/Angry';
import Happy from '../emotions/Happy';
import Joyful from '../emotions/Joyful';
import Laugh from '../emotions/Laugh';
import Love from '../emotions/Love';
import Panic from '../emotions/Panic';
import Shy from '../emotions/Shy';
import Sick from '../emotions/Sick';

const Emotion = ({ emotion }) => {
  const colors = useContext(ColorContext);

  if (emotion == 'Amazed') return <Amazed color={ColorCode[colors['Amazed']]} />;
  else if (emotion == 'Angry') return <Angry color={ColorCode[colors['Angry']]} />;
  else if (emotion == 'Happy') return <Happy color={ColorCode[colors['Happy']]} />;
  else if (emotion == 'Joyjul') return <Joyful color={ColorCode[colors['Joyful']]} />;
  else if (emotion == 'Laugh') return <Laugh color={ColorCode[colors['Laugh']]} />;
  else if (emotion == 'Love') return <Love color={ColorCode[colors['Love']]} />;
  else if (emotion == 'Panic') return <Panic color={ColorCode[colors['Panic']]} />;
  else if (emotion == 'Shy') return <Shy color={ColorCode[colors['Shy']]} />;
  else return <Sick color={ColorCode[colors['Sick']]} />;
};

export default Emotion;
