// JavaScript Documen

function formValidate(){
		
	var email = document.getElementById("Email").value;
	var name = document.getElementById("Name").value;//getElementsByName("Name");
	var phone = document.getElementById("PhoneNo").value;//getElementsByName("PhoneNo");
	var date = document.getElementById("CurDate").value;	
	var msg = document.getElementById("Message").value;//getElementsByName("Message");
	
	if(!allLetter(name)){
        //window.showModalDialog("HELLO");
		alert("Complete your information\nWrong Name");
	}else if(validateEmail(email)){
		alert("Complete your information\nWrong Email");
	} else if(!phonenumber(phone)){
		alert("Complete your information\nWrong Phone No");
	}else if(!isValidDate(date)){
		alert("Complete your information\nWrong Date");
	}else if(!msg || 0 === msg.length){
		alert("Complete your information\nNo Message Typed");
	}else{
		alert("Your information is correct");
	}
}

function validateEmail(uemail){

	 
    var atpos = uemail.indexOf("@");
    var dotpos = uemail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=uemail.length) {
        alert("Not a valid e-mail address");
        return false;
    }	
	
}

function allLetter(inputtxt){  
 	var letters = /^[A-Za-z]+$/;  
   	if(inputtxt.match(letters)){  
    	return true;  
    }else{  
     	//alert("message");  
     	return false;  
    }  
}

function phonenumber(inputtxt){  
  	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
  	if(inputtxt.match(phoneno)){  
      	return true;  
  	}else{  
		//alert("message");  
	   return false;  
  	}  
} 

/* Check YYYY-MM-DD */
function isValidDate(dateString){
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  return dateString.match(regEx) != null;
}