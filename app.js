var img=document.getElementById("img");
var name=document.getElementById("name");
var btn=document.getElementById("btn");
var adjective=document.getElementById("adjective");
var verb=document.getElementById("verb");


var objectarray=[
{imagesrc:"https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg", name:"Tacos", adjective:"Large", verb:"Eating"},
{imagesrc:"https://commentform.marketforce.com/images/BK-WebComment/BB_WHOPPER-v1.png", name:"Burgers", adjective:"Typical", verb:"KickButt"},
{imagesrc:"http://1.bp.blogspot.com/_ZBuUcD-qFmc/TGVTpJ1Z7QI/AAAAAAAACTM/gRW6Vf5wi9s/s1600/All+Star+Sandwich+Bar+-+Cheese+Sandwich.JPG", name:"Sandwich", adjective:"Photogenic", verb:"Karate-ing"},
{imagesrc:"https://assets3.thrillist.com/v1/image/1159656/size/tmg-slideshow_l.jpg", name:"Pizza", adjective:"Underrated", verb:"Ruling"}
]


btn.addEventListener("click", function(){
  var randomnumber=Math.floor((Math.random() * 4) + 0);
 img.src=(objectarray[randomnumber].imagesrc);
 
 name.innerHTML=(objectarray[randomnumber].name);
adjective.innerHTML=(objectarray[randomnumber].adjective);
verb.innerHTML=(objectarray[randomnumber].verb);



});