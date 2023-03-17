// Get the QR code data string from local storage
const qrCodeDataAsString = localStorage.getItem('qrCodeData');
// const qrCodeDataAsObject = localStorage.getItem('qrCodeData')

// Convert the QR code data string to an object
const qrCodeData = JSON.parse(qrCodeDataAsString);
const tableData = `
    Other = ${qrCodeData['Other']}
       
    Dry   = ${qrCodeData['Dry']}
       
    Fruit = ${qrCodeData['fruit']}
      
    Base  = ${qrCodeData['Base']}
      
   
`;

console.log(qrCodeData)
// Use the QR code data to display the QR code image or do other processing
// For example, you can create a new QR code instance with the data and display it on the page:
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: tableData,
    width: 256,
    height: 256,
});

const container = document.querySelector('.resultContainer')
const other = document.querySelector('.other')
const dry = document.querySelector('.Dry')
const fruit = document.querySelector('.fruit')
const base = document.querySelector('.base')

other.textContent=qrCodeData['Other']
dry.textContent=qrCodeData['Dry']
fruit.textContent=qrCodeData['fruit']
base.textContent=qrCodeData['Base']


const returnButton= document.querySelector('.returnButton')

returnButton.addEventListener('click',function(){
    window.location.href = 'index.html'
})