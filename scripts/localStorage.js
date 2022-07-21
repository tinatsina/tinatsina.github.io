function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
          // Firefox
          || e.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
          // acknowledge QuotaExceededError only if there's something already stored
          && (storage && storage.length !== 0);
  }
}

if(localStorage.getItem('formName') === null) {
  populateStorage();
} else {
  setStyles();
}

function setStyles() {
  const currentName = localStorage.getItem('formName');
  const currentEmail = localStorage.getItem('formEmail');
  const currentMessage = localStorage.getItem('formMessage');

  document.getElementById('form-name').value = currentName;
  document.getElementById('form-email').value = currentEmail;
  document.getElementById('form-text').value = currentMessage;

  console.log(currentName + currentEmail + currentMessage);
}

function populateStorage() {
  localStorage.setItem('formName', document.getElementById('form-name').value);
  localStorage.setItem('formEmail', document.getElementById('form-email').value);
  localStorage.setItem('formMessage', document.getElementById('form-text').value);
  setStyles();
}

// document.getElementById('form-name').onchange = populateStorage;
// document.getElementById('form-email').onchange = populateStorage;
// document.getElementById('form-text').onchange = populateStorage;
