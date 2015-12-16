var fnameForm = document.getElementById('fname');
var lnameForm = document.getElementById('lname');
var unameForm = document.getElementById('uname');
var emailForm = document.getElementById('email');
var genderForm = document.getElementById('gender');
      if(!localStorage.getItem('fname'))
      {
        populate();
        localStorage.removeItem('input');
      }
      else
      {
        retain();
      }
      function populate()
      {
      localStorage.setItem('fname',document.getElementById('fname').value);
      localStorage.setItem('lname',document.getElementById('lname').value);
      localStorage.setItem('uname',document.getElementById('uname').value);
      localStorage.setItem('email',document.getElementById('email').value);
      localStorage.setItem('gender',document.getElementById('gender').value);
      retain();
      }

      function retain()
       {
        var currentFname = localStorage.getItem('fname');
        var currentLname = localStorage.getItem('lname');
        var currentUname = localStorage.getItem('uname');
        var currentEmail = localStorage.getItem('email');
        var currentGender = localStorage.getItem('gender');
        document.getElementById('fname').value = currentFname;
        document.getElementById('lname').value = currentLname;
        document.getElementById('uname').value = currentUname;
        document.getElementById('email').value = currentEmail;
        document.getElementById('gender').value = currentGender;
      }
      fnameForm.onchange = populate;
      lnameForm.onchange = populate;
      unameForm.onchange = populate;
      emailForm.onchange = populate;
      genderForm.onchange = populate;