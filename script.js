shortNames = {
    d: { name : 'display', value : { n: 'none', b: 'block', i: 'inline', ib: 'inline-block', f: 'flex', g: 'grid', } },
    jc: { name : 'justifyContent', value : { s: 'space-between', c: 'center', e: 'end', b: 'space-between', a: 'space-around', } },
    ai: { name : 'alignItems', value : { s: 'stretch', c: 'center', e: 'end', b: 'baseline', } },
    fd: { name : 'flexDirection', value : { r: 'row', rr: 'row-reverse', c: 'column', cr: 'column-reverse', } },
    fw: { name : 'flexWrap', value : { n: 'nowrap', w: 'wrap', wr: 'wrap-reverse', } },
    ac: { name : 'alignContent', value : { s: 'stretch', c: 'center', e: 'end', b: 'space-between', a: 'space-around', } },
    as: { name : 'alignSelf', value : { a: 'auto', s: 'stretch', c: 'center', e: 'end', b: 'baseline', } },

    m: { name : 'margin', value : { a: 'auto', } },
    p: { name : 'padding', value : { a: 'auto', } },
    w: { name : 'width', value : { a: 'auto', } },
    h: { name : 'height', value : { a: 'auto', } },
    f: { name : 'flex', value : { a: 'auto', } },
    o: { name : 'order', value : { a: 'auto', } },
    g: { name : 'grid', value : { a: 'auto', } },

    c: { name : 'color', value : { r: 'red', g: 'green', b: 'blue', y: 'yellow', p: 'purple', o: 'orange', b: 'black', w: 'white', g: 'gray', b: 'brown', } },
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