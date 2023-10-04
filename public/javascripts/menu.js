 /*
  File Name: menu.js
  Student: Adam Hodgins (301332994)
  Date: October 3 2023
  Comment: Handles logic for opening and closing the sidebar menu. If the menu isnt open, open it and vice versa. This is imported at the end of every .ejs file with the exception of error.ejs
*/
const menu = document.getElementById('menu');
const resizeContainer = document.getElementById('container');
const resizeImage = document.getElementById('picture-bg');
menu.addEventListener('click', () => {

     if (!menu.classList.contains("smaller")){
      resizeContainer.style.width = '90vw';
      resizeImage.style.width = '90vw';
      menu.classList.add("smaller");
     }
     
     else{
      resizeContainer.style.width = '100vw';
      resizeImage.style.width = '100vw';
      menu.classList.remove("smaller");
     }
  });