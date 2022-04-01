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
    $("#output").addClass();
    const zero = '["0"]';
    let num = parseInt($("#number").val());
    let newArray = beepBoop(num);
    let finalArray = beepBoopArray(newArray);

    if (num == 0) {
      $("#output").removeClass("hidden");
      $("#output").text(zero);
    } else {
      $("#output").removeClass("hidden");
      $("#output").text("");
      $("#output").text(finalArray);
    }
  });
});
