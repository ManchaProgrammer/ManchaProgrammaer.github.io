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