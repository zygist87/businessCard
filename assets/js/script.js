const fullName = document.getElementById('fullName');
const emailAddress = document.getElementById('emailAddress');
const businessAddress = document.getElementById('businessAddress');
const phoneNumber = document.getElementById('phoneNumber');
const description = document.getElementById('description');
const submitbtn = document.getElementById('submit-button');
const loadbtn = document.getElementById('loadCookie');
const output = document.getElementById('outputs');
const cookieOutput = document.getElementById('cookieOutput');
// submitbtn.addEventListener('click', event=>{
//   console.log("input button");
//   console.log(fullName.value);
//   console.log(emailAddress.value);
//   console.log(businessAddress.value);
//   console.log(phoneNumber.value);
//   console.log(description.value);
// });

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



  //darysiu i localStorage
  var businessCard = {
    fullName : nameValue,
    emailAddress : emailValue,
    businessAddress : businessValue,
    phoneValue : phoneValue,
    description : descriptionValue,
  }
  localStorage.setItem('businessCard', JSON.stringify(businessCard));
});




window.addEventListener('load', event=>{
  // var retrievedName = localStorage.getItem('businessCard');
  var bla = JSON.parse(localStorage.getItem('businessCard'));

  var nameParagraph = document.createElement('p');
  nameParagraph.textContent = "Full Name: "+ bla.fullName;
  output.appendChild(nameParagraph);
  // console.log(bla.fullName);
  //output.innerHTML= bla.fullName;

  var emailParagraph = document.createElement('p');
  emailParagraph.textContent = "Email Address: "+ bla.emailAddress;
  output.appendChild(emailParagraph);


  var businessParagraph = document.createElement('p')
  businessParagraph.textContent = "Business Address: "+ bla.businessAddress;
  output.appendChild(businessParagraph);

  // var phoneValue = phoneNumber.value;
  var phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = "Phone Number: "+ bla.phoneValue;
  output.appendChild(phoneParagraph);

  // var descriptionValue = description.value;
  var descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = "Description: "+ bla.description;
  output.appendChild(descriptionParagraph);


  console.log('page is fully loaded');
});



// loadbtn.addEventListener('click', event=>{
//   var retrievedBusinessCard = localStorage.getItem('businessCard');
//   // console.log('load btn');
//   var retrievedCard = document.createElement('div');
//   retrievedCard.textContent = retrievedBusinessCard;
//   retrievedCard.appendChild(retrievedBusinessCard);
//
// })







console.log("The end");
