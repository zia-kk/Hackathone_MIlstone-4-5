"use strict";
// ----------------------personal information------------------//
const person_Name = document.getElementById("person_name");
const jobTital = document.getElementById("jobtital");
const My_age = document.getElementById("age");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Address = document.getElementById("address");
// ----------------------Education Section------------------//
const Degree = document.getElementById("degree");
const Institute = document.getElementById("institute");
const City = document.getElementById("city");
const Year = document.getElementById("year");
// ----------------------skill Section------------------//
const Skill_1 = document.getElementById("skill_1");
const Skill_2 = document.getElementById("skill_2");
const Skill_3 = document.getElementById("skill_3");
// ----------------------Experiance Section------------------//
const Company_1 = document.getElementById("company_1");
const Position_1 = document.getElementById("position_1");
const Duration_1 = document.getElementById("duration_1");
const Company_2 = document.getElementById("company_2");
const Position_2 = document.getElementById("position_2");
const Duration_2 = document.getElementById("duration_2");
const Company_3 = document.getElementById("company_3");
const Position_3 = document.getElementById("position_3");
const Duration_3 = document.getElementById("duration_3");
const pic = document.getElementById("pic");
const submit_Btn = document.getElementById("submit_btn");
const Form = document.getElementById("form");
Form?.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem("name", person_Name.value);
    localStorage.setItem("j_title", jobTital.value);
    localStorage.setItem("Age", My_age.value);
    localStorage.setItem("mail", Email.value);
    localStorage.setItem("call", Phone.value);
    localStorage.setItem("location", Address.value);
    localStorage.setItem("Deg", Degree.value);
    localStorage.setItem("Uni", Institute.value);
    localStorage.setItem("edu_city", City.value);
    localStorage.setItem("year_pass", Year.value);
    localStorage.setItem("Eprert1", Skill_1.value);
    localStorage.setItem("Eprert2", Skill_2.value);
    localStorage.setItem("Eprert3", Skill_3.value);
    localStorage.setItem("Exp_1", Company_1.value);
    localStorage.setItem("Exp_2", Company_2.value);
    localStorage.setItem("Exp_3", Company_3.value);
    localStorage.setItem("Desig_1", Position_1.value);
    localStorage.setItem("Desig_2", Position_2.value);
    localStorage.setItem("Desig_3", Position_3.value);
    localStorage.setItem("Exp_time1", Duration_1.value);
    localStorage.setItem("Exp_time2", Duration_2.value);
    localStorage.setItem("Exp_time3", Duration_3.value);
    window.location.href = "/resume/index.html";
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textimg = reader.result;
            localStorage.setItem("profile_pic", textimg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
});