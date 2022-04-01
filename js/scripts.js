let num = 95;
let array = [];
const newArray = beepBoop();

function beepBoop() {
  if (num === 0) {
    return ["0"];
  } else {
    for (let i = 0; i <= num; i++) {
      array.push(i);
    }
  }
  return array;
}
function beepBoopArray(newArray) {
  for (i = 0; i < newArray.length; i++) {
    let numString = newArray[i];
    numString = numString.toString();
    if (numString.match(3)) {
      newArray[i] = "Won't you be my neighbor?";
    } else if (numString.match(2)) {
      newArray[i] = "Boop";
    } else if (numString.match(1)) {
      newArray[i] = "Beep";
    }
  }
  return newArray;
}
