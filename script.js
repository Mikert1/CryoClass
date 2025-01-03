const shortNames = {
    d: { name : 'display', value : { n: 'none', b: 'block', i: 'inline', ib: 'inline-block', f: 'flex', g: 'grid', } },
    jc: { name : 'justifyContent', value : { s: 'space-between', c: 'center', e: 'end', b: 'space-between', a: 'space-around', sb: 'space-between', sa: 'space-around'} },
    ai: { name : 'alignItems', value : { s: 'stretch', c: 'center', e: 'end', b: 'baseline', } },
    fd: { name : 'flexDirection', value : { r: 'row', rr: 'row-reverse', c: 'column', cr: 'column-reverse', } },
    fw: { name : 'flexWrap', value : { n: 'nowrap', w: 'wrap', wr: 'wrap-reverse', } },
    ac: { name : 'alignContent', value : { s: 'stretch', c: 'center', e: 'end', b: 'space-between', a: 'space-around', sb: 'space-between', sa: 'space-around'} },
    as: { name : 'alignSelf', value : { a: 'auto', s: 'stretch', c: 'center', e: 'end', b: 'baseline', } },
    p: { name : 'position', value : { s: 'static', r: 'relative', a: 'absolute', f: 'fixed', i: 'sticky' } },

    m: { name : 'margin', value : { a: 'auto', } },
    mt: { name : 'marginTop', value : { a: 'auto', } },
    mr: { name : 'marginRight', value : { a: 'auto', } },
    mb: { name : 'marginBottom', value : { a: 'auto', } },
    ml: { name : 'marginLeft', value : { a: 'auto', } },
    p: { name : 'padding', value : { a: 'auto', } },
    pt: { name : 'paddingTop', value : { a: 'auto', } },
    pr: { name : 'paddingRight', value : { a: 'auto', } },
    pb: { name : 'paddingBottom', value : { a: 'auto', } },
    pl: { name : 'paddingLeft', value : { a: 'auto', } },
    
    w: { name : 'width', value : { a: 'auto', } },
    h: { name : 'height', value : { a: 'auto', } },
    f: { name : 'flex', value : { a: 'auto', } },
    o: { name : 'order', value : { a: 'auto', } },
    g: { name : 'gap', value : { a: 'auto', } },
    z: { name : 'zIndex', value : { a: 'auto', } },

    c: { name : 'color', value : { r: 'red', g: 'green', b: 'blue', y: 'yellow', o: 'orange', w: 'white', gr: 'gray', } },
    bc: { name : 'backgroundColor', value : { r: 'red', g: 'green', b: 'blue', y: 'yellow', o: 'orange', w: 'white', gr: 'gray', } },
    b: { name : 'border', value : { n: 'none', } },
    br: { name : 'borderRadius', value : { n: 'none', } },
    bs: { name : 'boxShadow', value : { n: 'none', } },

    font: { name : 'fontSize', value : { s: 'small', m: 'medium', l: 'large', xl: 'x-large', xxl: 'xx-large', } },
    fontw: { name : 'fontWeight', value : { l: 'lighter', n: 'normal', b: 'bold', } },
    fonts: { name : 'fontStyle', value : { n: 'normal', i: 'italic', o: 'oblique', } },
    fontv: { name : 'fontVariant', value : { n: 'normal', s: 'small-caps', } },
    fontf: { name : 'fontFamily', value : { s: 'serif', ss: 'sans-serif', m: 'monospace', c: 'cursive', f: 'fantasy', } },
    td: { name : 'textDecoration', value : { n: 'none', u: 'underline', o: 'overline', l: 'line-through', b: 'blink', } },
    ir : { name : 'imageRendering', value : { c: 'crisp-edges', p: 'pixelated', o: 'optimizeQuality', a: 'auto' } },
    ta: { name : 'textAlign', value : { l: 'left', r: 'right', c: 'center', j: 'justify', } },

    cursor: { name : 'cursor', value : { a: 'auto', d: 'default', n: 'none', p: 'pointer', m: 'move', t: 'text', h: 'help', } },

};

let tipSend = false;
const settings = {
    errorDisplay: document.currentScript.getAttribute('errorDisplay') === 'true',
    debugMode: document.currentScript.getAttribute('debugMode') === 'true',
};

function shortNameToFullName(name) {
    if (shortNames[name]) {
        return shortNames[name].name;
    }
    if (name in document.body.style) {
        return name;
    }
    return null;
}

function shortValueToFullValue(name, value) {
    if (shortNames[name].value[value]) {
        return shortNames[name].value[value];
    }
    return value;
}

function sendError(element, name, value) {
    if (errorDisplay) {
        let warning = document.createElement('div');
        Object.assign(warning.style, {
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            backgroundColor: '#050505', color: 'white', padding: '1rem',
            zIndex: '9999', fontFamily: 'sans-serif', fontSize: '1.5rem',
            borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', maxWidth: '80%'
        });
        const h2 = document.createElement('h2'); h2.innerText = 'CryoClass Error'; warning.prepend(h2);
        const info = document.createElement('p'); info.innerText = `Element: ${element.tagName.toLowerCase()}#${element.id}.${element.classList.value.replace(' ', '.')}`; warning.append(info);
        const error = document.createElement('p'); error.innerText = `The class '${name}-${value}' is not a valid CSS property or known in our short properties. If this class is for your own styling then remove the '-' in your classname or remove this error completely by following the instructions below'.`; warning.append(error);
        const tip = document.createElement('p'); tip.innerText = 'This error is displayed because of errorDisplay="true" in the script tag.'; tip.style.fontSize = '1rem'; warning.append(tip);
        document.body.appendChild(warning);
    } else {
        if (tipSend) {
            console.log(`[CryoClass] Some of your classes like '${name}-${value}' are not recognized. Want to debug? Set errorDisplay="true" in the script tag.`);
            tipSend = true;
        }
    }
}

function assignStyle(element, name, value) {
    let fullName = shortNameToFullName(name);
    if (fullName) {
        let fullValue = shortValueToFullValue(name, value);
        element.style[fullName] = fullValue;
    } else {
        sendError(element, name, value);
    }
}

function ifDebugLog(message, element) {
    if (settings.debugMode) {
        console.log(message, element);
    }
}

function processElement(element) {
    if (element.classList.length > 0) {
        element.classList.forEach(className => {
            let classArray = className.split('-');
            if (classArray.length > 1) {
                let name = classArray[0];
                let value = classArray.slice(1).join('-');
                assignStyle(element, name, value);
            }
        });
    }
    ifDebugLog("Processing element:", element);
}

function processDocumentFragment(fragment) {
    fragment.querySelectorAll('*').forEach(child => {
        ifDebugLog("Processing fragment child:", child);
        processElement(child);
    });
    ifDebugLog("Processing fragment:", fragment);
}

function processElementNode(element) {
    ifDebugLog("Processing node:", element);
    processElement(element);
    element.querySelectorAll('*').forEach(child => {
        processElement(child);
        ifDebugLog("Processing node child:", child);
    });
}

function processNode(node) {
    if (node instanceof DocumentFragment) {
        processDocumentFragment(node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        processElementNode(node);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("[CryoClass] Loading...");
    const time = new Date().getTime();
    const scriptElement = document.querySelector('script[errorDisplay="true"]');
    errorDisplay = scriptElement ? scriptElement.getAttribute('errorDisplay') === 'true' : false;

    document.querySelectorAll('*').forEach(element => {
        processElement(element);
    } );

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(processNode);
        });
        console.log("[CryoClass] MutationObserver Done");
    });

    observer.observe(document.body, { childList: true, subtree: true });

    console.log('[CryoClass] Done in', new Date().getTime() - time, 'ms');
});
