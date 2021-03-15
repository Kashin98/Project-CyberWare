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
const productList = document.querySelector(".productsList");
const filterBtns = document.querySelectorAll(".Btn");
filterBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const btnValue = e.target.dataset.filter;
    // All Items
    const implants = productList.querySelectorAll(".implantItem");
    implants.forEach((item) => {
      if (btnValue === "All") {
        item.parentElement.style.display = "block";
      } else {
        if (item.classList.contains(btnValue)) {
          item.parentElement.style.display = "block";
        } else {
          item.parentElement.style.display = "none";
        }
      }
    });
  });
});

// Search Box Filter
const search = document.getElementById("searchBox");
search.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.trim().toLowerCase();
  const cardTitle = productList.querySelectorAll(".cardHeading");
  cardTitle.forEach((item) => {
    // Method 1 - To search but will only check starting of string

    // const titleSlice = item.textContent
    //   .trim()
    //   .toLowerCase()
    //   .slice(0, searchValue.length);
    // if (searchValue === titleSlice)

    // Method 2 - ES6 easier approach and will check whole string
    if (item.textContent.toLowerCase().includes(searchValue)) {
      item.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      item.parentElement.parentElement.parentElement.style.display = "none";
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

// Add new Implants
class Implant {
  constructor(type, img, title, description) {
    this.type = type;
    this.img = img;
    this.title = title;
    this.description = description;
  }
  implantDisplay() {
    const newImplant = document.createElement("div");
    newImplant.classList.add("implants");
    newImplant.innerHTML = `
    <div class="implantItem ${this.type}" data-item="${this.type}">
          <div class="productImgContainer">
            <img src="./productImgs/product-${this.img}.png" alt="" />
            <h1 class="cardHeading">${this.title}</h1>
            <p class="cardDescription">
            ${this.description}
            </p>
          </div>
        </div>
    `;
    productList.insertAdjacentElement("beforeend", newImplant);
  }
}

// Display implants in DOM
const implant1 = new Implant(
  "Immune-System",
  1,
  "METABOLIC EDITOR",
  " An implant designed to assist liver and pancreas function against poisons."
);
implant1.implantDisplay();
const implant2 = new Implant(
  "Nervous-System",
  2,
  "Neofiber",
  " Synthetic muscle fibers."
);
implant2.implantDisplay();
const implant3 = new Implant(
  "Skeleton-Cyberware",
  3,
  "BIONIC JOINTS",
  "Mechatronic musculoskeletal support."
);
implant3.implantDisplay();
const implant4 = new Implant(
  "Frontal-Cortex",
  4,
  "MEMORY BOOST",
  " A module that optimizes the sync between brain and cyberware."
);
implant4.implantDisplay();
const implant5 = new Implant(
  "Immune-System",
  5,
  "PAIN EDITOR",
  " An immune system enhacement valued highly on the streets. Reduce the pain."
);
implant5.implantDisplay();
const implant6 = new Implant(
  "Immune-System",
  0,
  "INDUCTOR",
  " Invigorates the immune system after receiving an external high-voltage stimulus."
);
implant6.implantDisplay();
const implant7 = new Implant(
  "Nervous-System",
  6,
  "REFLEX TUNER",
  " A coprocesser that supports decision-making processes in emergency situations."
);
implant7.implantDisplay();
const implant8 = new Implant(
  "Skeleton-Cyberware",
  7,
  "BIONIC LUNGS",
  "  Efficient lungs engineered with both organic and artificial tissue fibers."
);
implant8.implantDisplay();
const implant9 = new Implant(
  "Skeleton-Cyberware",
  8,
  "DENSE MARROW",
  "Metal-infused bones capable of withstanding heavy loads."
);
implant9.implantDisplay();
const implant10 = new Implant(
  "Skeleton-Cyberware",
  9,
  "TITANIUM BONES",
  "Metal-infused bones capable of withstanding heavy loads."
);
implant10.implantDisplay();
