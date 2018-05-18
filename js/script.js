function formValidation()  
	{  
		var uid = document.registration.userid;  
		var passid = document.registration.pass; 
		
		var rePassword = document.registration.repass;
		
		var uadd = document.registration.address;  
		
		var cityName = document.registration.city;

		var uzip = document.registration.poscode;  
		
		var phoneNum = document.registration.phone;
		var term = document.registration.terms;

		if(userid_validation(uid,3,12))  
		{  
			if(passid_validation(passid,5,12))  
			{  
				if(checkRepass())
				{
					if(alphanumeric(uadd))  
					{   
						if(checkCity(cityName))
						{
							if(allnumeric(uzip))  
							{  
								if(checkPhone(phoneNum,12))
								{
									if(validAgree(term))  
									{  
									}  
								}
							} 
						}						
					}  
				}
			}  
		}
		return false;  
	} 

	function userid_validation(uid,mx,my)  
	{  
		var uid_len = uid.value.length;  
		if (uid_len == 0 || uid_len >= my || uid_len < mx)  
		{  
			alert("User Id should not be empty / length be between "+mx+" to "+my);  
			uid.focus();  
			return false;  
		}  
		return true;  
	}  

	function passid_validation(passid,mx,my)  
	{  
		var passid_len = passid.value.length;  
		if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
		{  
			alert("Password should not be empty / length be between "+mx+" to "+my);  
			passid.focus();  
			return false;  
		}  
		return true;  
	}  
	
	function checkRepass()
	{
		var passName = document.registration.pass.value; ;
		var repassName = document.registration.repass.value ;
		if(repassName != passName)
		{
			alert("Please re-enter your password correctly");
			return false;
		}
		return true;
	}


	function alphanumeric(uadd)  
	{   
		var letters = /^[0-9a-zA-Z]+$/;  
		if(uadd.value.replace(/\s+/, "").match(letters))  
		{  
			return true;  
		}  
		else  
		{  
			alert('User address must have alphanumeric characters only');  
			uadd.focus();  
			return false;  
		}  
	}  
	
	function checkCity(cityName)
	{
		var cName = /^[a-zA-Z]+$/;
		if(cityName.value.replace(/\s+/, "").match(cName))
		{
			return true;
		}
		else
		{
			alert("Please enter your city correctly");
			cityName.focus();
			return false;
		}
	}


	function allnumeric(uzip)  
	{   
		var num = /^[0-9a-zA-Z]+$/;  
		if(uzip.value.replace(/\s+/, "").match(num))  
		{  
			return true;  
		}  
		else  
		{  
			alert('ZIP code must have alphanumeric characters only');  
			uzip.focus();  
			return false;  
		}  
	}
	
	function checkPhone(phoneNum,mx)
	{
		var pNum  = /^[0-9a]+$/;
		if(phoneNum.value.replace(/-/g, "").match(pNum) && phoneNum.value.length==mx)
		{
			return true;
		}
		else
		{
			alert("Please enter your phone number correctly");
			phoneNum.focus();
			return false;
		}
	}

	function validAgree(term)  
	{  
		x=0;  
		if(term.checked)   
		{  
			x++;  
		} 
		if(x==0)  
		{  
			alert('You must agree to the Terms& Conditions');  
			term.focus(); 
			return false;
		}
		else
		{
			alert("Successfully Registered");
			window.location= "user1.html";
			return true;
		}
	} 
	


function oldUserValidate()
{
	if (userValidate())
	{
	}
	return false;
}

function userValidate()
{
	var username = document.member.userid.value;
	var passW = document.member.pass.value;
	
	if((username != "comp3020" || username =="") &&( passW != "comp3020" || passW == ""))
	{
		alert("Failed to Login");
		return false;
	}
	
	if((username == "comp3020" && passW != "comp3020" || passW == ""))
	{
		alert("Failed to Login");
		return false;
	}
	
	if((passW == "comp3020" && username != "comp3020" || username == ""))
	{
		alert("Failed to Login");
		return false;
	}
	
	if(username == "comp3020" && passW == "comp3020" &&  username!="" && passW != "")
	{
		
		alert("Login successfully");
		window.location = "user1.html";
		return true;;
	}
}

function openFood(evt, foodName) 
{
	var i, x, tablinks;
	x = document.getElementsByClassName("food");
	for (i = 0; i < x.length; i++) 
	{
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) 
	{
		tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
	}
	document.getElementById(foodName).style.display = "block";
	evt.currentTarget.className += " w3-red";
}

function getContinueShoppingURL(form)
{
	form.shopping_url.value = window.location.href;
}
	
	
	
	
	
	
	