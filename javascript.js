function validationform(){
    var fname=document.validate.fname.value;
    var email=document.validate.email.value;
    var comments=document.validate.comments.value;
    var number=document.validate.number.value;
    if(fname===null || fname===""){
      alert("Please enter your first name");
    }
    else if(email=="/^[a-zA-Z0-9.%+_]+@[a-zA-Z0-9,-]+\[a-zA-Z{2,}$/"){
      alert("Please enter valid email");
    }
    else if(number===null || number===""){
      alert("Please enter your Mobile number");
    }
    else if(comments===null || comments===""){
      alert("Please enter your comments");
    }
    else if(number.length!==10){
      alert("Please enter valid Mobile number");
    }
    else{
      alert("Thank you for your submission");
    }
    }
