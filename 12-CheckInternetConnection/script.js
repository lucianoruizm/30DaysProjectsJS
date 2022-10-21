let random = document.getElementById("random");  

if(navigator.onLine){  
  random.textContent = "Internet Online !";  
  random.style.color = "green";  
}  

window.addEventListener("online",function(){  
 random.textContent = "Internet Online !";  
  random.style.color = "green";  
});  

window.addEventListener("offline",function(){  
 random.textContent = "Internet Offline !";  
  random.style.color = "red";  
  vibratePattern();  
}); 