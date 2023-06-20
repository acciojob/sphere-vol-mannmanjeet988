function volume_sphere() {
   let radius_value= document.getElementById("radius").value;
	let volume = (4/3) * Math.PI * Math.pow(radius_value, 3);
	document.getElementById("volume").value = volume;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
