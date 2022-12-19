// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Query the heart button
let likeBtn = document.querySelector('.like');
let heart = document.querySelector('.like span');
let errorDiv = document.querySelector('#modal');
let errorMessage = document.querySelector('#modal-message');

console.log(likeBtn.innerText);
//Listen for click on the like button
likeBtn.addEventListener('click', onLikeClick);



function onLikeClick() {
  if ( heart.innerText === EMPTY_HEART ) {
    heart.innerText = FULL_HEART; 
    heart.classList.toggle('activated-heart');
    mimicServerCall()
    .then(object => console.log(object))
    .catch(error => 
      {
        console.log("error has occured")
        errorDiv.classList.toggle('hidden');
        errorMessage.innerText = error;
        setTimeout(() => errorDiv.classList.toggle('hidden'), 3000);
      })
  } else if ( heart.innerText === FULL_HEART){
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
    mimicServerCall()
    .then(object => console.log(object))
    .catch(error => 
      {
        console.log("error has occured")
        errorDiv.classList.toggle('hidden')
        errorMessage.innerText = error;
        setTimeout(() => errorDiv.classList.toggle('hidden'), 3000);
      });
  }
  console.log("clicked like button");
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
