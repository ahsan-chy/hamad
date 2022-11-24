const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const ssn = document.getElementById("ssn");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const dob = document.getElementById("DOB");
const zip = document.getElementById("zip");
const email = document.getElementById("email");
const userID = document.getElementById("userID");
const passId = document.getElementById("passId");
const cpassId = document.getElementById("cpassId");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const myList = document.getElementById("myList");
const form = document.getElementById("form");

submit.addEventListener("click", submission);

function submission(e) {
  if (
    FN(firstName) === true &&
    LN(lastName) === true &&
    DOB(dob) === true &&
    SN(ssn) === true &&
    Address1(address1) == true &&
    Address2(address2) == true &&
    ZP(zip) === true &&
    EM(email) === true &&
    UI(userID, passId) === true &&
    PID(passId, userID) === true &&
    CPID(cpassId) === true
  ) {
    e.preventDefault();
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.textContent = "Go back";
    btn2.textContent = "Done";
    btn1.setAttribute("id", "btn1");
    btn2.setAttribute("id", "btn2");
    td1.appendChild(btn1);
    td2.appendChild(btn2);
    submit.style.display = "none";
    myList.appendChild(td1);
    myList.appendChild(td2);
    btn1.onclick = function () {
      e.preventDefault();
      alert("Make changes in the form");
      btn1.style.display = "none";
      btn2.style.display = "none";
      submit.style.display = "block";
    };
    btn2.onclick = function () {
      alert(
        "Thank you for your submission. We will be contacting you shortly."
      );
      form.reset();
      btn1.style.display = "none";
      btn2.style.display = "none";
      submit.style.display = "block";
      return true;
    };
  } else {
    e.preventDefault();
    alert("Form Incomplete");
  }
}

// this function will clear or reset all the fields
clear.onclick = function () {
  let question = prompt("Do you want to clear the form (yes/no)");
  if (question === "yes") {
    form.reset();
  } else if (question === "no") {
    return false;
  }
};
// this is a validation function for the first name field
function FN(firstName) {
  var letters = /^[A-Za-z '-]+$/;
  if (
    firstName.value.match(letters) &&
    firstName.value.length > 0 &&
    firstName.value.length < 30
  ) {
    firstName.classList.add("valid");
    return true;
  } else {
    firstName.classList.add("invalid");
    alert(
      "Name must not be empty and only contain letters, apostrophes and underscores"
    );
    firstName.focus();
    return false;
  }
}

// this is a validation function for the last name field
function LN(lastName) {
  var letters = /^[A-Za-z '-]+$/;
  if (
    lastName.value.match(letters) &&
    lastName.value.length > 0 &&
    lastName.value.length < 30
  ) {
    lastName.classList.add("valid");
    return true;
  } else {
    lastName.classList.add("invalid");
    alert(
      "Name must not be empty and only contain letters, apostrophes and underscores"
    );
    lastName.focus();
    return false;
  }
}

// this is a validation function for the date of birth field
function DOB(dob) {
  y = new Date().getFullYear();
  m = new Date().getMonth() + 1;
  d = new Date().getDate();
  newdate = dob.value.split("-").join(",");
  y1 = newdate.substring(0, 4);
  m1 = newdate.substring(5, 7);
  d1 = newdate.substring(8, 10);
  console.log(y1, y);
  console.log(m1, m);
  console.log(d1, d);
  if (y1 > y) {
    alert("Date of birth should be not in future");
    return false;
  }
  if (y1 == y && m1 > m) {
    alert("Date of birth should not be in future");
    return false;
  }
  if (y1 == y && m1 == m && d1 > d) {
    alert("Date of birth should not be in future");
    return false;
  } else {
    return true;
  }
}

// this is a validation function for the serial number field

function SN(element) {
  let ele = document.getElementById(element.id);
  console.log("SSn", ele);
  ele = ele.value.split("-").join(""); // Remove dash (-) if mistakenly entered.

  let finalVal = ele.match(/.{1,3}/g).join("-");
  document.getElementById(element.id).value = finalVal;
  console.log(finalVal.length);
  if (finalVal.length == 11) {
    return true;
  }
  alert("Invalid ssn");

  return false;
}

//address1
function Address1(address1) {
  var pattern = /^[a-zA-Z0-9\s\,\''\-]*$/;
  if (
    address1.value.match(pattern) &&
    address1.value.length > 2 &&
    address1.value.length < 30
  ) {
    return true;
  } else {
    alert("Adress must be atleast 2 character long and less then 30");
    address1.focus();
    return false;
  }
}

//address2
function Address2(address1) {
  var pattern = /^[a-zA-Z0-9\s\,\''\-]*$/;
  console.log(address1.value.length);
  if (address1.value.length == 0) {
    console.warn(0000);
    return true;
  }
  if (
    address2.value.match(pattern) &&
    address2.value.length > 2 &&
    address2.value.length < 30
  ) {
    return true;
  } else {
    alert("Adress must be atleast 2 character long and less then 30");
    address1.focus();
    return false;
  }
}

// Validation for zip field
function ZP(zip) {
  var numbers = /^[0-9]+$/;
  if (zip.value.match(numbers) && zip.value.length === 5) {
    zip.classList.add("valid");
    return true;
  } else {
    alert(
      "ZIP code must have numeric characters only and value must be 5 digits"
    );
    zip.focus();

    zip.classList.add("invalid");
    return false;
  }
}

// Email validation
function EM(email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {
    email.classList.add("valid");
    return true;
  } else {
    alert("Invalid email address!");
    email.focus();

    email.classList.add("invalid");
    return false;
  }
}

// User ID validation
function UI(userID, pasid) {
  var id = /^[\d]*[a-z_][a-z\d_]*$/gi;
  var pattern = '[a-z A-Z\\_\\"]+$';
  var space = /\s/g;
  if (
    userID.value.match(id) &&
    userID.value[0].match(pattern) &&
    userID.value.length >= 5 &&
    userID.value.length <= 20
  ) {
    userID.classList.add("valid");
    return true;
  }
  if (userID.value == pasid.value) {
    alert("User id and password should not match");

    return false;
  }

  if (userID.value.match(space)) {
    alert("User id shoud not have white space");
    return false;
  }
  if (!userID.value[0].match(pattern)) {
    alert("User id shoud not start with numeric");
    return false;
  }

  if (userID.value.length < 5) {
    alert("User should be greater then or equal to 5");
    return false;
  }
}

// Validating the password
function PID(passId, userID) {
  var pas = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;

  if (passId.value.match(pas) && !(userID.value == passId.value)) {
    passId.classList.add("valid");
    return true;
  }
  if (userID.value == passId.value) {
    alert("User id  and password should not match");

    return false;
  } else {
    alert(
      " Passwords must contain at least 1 upper case, 1 lower case letter and 1 digit and must be between 8-20 characters"
    );
    passId.focus();

    passId.classList.add("invalid");
    return false;
  }
}

// To confirm whether the password
function CPID(cpassId) {
  const passId = document.getElementById("passId");

  if (passId.value == cpassId.value) {
    cpassId.classList.add("valid");
    return true;
  } else {
    alert("Passwords did not match");
    cpassId.focus();
    cpassId.classList.add("invalid");
    return false;
  }
}

function updateTextInput(val) {
  document.getElementById("textInput").value = val;
}

let dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

y = new Date().getFullYear();
m = monthName[new Date().getMonth()];
d = dayName[new Date().getDay()];
dm = new Date().getDate();

document.getElementById("date").innerHTML =
  "Today is: " + d + ", " + m + " " + dm + "th" + ", " + y;
