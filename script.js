// ABOUT US FORM

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(a){
    a.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const jenisKelamin = document.getElementsByName('gender');
    const messages = document.getElementById('messages').value;
    const checkbox = document.getElementById('checkbox');
    
    if(validasiFullname(fullname) == false){
        return;
    }

    if(validasiEmail(email) == false){
        return;
    }

    if(!validasiGender(jenisKelamin)){
         return;
    }

    if(validasiPesan(messages) == false){
        return;
    }

    if(checkbox.checked == false){
        alert('You need to check the box!');
        return;
    }

    alert("Thank you, Your data has been saved!");
    const userApps = {
          fullname : fullname,
          email : email,
          jenisKelamin: gender,
          messages : messages
     }
     console.log(userApps);
})

function validasiFullname(fullname){
    if(fullname == ""){
        alert("You have to filled your name!");
        return false;
    }

    if(fullname.length < 6){
        alert("Your fullname must more than 6!");
        return false;
    }

     return true;
}

function validasiEmail(email){
    if(email == ""){
        alert("You have to filled your email!");
        return false;
    }

    if((email.endsWith('.com')  || email.endsWith('.co.id') || email.endsWith('.ac.id')) == false){
        alert("Your email must end with .com or .co.id or .ac.id!");
        return false;
    }

    if(!email.indexOf("@")){
        alert("Your email must contain minimum 1 '@'!");
        return false;
    }
    return true;
}

function validasiGender(jenisKelamin){
    for(gender of jenisKelamin){
        if(gender.checked == true){
            return true;
        }
    }
    alert("You haven't chosen your gender!");
    return false;
}

function validasiPesan(messages){
    if(messages == ""){
        alert("Your messages is still empty!");
        return false;
    }

    if(messages.length < 50){
        alert('Your messages is too short! minimum 50 characters');
        return false;
    }
    if(messages.length >= 10000){
        alert('Your messages is too long! maximum 10.000 characters');
        return false;
    }
   return true;
}