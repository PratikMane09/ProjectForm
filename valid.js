function validate(){
    str="Valid email required"
var e=document.frm1.t1;
var v= /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(e.value=="")
{

document.frm1.t1.focus();

}
else if(e.value.match(v))
{

window.location="sucess.html"
document.frm1.t1.focus();

}
else{
document.getElementById("Invalid").innerHTML +=str;
}
}