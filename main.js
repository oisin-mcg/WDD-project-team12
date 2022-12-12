 //Javascript for adams form/webpage
 function validate(){
                //set valid to true - flag 
                var valid = true;
                var msge = "You have not fully completed the form, please fill in the following: ";
                //use if statements to check the data and set the message 
                if(document.getElementById("fn").value == ""){
                    msge += " You must fill in your firstname. ";
                    valid = false;
                }
                if(document.getElementById("sn").value == ""){
                    msge += " You must fill in your surname, ";
                    valid = false;
                }
                if(document.getElementById("cn").value == ""){
                    msge += " You must fill in your age, ";
                    valid = false;
                }
				if(document.getElementById("bn").value == ""){
                    msge += " You must fill in your email,";
                    valid = false;
                }
				if(document.getElementById("comments").value == ""){
                    msge += " You need to write your question in the comment box.";
                    valid = false;
                }
                if(!valid){ //!valid is the same as valid == false
                    document.getElementById("msge").innerHTML = msge;
                }
                return valid;
}