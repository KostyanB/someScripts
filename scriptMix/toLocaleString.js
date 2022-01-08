// формат 2-разрядного числа
const toLocal = val =>
  val.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
