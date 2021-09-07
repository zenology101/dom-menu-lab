// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');
console.log(mainEl)

// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'


mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";