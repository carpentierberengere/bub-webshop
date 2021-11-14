document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "https://i.pinimg.com/564x/25/0e/fd/250efdd86a8acb73312028619f34e38a.jpg",
  "https://i.pinimg.com/564x/04/b8/36/04b83627c499c0f30390bf52b47dda2a.jpg",
  "https://i.pinimg.com/564x/ef/cf/1c/efcf1c1804df8ec69d8d906a08256fff.jpg",
  "https://i.pinimg.com/564x/1c/7c/4e/1c7c4ebbe5173896518953cdd0fc0b19.jpg",
  "https://i.pinimg.com/564x/18/54/92/18549283c4f8231e55aeaa06e2adbd4b.jpg",
  "https://i.pinimg.com/564x/c9/ef/f4/c9eff46f9e72e8dc647aed3406195306.jpg",
  "https://i.pinimg.com/564x/b7/f5/1d/b7f51d8464567a0abc2800262677d180.jpg",
  "https://i.pinimg.com/564x/77/97/0d/77970d2a9c9b21604e8cd5b83df59050.jpg",
  "https://i.pinimg.com/564x/89/cd/d3/89cdd36d2ce008d767b288a4d4b7e7b9.jpg",
  "https://i.pinimg.com/564x/53/e8/35/53e835beb14b52ce05cbaeadda19102d.jpg",
  "https://i.pinimg.com/564x/cd/54/c5/cd54c5d10385be2ac70a91b1d8094a3f.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();



