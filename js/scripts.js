//Business Logic

function beepBoop(num) {
  let array = [];
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  console.log(array);
  return array;
}
function beepBoopArray(newArray) {
  console.log(newArray);
  let newOne = [];
  for (i = 0; i < newArray.length; i++) {
    let numString = newArray[i].toString();
    if (numString.match(3)) {
      newOne.push("' Won't you be my neighbor?'");
    } else if (numString.match(2)) {
      newOne.push('"Boop"');
    } else if (numString.match(1)) {
      newOne.push('"Beep"');
    } else {
      newOne.push(numString);
    }
  }

  let resultArray = newOne;
  return resultArray;
}

// User Interface Logic

$(document).ready(function () {
  $("form#beepBoop").submit(function (event) {
    event.preventDefault();

    const errorMessage = " Make sure you put values 0 and above!";
    let num = parseInt($("#number").val());
    let newArray = beepBoop(num);
    const finalArray = beepBoopArray(newArray);

    if (num < 0) {
      $("div#result").removeClass("hidden");
      $("#output").text(errorMessage);
    } else {
      $("div#result").removeClass("hidden");
      $("#output").html(finalArray.toString(","));
    }
  });
});
