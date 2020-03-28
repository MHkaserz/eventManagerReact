// Class manipulation function #add #remove
exports.manipulateClass = (elementName, className, operation) => {
    const elementLoader = document.getElementById(elementName);
    if(operation === 'add') { if(!elementLoader.classList.contains(className)) { elementLoader.classList.add(className); } }
    if(operation === 'remove') { if(elementLoader.classList.contains(className)) { elementLoader.classList.remove(className); } }
};

