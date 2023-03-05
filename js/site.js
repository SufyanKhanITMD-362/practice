// Wait for the DOM to be fully loaded
$(document).ready(function($) {

  // Get form elements
  var nameField = $('#nameField input');
  var emailField = $('#emailField input');
  var passwordField = $('#passwordField input');
  var signUpBtn = $('#signupBtn');
  var signInBtn = $('#signinBtn');
  
  // Check form fields and enable/disable buttons accordingly
  function checkFormFields() {
    if (nameField.val() !== '' && emailField.val() !== '' && passwordField.val() !== '') {
      signUpBtn.prop('disabled', false);
      signInBtn.removeClass('disable');
    } else {
      signUpBtn.prop('disabled', true);
      signInBtn.addClass('disable');
    }
  }
 
  $('#signupBtn').click(function() {
    $(this).addClass('active');
    $('#signinBtn').removeClass('active');
  });
  $('#signinBtn').click(function() {
    $(this).addClass('active');
    $('#signupBtn').removeClass('active');
  });

  // On keyup, check form fields
  nameField.on('keyup', checkFormFields);
  emailField.on('keyup', checkFormFields);
  passwordField.on('keyup', checkFormFields);
  
  // On click, submit form
  signUpBtn.on('click', function() {
    alert('Thank you for signing up!');
  });
  
  // On click, show sign in form
  signInBtn.on('click', function() {
    alert('Showing sign in form');
  });

  $("#signupBtn").click(function() {
    alert("You have successfully signed up!");
  });
  $("#signinBtn").click(function() {
    alert("You have successfully signed in!");
  });

});
