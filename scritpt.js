function onSelectProduct(e) {
    const product = e.getElementsByTagName('p')[0].innerText;
    alert('O produto selecionado foi: ' + product)
}