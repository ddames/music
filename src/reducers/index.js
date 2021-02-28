import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Smells Like Teen Spirit', duration: '3:56'},
    { title: 'Macarena', duration: '2:30'},
    { title: 'Rooster', duration: '3:15'},
    { title: 'Mouth', duration: '4:23'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});