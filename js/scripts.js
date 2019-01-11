//Regular Expressions for phone
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
    this.value = this.value.replace(/^([1]{1})(\d{3})(\d{3})(\d{4})+$/, "+$1 ($2) $3-$4");
});