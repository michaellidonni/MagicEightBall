let userName = prompt("Hi, who are you?");
var userQuestion = "Will I be rich?";
let responseImg = "";

userName
  ? (document.getElementById("greeting").innerText = `Hello, ${userName}`)
  : (document.getElementById("greeting").innerText = "Hello!");

function shakeMagic8Ball() {
  var randomNumber = Math.floor(Math.random() * 8);
  var eightBall = "";

  var userQuestion = prompt("What is your question?");

  switch (randomNumber) {
    case 0:
      eightBall = `It is certain`;
      responseImg = "imgs/Magic8Ball1.png";
      break;
    case 1:
      eightBall = `It is decidely so`;
      responseImg = "imgs/Magic8Ball2.png";
      break;
    case 2:
      eightBall = `Reply hazy try again`;
      responseImg = "imgs/Magic8Ball3.png";
      break;
    case 3:
      eightBall = `Cannot predict now`;
      responseImg = "imgs/Magic8Ball4.png";
      break;
    case 4:
      eightBall = `Do not count on it`;
      responseImg = "imgs/Magic8Ball5.png";
      break;
    case 5:
      eightBall = `My sources say no`;
      responseImg = "imgs/Magic8Ball6.png";
      break;
    case 6:
      eightBall = `Outlook not so good`;
      responseImg = "imgs/Magic8Ball7.png";
      break;
    case 7:
      eightBall = `Signs point to yes`;
      responseImg = "imgs/Magic8Ball8.png";
      break;
  }

  console.log(eightBall);
  document.getElementById(
    "response-text"
  ).innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}? The 8 ball has replied ${eightBall}`;
  document.getElementById("response-image").src = responseImg;
}
