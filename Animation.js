window.onload = function() {
  function loadQuote(callback) {
    var text;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        text = this.responseText;
        callback(text);
      }
    };
    xhttp.open("GET", "https://programming-quotes-api.herokuapp.com/quotes", true);
    xhttp.send();
    
  }
  function B(text){
     var quote = document.getElementById("quote")
     var author = document.getElementById("author")
     var arr = JSON.parse(text);
     var count = 0;
     setTimeout(()=>{
     quote.innerText = '"'+arr[0]["en"]+'"'
     author.innerText = '-'+arr[0]["author"]+'-'
     },4000)
     setTimeout(()=>{ quote.style.opacity = 0;
     author.style.opacity = 0;},6000)  
     setInterval(function(){
     count += 1;
     if (arr[count]["en"].length > 200){count +=1}
     else{ 
     quote.innerText = '"'+arr[count]["en"]+'"'
     author.innerText = '-'+arr[count]["author"]+'-'
     quote.style.opacity = 0.9;
     author.style.opacity = 0.9;
     setTimeout(()=>{ quote.style.opacity = 0;
     author.style.opacity = 0;},6000)  
     }
     }, 8000);
  }
  loadQuote(B)
  
  function AnimationInPage(){
  $(".icon1").css({"margin-left":"50px"}).animate({"margin-left":"10px"},1000);
   $(".icon2").css({"margin-left":"50px"}).animate({"margin-left":"10px"},1000);
  $(".header1 ion-icon").css({"margin-right":"-50px"}).animate({"margin-right":"10px"},1000);
  $(".social ion-icon").css({"margin-right":"-200px"}).animate({"margin-right":"12px"},1500);
  $(".header1 p").css({"opacity":"0"}).animate({"opacity":"0.9"},2000);
  $(".header1 h1").css({"opacity":"0"}).animate({"opacity":"1"},2000);
  $("#img3").css({"opacity":"0"}).animate({"opacity":"1"},2000);
  $("#hr").css({"width":"0%"}).animate({"width":"90%"},1000);
  $(".button1,.button2").css({"margin-top":"0px","opacity":"0"}).animate({"margin-top":"10px","opacity":"1"},1000);
  }
  
  
  
  function Animation(){
     $(".header .header1, .social,#img3, .icon-row, .quotesArea").css({"opacity":"0"});
    $(".header2").css({"opacity": "0","position":"relative","margin": "600px auto",}).animate({"opacity":"1","margin":"5% auto","transform":"translateY(35%)"},2000);
    setTimeout(()=>{
       $(".header .header1, .social,#img3, .icon-row, .quotesArea").css({"opacity":"1"});
      AnimationInPage();
    },2500)
  }
  Animation();
}