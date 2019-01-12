//Regular Expressions for phone
window.document.onload = function disableInputs() {
    var input = document.getElementsByTagName('input');
    if (input.value != Number) {
        return input.disabled = true;
    }
}

$('#phone1').keyup(function()
{
    this.value = this.value.replace(/^(\d{3})(\d{3})(\d{4})+$/, "($1) $2-$3");
});

$('#phone2').keyup(function()
{
    this.value = this.value.replace(/^(\d{3})(\d{3})(\d{4})+$/, "$1.$2.$3");
});

$('#phone3').keyup(function()
{
    this.value = this.value.replace(/^(\d{3})(\d{3})(\d{4})+$/, "$1-$2-$3");
});