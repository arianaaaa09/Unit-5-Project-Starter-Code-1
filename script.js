let submitButton = document.querySelector(".submit");
let message = document.querySelector(".result");
submitButton.onclick = function() {
  let musicweek = document.querySelector(".musicweek").value;
  let musictime = document.querySelector(".musictime").value;
  
  console.log(musicweek);
  console.log(musictime);
  console.log('JI');

  // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE

  if (musicweek <= 5 && musictime === "AM") {
    message.innerHTML = "You are Jhene Aiko!";
  } else if (musicweek <= 5 && musictime === "PM") {
    message.innerHTML = "You are PartyNextDoor!";
  } else if (musicweek > 5 && musictime === "AM") {
    message.innerHTML = "You are Summer Walker!";
  } else if (musicweek > 5 && musictime === "PM") {
    message.innerHTML = "You are Drake!";

  } else {
    message.innerHTML = "Please input valid characters...";
  }

};