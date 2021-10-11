export const formatTime = seconds => {
  if (typeof seconds === 'number' && seconds >= 0) {
    return 'formatted time';
  } else if (!seconds || isNaN(seconds) || seconds < 0) {
    return null;
  }
};
