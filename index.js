let  email =document.forms['form']['email'];
let  fN =document.forms['form']['fname'];
let  llN =document.forms['form']['lname'];




function vall( e)
{ //e.preventDefault();
    let em=email.value;
    let f=fname.value;
    let l=lname.value;
    if(em=='')
    {
        alert('email shod be not empty');
        return;
    }
    if(f=='')
    {
        alert('fn shod be not empty');
        return;
    }
    if(l=='')
    {
        alert('ln shod be not empty');
        return;
    }
}