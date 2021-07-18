let getInputValues = (formDate, formYear, forMonth, formGender) =>{
    formDate = document.getElementById("form-Date").value;
    formYear = document.getElementById("form-Year").value;
    forMonth = document.getElementById("month-Select").value;
    formGender = document.querySelector('input[name=groupOfMaterialRadios]:checked').value;
    console.log(formDate, formYear, forMonth, formGender);

}


let akaName = (birthYear, birthDate, birthMonth, gender) => {
    let day = birthYear

}