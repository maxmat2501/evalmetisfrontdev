$("#btnConfirm").click(function(){
    confirmer()
    });

    const re = new RegExp("[^a-zA-Z]")
    const remail = new RegExp (/.+\@.+\..+/)
    const redate = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)
    const recode = new RegExp (/^FR\d{5}[A-Z.-_]{3}x$/)

function confirmer(){
    let nom = $("#nom")
    let prenom = $("#prenom")
    let email = $("#mail")
    let date = $("#date")
    let code = $("#code")

    let saisieDate = $("#date").val().replaceAll("-","/")
    saisieDate = $("#date").val().replaceAll(".","/")
    saisieDate = $("#date").val().replaceAll(" ","/")
    date.val(saisieDate) 

    if (nom.val() === "" || re.test(nom.val()) === true) {
        $("#nomVide").removeClass("invisible")
    }
    else {
        $("#nomVide").addClass("invisible")
    }
    if (prenom.val() === "" || re.test(prenom.val()) === true) {
        $("#prenomVide").removeClass("invisible")
    }
    else {
        $("#prenomVide").addClass("invisible")
    }
    if (email.val() === "" || remail.test(email.val()) === false) {
        $("#emailVide").removeClass("invisible")
    }
    else {
        $("#emailVide").addClass("invisible")
    }
    if (date.val() === "" || redate.test(date.val()) === false) {
        $("#dateVide").removeClass("invisible")
    }
    else {
        $("#dateVide").addClass("invisible")
    }
    if(code.val()==="" || recode.test(code.val()) === false){
        $("#codeVide").removeClass("invisible")
    }else{
        $("#codeVide").addClass("invisible")
    }
    if (re.test(nom.val()) === false && re.test(prenom.val()) === false && remail.test(email.val()) === true &&  redate.test(date.val()) === true && recode.test(code.val())=== true) {
        alert("c'est tout bon")
    }
}





