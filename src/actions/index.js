// Action creator
export const selectSong = (song) => {
  // Return and action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

