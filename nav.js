$(function() {
    $('header').load('head.html');
    $('#footerDiv').load('footer.html');
    $('footer').append('<button onclick="topFunction()" id="topBtn">TOP</button>');
});

$(document).ready(function () {});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    $('#topBtn').css('display', 'block');
  } else {
    $('#topBtn').css('display', 'none');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}