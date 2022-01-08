const formatDate = sec => {
  const d = new Date(sec * 1000), //=> msec
    year = d.getFullYear().toString().substring(2),
    month = (d.getMonth() + 1).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
    day = d
      .getDate()
      .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
    hours = d.getHours(),
    minutes = d.getMinutes();

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
};
