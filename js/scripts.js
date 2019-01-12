//Regular Expressions for phone
$(document).ready(function() {
    $('input').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });   
});

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

