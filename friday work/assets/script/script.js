const dropDownMenuElement = document.querySelector('.buttonMenu'),
      searchMenuElement = document.querySelector('.buttonSearch'),
      modalWindowElement = document.querySelector('.modalWindow'),
      headerElement = document.querySelector('.navContainer'),
      closeModalElement = document.querySelector('.closeModal'),
      closeSearchElement = document.querySelector('.closeSearch'),
      searchWindowElement = document.querySelector('.search')


      dropDownMenuElement.addEventListener('click', () => {
        modalWindowElement.style.display = "flex"
        headerElement.style.display = "none"
      });

      closeModalElement.addEventListener('click', () => {
        modalWindowElement.style.display = "none"
        headerElement.style.display = "flex"
      });

      searchMenuElement.addEventListener('click', () => {
        searchWindowElement.style.display = "flex"
        headerElement.style.display = "none"
      });

      closeSearchElement.addEventListener('click', () => {
        searchWindowElement.style.display = "none"
        headerElement.style.display = "flex"
      });
