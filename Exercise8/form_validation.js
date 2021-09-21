

let email=document.querySelector("#email");
let password1=document.querySelector('#password1');
let password2=document.querySelector("#password2");
let yearSt=document.querySelector('#birthday');





//this function is activated from event listeners when we change something in passwords
//so it tests password validation dynamically
function checkPassword(){
    if(password1.value!=password2.value){
        document.getElementById('password2').setCustomValidity("Passwords Don't Match");
        document.getElementById('password2').reportValidity();
    }else{
        document.getElementById('password2').setCustomValidity('');
    }

}
    



password1.addEventListener('keyup',()=>{
    if(password2.value.length!=0) checkPassword();
})

password2.addEventListener('keyup',checkPassword);
   


//checks if user uses his academic email

function test_email(){
        var add=new RegExp('@aueb.gr','i');
        if(add.test(email.value)==false){
            email.setCustomValidity('Not an aueb address');
            email.reportValidity();
        }else{
            email.setCustomValidity('');
        }
}

email.addEventListener('keyup',test_email);

//checks if user is older than 18 and younger than 22

function test_age(){
   const birthday=new String(yearSt.value);
   var yearthen=birthday.substring(0,4);
  
   var d=new Date();
   var year=d.getFullYear();
    
    var check=year-parseInt(yearthen);

    if(check>=18 && check<=22){
       
       yearSt.setCustomValidity('');
        
    }else{
        yearSt.setCustomValidity('You must be between 18 and 22 years old');
        yearSt.reportValidity();
    }
    
}

yearSt.addEventListener('click',test_age);



