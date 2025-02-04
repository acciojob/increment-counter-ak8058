//your JS code here. If required.
let counter=0;
const counterElement=document.getElementById('counter');
const incrementButton=document.getElementById('incrementBtn');

incrementButton.addEventListener('click',()=>{
	alert(`Current Value: ${counter}`);
	counter++;
	counterElement.textContent=counter;
});
