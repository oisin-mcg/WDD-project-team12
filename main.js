 //Javascript for adams form/webpage
 function validate(){
                //set valid to true - flag 
                var valid = true;
                var msge = "You have not fully completed the form, ";
                //use if statements to check the data and set the message 
                if(document.getElementById("fn").value == ""){
                    msge += "Firstname ";
                    valid = false;
                }
                if(document.getElementById("sn").value == ""){
                    msge += "Surname. ";
                    valid = false;
                }
                if(document.getElementById("cn").value == ""){
                    msge += "age. ";
                    valid = false;
                }
				if(document.getElementById("bn").value == ""){
                    msge += " email, aswell as your title. ";
                    valid = false;
                }
                if(!valid){ //!valid is the same as valid == false
                    document.getElementById("msge").innerHTML = msge;
                }
                return valid;
}