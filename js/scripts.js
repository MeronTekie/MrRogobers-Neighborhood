//Business Logic
let array = [];
function beepBoop(num) {
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  return array;
}
function beepBoopArray(newArray) {
  for (i = 1; i < newArray.length; i++) {
    let numString = newArray[i];
    numString = numString.toString();
    if (numString.match(3)) {
      newArray[i] = '"Wont you be my neighbor?"';
    } else if (numString.match(2)) {
      newArray[i] = '"Boop"';
    } else if (numString.match(1)) {
      newArray[i] = '"Beep"';
    }
  }
  return newArray;
}

// User Interface Logic
$(document).ready(function () {
  $("form#beepBoop").submit(function (event) {
    event.preventDefault();

    $("#result").addClass("hidden");

    const zero = '["0"]';
    const num = parseInt($("#number").val());
    const newArray = beepBoop(num);
    const finalArray = beepBoopArray(newArray);

    if (num == 0) {
      $("#result").removeClass("hidden");
      $("#output").text(zero);
    } else {
      $("#result").removeClass("hidden");
      $("#output").text(finalArray);
    }
  });
});
