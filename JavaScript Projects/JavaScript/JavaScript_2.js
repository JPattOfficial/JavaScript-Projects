function validateForm() {
    let x = document.forms["input"].value;
    if (x == "") {
      alert("Field must be filled out");
      return false;
    }
}