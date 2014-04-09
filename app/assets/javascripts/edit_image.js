var editButton = document.getElementById('edit-button')
var pic = document.getElementById('pic')
editButton.addEventListener("click", function(){
  document.location.href = '/users/' + gon.current_user._id.$oid;
  console.log(pic)
})