function editImageGrab(userid){
  var pic = document.getElementById('pic');
  var editButton = document.getElementById('edit-button');
  editButton.addEventListener("click", function(){
    localStorage["image"] = pic.src;
    console.log(localStorage.image);
    document.location.href = '/users/' + userid;
  });
};