1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: In Dom, the difference between getElementById and getElementsByClassName is, when we just wanted to apply the function in a single or only one Element, we use getElementById. Because, it desigd to catch one and only Element. 

But the getElementsByClassName is different. is design to catch mutiple Element to apply function.

And the querySelector or querySelectorAll also works like same. Because, it jobs like getElementById, getElementsByClassName but it helps the developer not to specify the attribute. The Developer can use these just by specially add "." or "#" for id and class.


2. How do you create and insert a new element into the DOM?

Answer: First I will create a "section" Element inside the HTML "body" structure. then i will add an attribute called "id" inside the "section" opening tag like this <section id="section"></section>.

Then i will create a script file called script.js and connect the HTML file with it

Then in the .js file i will create a variable called "section" and catch my section Element using DOM like this: let section = document.getElementById('section')

Then i will add <h1> tag in the variable by using .innerHTML like this: section.innerHTML = `<h1>Hello. World!</h1>`

The finel JS code will be: 

let section = document.getElementById('section');
section.innerHTML = `<h1>Hello. World!</h1>`;


3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is kind a loop that gose backword or upword. 

it works like when we click in the child section, it will show us the child massage and also child Event trigger the parent massage and the parent massage trigger the its parent massage means grand parent massage.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a kind of patern to handle maltiple events in once by adding addEventListene() in the parent.

It usefull because, the Developer Dont have to write addEventListene() every time he write the button. He could just add it once then identifying the actual source of the event using the event.target property.


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: The difference between preventDefault() and stopPropagation() methods is,

preventDefault() method stops the default browser behavior, but not bubbling. if we add this on <a> tage, after clicking the <a> tag, we wont go to the website but an event will ocker.

The stopPropagation() method is the complete opposite of preventDefault() method, it stops the the event from bubbling up to its parent elements but not the browser default behavior.