shortNames = {
    bc: { name : 'backgroundColor', value : { r: 'red', g: 'green', b: 'blue', y: 'yellow', p: 'purple', o: 'orange', b: 'black', w: 'white', g: 'gray', b: 'brown', } },
};

function shortNameToFullName(name) {
    if (shortNames[name]) {
        return shortNames[name].name;
    }
    return name;
}

function shortValueToFullValue(name, value) {
    if (shortNames[name].value[value]) {
        return shortNames[name].value[value];
    }
    return value;
}

document.querySelectorAll('*').forEach(element => {
    if (element.classList.length > 0) {
        element.classList.forEach(className => {
            let classArray = className.split('-');
            if (classArray.length > 1) {
                let name = classArray[0];
                let value = classArray.slice(1).join('-');
                element.style[shortNameToFullName(name)] = shortValueToFullValue(name, value);
            }
        });
    }
});