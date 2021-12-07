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
function myFunction() {
    alert (" this page will be redirected to home page you can select your slot in home page ");
    window.location.href = "index.html";
}
  