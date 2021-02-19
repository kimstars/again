function validateform(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name == null || name == ""){
        alert("khong duoc de trong ten nhe!");
        return false;
    }else if (password.length < 6){
        alert("pass phai it nhat 6 ki tu !");
        return false;
    }
}