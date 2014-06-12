function insertImageInCanvas(){
  if (localStorage.image != ""){
    var img = new Image;
    var src = localStorage.image;
    localStorage.image = "";
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    };
    img.src = src;
  } else {
    console.log("localstorage image empty now")
  }
};
insertImageInCanvas();


// localStorage is a special storage in HTML5 allowing
// to transfer values between pages (might not be secure)