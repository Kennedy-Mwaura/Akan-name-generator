
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
    personName = document.getElementById("akaName");
    console.log(formDate, formYear, forMonth, formGender);
    let dataCheck = () => {
        let birthYear = parseInt(formYear);
        let birthDate = parseInt(formDate);
        if (birthYear ==null || birthYear ==""){
            alert("Please enter a valid birth year")
            return false;
        }else if (birthYear.toString().length<4 || birthYear < 1000|| birthYear > 2021) {
            alert("Please enter a valid year")
            return false;
        }
        if (birthDate ==null || birthDate ==""){
            alert("Please enter a valid birth year")
            return false;
        } else if (birthDate.toString().length > 2 || birthDate < 0|| birthDate > 31) { 
            alert("Please enter a valid date")
        }

        console.log(typeof(birthYear))


    }
    let akaName = () => {
        let newBirthYear = Array.from(formYear.toString()).map(Number);
        let dd = parseInt(formDate);
        let birthYear = parseInt(formYear);
        let birthMonth = parseInt(forMonth);
        console.log(newBirthYear);
        cc = newBirthYear.slice(0,2);
        yy = newBirthYear.slice(1,);
        let nickName = String;

        // day = (((cc/4) - 2*cc-1)+ 1 ((5*yy/4)) + ((26*(birthMonth+1)/10))+ dd) % 7;
        d = new Date(birthYear, birthMonth, dd);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        day = days[d.getDay()];

        console.log(day); 
        if (formGender == "male" ){
            if (day == "Sunday") {
                nickName = "Kwasi";
            }else if (day == "Monday") {
                nickName = "Kwadwo";
            }else if (day == "Tuesday") {
                nickName = "Kwabena";
            }else if (day == "Wednesday") {
                nickName = "Kwaku"
            }else if (day == "Thursday") {
                nickName = "Yaw"
            }else if (day == "Friday") {
                nickName = "Kofi"
            }else if (day == "Saturday"){
                nickName = "Kwame"
            }

        }else if (formGender == "female") {
            if (day == "Sunday") {
                nickName = "Akosua";
            }else if (day == "Monday") {
                nickName = "Adwoa";
            } else if (day == "Tuesday") {
                nickName = "Abenaa";
            } else if (day == "Wednesday") {
                nickName = "Akua";
            } else if (day == "Thursday") {
                nickName = "Yaa";
            } else if (day == "Friday") {
                nickName = "Afua";
            } else if (day == "Saturday") {
                nickName = "Ama";
            }
        }

    
        console.log(nickName);
        personName.innerHTML = "This is your Akan name: " + nickName;
    
    }
    akaName()
    dataCheck()


}
toastr.success("Form submit successfully!", "Success");

