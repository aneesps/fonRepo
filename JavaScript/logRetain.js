var unameForm = document.getElementById('uname');
			if(!localStorage.getItem('uname'))
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
			localStorage.setItem('uname',document.getElementById('uname').value);
			retain();
			}

			function retain()
			 {
			 	var currentname = localStorage.getItem('uname');
			 	document.getElementById('uname').value = currentname;
			}
			unameForm.onchange = populate;