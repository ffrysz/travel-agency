export const formatTime = seconds => {
  if (typeof seconds === 'number' && seconds >= 0) {

    const formattedSeconds = String(Math.floor(seconds % 60)).padStart(2, '0');
    const formattedMinutes = String(Math.floor((seconds / 60) % 60)).padStart(2, '0');
    const formattedHours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const formattedTime = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;

    return formattedTime;

  } else if (!seconds || isNaN(seconds) || seconds < 0) {
    return null;
  }
};
