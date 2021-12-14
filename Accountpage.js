
console.log("Hiiiiiiiiiiiiiiiiiiiiiiiii")


var settings_menu = document.querySelector(".settings-menubar");

const settingsMenuToggle = () =>{

     settings_menu.classList.toggle("settings-menubar_height")



    }

    //Like Function

    var a=1;

    var input_like=document.getElementById('like');
    input_like.value=Number(a);


    const ChangeLike = () =>{
    
        var a=Number(input_like.value);
        input_like.value=Number(a + 1); 

    }




//cover image posting

var parentDiv=document.getElementById('image_container');

var img=document.getElementById('Image_post');

var input_img=document.getElementById('cover_input');

var uploaded_image="";


input_img.addEventListener("change", function(){

    const reader= new FileReader();
    reader.addEventListener('load', () =>{

       uploaded_image=reader.result;
       console.log(uploaded_image)
        img.src=uploaded_image;
        img.setAttribute("id", "image_container");
        parentDiv.appendChild(img)

    })

    reader.readAsDataURL(this.files[0]);
  

})




function CreatepostDiv(){

 
    var input_value=document.getElementById('input_comment');
    
    var paragraph=document.getElementById('post-test');

    var paragraph_container=document.getElementById('paragraph_text');

 
    paragraph.innerHTML=input_value.value;

    paragraph.setAttribute('id','post-test');

    paragraph_container.appendChild(paragraph);

    input_value.value="null"
      

  }

  var parentdiv = document.getElementById('post_image_container_cover');

  var img_input=document.getElementById('post_image');

  var input_image=document.getElementById('input_image');

  var uploaded_image = '';

     

  input_image.addEventListener("change", function(){

    const reader= new FileReader();
    reader.addEventListener('load', () =>{

       uploaded_image=reader.result;
       console.log(uploaded_image)
        img_input.src=uploaded_image;
        img_input.setAttribute('id', 'post_image_container_cover');
        parentdiv.appendChild(img_input)

    })

    reader.readAsDataURL(this.files[0]);
  

})

//Color Changing

// var dark_btn=document.getElementById('dark_btn');


// dark_btn.onclick=function(){

// dark_btn.classList.toggle('dark-btn-on')


// }

function Account_user(){


document.getElementById("user_AccountPage_img").src=localStorage.getItem("image");
document.getElementById("user_Account_name").innerHTML=localStorage.getItem("userName");
document.getElementById("Account_setttings_img").src=localStorage.getItem("image");
document.getElementById("Account_settings_name").innerHTML=localStorage.getItem("userName")
// document.getElementById("user_account_profile_img").src=localStorage.getItem("image");
document.getElementById("user_account_profile_name").innerHTML=localStorage.getItem("userName");

document.getElementById("Account_post_img").src=localStorage.getItem("image");
document.getElementById("Account_post_name").textContent=localStorage.getItem("userName");
document.getElementById("user_Account_write_img").src=localStorage.getItem("image")
document.getElementById("user_account_profile_img").src=localStorage.getItem("image");

document.getElementById("friends-num").innerHTML=Math.floor(Math.random() * 100) + 1;




}