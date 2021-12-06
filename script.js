
   //javascript Full code


   //Like Counter
   var a=1;

    var input_like=document.getElementById('like');
    input_like.value=Number(a);


    const ChangeLike = () =>{
    
        var a=Number(input_like.value);
        input_like.value=Number(a + 1); 

    }


    //Add Post as Images


        var parent_div = document.getElementById('post_image_container');
        var img=document.getElementById('post_image'); 
        const input_image=document.getElementById('output');
        var uploaded_image="";
        img.src=localStorage.getItem("post_image");
        

         input_image.addEventListener("change", function(){

               const reader= new FileReader();
               reader.addEventListener('load', () =>{

                  uploaded_image=reader.result;
                  console.log(uploaded_image)
                   img.src=uploaded_image;
                   img.setAttribute("id","post_image_container");
                  //  parent_div.appendChild(img);
                   localStorage.setItem("post_image",uploaded_image);
                   parent_div.appendChild(localStorage.getItem("post_image"));
                  

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
           
         

    

            //Settings menu 

            var settings_menu = document.querySelector(".settings-menubar");

               const settingsMenuToggle = () =>{

                 settings_menu.classList.toggle("settings-menubar_height")



                }

                function signedUsername(){

           
                    document.getElementById("logined").innerHTML=localStorage.getItem("userName");
                  
                     var img=document.getElementById("logined_image");
                     var settings_img=document.getElementById("img_setting");
                     var settings_id=document.getElementById("Email_setting").innerHTML=localStorage.getItem("userName")
                     img.src=localStorage.getItem("image");
                     settings_img.src=localStorage.getItem("image");
                     document.getElementById("user_account_name").innerHTML=localStorage.getItem("EmailAddress");
                     document.getElementById("user_account_img").src=localStorage.getItem("image");
                     document.getElementById("post_home_user_img1").src=localStorage.getItem("image");
                     document.getElementById("post_user_home_Name").textContent=localStorage.getItem("userName");
                     document.getElementById("user_comment_img").src=localStorage.getItem("image");
                     document.getElementById("post_home_user_img2").src=localStorage.getItem("image");
                     document.getElementById("post_home_user_name2").textContent=localStorage.getItem("userName");

                     
                  

                }

             
             



        

    

    