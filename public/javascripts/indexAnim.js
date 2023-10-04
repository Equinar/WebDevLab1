 /*
  File Name: indexAnim.js
  Student: Adam Hodgins (301332994)
  Date: October 3 2023
  Comment: Handles adding and removing classes to aid the index page typewriter animations  
*/
  const upperText = document.getElementById('upper');
  const lowerText = document.getElementById('lower');


  window.addEventListener('load', function () {
  // Set a timeout to trigger the action after 3 seconds
  setTimeout(function () {
    lowerText.classList.add('line');
    lowerText.classList.remove('invisible')
    lowerText.classList.add('anim-typewriter2');
  }, 3000); // 3000 milliseconds = 3 seconds

  setTimeout(function () {
    upperText.classList.remove('line');
    upperText.classList.remove('anim-typewriter');
  }, 3700); // 3000 milliseconds = 3 seconds

  setTimeout(function () {
    lowerText.classList.remove('line');
    lowerText.classList.remove('anim-typewriter2');
  }, 7000);
});