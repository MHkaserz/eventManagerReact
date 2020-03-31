// Vars used by multiple functions
const body = document.body;

// Class manipulation function #add #remove
exports.manipulateClass = (elementName, className, operation) => {
    const elementLoader = document.getElementById(elementName);
    if(operation === 'add') { if(!elementLoader.classList.contains(className)) { elementLoader.classList.add(className); } }
    if(operation === 'remove') { if(elementLoader.classList.contains(className)) { elementLoader.classList.remove(className); } }
};

// Theme replacing and caching
exports.themeApplyCache = (themeOld, themeNew) => {
	body.classList.replace(themeOld, themeNew);
    localStorage.setItem('theme', themeNew);
}

// Theme default replacing and caching
exports.themeDefault = () => {
	if(body.classList.contains('default')) {
        body.classList.remove('default');
        localStorage.setItem('isDefault', 'false');
    } else { 
        body.classList.add('default'); 
        localStorage.setItem('isDefault', 'true');
    }
}

// Manage cached theme
exports.isCached = (theme, isDefault) => {
	if(theme) { 
		body.classList.add(theme); 
    } else { 
        body.classList.add('dark'); 
        localStorage.setItem('theme', 'dark');
    }

    if(isDefault === 'true') { 
    	body.classList.add('default'); 
	} else {
		body.classList.remove('default'); 
		localStorage.setItem('isDefault', 'false');
	}
}

