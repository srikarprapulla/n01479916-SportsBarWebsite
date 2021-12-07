function myFunction() {
    alert (" this page will be redirected to home page you can select your slot in home page ");
    window.location.href = "index.html";
}

function mouseoverevent()
	{
        
        console.log( document.getElementById("col1"));
        
        //document.getElementById("col1").style.backgroundColor = "red " ;
        //document.querySelector('#col1').style.backgroundColor = "red " ;
        var element = document.getElementById("col1");
        element.classList.toggle("changecolor");
        // document.getElementsByClassName("col2")[0].style.backgroundColor="red";
        // document.getElementsByClassName("col3")[0].style.backgroundColor="brown";
        // document.getElementsByClassName("col4")[0].style.backgroundColor="grey";
        // togole method to add a color and change a color
        
	}
    function mouseOut(){
        document.getElementById("col1").innerHTML= "color";
        console.log("inside mouse out")
        var element = document.getElementById("col1");
        element.classList.toggle("changecolor");
    }

    var indexValue = 0;
    function slideShow(){
      setTimeout(slideShow, 2000);      
      const img = document.getElementsByClassName("slide-img");  
      for(var x = 0; x < img.length; x++){         
        img[x].style.display = "none";
      }
      indexValue++;
      if(indexValue > img.length){indexValue = 1}
      img[indexValue-1].style.display = "block";
    }
    slideShow();


//document.getElementById("nav_menu").addEventListener("mouseover", function() {
//    document.getElementById("nav_menu").style.backgroundColor = "red";
//});
    
//document.getElementById("nav_menu").addEventListener("mouseout", function() {
//    document.getElementById("nav_menu").style.backgroundColor = "black";
//});

//document.getElementsByTagName("li").onmouseover.="yellow";




//document.getElementsByTagName("li").onmouseout.fontcolor = "black";

