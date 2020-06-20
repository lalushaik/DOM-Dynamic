//alert("hello lalu shaik");
function jsonFile(file,callback){
    var ajaxCall=new XMLHttpRequest();
    ajaxCall.overrideMimeType("application/json");
    ajaxCall.open("GET",file,true);
    ajaxCall.onreadystatechange=function(){
        if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
            callback(ajaxCall.responseText);
        }
    }
    ajaxCall.send(null);
}
//call the function
jsonFile("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    details(data.details);
    details1(data.details);
    career(data.career);
    professional(data.professional);
    experience(data.experience);
    education(data.education)
})

//create card
var body=document.getElementById("root");
console.log(body);
var container=document.createElement("div");
container.setAttribute("class","container")
body.appendChild(container);
var row=document.createElement("div");
row.setAttribute("class","row mt-5 p-5")
container.appendChild(row);
var card1 = document.createElement("div");
card1.setAttribute("class","col-md-4");
row.appendChild(card1);
var card = document.createElement("div");
card.setAttribute("class","card text-center");
card1.appendChild(card);
var header = document.createElement("div");
header.setAttribute("class","card-header");
card.appendChild(header);
var image = document.createElement("img");
image.setAttribute("class","card-img-top");
image.src="./images/woman.svg";
image.alt="Profile Image";
card.appendChild(image);
function details(mydetails){
// h3 for name
var name1=document.createElement("h4");
name1.setAttribute("class","card-title");
name1.textContent=mydetails.name;
card.appendChild(name1);
var desig=document.createElement("p");
desig.setAttribute("class","card-text");
desig.textContent=mydetails.desig;
card.appendChild(desig);
card.appendChild(document.createElement("hr"));
//create email
var email=document.createElement("p");
email.textContent=mydetails.email;
card.appendChild(email);
//create phone number
var mobile=document.createElement("p");
mobile.textContent=mydetails.mobile;
card.appendChild(mobile);
var area = document.createElement("p");
area.textContent=mydetails.area;
card.appendChild(area);
}
//create resume part
var resume = document.createElement("div");
resume.setAttribute("class","offset-md-1 col-md-7");
resume.setAttribute("id","resumepart");
row.appendChild(resume);
function details1(mydetails1){
    var name1=document.createElement("h4");
    name1.textContent=mydetails1.name;
    resume.appendChild(name1);
    //create email
    var email=document.createElement("p");
    email.textContent=mydetails1.email;
    resume.appendChild(email);
    //create phone number
    var mobile=document.createElement("p");
    mobile.textContent=mydetails1.mobile;
    resume.appendChild(mobile);
    resume.appendChild(document.createElement("hr"));
}
function career(mycareer){
var career =document.createElement("h4");
career.textContent=mycareer.title;
resume.appendChild(career);
var career1=document.createElement("p");
career1.textContent=mycareer.info
resume.appendChild(career1);
}
function professional(myprofessional){
var professional =document.createElement("h4");
professional.textContent=myprofessional.title;
resume.appendChild(professional);
var list = document.createElement("ul");
resume.appendChild(list);
var listItem = document.createElement("li");
listItem.textContent = myprofessional.info1;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = myprofessional.info2;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = myprofessional.info3;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = myprofessional.info4;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = myprofessional.info5;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = myprofessional.info6;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = myprofessional.info7;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent =myprofessional.info8;
list.appendChild(listItem);
}
function experience(myexperience){
var experience =document.createElement("h4");
experience.textContent=myexperience.title;
resume.appendChild(experience);
var list = document.createElement("ul");
resume.appendChild(list);
var listItem = document.createElement("li");
listItem.textContent =myexperience.info1;
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent =myexperience.info2;
list.appendChild(listItem);
}
function education(myeducation){
var EDUCATION =document.createElement("h4");
EDUCATION.textContent=myeducation.title;
resume.appendChild(EDUCATION);
var row=document.createElement("div");
row.setAttribute("class","row")
row.setAttribute("id","educationDetails")
resume.appendChild(row);
var card1 = document.createElement("div");
card1.setAttribute("class","col-md-5");
row.appendChild(card1);
var education1 =document.createElement("h6");
education1.textContent=myeducation.info1;
card1.appendChild(education1);
var card1 = document.createElement("div");
card1.setAttribute("class","col-md-7");
row.appendChild(card1);
var education2 =document.createElement("p");
education2.textContent=myeducation.info2;
card1.appendChild(education2);  
var sign =document.createElement("h6");
sign.setAttribute("class","text-right");
sign.textContent="(Lalu Shaik)";
resume.appendChild(sign);
}


