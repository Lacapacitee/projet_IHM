


const login = document.querySelector('#sub');
login.onclick = (e) => {
    e.preventDefault();
   
   
    const emailAddress = document.getElementById("email1").value;
    const passWord = document.getElementById("pass1").value;


    
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");


    if(emailAddress == Email && passWord == Password){
            alert(
                'login successful!',
                'success'
            );
            setTimeout(()=>{
                location.href='connect.html';
                },1000);
    }
    else
    {
     	alert(
                'verifier votre email ou le mot de passe',
            );       
    }

};
