const body = document.getElementById("root");
const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const currlang = document.getElementById("curr-lang");
const langList = document.getElementById("languages-list");
const currLangFlag = document.getElementById("curr-lang-flag");
const enLang = document.getElementById("en-lang");
const beLang = document.getElementById("be-lang");

const toggleMobileMenu = () => {
    header.classList.toggle("nav-open");
    const hamburgerIconSrc = "images/icons/hamburger-icon.svg";
    const closeIconSrc = "images/icons/close-icon.svg";
    
    if (hamburger.src.includes(hamburgerIconSrc)) {
        hamburger.src = closeIconSrc;
    } else {
        hamburger.src = hamburgerIconSrc;
    }
}

enLang.addEventListener("click", () => {
  currLangFlag.src = "images/flags/engl-flag.svg"
})

beLang.addEventListener("click", () => {
  currLangFlag.src = "images/flags/belg-flag.svg"
})

const toggleLangDropdown = () => {currlang.classList.toggle("expanded");}

hamburger.addEventListener("click", toggleMobileMenu);
currlang.addEventListener("click", toggleLangDropdown);

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



// Expand dropdown on packages selector
const currPackage = document.getElementById("current-package");

// Toggle Class on dropdown label click
currPackage.addEventListener("click",() => {
  currPackage.classList.toggle("packages-expanded");
})

// Remove class (Collapse dropdown) when clicked outside the dropdown
document.addEventListener("click", e => {
  if (e.target !== currPackage) {
    currPackage.classList.remove("packages-expanded");
  }
});


// Add class to the body depending on chosen package and remove other package classes

  // Assign items to plans to variables
  const kickstart = document.getElementById("kickstart");
  const basic = document.getElementById("basic");
  const full = document.getElementById("full");
  const executive = document.getElementById("executive");

  // Add plans to an array
  const plans = [kickstart,basic,full,executive];

  // Function when an item from the dropdown is clicked
  const removePackClasses = (el) => {
    body.classList.remove("kickstart","basic","full","executive");
    currPackage.classList.remove("packages-expanded");
    const elText = el.textContent.toLowerCase();
    body.classList.add(elText);
    currPackage.textContent = elText;
  }

  // Loop through plans and call the function when a plan is clicked
  plans.forEach(item => {
    item.addEventListener("click", () => {
      removePackClasses(item);
    });
  });