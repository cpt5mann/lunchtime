var img=document.getElementById("img");
var food=document.getElementById("food");
var btn=document.getElementById("btn");
var adjective=document.getElementById("adjective");
var verb=document.getElementById("verb");

var objectarray=[
{imagesrc:"https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg", food:"Tacos", adjective:"Crunchy", verb:"Tasty,"},
{imagesrc:"https://commentform.marketforce.com/images/BK-WebComment/BB_WHOPPER-v1.png", food:"Burgers", adjective:"Typical", verb:"Amazingly"},
{imagesrc:"http://1.bp.blogspot.com/_ZBuUcD-qFmc/TGVTpJ1Z7QI/AAAAAAAACTM/gRW6Vf5wi9s/s1600/All+Star+Sandwich+Bar+-+Cheese+Sandwich.JPG", food:"Sandwich", adjective:"Photogenic", verb:"Cool"},
{imagesrc:"https://assets3.thrillist.com/v1/image/1159656/size/tmg-slideshow_l.jpg", food:"Pizza", adjective:"SADMEP", verb:"Overrated"}
]


btn.addEventListener("click", function(){
  var randomnumber=Math.floor((Math.random() * 4) + 0);
  img.src=(objectarray[randomnumber].imagesrc);
  
  
  food.innerHTML=(objectarray[randomnumber].food);
 verb.innerHTML=(objectarray[randomnumber].verb); 
adjective.innerHTML=(objectarray[randomnumber].adjective);

});