// NavBar Functionality
const navIcon = document.getElementById("navIcon");
const navBar = document.querySelector(".navBar");

navIcon.addEventListener("click", () => {
  navBar.classList.toggle("navOpen");
});
// Close navbar on clicking link
const navLink = document.querySelectorAll(".navLink");
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navBar.classList.remove("navOpen");
  });
});

// Types
const type = [
  "CyberPsychosis",
  "Circulatory System",
  "Skeleton Cyberware",
  "Immune System",
  "Frontal Cortex",
];

// Get Elements
const experimentList = document.querySelector(".experimentList");
const nameForm = document.getElementById("name");
const email = document.getElementById("email");
const submitExperimentForm = document.getElementById("formSubmitBtn");

// Create New Subjects
class Subject {
  constructor(name, email, type) {
    this.img = Math.floor(Math.random() * 5);
    this.name = name;
    this.email = email;
    this.type = Math.floor(Math.random() * 5);
  }
  display() {
    const newExperiment = document.createElement("div");
    newExperiment.classList.add("card");
    newExperiment.innerHTML = `
      <div class="details">
        <img class="customerImg" src="./customerImgs/cust-${
          this.img
        }.png" alt="" />
        <div class="data">
          <h4>
            Name: <span class="shortHeading userName">${this.name}</span>
          </h4>
          <h4>
            Email: <span class="shortHeading userEmail">${this.email}</span>
          </h4>
          <h4>
            Experiment:
            <span class="shortHeading ">${type[this.type]}</span>
          </h4>
        </div>
      </div>
      <div class="buttons">
        <button
          class="submitBtn edit"
          style="font-size: 1rem; padding: 5px 10px"
        >
          Edit
        </button>
        <button
          class="submitBtn delete"
          style="font-size: 1rem; padding: 5px 10px; margin-left: 40px"
        >
          Delete
        </button>
      </div>
    `;
    experimentList.insertAdjacentElement("beforeend", newExperiment);
  }
}

const feedback = () => {
  const feedbackData = document.querySelector(".feedback");
  feedbackData.textContent = "Empty Fields Submitted";
  feedbackData.classList.add("showItem");
  setTimeout(() => {
    feedbackData.classList.remove("showItem");
  }, 3000);
};

// Form Submission for Experiment
submitExperimentForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameForm.value === "" || email.value === "") {
    feedback();
  } else {
    const newSubject = new Subject(nameForm.value, email.value);
    newSubject.display();
    addButtonFunctionality(nameForm.value);
    nameForm.value = "";
    email.value = "";
  }
});

// Edit and Delete Buttons
function addButtonFunctionality(textValue) {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((item) => {
    if (item.querySelector(".userName").textContent === textValue) {
      // Edit Functionality
      item.querySelector(".edit").addEventListener("click", (e) => {
        e.preventDefault();
        nameForm.value = item.querySelector(".userName").textContent;
        email.value = item.querySelector(".userEmail").textContent;
        item.remove();
      });

      // Delete Functionality
      item.querySelector(".delete").addEventListener("click", (e) => {
        e.preventDefault();
        item.remove();
      });
    }
  });
}

// Btn filter
const filterBtns = document.querySelectorAll(".Btn");
filterBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const btnValue = e.target.dataset.filter;
    // All Items
    const implants = document.querySelectorAll(".implants");
    implants.forEach((item) => {
      if (btnValue === "All") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(btnValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

// Search Box Filter
const search = document.getElementById("searchBox");
search.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.trim().toLowerCase();
  const cardTitle = document.querySelectorAll(".cardHeading");
  cardTitle.forEach((item) => {
    const titleSlice = item.textContent
      .trim()
      .toLowerCase()
      .slice(0, searchValue.length);
    if (searchValue === titleSlice) {
      item.parentElement.parentElement.style.display = "block";
    } else {
      item.parentElement.parentElement.style.display = "none";
    }
  });
});

// ModalOpen
const modal = document.querySelector(".modal");
const allProductImgs = document.querySelectorAll(".cardHeading");
allProductImgs.forEach((item) => {
  item.previousElementSibling.addEventListener("click", (e) => {
    modal.classList.add("showItem");
    const targetValue = item.previousElementSibling.src;
    const imgPath = targetValue.slice(
      targetValue.length - 5,
      targetValue.length
    );
    const modalImg = document.querySelector(".modalItem");
    modalImg.src = `../productImgs/product-${imgPath}`;
  });
});

// Modal Close
const modalClose = document.querySelector(".fa-window-close");
modalClose.addEventListener("click", () => {
  modal.classList.remove("showItem");
});

// Footer Date
const footerDate = document.getElementById("date");
const date = new Date();
footerDate.textContent = date.getFullYear();
