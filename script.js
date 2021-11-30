
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
      
        

         input_image.addEventListener("change", function(){

               const reader= new FileReader();
               reader.addEventListener('load', () =>{

                  uploaded_image=reader.result;
                  console.log(uploaded_image)
                   img.src=uploaded_image;
                   img.setAttribute("id","post_image_container");
                   parent_div.appendChild(img);

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
           
             



        

    

    