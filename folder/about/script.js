const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', function(){
    window.location.href = '/index.html';
})

const membersButton = document.getElementById('members-button');

membersButton.addEventListener('click', function(){
    window.location.href = '/folder/members/index.html';
})

const aboutButton = document.getElementById('about-button');

aboutButton.addEventListener('click', function(){
    window.location.href = '/folder/about/index.html';
})

const resetButton = document.querySelector('#reset-button');
const textAbout = document.querySelector('.text-about');
const originalText = textAbout.innerHTML;

resetButton.addEventListener('click', function() {
  textAbout.innerHTML = originalText;
});
