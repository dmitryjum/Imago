function insertImageInCanvasFunc(){
  if (localStorage.image != ""){
    var img = new Image;
    var src = localStorage.image;
    localStorage.image = "";
    console.log("localstorage emtpied")
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      setColor();
    };
    img.src = src;
  } else {
    console.log("localstorage image empty now")
  }
};



// localStorage is a special storage in HTML5 allowing
// to transfer values between pages (might not be secure)