
 let landingPage= document.querySelector('.sec1')

 let imageArray=['01.jpg','02.jpg','03.jpg','04.jpg'];
 
 

 setInterval(()=>
 {
    let randomNumber =  Math.floor(Math.random()*imageArray.length)
    // console.log(randomNumber)

    landingPage.style.backgroundImage="url('image/"+ imageArray[randomNumber]+"')";

 }, 5000)

// settings toggel

let icon = document.querySelector(".sett")
icon.addEventListener('click',function()
{
   // document.querySelector(".setting").classList.toggle("open")
   $(".setting").toggleClass("open");
 })



//  let settingBox = document.getElementById('setting-box')
//  console.log(settingBox)
// $(".sett").click(function()
// {
//    $('#setting-box').toggle(100)
//    $('.sett').animate.toggle({left:'0px'},100)

// })

 let AboutOfset= $("#About").offset().top;
 $(window).scroll(function () { 

   let wScroll= $(window).scrollTop();
   if ( wScroll > AboutOfset-50)
   {
      $("#NAV").css("backgroundColor","black");
      $("#mybtn").fadeIn();
   }
   else
   {
      $('#NAV').css("backgroundColor", "transparent");
      $("#mybtn").fadeOut();


   }

 });
  let Skills =  $("#Skills").offset().top;


  $(window).scroll(function () { 

   let wScroll= $(window).scrollTop();

   if (wScroll > Skills-300)
   {
      $(".progress").css("width","100%");

   }
   else
   {
      $(".progress").css("width","0px");
   }
     
  });


  let imgs = document.querySelectorAll(".gallery-img img")
  let popBox = document.querySelector(".pop-box")
  let closeIcon = document.querySelector(".close")
  console.log(closeIcon)


  for(let i =0 ; i<imgs.length; i++)
  {
   imgs[i].addEventListener('click',(e) => {
        let imgSrc= e.target.getAttribute("src");
        $(".pop-layer").css("display", "flex");

        popBox.style.backgroundImage = `url(${imgSrc})`;

      })

  }
  
  closeIcon.addEventListener('click' , ()=>
  {
   $(".pop-layer").css("display", "none");
  })
 
 



