//alert('Hello World')

//IIFE
(function()
{
    //Start
    console.info("Hello Console")
    console.dir(document) //displays interactive list properties of object
    console.dir(document.getElementById("myHeading"))
    document.getElementById("myHeading").innerHTML  = "Olivers Website"
    
    //Query Selectors
    document.querySelector("nav ul li").setAttribute("class, currentPage")
    document.querySelector("nav ul li a").setAttribute("href, http://www.google.co.uk")
    
    //DOM event
    document.getElementById("myTestEvent").onclick = function(){
        console.info("DOM event")
    }

    //Add event listener
    document.getElementById("myTestEvent").addEventListener("click", /*myFunction or */function(){
        console.info("Hello There")
    })    

    //Alternate construct
    function myFunction(ev){
        console.info("Hello There")
        console.dir(ev)
    }
    //End

    function colorFunction(bc)
    {
        console.info("You have changed the color")
        document.querySelector(".red").addEventListener("click", function(){
            document.querySelector("body").setAttribute("body", "red")
        })
    }
})()


