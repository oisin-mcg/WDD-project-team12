 //Javascript for adams form/webpage
 function validate(){
                //set valid to true - flag 
                var valid = true;
                var msge = "You have not fully completed the form, ";
                //use if statements to check the data and set the message 
                if(document.getElementById("fn").value == ""){
                    msge += "You need to fill in your Firstname. ";
                    valid = false;
                }
                if(document.getElementById("sn").value == ""){
                    msge += "You need to fill in your Surname. ";
                    valid = false;
                }
                if(document.getElementById("cn").value == ""){
                    msge += "You need to fill in your age. ";
                    valid = false;
                }
				if(document.getElementById("bn").value == ""){
                    msge += "You need to fill in your email, aswell as your title. ";
                    valid = false;
                }
				if(document.getElementById("rn").value == ""){
                    msge += "You need to fill in your email. ";
                    valid = false;
                }
                if(!valid){ //!valid is the same as valid == false
                    document.getElementById("msge").innerHTML = msge;
                }
                return valid;
}