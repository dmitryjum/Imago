function insertImageInCanvas(){
  if (localStorage.image != ""){
    var transPic = localStorage.image;
    localStorage.image = ""
    var imgTag = document.createElement('img');
    // imgTag.crossOrigin = 'Anonymous';
    imgTag.src = transPic;
    context.drawImage(imgTag,0,0)
  } else {
    console.log("localstorage image empty now")
  }
};
insertImageInCanvas();

// localStorage is a special storage in HTML5 allowing
// to transfer values between pages (might not be secure)