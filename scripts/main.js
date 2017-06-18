var myImage = document.querySelector('img');
myImage.onclick =function(){
    var mySrc =myImage.getAttribute('src');
    if(mySrc === 'images/fox.png'){
        myImage.setAttribute('src','images/safa.png');
    }else{
        myImage.setAttribute('src','images/fox.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}



myButton.onclick = function() {
  setUserName();
}

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}