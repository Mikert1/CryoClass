shortNames = {
    bc: 'background-color',
}

function shortNameToFullName(name) {
    return shortNames[name] || name;
}

document.querySelectorAll('*').forEach(element => {
    if (element.classList.length > 0) {
        element.classList.forEach(className => {
            let classArray = className.split('-');
            if (classArray.length > 1) {
                let name = classArray[0];
                let value = classArray.slice(1).join('-');
                element.style[shortNameToFullName(name)] = value;
            }
        });
    }
});