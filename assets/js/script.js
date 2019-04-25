const fullName = document.getElementById('fullName');
const emailAddress = document.getElementById('emailAddress');
const businessAddress = document.getElementById('businessAddress');
const phoneNumber = document.getElementById('phoneNumber');
const description = document.getElementById('description');
const submitbtn = document.getElementById('submit-button');
const loadbtn = document.getElementById('loadCookie');
const output = document.getElementById('outputs');
const reloadBtn = document.getElementById('reloadPage');

submitbtn.addEventListener('click', event=>{
  document.getElementById('outputs').innerHTML = "";

  var nameValue = fullName.value;
  var nameParagraph = document.createElement('p');
  nameParagraph.textContent = "Full Name: "+ nameValue;
  output.appendChild(nameParagraph);

  var emailValue = emailAddress.value;
  var emailParagraph = document.createElement('p');
  emailParagraph.textContent = "Email Address: "+ emailValue;
  output.appendChild(emailParagraph);

  var businessValue = businessAddress.value;
  var businessParagraph = document.createElement('p')
  businessParagraph.textContent = "Business Address: "+ businessValue;
  output.appendChild(businessParagraph);

  var phoneValue = phoneNumber.value;
  var phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = "Phone Number: "+ phoneValue;
  output.appendChild(phoneParagraph);

  var descriptionValue = description.value;
  var descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = "Description: "+ descriptionValue;
  output.appendChild(descriptionParagraph);

  //issaugo duomenis i localSorage
  var businessCard = {
    fullName : nameValue,
    emailAddress : emailValue,
    businessAddress : businessValue,
    phoneValue : phoneValue,
    description : descriptionValue,
  }
  localStorage.setItem('businessCard', JSON.stringify(businessCard));
});


// uzsikrovus puslapiui paima is localstorage duomenis
window.addEventListener('load', event=>{

  var bla = JSON.parse(localStorage.getItem('businessCard'));

  var nameParagraph = document.createElement('p');
  nameParagraph.textContent = "Full Name: "+ bla.fullName;
  output.appendChild(nameParagraph);

  // document.getElementById("fullName").value = bla.fullName;

  var emailParagraph = document.createElement('p');
  emailParagraph.textContent = "Email Address: "+ bla.emailAddress;
  output.appendChild(emailParagraph);

  var businessParagraph = document.createElement('p')
  businessParagraph.textContent = "Business Address: "+ bla.businessAddress;
  output.appendChild(businessParagraph);

  var phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = "Phone Number: "+ bla.phoneValue;
  output.appendChild(phoneParagraph);

  var descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = "Description: "+ bla.description;
  output.appendChild(descriptionParagraph);


  console.log('page is fully loaded');
});


reloadBtn.addEventListener('click', event=>{
  window.location.reload();
});


console.log("The end");
