// validate count number

const ALLOWED_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const REQUIRED_COUNT_NUMBER_LENGHT = 6;

export function validateCountNumber(countNumber) {
  if (countNumber.length !== REQUIRED_COUNT_NUMBER_LENGHT) return false;
  if (countNumber.charAt(0) !== "1") return false;
  if ([...countNumber].some((symbol) => !ALLOWED_SYMBOLS.includes(symbol)))
    return false;
  return true;
}
