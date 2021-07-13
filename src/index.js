

import './css/custom.css';


import './css/custom.css';
import '@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import './css/style.css';
import './scss/style.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';

$(document).ready(function(){  


  
    $('#password, #confirm_password').on('keyup', function () {
      if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
      } else 
        $('#message').html('Not Matching').css('color', 'red');
    });
    function confirmEmail() {
      var email = document.getElementById("email").value
      var confemail = document.getElementById("confemail").value
      if(email != confemail) {
          alert('Email Not Matching!');
      }
      document.write("2006 - "+ new Date().getFullYear());
  }
   

});




