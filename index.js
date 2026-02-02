const form = document.getElementById("form");
console.log(form)

form.addEventListener('change' , (e)=>{
    console.log(e.target.name,e.target.password,e.target.target,e.target.textarea);
})

 