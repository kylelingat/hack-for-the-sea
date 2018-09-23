var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName('submissionItem')
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

$(document).ready(function () {
  $('.submissionItem').click(function () {
    modal.style.display = "block";
    var bg = $(this).find(".submissionItemBackground").css("background-image");
    $("#modalPic").css("background-image", bg)
  });
});

$(document).ready(() => {
  if ($('myModal').length) {
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
  }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    function toggleDiv() {
    let otherPage = document.getElementById('otherPage');
    let container = document.getElementById('mainContent');
    container.style.display = 'none';
    $("#reportDebrisLi").removeClass();
    $("#viewReportsLi").addClass("active");
    console.log(container)
    otherPage.style.display = 'block';
}

//open and close mobile menu
var menuCount = 0;
$('#openMenu').on('click', () => {
  menuCount++;
  console.log(menuCount);
  if ($('.activeMenu').length) {
    //closes menu
    $('#openMenu').removeClass('activeMenu');
    $('#openMenu').addClass('inactiveMenu');

    $('#pageContainer').removeClass('activeGrid');
    $('#pageContainer').addClass('inactiveGrid');
  } else {
    //opens menu
    $('#openMenu').addClass('activeMenu');
    $('#openMenu').removeClass('inactiveMenu');

    $('#pageContainer').addClass('activeGrid');
    $('#pageContainer').removeClass('inactiveGrid');
  }
}); 

$(document).ready(() => {
  $('#leftNav li').on('click', () => {
    //close menu
    $('#openMenu').removeClass('activeMenu');
    $('#openMenu').addClass('inactiveMenu');

    $('#pageContainer').removeClass('activeGrid');
    $('#pageContainer').addClass('inactiveGrid');
  })
})