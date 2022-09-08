let new_password = document.querySelector('.new-password-input');
let confirm_password = document.querySelector('.confirm-password-input');
let message = document.querySelector('.message');
let container = document.querySelector('.container');

let passToggle = () => {
    if(new_password.type === 'password' && confirm_password.type === 'password'){
        new_password.type = 'text';
        confirm_password.type = 'text';
        document.querySelector('.fa-eye-slash').style.visibility = 'visible';
        document.querySelector('.fa-eye').style.visibility = 'hidden';
    }else{
        new_password.type = 'password';
        confirm_password.type = 'password';
        document.querySelector('.fa-eye-slash').style.visibility = 'hidden';
        document.querySelector('.fa-eye').style.visibility = 'visible';
    }
}

let passCheck = () => {
    if(new_password.value != '' && confirm_password.value != ''){
        if(new_password.value == confirm_password.value){
            container.style.height = '440px';
            message.style.display = 'block';
            message.innerHTML = '<i class="fa-solid fa-circle-check"></i> Both passwords matched.';
            message.style.color = 'green';
        }else{
            container.style.height = '440px';
            message.style.display = 'block';
            message.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Both passwords not matched.';
            message.style.color = 'red';
        }
    }
    if(new_password.value.length < 8 && confirm_password.value.length < 8) {
        container.style.height = '440px';
        message.style.display = 'block';
        message.innerHTML = 'Please fill atleast 8 characters.';
    }

    if(new_password.value == '' && confirm_password.value ==''){
        container.style.height = '440px';
        message.style.display = 'block';
        message.innerHTML = 'Please enter your password.';
    }
}