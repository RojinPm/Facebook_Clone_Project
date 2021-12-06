

function RegisterUser(){



  var firstname=document.getElementById("first_name").value;
  var lastName=document.getElementById("sur_Name").value;
  var Email=document.getElementById("MobileorEmail").value
  var Password=document.getElementById("Password").value;
  var User_Name_display=document.getElementById("Name_user").value;
 
  
      var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&amp;*-])/;
      var letters = /^[A-Za-z]+$/;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


       if(firstname == ""){

         alert("Enter your FirstName properly")
         

       }else if(!letters.test(firstname)){

         alert("First Name field required only alphabetic characters");
         

       }else if(lastName == ""){

         alert("Enter your LastName properly")


       }else if(!letters.test(lastName)){

         alert("First Name field required only alphabetic characters");


       }else if(Email == ""){

         alert("Please enter your Email Id");

       }else if(!filter.test(Email)){


           alert("Invalid Email");


       }else if(User_Name_display == ""){

      
        alert("Please enter your User Name");


       }else if(!letters.test(User_Name_display)){

          alert("UserName field required alphabetic characters");

       }else if(Password == ""){

          alert("Enter You password Properly");
 

       }else if(!pwd_expression.test(Password)){
 

        alert("Upper case, Lower case, Special character and Numeric letter are required in the password");


       }else if(document.getElementById("Password").value < 6){


         alert("Password must have a minimum of 6 characters");


       }else if(document.getElementById("Password").value > 12){


        alert("Password must have maximum 12 characters");


      }else{

        alert("Your Facebook account is successfully created");
        localStorage.setItem("FirstName",document.getElementById("first_name").value);
        localStorage.setItem("LastName",document.getElementById("sur_Name").value);
        localStorage.setItem("EmailAddress",document.getElementById("MobileorEmail").value);
        localStorage.setItem("Password",document.getElementById("Password").value);
        localStorage.setItem("userName",document.getElementById("Name_user").value);

        console.log(localStorage.getItem("FirstName"));
        console.log(localStorage.getItem("LastName"));
 
        console.log(localStorage.getItem("EmailAddress"));
        console.log(localStorage.getItem("Password"));

        console.log(localStorage.getItem("userName"));
        

      }


      document.getElementById("first_name").value=""
      document.getElementById("sur_Name").value=""
      document.getElementById("MobileorEmail").value=""
      document.getElementById("Password").value=""
      document.getElementById("Name_user").value=""
     


    //   event.preventDefault();





}