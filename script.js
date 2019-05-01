var UwUImages = [
    "https://ih0.redbubble.net/image.245871641.6029/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u1.jpg", 
    "https://m.media-amazon.com/images/I/61-SFTSayHL._SS500_.jpg",
    "https://cdn.hinative.com/attached_images/273017/903b6f5ec68805b5cd78a6f37f613bd78e44f66f/large.jpg?1524255991"
];
var OwOImages = [
    "https://i.ytimg.com/vi/bGlEfqcpuBE/maxresdefault.jpg",
    "http://flipanim.com/gifs/IT35VxFq.gif",
    "https://cdn.weasyl.com/~zemble/submissions/1723512/096a98af8c22908c662032318d119be0a95d6e0538ff86c552b0fc36c43bb2d6/zemble-owo.png"];
    
var ZZZImages = [
    "https://ih0.redbubble.net/image.115830102.5732/ap,550x550,12x12,1,transparent,t.u4.png",
    "https://i.pinimg.com/originals/99/62/5a/99625aee403d0f1de410979845568d43.jpg",
    "https://media1.tenor.com/images/3552bacea21401986e700bfe21fe023d/tenor.gif?itemid=5971705"];
    
var deadImages = ["",
    "https://ih1.redbubble.net/image.400625153.5900/flat,550x550,075,f.u8.jpg",
    "http://www.sccpre.cat/png/big/86/863899_dead-face-png.png",
    "http://clipart-library.com/img/1782531.png" ];


$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
   if(mood === "uwu"){
    UwUmood();  
   }else if(mood === "owo"){
    OwOmood(); 
   }else if(mood === "zzz"){
    ZZZmood();
   }else if(mood === "dead"){
    deadmood();
   }  
});


function UwUmood(){
   console.log("UwUmood");
   changeTheme("pink","lavender");
   displayImages(UwUImages);
}
function OwOmood(){
    changeTheme("LightSteelBlue","coral");
    displayImages(OwOImages);
}
function ZZZmood(){
    changeTheme("gray","thistle");
    displayImages(ZZZImages);
}
function deadmood(){
    changeTheme("khaki","red");
    displayImages(deadImages);
}

function changeTheme(backgroundColor, textColor){
    $("body").css("color", textColor);
    $("body").css("background-color", backgroundColor);
}
function displayImages(images){
  images.forEach(function(pics){
$(".images").append("<img src=" + pics + ">");
});
}