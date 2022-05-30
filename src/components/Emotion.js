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

const Emotion = ({ emotion, preview }) => {
  const { colors } = useContext(ColorContext);

  if (emotion == 'Amazed')
    return <Amazed color={preview ? ColorCode[preview] : ColorCode[colors['Amazed']]} />;
  else if (emotion == 'Angry')
    return <Angry color={preview ? ColorCode[preview] : ColorCode[colors['Angry']]} />;
  else if (emotion == 'Happy')
    return <Happy color={preview ? ColorCode[preview] : ColorCode[colors['Happy']]} />;
  else if (emotion == 'Joyful')
    return <Joyful color={preview ? ColorCode[preview] : ColorCode[colors['Joyful']]} />;
  else if (emotion == 'Laugh')
    return <Laugh color={preview ? ColorCode[preview] : ColorCode[colors['Laugh']]} />;
  else if (emotion == 'Love')
    return <Love color={preview ? ColorCode[preview] : ColorCode[colors['Love']]} />;
  else if (emotion == 'Panic')
    return <Panic color={preview ? ColorCode[preview] : ColorCode[colors['Panic']]} />;
  else if (emotion == 'Shy')
    return <Shy color={preview ? ColorCode[preview] : ColorCode[colors['Shy']]} />;
  else return <Sick color={preview ? ColorCode[preview] : ColorCode[colors['Sick']]} />;
};

export default Emotion;
