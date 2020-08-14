const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    const first = fname.value.trim();
    const last = lname.value.trim();
    const mail = email.value.trim();
    const pass = password.value.trim();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(first === ''){
        setErrorFor(first, fname, 'First Name cannot be blank');
	} else {
		setSuccessFor(first);
    }
    
    if(last === ''){
        setErrorFor(last, lname, 'Last name cannot be blank');
	} else {
		setSuccessFor(last);
    }

    if(mail == ''){
        setErrorFor(mail, email, 'Email cannot be blank');
    } else if(!mail.match(pattern)){
        setErrorFor(mail, email, 'It dont looks like an email');
    } else{
        setSuccessFor(mail);
    }

    if(pass === '') {
		setErrorFor(pass, password, 'Password cannot be blank');
	} else {
		setSuccessFor(pass);
	}
	
    
}



function setErrorFor(input, main, message) {
    const formControl = main.parentElement;
	const span = formControl.querySelector('span');
	main.className += 'error';
    span.innerText = message;
    span.className += 'error-text';
    if(main !== email){
        main.value = " ";
    }else{
        main.style.color="hsl(0, 100%, 74%)"
    }
   
}

function setSuccessFor(input) {
	const formControl = main.parentElement;
	formControl.className += 'success';
}




// function validation(){
//     var form = document.getElementById('form');
//     var email = document.getElementById('email').value;
//     var text = document.getElementById('text');
//     var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if(email.match(pattern)){
//       form.classList.add("valid");
//       form.classList.remove("invalid");
//       text.innerHTML = "Your mail address is Valid";
//       text.style.color = "#00ff00";
//     }
//     else{
//       form.classList.remove("valid");
//       form.classList.add("invalid");
//       text.innerHTML = "Your mail address is InValid";
//       text.style.color = "#ff0000";
//     }
//     if(email == ""){
//       form.classList.remove("valid");
//       form.classList.remove("invalid");
//       text.innerHTML = "";
//       text.style.color = "#00ff00";
//     }
//   }