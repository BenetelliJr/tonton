function onSubmit() {
    var form = new FormData(document.getElementById("form"));


    console.log(form.get("name"))
    console.log(form.get("email"))
    console.log(form.get("celular"))
    console.log(form.get("caixasPersonalizadas"))
    console.log(form.get("etiquetasEscolares"))
    console.log(form.get("topodeBolo"))
    console.log(form.get("tubetes"))
    console.log(form.get("msg"))

    
    



    return;
}