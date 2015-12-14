
function validate() {
  var firstName = document.getElementById('fname'),
      lastName  = document.getElementById('lname');
      email =  document.getElementById('email');
      password =  document.getElementById('password');

function allLetter(uname)  
{   
	var letters = /^[A-Za-z]+$/;  
	if(uname.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
	alert('Name must have alphabet characters only');  
	uname.focus();  
	return false;  
}  
}

function ValidateEmail(email)  
 { 
    var mailformat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;  
    if(email.value.match(mailformat))  
    {  
    return true;  
    }  
    else  
    {  
    alert("You have entered an invalid email address!");  
    email.focus();  
    return false;
    }  
 }

}

  if (fname.value && lname.value && allLetter(fname) && allLetter(lname) &&ValidateEmail(email) && password.value) 
  	  alert("Registration Successful.");
   
    
}

