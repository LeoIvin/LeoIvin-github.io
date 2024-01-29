alert("Hello, this site isn't currently optimized for mobile screens, please switch to a PC")

// Dark/Light Mode


document.getElementById("togglebtn").addEventListener("click", function(){
    var bodyElement = document.body;
    var navElement = document.getElementById("navbar")
    var navLinks = navElement.getElementsByTagName("a");
    var navBtn = navElement.getElementsByTagName("button");
    var cardText = document.getElementsByClassName("project-text")
    var footerText = document.getElementsByClassName('footer')
    var card = document.getElementsByClassName('card')

    if (bodyElement.classList.contains("light-mode")) {
        bodyElement.classList.remove("light-mode");
        bodyElement.classList.add("dark-mode");
        navElement.classList.remove("light-mode");
        navElement.classList.add("dark-mode");

        for (var i = 0; i < footerText.length; i++) {
            footerText[i].style.color = "white";
        }

        for (var i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "#2f2b3a"
        }

        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "white";
            navLinks[i].onmouseover = function(){
                this.style.color = "#7a5af5"
            }
            navLinks[i].onmouseout = function(){
                this.style.color = "white"
            }
        }

        for (var i=0; i < navBtn.length; i++){
            navBtn[i].style.color = "white";
            navBtn[i].onmouseover = function(){
                this.style.color = "#7a5af5";
            }
            navBtn[i].onmouseout = function(){
                this.style.color = "white";
            }
        }

        for (var i=0; i < cardText.length; i++){
            cardText[i].style.color = "white";
        }
    
    } else {
        bodyElement.classList.remove("dark-mode");
        bodyElement.classList.add("light-mode");
        navElement.classList.remove("dark-mode");
        navElement.classList.add("light-mode");

        for (var i = 0; i < footerText.length; i++) {
            footerText[i].style.color = "black";
        }

        for (var i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "#333"
        }

        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "black";
            navLinks[i].onmouseover = function(){
                this.style.color = "#7a5af5";
            }
            navLinks[i].onmouseout = function(){
                this.style.color = "black"
            }
        }

        for (var i=0; i < navBtn.length; i++){
            navBtn[i].style.color = "black";
            navBtn[i].onmouseover = function(){
                this.style.color = "#7a5af5";
            }
            navBtn[i].onmouseout = function(){
                this.style.color = "black"
            }
        }

        for (var i=0; i < cardText.length; i++){
            cardText[i].style.color = "white";
        }
    }
});



