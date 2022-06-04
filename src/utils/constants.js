const ColorCode = {
  PRIMARY: '#8E97FD',
  GRAY1: '#8F9BB3',
  WHITE: '#FFFFFF',
  PINK: '#FDC4DC',
  RED: '#F3AD98',
  YELLOW: '#FFDD67',
  GREEN: '#C2E5A6',
  SKYBLUE: '#B8EEE8',
  BLUE: '#A0AFF9',
  PURPLE: '#DDCCFB',
  GRAY: '#D7D7D7',
  BEIGE: '#EFDDBC',
  PGREEN: '#C2DED1',
  PCREAM: '#FAF0D7',
  PPINK: '#F4BFBF',
  PSKY: '#CCF3EE',
  PORANGE: '#E5CB9F',
  PPURPLE: '#D9D7F1',
  PYELLOW: '#F9F7CF',
};

const Palette = [
  'PINK',
  'RED',
  'YELLOW',
  'GREEN',
  'SKYBLUE',
  'BLUE',
  'PURPLE',
  'GRAY',
  'BEIGE',
  'PGREEN',
  'PPINK',
  'PSKY',
  'PORANGE',
  'PPURPLE',
  'PYELLOW',
];

const EmotionName = [
  'ALL',
  'Love',
  'Angry',
  'Happy',
  'Joyful',
  'Amazed',
  'Sick',
  'Shy',
  'Panic',
  'Laugh',
];

const MonthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Topic = [
  "How's the weather today?",
  'How does the sky look like?',
  'What are you looking at?',
  'Is there an animal around you?',
  'Is there a flower or tree around you?',
  'What are you wearing right now?',
  'What are you eating right now?',
  'Who are you with?',
  'Are you at home, or outside?',
  'What shoes are you wearing?',
];

const Help = `
Q. How can I edit/delete stories that have already been uploaded?
A. Keepit doesn't provide an edit/delete function in order to capture the emotion of the very moment and to prevent it from being distorted.
 
Q. I don't like the colors of emotions.
A. Click on the setting button on the bottom right corner and customize the colors as you want.
 
Q. How can I filter stories by emotion?
A. On your memory board, you can swipe right/left or click on the arrow buttons. You can see stories filtered by emotion.
 
Q. It's hard to come up with what to write about or what to take a picture of.
A. You can refer to a recommended topic on the home screen.
 
Q. I can't upload a photo I took.
A. Please check if you have written a comment and chosen an emotion. You cannot upload only a photo.
 
Q. I want to upload multiple stories.
A. You can only upload one story a day.
`;

export { ColorCode, EmotionName, Palette, MonthName, DayName, Topic, Help };
