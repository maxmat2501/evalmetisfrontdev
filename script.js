$("#btnConfirm").click(function(){
    confirmer()
    });

    const re = new RegExp("[^a-zA-Z]")
    const remail = new RegExp (/.+\@.+\..+/)
    const redate = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)

function confirmer(){
    let nom = $("#nom")
    let prenom = $("#prenom")
    let email = $("#mail")
    let date = $("#date")

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
    if (re.test(nom.val()) === false && re.test(prenom.val()) === false && remail.test(email.val()) === true &&  redate.test(date.val()) === true) {
        alert("c'est tout bon")
    }
}





