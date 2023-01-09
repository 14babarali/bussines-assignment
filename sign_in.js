$(document).ready(function($) {

$('#is').validate(
{
rules : {
    zname: "required",
    
    password: {
            required: true,
            minlength: 6
               },
    checkbox : "required"
},


messages : {
    zname : "please enter your name",
  
    password: {
             required: "provide a password" ,
             minlength: "password should be atleat 6 characters"
               },
    checkbox : "tick here"
}
})



    

})


