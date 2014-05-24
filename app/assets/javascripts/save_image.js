var formSave = document.createElement('form');
var nameInput = document.createElement('input');
var saveButton = document.createElement('input');
var updateButton = document.createElement('input');
var resolution = document.getElementById('resolution');
nameInput.setAttribute('type', "text");
nameInput.setAttribute('name', "image name");
nameInput.setAttribute('placeholder', "image name")

saveButton.setAttribute('type', "submit");
saveButton.setAttribute('value', "Save");
saveButton.className = "tiny button";
updateButton.setAttribute('type', "submit");
updateButton.setAttribute('value', "update");
updateButton.className = "tiny button";
formSave.appendChild(nameInput);
formSave.appendChild(saveButton);
formSave.appendChild(updateButton);
resolution.appendChild(formSave);

saveButton.addEventListener("click", function(e){
  e.preventDefault();
  var imageName = nameInput.value;
  var imageUrl = canvas.toDataURL();
  saveImage(imageName, imageUrl);  
});

updateButton.addEventListener("click", function(e){
  e.preventDefault();
  var imageName = nameInput.value;
  var imageUrl = canvas.toDataURL();
  compareDocs(imageName, imageUrl);
});

function compareDocs(name, url){
  $.getJSON("/users/" + gon.current_user._id.$oid + "/images", function(response){
     allItems = response;
     console.log(allItems)
    if (allItems.length === 0){
      saveImage(name, url)
    } else {
        for (var i = 0; i < allItems.length; i++){
        if (name === allItems[i].name){
          updateImage(allItems[i]._id.$oid, name, url)
        };
      };
    }
  });
};

function saveImage(name, url){
  $.ajax({
    type: "POST",
    url: "/users/" + gon.current_user._id.$oid + "/images",
    data: {image: {"name": name, "image_url": url}}
  })
}

function updateImage(id, name, url){
  var sameName = confirm("Image with the same file name already exists. Overwrite?");
  if(sameName === true){
    $.ajax({
      type: "PUT",
      url: "/users/" + gon.current_user._id.$oid + "/images/" + id,
      data: {image: {"name": name, "image_url": url}}
    })
  }
}

