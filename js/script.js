// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');
console.log(mainEl)

// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'


mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Add a class of flex-ctrto mainEl

mainEl.classList.add("flex-ctr");


// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");

// Set the height topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
// Add a class of flex-around to topMenuEl.
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Iterate over the entire menuLinks array and for each "link" object:

// Create an <a>element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

for (const menu of menuLinks){
    const aElement = document.createElement("a")
        aElement.setAttribute("href", menu.href);
        aElement.textContent = menu.text;
        topMenuEl.append(aElement);
}