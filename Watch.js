
var settings_menu = document.querySelector(".settings-menubar");

const settingsMenuToggle = () =>{



     settings_menu.classList.toggle("settings-menubar_height")



    }


   function Logined_friends(){

    
    document.getElementById("User_friendpage_img").src=localStorage.getItem("image");
    document.getElementById("user_friendpage_name").innerHTML=localStorage.getItem("userName");
    document.getElementById("settings_friend_user_img").src=localStorage.getItem("image");
    document.getElementById("user_account_friendPage_name").innerHTML=localStorage.getItem("userName");
    document.getElementById("post_home_user_img1").src=localStorage.getItem("image");
    document.getElementById("post_user_home_Name").textContent=localStorage.getItem("userName");
    document.getElementById("post_home_user_img2").src=localStorage.getItem("image");
    document.getElementById("post_user_home_Name2").textContent=localStorage.getItem("userName")




   }