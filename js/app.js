// NavBar Functionality
<<<<<<< HEAD
const navIcon = document.getElementById("navIcon")
const navBar = document.querySelector(".navBar")

navIcon.addEventListener("click", ()=>{
  navBar.classList.toggle("navOpen")
})
=======
const navIcon = document.getElementById("navIcon");
const navBar = document.querySelector(".navBar");

navIcon.addEventListener("click", () => {
  navBar.classList.toggle("navOpen");
});

// Types
type = [
  "CyberPsychosis",
  "Circulatory System",
  "Skeleton Cyberware",
  "Immune System",
  "Frontal Cortex",
];
// Create New Subjects
class Subject {
  constructor(name, lastName, type) {
    this.name = name;
    this.lastName = lastName;
    this.email = document.getElementById("email");
    this.type = type;
  }
  display() {
    const newExperiment = document.createElement("div");
    newExperiment.classList.add("card");
    newExperiment.innerHTML = `
    <div class="topSection">
      <img src="" alt="" />
      <h4 class="name">${this.name} ${this.lastName}</h4>
    </div>
    <h4 class="experimentTitle">
      Experiment:
      <span class="shortHeading">${this.type}</span>
    </h4>
    `;
    document
      .querySelector(".experimentList")
      .insertAdjacentElement("beforeend", newExperiment);
  }
}
const nameForm = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const submitExperimentForm = document.getElementById("submitBtn");

submitExperimentForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameForm.value === "" || lastName.value === "" || email.value === "") {
    // feedback();
  } else {
    console.log(lastName.value);
    const newSubject = new Subject(
      nameForm.value,
      lastName.value,
      type[Math.floor(Math.random() * 5)]
    );
    newSubject.display();
    nameForm.value = "";
    lastName.value = "";
    email.value = "";
  }
});
>>>>>>> 37207cd (first commit)
