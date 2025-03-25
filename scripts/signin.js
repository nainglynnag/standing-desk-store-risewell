const form = document.querySelector("form"),
    signInBtn = document.getElementById('signInBtn')

signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('lemail'),
        password = document.getElementById('lpassword'),
        mErrTxt = document.querySelector('.mail-err'),
        pErrTxt = document.querySelector('.pass-err');

    email.addEventListener("keyup", checkmail(email,mErrTxt));
    password.addEventListener("keyup", checkpass(password,pErrTxt));

    if(!email.classList.contains("invalid") && !password.classList.contains("invalid")){
        // window.alert("Sign in successfully.")
        setTimeout(() => {
            window.location.href = "./products.html";
        }, 1000); 
    }

});

function checkmail(email,mErrTxt){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(pattern)){
        email.classList.add("shake", "invalid");

        mErrTxt.textContent = "Enter a valid email address";
        // console.log(email.value);
        setTimeout(()=>{
            email.classList.remove("shake");
            mErrTxt.textContent = "";
        }, 2000);
    }else{
        email.classList.remove("shake", "invalid");
        email.classList.add("valid");
    }
};

function checkpass(password,pErrTxt){
    if(password.value == "" || password.value.length <= 8){
        password.classList.add("shake", "invalid");

        pErrTxt.textContent = "Password length must be greater than 8";
        // console.log(password.value.length);
        setTimeout(()=>{
            password.classList.remove("shake");
            pErrTxt.textContent = "";
        }, 2000);
    }else{
        password.classList.remove("shake", "invalid");
        password.classList.add("valid");
    }
};
