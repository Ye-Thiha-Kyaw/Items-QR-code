// Get the "Generate Order" button and the canvas element
var generateOrderButton = document.querySelector('.generateOrderButton');
var canvas = document.getElementById("qrcode");

// Add an event listener to the button
generateOrderButton.addEventListener('click', function() {
  // Get the "resultContainer" element
  var resultContainer = document.querySelector('.resultContainer');
  
  // Get all the "item" elements inside the "resultContainer"
  var items = resultContainer.querySelectorAll('.item');
  
  // Create an empty object to store the key-value pairs
  var data = {};
  
  // Loop through the "items" and extract the key-value pairs
  for (var i = 0; i < items.length; i += 2) {
      var key = items[i].textContent.trim();
      var value = items[i + 1].textContent.trim();
      data[key] = value;
  }
  
  // Store the QR code data string in local storage with a key "qrCode"
  localStorage.setItem('qrCodeData', JSON.stringify(data));

  // var data1 = document.querySelector('.resultContainer').innerText;
  // const qrCodeDataAsString = JSON.stringify(data1);
  // localStorage.setItem('qrCode', qrCodeDataAsString);


  window.location.href = 'yourResult.html';
});


function shuffleItems() {
    const otherItems = ['Walnut', 'coconut', 'bread', 'strawberry'];
    const dryItems = ['ce', 'co', 'do', 'mo'];
    const fruitItems = ['Apple', 'orange', 'banana', 'pineapple'];
    const baseItems = ['Milk', 'yogurt', 'beer', 'juice'];
  
    const otherElements = document.querySelectorAll('.other');
    const dryElements = document.querySelectorAll('.Dry');
    const fruitElements = document.querySelectorAll('.fruit');
    const baseElements = document.querySelectorAll('.base');
  
    otherElements.forEach((element) => {
      const randomIndex = Math.floor(Math.random() * otherItems.length);
      element.textContent = otherItems[randomIndex];
    });
  
    dryElements.forEach(element => {
      const randomIndex = Math.floor(Math.random() * dryItems.length);
      element.textContent = dryItems[randomIndex];
    });
  
    fruitElements.forEach(element => {
      const randomIndex = Math.floor(Math.random() * fruitItems.length);
      element.textContent = fruitItems[randomIndex];
    });
  
    baseElements.forEach(element => {
      const randomIndex = Math.floor(Math.random() * baseItems.length);
      element.textContent = baseItems[randomIndex];
    });
   
  }

  const shuffleButton = document.querySelector('.shuffleButton');
shuffleButton.addEventListener('click', shuffleItems);


