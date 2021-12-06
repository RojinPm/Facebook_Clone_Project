
   function check_user(){

    var Email_Login=document.getElementById("email").value;
    var Password_Login=document.getElementById("PassWord").value;
    var user_name=document.getElementById("User_data").value;
 
     
      localStorage.removeItem("image");


      var email_data=localStorage.getItem("EmailAddress");
      


     if(Email_Login == ""){

       alert("Enter the Email Address Properly");
 

     }else if(Password_Login == ""){


      alert("Please Enter your Password")

     }else if(user_name == ""){

        alert("Please Enter your Username")

     }
     
     
     else if(Email_Login == localStorage.getItem("EmailAddress") && Password_Login == ""){

       alert("Enter the password Propely");

       //or grab it by tagname etc
       
 
     }else if(Email_Login != localStorage.getItem("EmailAddress")){

        alert("Entered Email is not correct ! Try Once Again")


     }else if(Password_Login != localStorage.getItem("Password")){

        alert("Entered password is not correct ! Try again")

     }else if(user_name != localStorage.getItem("userName")){

        alert("Entered userName is invalid")

     }
    
     else if(Email_Login == localStorage.getItem("EmailAddress") && Password_Login == localStorage.getItem("Password") && user_name == localStorage.getItem("userName")){

            alert("Welcome to your account");
            document.getElementById('Loging_link').href="index.html"

     }

    //  Email_Login == localStorage.getItem("EmailAddress") && Password_Login == localStorage.getItem("Password")


    //  
    document.getElementById("email").value=""
    document.getElementById("PassWord").value=""
    document.getElementById("user_name").value=""

 

 }


event.preventDefault();



