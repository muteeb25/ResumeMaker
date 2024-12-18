function addNewLanField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control", "laField", "mt-2");
  newNode.setAttribute("placeholder", "Enter Language");

  let container = document.getElementById("la");
  container.insertBefore(newNode, document.getElementById("laAddButton"));
}

function addNewEdField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "edField", "mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Education Details");

  let container = document.getElementById("ed");
  container.insertBefore(newNode, document.getElementById("aqAddButton"));
}

function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "weField", "mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Work Experience");

  let container = document.getElementById("we");
  container.insertBefore(newNode, document.getElementById("weAddButton"));
}

function addNewAQField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control", "skField", "mt-2");
  newNode.setAttribute("placeholder", "Enter Skill");

  let container = document.getElementById("sk");
  container.insertBefore(newNode, document.getElementById("skAddButton"));
}

function generateCV() {
  // Validate name field
  let nameField = document.getElementById("nameField").value.trim();
  if (!nameField) {
    alert("Name is required!");
    return;
  }

  document.getElementById("nName").innerText = nameField;
  document.getElementById("jJob").innerText = document.getElementById("jobFiled").value;
  document.getElementById("cContact").innerText = document.getElementById("contactField").value;
  document.getElementById("gGmail").innerText = document.getElementById("gmailFiled").value;

  // Image Validation
  let file = document.getElementById("imgField").files[0];
  if (file && file.type.startsWith("image/")) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      document.getElementById("imgTemplate").src = reader.result;
    };
  } else {
    alert("Please upload a valid image file!");
  }

  // Dynamically set languages, education, experience, skills
  let languages = Array.from(document.getElementsByClassName("laField"))
    .map(e => `<li>${e.value}</li>`).join("");
  document.getElementById("lan").innerHTML = languages;

  let education = Array.from(document.getElementsByClassName("edField"))
    .map(e => `<li>${e.value}</li>`).join("");
  document.getElementById("edu").innerHTML = education;
  
  let skills = Array.from(document.getElementsByClassName("skField"))
    .map(e => `<li>${e.value}</li>`).join("");
  document.getElementById("skills").innerHTML = skills;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  window.print();
}
