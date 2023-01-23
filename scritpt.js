function onSubmit() {
    var form = new FormData(document.getElementById("form"));


    console.log(form.get("name"))
    console.log(form.get("email"))

    return;
}