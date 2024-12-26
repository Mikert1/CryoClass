console.log("[CryoClass] loaded");
const time = new Date().getTime();
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
    p: { name : 'padding', value : { a: 'auto', } },
    w: { name : 'width', value : { a: 'auto', } },
    h: { name : 'height', value : { a: 'auto', } },
    f: { name : 'flex', value : { a: 'auto', } },
    o: { name : 'order', value : { a: 'auto', } },
    g: { name : 'grid', value : { a: 'auto', } },
    z: { name : 'zIndex', value : { a: 'auto', } },

    c: { name : 'color', value : { r: 'red', g: 'green', b: 'blue', y: 'yellow', o: 'orange', w: 'white', g: 'gray', } },
    bc: { name : 'backgroundColor', value : { r: 'red', g: 'green', b: 'blue', y: 'yellow', o: 'orange', w: 'white', g: 'gray', } },
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
} );

console.log('[CryoClass] Done in', new Date().getTime() - time, 'ms');