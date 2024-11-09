// For Referrence Hidden
let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener("click", ()=>{
    ref_section!.classList.toggle('hide')
})

// For Experience Hidden
let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener("click", ()=>{
    exp_section!.classList.toggle('hide')
})


// For Education Hidden
let edu_section = document.getElementById('education')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener("click", ()=>{
    edu_section!.classList.toggle('hide')
})

// For About Hidden
let about_section = document.getElementById('about')
let about_btn = document.getElementById('about_btn')


about_btn?.addEventListener("click", ()=>{
    about_section!.classList.toggle('hide')
})

// For Skills Hidden
let skill_section = document.getElementById('skill')
let skill_btn = document.getElementById('skill_btn')

skill_btn?.addEventListener("click", ()=>{
    skill_section!.classList.toggle('hide')
})

// For Language Hidden 
let lang_section = document.getElementById('language')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener("click", ()=>{
    lang_section!.classList.toggle('hide')
})


// For Contact Hidden
let cont_section = document.getElementById('contact')
let cont_btn = document.getElementById('cont_btn')

cont_btn?.addEventListener("click", ()=>{
    cont_section!.classList.toggle('hide')
})

// For Print
let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener("click", ()=>{
    window.print()
})


window.addEventListener('load', ()=>{
    let name = localStorage.getItem("name");

    let desig = localStorage.getItem("desig");

     let phone = localStorage.getItem("phone");
    
    let email = localStorage.getItem("email");
    
    let address = localStorage.getItem("address");
    
    let lang = localStorage.getItem("lang");
    
    let lang2 = localStorage.getItem("lang2");
    
    let skill1 = localStorage.getItem("skill1");
    
    let skill2 = localStorage.getItem("skill2");
    
    let skill3 = localStorage.getItem("skill3");
    
    let about = localStorage.getItem("about");
    
    let pass1 = localStorage.getItem("pass1");
    
    let deg = localStorage.getItem("deg");
    
    let uni = localStorage.getItem("uni");
    
    let pass2 = localStorage.getItem("pass2");
    
    let deg2 = localStorage.getItem("deg2");
    
    let uni2 = localStorage.getItem("uni2");
    
    let styear = localStorage.getItem("styear");
    
    let endyear = localStorage.getItem("endyear");
    
    let company = localStorage.getItem("company");
    
    let companylocation = localStorage.getItem("companylocation");
    
    let jobtitle = localStorage.getItem("jobtitle");
    
    let achive1 = localStorage.getItem("achive1");
    let achive2 = localStorage.getItem("achive2");
    let achive3 = localStorage.getItem("achive3");
    


    let profile_pic = localStorage.getItem("profile_pic")
    
    

    let resName: any = document.getElementById('resName')
    resName.textContent = name
    
    let resDesig: any = document.getElementById('resDesig')
    resDesig.textContent = desig
    
    let resPhone: any = document.getElementById('resPhone')
    resPhone.textContent = phone
    
    
    let resEmail: any = document.getElementById("resEmail")
    resEmail.textContent = email
    
    let resAddress: any = document.getElementById("resAddress")
    resAddress.textContent = address
    
    let resLang1: any = document.getElementById("resLang1")
    resLang1.textContent = lang
    
        
    let resLang2: any = document.getElementById("resLang2")
    resLang2.textContent = lang2
       
    let resSkill1: any = document.getElementById("resSkill1")
    resSkill1.textContent = skill1
    
    let resSkill2: any = document.getElementById("resSkill2")
    resSkill2.textContent = skill2
    
    let resSkill3: any = document.getElementById("resSkill3")
    resSkill3.textContent = skill3
       
    let resAbout: any = document.getElementById("resAbout")
    resAbout.textContent = about
    
    let resPass: any = document.getElementById("resPass")
    resPass.textContent = pass1
    
    let resDeg: any = document.getElementById("resDeg")
    resDeg.textContent = deg
    
    let resIns: any = document.getElementById("resIns")
    resIns.textContent = uni
    
    let resPass2: any = document.getElementById("resPass2")
    resPass2.textContent = pass2
    
    let resDeg2: any = document.getElementById("resDeg2")
    resDeg2.textContent = deg2
    
    let resIns2: any = document.getElementById("resIns2")
    resIns2.textContent = uni2
    
    let resStyear: any = document.getElementById("resStyear")
    resStyear.textContent = styear
    
    let resEndyear: any = document.getElementById("resEndyear")
    resEndyear.textContent = endyear
    
    let resComp: any = document.getElementById("resComp")
    resComp.textContent = company
    
    let resCompLoc: any = document.getElementById("resCompLoc")
    resCompLoc.textContent = companylocation
    
    let resJobTitle: any = document.getElementById("resJobTitle")
    resJobTitle.textContent = jobtitle
    
    let resAchive1: any = document.getElementById("resAchive1")
    resAchive1.textContent = achive1
    
    let resAchive2: any = document.getElementById("resAchive2")
    resAchive2.textContent = achive2
    
    let resAchive3: any = document.getElementById("resAchive3")
    resAchive3.textContent = achive3


    let resImg: any = document.getElementById("resImg")
    resImg.src = profile_pic
    
})
