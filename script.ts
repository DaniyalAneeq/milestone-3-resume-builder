

let myName: any = document.getElementById("name");

let desig: any = document.getElementById("desig");

let phone: any = document.getElementById("phone");

let email: any = document.getElementById("email");

let address: any = document.getElementById("address");

let lang: any = document.getElementById("lang");

let lang2: any = document.getElementById("lang2");

let skill1: any = document.getElementById("skill1");

let skill2: any = document.getElementById("skill2");

let skill3: any = document.getElementById("skill3");

let about: any = document.getElementById("about");

let pass1: any = document.getElementById("pass1");

let deg: any = document.getElementById("deg");

let uni: any = document.getElementById("uni");

let pass2: any = document.getElementById("pass2");

let deg2: any = document.getElementById("deg2");

let uni2: any = document.getElementById("uni2");

let styear: any = document.getElementById("styear");

let endyear: any = document.getElementById("endyear");

let company: any = document.getElementById("company");

let companylocation: any = document.getElementById("companylocation");

let jobtitle: any = document.getElementById("jobtitle");

let achive1: any = document.getElementById("achive1");

let achive2: any = document.getElementById("achive2");

let achive3: any = document.getElementById("achive3");



let pic: any = document.getElementById("pic")


let submitbtn: any = document.getElementById("submitbtn")

let form: any = document.getElementById("form")


form?.addEventListener('submit', (e: { preventDefault: () => void; })=>{
    e.preventDefault()


    localStorage.setItem("name", myName.value)
    localStorage.setItem("desig", desig.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("address", address.value)
    localStorage.setItem("pass1", pass1.value)
    localStorage.setItem("deg", deg.value)
    localStorage.setItem("uni", uni.value)
    localStorage.setItem("pass2", pass2.value)
    localStorage.setItem("deg2", deg2.value)
    localStorage.setItem("uni2", uni2.value)
    localStorage.setItem("skill1", skill1.value)
    localStorage.setItem("skill2", skill2.value)
    localStorage.setItem("skill3", skill3.value)
    localStorage.setItem("about", about.value)
    localStorage.setItem("lang", lang.value)
    localStorage.setItem("lang2", lang2.value)
    localStorage.setItem("styear", styear.value)
    localStorage.setItem("endyear", endyear.value)
    localStorage.setItem("company", company.value)
    localStorage.setItem("companylocation", companylocation.value)
    localStorage.setItem("jobtitle", jobtitle.value)
    localStorage.setItem("achive1", achive1.value)
    localStorage.setItem("achive2", achive2.value)
    localStorage.setItem("achive3", achive3.value)
    

    

    if(pic.files && pic.files[0]){
        let reader = new FileReader()
        reader.addEventListener("load", ()=>{
            let textImg: any = reader.result
            localStorage.setItem("profile_pic", textImg)
        })
        reader.readAsDataURL(pic.files[0])
    }
    





    window.location.href = "./resume/index.html"
    
})
