var request = new XMLHttpRequest();


request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    console.log(data.slip.id);
    console.log(data.slip.advice);
    changeAdvice(data.slip.id, data.slip.advice);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
  
};


function getData() {
  request.open('GET', 'https://api.adviceslip.com/advice?', true);
  request.send();
}

function changeAdvice(id, advice) {
  document.querySelector("#advice_number").innerHTML = id;
  document.querySelector(".card_content").innerHTML = '"' + advice + '"';
}


getData();