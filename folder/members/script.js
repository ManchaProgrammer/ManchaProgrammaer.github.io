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


		var slideIndex = 0;
		showSlides();

		function showSlides() {
			var i;
			var slides = document.getElementsByClassName("members");
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			slideIndex++;
			if (slideIndex > slides.length) {slideIndex = 1}    
			slides[slideIndex-1].style.display = "block";  
			setTimeout(showSlides, 3000); // Change image every 3 seconds
		}
        

        var slideTexto = 0
        passaTexto();

        function passaTexto() {
            var i;
			var slides = document.getElementsByClassName("name-members");
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
            slideTexto++;
			if (slideTexto > slides.length) {slideTexto = 1}    
			slides[slideTexto-1].style.display = "block";  
			setTimeout(passaTexto, 3000);
        }