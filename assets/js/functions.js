const body = document.getElementById('root');
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const currlang = document.getElementById('curr-lang');
const langList = document.getElementById('languages-list');
const currLangFlag = document.getElementById('curr-lang-flag');
const hamburgerIconSrc = 'images/icons/hamburger-icon.svg';
const closeIconSrc = 'images/icons/close-icon.svg';

const navItems = Array.from(document.getElementsByClassName('nav-list-item'));
const closeNav = navItems.map((item) => {
  item.addEventListener('click', () => {
    header.classList.remove('nav-open');
    hamburger.src = hamburgerIconSrc;
  });
});

//! LANGUAGES SELECTOR / TRANSLATION FUNCTIONALITY

function changeLanguage(lang) {
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach((elem) => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  // Update the selected language in the dropdown
  document.getElementById('selected-language').textContent = lang;

  // Hide the language dropdown
  const languagesList = document.getElementById('languages-list');
  languagesList.style.display = 'none';
}

// Function to toggle the visibility of the language dropdown
function toggleLanguageDropdown() {
  const languagesList = document.getElementById('languages-list');
  const selectedLanguage =
    document.getElementById('selected-language').textContent;

  // Clear the current list
  languagesList.innerHTML = '';

  // Generate the languages-list excluding the selected language
  Object.keys(translations).forEach((lang) => {
    if (lang !== selectedLanguage) {
      const li = document.createElement('li');
      li.textContent = lang;
      li.addEventListener('click', () => changeLanguage(lang));
      languagesList.appendChild(li);
    }
  });

  languagesList.style.display =
    languagesList.style.display === 'none' ? 'block' : 'none';
}

// After the page loads
document.addEventListener('DOMContentLoaded', () => {
  const languagesList = document.getElementById('languages-list');
  languagesList.style.display = 'none';

  // Add an event listener to the current language element
  const currLangElement = document.getElementById('curr-lang');
  currLangElement.addEventListener('click', toggleLanguageDropdown);
});

// Add event listeners for language selection
const enLangElement = document.getElementById('en-lang');
const nlLangElement = document.getElementById('nl-lang');
const frLangElement = document.getElementById('fr-lang');

enLangElement.addEventListener('click', () => changeLanguage('EN'));
nlLangElement.addEventListener('click', () => changeLanguage('NL'));
frLangElement.addEventListener('click', () => changeLanguage('FR'));

// Close Dropdown On Click Outside of the list
function closeDropdownOnClickOutside(event) {
  const languagesList = document.getElementById('languages-list');
  const currLangElement = document.getElementById('curr-lang');

  // Check if the languages list is visible before attempting to close it
  if (
    languagesList.style.display === 'block' &&
    !languagesList.contains(event.target) &&
    !currLangElement.contains(event.target)
  ) {
    toggleLanguageDropdown(false);
  }
}

// Add a click event listener to the document body
document.body.addEventListener('click', closeDropdownOnClickOutside);
//!

//!MOBILE TOGGLE MENU
const toggleMobileMenu = () => {
  header.classList.toggle('nav-open');

  if (hamburger.src.includes(hamburgerIconSrc)) {
    hamburger.src = closeIconSrc;
  } else {
    hamburger.src = hamburgerIconSrc;
  }
};

hamburger.addEventListener('click', toggleMobileMenu);
//!

//! SCROLL-UP BUTTON functionality
const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
//

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
//!

//! INQUIRE PLANS functionality
const plansHolder = document.getElementById('plans-holder');

const inquireButtons = Array.from(
  document.getElementsByClassName('inquire-button')
);
inquireButtons.map((item) => {
  item.addEventListener('click', () => {
    const classValue = item.attributes.plan.value + '-opened';
    plansHolder.classList.remove(
      'kickstart-opened',
      'basic-opened',
      'full-opened',
      'executive-opened'
    );
    plansHolder.classList.add(classValue);
  });
});

const planBackButton = Array.from(
  document.getElementsByClassName('plan-back-button')
);
planBackButton.map((item) => {
  item.addEventListener('click', () => {
    plansHolder.classList.remove(
      'kickstart-opened',
      'basic-opened',
      'full-opened',
      'executive-opened'
    );
  });
});
//!

//! COMPARE Functionality
// Opening the modal
const compareBtn = document.getElementById('compare-btn');
const compareModal = document.getElementById('compare-modal');
const closeModal = document.getElementById('compare-close');

const openModal = () => {
  compareModal.classList.add('opened');
  body.classList.add('compare-modal-opened');
};

compareBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', () => {
  body.classList.remove('compare-modal-opened');
  compareModal.classList.remove('opened');
});

// Opening the plans dropdown in the modal

const currPlanLeft = document.getElementById('current-plan-left');
const currPlanRight = document.getElementById('current-plan-right');

const currPlansArray = [currPlanLeft, currPlanRight];
currPlansArray.map((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('expanded');
  });
});

// Adding the value from the selected item from the value to the current plan

const dropdownItemsLeft = Array.from(
  document.querySelectorAll('.plan-selector-left ul li')
);
const dropdownItemsRight = Array.from(
  document.querySelectorAll('.plan-selector-right ul li')
);
const planHolderLeft = document.getElementById('plans-holder-left');
const planHolderRight = document.getElementById('plans-holder-right');

const setupDropdownItems = (
  items,
  targetHolder,
  targetElement,
  targetClass
) => {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      targetHolder.classList = [
        'plans-holder',
        targetClass,
        `${item.innerHTML.toLowerCase()}-selected`,
      ].join(' ');
      targetElement.textContent = item.innerHTML;
      targetElement.classList.remove('expanded');
    });
  });
};

setupDropdownItems(dropdownItemsLeft, planHolderLeft, currPlanLeft, 'left');
setupDropdownItems(dropdownItemsRight, planHolderRight, currPlanRight, 'right');
//!
