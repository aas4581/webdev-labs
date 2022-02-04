document.getElementById("default").addEventListener("click", function(){
	document.getElementByTagName("body").classList.remove('ocean', 'desert', 'high-contrast');
}

document.getElementById("desert").addEventListener("click", function(){
	document.getElementByTagName("body").classList.remove('ocean', 'desert', 'high-contrast');
	document.getElementByTagName("body").className = 'desert';
}

document.getElementById("ocean").addEventListener("click", function(){
	document.getElementByTagName("body").classList.remove('ocean', 'desert', 'high-contrast');
	document.getElementByTagName("body").className = 'ocean';
}

document.getElementById("high-contrast").addEventListener("click", function(){
	document.getElementByTagName("body").classList.remove('ocean', 'desert', 'high-contrast');
	document.getElementByTagName("body").className = 'high-contrast';
}

