function volume_sphere(event) {
	event.preventDefault(); 
   let radius_value= document.getElementById("radius").value;
	let volume_val = (4/3) * Math.PI * Math.pow(radius_value, 3);
	document.getElementById("volume").value = volume_val.toFixed(4);
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
