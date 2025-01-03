// Assuming you have a template element in your HTML with id 'template'
const template = document.querySelector('template');

// Function to clone the template and append it to the body
function cloneTemplate() {
    const clone1 = template.content.cloneNode(true);
    const clone2 = template.content.cloneNode(true);

    document.body.appendChild(clone1);
    document.body.appendChild(clone2);
}

// Call the function to clone and place the templates after 1 second
setTimeout(cloneTemplate, 1000);
console.log('script2.js loaded');