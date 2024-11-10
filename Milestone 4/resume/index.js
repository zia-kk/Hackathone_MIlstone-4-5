"use strict";
window.addEventListener('load', () => {
    const My_name = localStorage.getItem("name");
    const JobTitle = localStorage.getItem("j_title");
    const My_age = localStorage.getItem("Age");
    const Emaiil = localStorage.getItem("mail");
    const Calling = localStorage.getItem("call");
    const Location = localStorage.getItem("location");
    const Certificate = localStorage.getItem("Deg");
    const University = localStorage.getItem("Uni");
    const Education = localStorage.getItem("edu_city");
    const Pass_year = localStorage.getItem("year_pass");
    const Experty1 = localStorage.getItem("Eprert1");
    const Experty2 = localStorage.getItem("Eprert2");
    const Experty3 = localStorage.getItem("Eprert3");
    const Experiance1 = localStorage.getItem("Exp_1");
    const Experiance2 = localStorage.getItem("Exp_2");
    const Experiance3 = localStorage.getItem("Exp_3");
    const Designation1 = localStorage.getItem("Desig_1");
    const Designation2 = localStorage.getItem("Desig_2");
    const Designation3 = localStorage.getItem("Desig_3");
    const Ex_Time1 = localStorage.getItem("Exp_time1");
    const Ex_Time2 = localStorage.getItem("Exp_time2");
    const Ex_Time3 = localStorage.getItem("Exp_time3");
    const picture = localStorage.getItem("profile_pic");
    let resum_name = document.getElementById('resum_name');
    resum_name.textContent = My_name;
    let title_job = document.getElementById('title_job');
    title_job.textContent = JobTitle;
    let Age_span = document.getElementById('Age_span');
    Age_span.textContent = My_age;
    let Email_span = document.getElementById('Email_span');
    Email_span.textContent = Emaiil;
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = Calling;
    let resAddress = document.getElementById('resAddress');
    resAddress.textContent = Location;
    let resum_deg = document.getElementById('resum_deg');
    resum_deg.textContent = Certificate;
    let resum_instit = document.getElementById('resum_instit');
    resum_instit.textContent = University;
    let resum_city = document.getElementById('resum_city');
    resum_city.textContent = Education;
    let resum_year = document.getElementById('resum_year');
    resum_year.textContent = Pass_year;
    let res_skill_1 = document.getElementById('res_skill_1');
    res_skill_1.textContent = Experty1;
    let res_skill_2 = document.getElementById('res_skill_2');
    res_skill_2.textContent = Experty2;
    let res_skill_3 = document.getElementById('res_skill_3');
    res_skill_3.textContent = Experty3;
    let resimg = document.getElementById('resimg');
    resimg.src = picture;
    let ex1 = document.getElementById('ex1');
    ex1.textContent = Experiance1;
    let des1 = document.getElementById('des1');
    des1.textContent = Designation1;
    let exp_time = document.getElementById('exp_time');
    exp_time.textContent = Ex_Time1;
    ///////////-----------------------------------------------/////
    let ex2 = document.getElementById('ex2');
    ex2.textContent = Experiance2;
    let des2 = document.getElementById('des2');
    des2.textContent = Designation2;
    let exp_time2 = document.getElementById('exp_time2');
    exp_time2.textContent = Ex_Time2;
    ///////////-----------------------------------------------/////
    let ex3 = document.getElementById('ex3');
    ex3.textContent = Experiance3;
    let des3 = document.getElementById('des3');
    des3.textContent = Designation3;
    let exp_time3 = document.getElementById('exp_time3');
    exp_time3.textContent = Ex_Time3;
    let print_btn = document.getElementById("print_btn");
    print_btn?.addEventListener('click', () => {
        window.print();
    });
    let edit_btn = document.getElementById("edit_btn");
    edit_btn?.addEventListener('click', () => {
        window.history.back();
    });
});
const toggleButton = document.getElementById('togglebutton');
const skillsDiv = document.getElementById('skill');
if (toggleButton && skillsDiv) {
    toggleButton.addEventListener('click', () => {
        if (skillsDiv.style.display === 'none') {
            skillsDiv.style.display = 'block';
            toggleButton.value = "Hide Skills";
        }
        else {
            skillsDiv.style.display = 'none';
            toggleButton.value = "Show skills";
        }
    });
}
else {
    console.log("Action Not Found Check DOM");
}
