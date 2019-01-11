## jQuery Phone Validator

This validator supports 3 formats as of now. 
`(123) 456-7890`
`123.456.7890`
`123-456-7890`

This function will automatically replace the users input with the implied format.

Setup is simple, download the `scripts.js` file and place it in your js folder.
Change the `id` declaration to match the id of the input you wish to effect.

### Be sure to change the limit of the input fields to match the amount of characters you will be using.

[View live](https://thesandybridge.github.io/jQuery-Phone-Validation/)

---

### Code examples

The following is an example of `(123) 456-7890` formatting.

```javascript
$('#phone1').keyup(function()
{
    this.value = this.value.replace(/^(\d{3})(\d{3})(\d{4})+$/, "($1) $2-$3");
});
```

```html
<input maxlength="14" id="phone1" type="text" placeholder="(123) 456-7890" required> 
```

