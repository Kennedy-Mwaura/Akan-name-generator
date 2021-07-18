
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "md-toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 5000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  
let getInputValues = (formDate, formYear, forMonth, formGender) =>{
    formDate = document.getElementById("form-Date").value;
    formYear = document.getElementById("form-Year").value;
    forMonth = document.getElementById("month-Select").value;
    formGender = document.querySelector('input[name=groupOfMaterialRadios]:checked').value;
    console.log(formDate, formYear, forMonth, formGender);
    let dataCheck = () => {
        let birthYear = parseInt(formYear);
        let birthMonth = parseInt(forMonth);
        let birthDate = parseInt(formDate);
        if (birthYear ==null || birthYear ==""){
            alert("Please enter a valid birth year")
            return false;
        }

    }
    dataCheck()
    let akaName = () => {
       
        //console.log(birthYear, birthMonth)
    
        // let day = birthYear
    
    }
    akaName()
    toastr.success("Form submit successfully!", "Success");


}
toastr.success("Form submit successfully!", "Success");

