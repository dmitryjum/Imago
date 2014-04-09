var formSave = document.createElement('form');
var nameInput = document.createElement('input');
var saveButton = document.createElement('input');
var resolution = document.getElementById('resolution');
nameInput.setAttribute('type', "text");
nameInput.setAttribute('name', "image name");
nameInput.setAttribute('placeholder', "image name")

saveButton.setAttribute('type', "submit");
saveButton.setAttribute('value', "Save");
formSave.appendChild(nameInput);
formSave.appendChild(saveButton);
resolution.appendChild(formSave);

saveButton.addEventListener("click", function(e){
  e.preventDefault();
  var imageName = nameInput.value;
  var imageUrl = canvas.toDataURL();
  getDocs();
  // saveImage(imageName, imageUrl);  
});

function getDocs(){
  $.getJSON("/users/" + gon.current_user._id.$oid + "/images", function(dbObject){
    var allItems = dbObject;
    console.log(allItems[0].name);
  })
};

function saveImage(name, url){
  $.ajax({
    type: "POST",
    url: "/users/" + gon.current_user._id.$oid + "/images",
    data: {image: {"name": name, "image_url": url}}
  })
}