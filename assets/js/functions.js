const body = document.getElementById("root");
const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const currlang = document.getElementById("curr-lang");
const langList = document.getElementById("languages-list");
const currLangFlag = document.getElementById("curr-lang-flag");
const hamburgerIconSrc = "images/icons/hamburger-icon.svg";
const closeIconSrc = "images/icons/close-icon.svg";
// const enLang = document.getElementById("en-lang");
// const beLang = document.getElementById("be-lang");
const navItems = Array.from(document.getElementsByClassName("nav-list-item"));
const closeNav = navItems.map(item => {
  item.addEventListener("click", () => {
    header.classList.remove("nav-open");
    hamburger.src = hamburgerIconSrc;
  })
});

const toggleMobileMenu = () => {
    header.classList.toggle("nav-open");
    
    if (hamburger.src.includes(hamburgerIconSrc)) {
        hamburger.src = closeIconSrc;
    } else {
        hamburger.src = hamburgerIconSrc;
    }
}

// enLang.addEventListener("click", () => {
//   currLangFlag.src = "images/flags/engl-flag.svg"
// })

// beLang.addEventListener("click", () => {
//   currLangFlag.src = "images/flags/belg-flag.svg"
// })

// const toggleLangDropdown = () => {currlang.classList.toggle("expanded");}

hamburger.addEventListener("click", toggleMobileMenu);
// currlang.addEventListener("click", toggleLangDropdown);

// Scroll-Up button functionality
const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition > 50) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
    scrollToTopButton.style.display = 'none';
  }
});


// Inquire functionality
const plansHolder = document.getElementById("plans-holder");

const inquireButtons = Array.from(document.getElementsByClassName("inquire-button"));
inquireButtons.map(item => {
  item.addEventListener("click", () => {
    const classValue = item.attributes.plan.value + "-opened";
    plansHolder.classList.remove("kickstart-opened","basic-opened","full-opened","executive-opened")
    plansHolder.classList.add(classValue);
  })
})

const planBackButton = Array.from(document.getElementsByClassName("plan-back-button"));
planBackButton.map(item => {
  item.addEventListener("click", () => {
    plansHolder.classList.remove("kickstart-opened","basic-opened","full-opened","executive-opened")
  })
})


// Compare Functionality

  // Opening the modal

  const compareBtn = document.getElementById("compare-btn");
  const compareModal = document.getElementById("compare-modal");
  const closeModal = document.getElementById("compare-close")

  const openModal = () => {
    compareModal.classList.add("opened");
    body.classList.add("compare-modal-opened")
  }

  compareBtn.addEventListener("click", openModal);
  closeModal.addEventListener("click", () => {
    body.classList.remove("compare-modal-opened");
    compareModal.classList.remove("opened");
  })

  // Opening the plans dropdown in the modal

  const currPlanLeft = document.getElementById("current-plan-left");
  const currPlanRight = document.getElementById("current-plan-right");

  const currPlansArray = [currPlanLeft, currPlanRight];
  currPlansArray.map(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("expanded");
    })
  })

  // Adding the value from the selected item from the value to the current plan

  const dropdownItemsLeft = Array.from(document.querySelectorAll(".plan-selector-left ul li"));
  const dropdownItemsRight = Array.from(document.querySelectorAll(".plan-selector-right ul li"));
  const planHolderLeft = document.getElementById("plans-holder-left");
  const planHolderRight = document.getElementById("plans-holder-right");
  
  const setupDropdownItems = (items, targetHolder, targetElement, targetClass) => {
    items.forEach(item => {
        item.addEventListener("click", () => {
          targetHolder.classList = ["plans-holder", targetClass, `${item.innerHTML.toLowerCase()}-selected`].join(" ");
          targetElement.textContent = item.innerHTML;
          targetElement.classList.remove("expanded");
        });
    });
};

setupDropdownItems(dropdownItemsLeft, planHolderLeft, currPlanLeft, "left");
setupDropdownItems(dropdownItemsRight, planHolderRight, currPlanRight, "right");