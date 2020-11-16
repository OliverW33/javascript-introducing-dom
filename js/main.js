//alert('Hello World')

//IIFE
(function()
{
    //Start
    console.info("Hello Console") //displays straight to the console
    console.dir(document) //displays interactive list properties of object
    console.dir(document.getElementById("myHeading")) //gets the element by the ID, current object selected
    document.getElementById("myHeading").innerHTML  = "Olivers Website" //edit inner HTML to display new value
    
    //Query Selectors
    //document.querySelector("nav ul li").setAttribute("class, currentPage")
    //document.querySelector("nav ul li a").setAttribute("href, http://www.google.co.uk")
    
    //DOM event
    document.getElementById("myTestEvent").onclick = function(){ //set Element to have onclick fucntion whihc displays a message to the console
        console.info("DOM event")
    }

    //Add event listener
    document.getElementById("myTestEvent").addEventListener("click", myFunction)
    

    //Alternate construct
    function myFunction(ev){
        console.info("Hello There")
        console.dir(ev)
    }
    //End

    //Change the background color using simple class selectors, but repition is not good

        // document.querySelector(".red").addEventListener("click", function(){
        //     document.querySelector("body").setAttribute("class", "redBack");
        // });
        // document.querySelector(".green").addEventListener("click", function(){
        //     document.querySelector("body").setAttribute("class", "greenBack");
        // });
        // document.querySelector(".blue").addEventListener("click", function(){
        //     document.querySelector("body").setAttribute("class", "blueBack");
        // });
        // document.querySelector(".reset").addEventListener("click", function(){
        //     document.querySelector("body").removeAttribute("class");
        // });

    //More advanced approach to change background color using array lists

        var colorButtons = document.querySelectorAll(".colPicker") //Instantiate new variable to assign to colPicker selector
        console.dir(colorButtons) //to display all interactive properties of colorButtons object

        for (var i = 0; i < colorButtons.length; i++) //as long as i is less than the colorButtons node list
        {
            //console.dir(colorButtons[i])
            colorButtons[i].addEventListener("click", chgColour) //colorButtons[to access every element in the node list], add click function chgColour
        }

        //event is added to each node element through loop iteration

        function chgColour(ev) //event handler function as it has been sent an event which we are targetting in the parenthasis
        {
            console.dir(ev.target.classList[0]); //List all classes associated with the relevant DOM element, target class and find element position in node list
            var colourPicked = ev.target.classList[0] + "Back" //find all class lists in colourPicked var and add to background element to find which button was pressed
            var bodyElement = document.querySelector("body") //select the body of the element to apply it to
            if(colourPicked === "resetBack")
            {
                bodyElement.removeAttribute("class")
            }
            else
            {
                bodyElement.setAttribute("class", colourPicked)
            }
            bodyElement.setAttribute("class", colourPicked)
        }

        var myImages = ["view1.jpg", 
                        "view2.jpg", 
                        "view3.jpg", 
                        "view4.jpg", 
                        "view5.jpg", 
                        "view6.jpg"];

        var countImage = 0; //to count image

        setInterval(chgImage, 1000); //calls a function at specific intervals (milliseconds)

        function chgImage() //new function
        {
            document
            .getElementById("myImages") //get element ID
            .setAttribute("src", "images/" + myImages[countImage]); //set image to count value
            countImage++; //increments image value

            if(countImage === myImages.length) //if it reaches the end
            {
                countImage = 0; //loop
            }
        }
        
})()


