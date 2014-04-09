pic = document.getElementById('pic')
localStorage["image"] = pic.src
var editButton = document.getElementById('edit-button');
editButton.addEventListener("click", function(){
  document.location.href = '/users/' + gon.current_user._id.$oid;
});