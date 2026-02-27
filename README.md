Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
1. getElementById is a java script DOM component which help to access element using the id.Using unique id we access the element.
example const A=document.getElementById('id-name');
2. getElementByClassName is a java script DOM component which help to access element using the class name.Using class we access all the element.
example const B=document.getElementByClassName('class-name');
3. querySelector is a java script DOM component which help to access first element using the css class .Using the css class we access the element.Modern javaScript code it is used . there are use for-each loop.
example const C=document.querySelector('.class-name');
4. querySelectorAll is a java script DOM component which help to access all element using the css class .Using the css class we access the element.Modern javaScript code it is used . there are use for-each loop.
example const D=document.querySelectorAll('.class-name');

Question-2: How do you create and insert a new element into the DOM?
There are 3 step 
1.firstly create a element.
2.then write some innerText of innerHTML into created element.
3.append child into the main .

example:
const a=document.createElement('p');
a.innerText='this is a yash'
document.body.appendChild('a')

Question-3 : What is Event Bubbling? And how does it work?
Event Bubbling is a technique where event held into event target and propagate to its parent element . it work to bottom to rot element.

example: 
html code:
<div id="parent">
<div id="children">it is yash
<div>
</div>
java code:
document.getElementById('parent').addEventLisenter('click',function(){
    console.log('cleack parent');
})
document.getElementById('children').addEventLisenter('click',function(){
    console.log('cleack children');
})

if we click to children then output will be
cleack parent
cleack children

it work flow is 
1. when trigared a button eventlisener execute
2. firstly it excess event target
3. then it go to parent one by one 
4. then excess to root element

Question-4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation in a way of javaScript which help to added one parent event lisener instead of multiple child event lisener . suppose we apply event lisener into parent element than we can access all element and as well as access the particuler element and apply event lisener.

it is useful because 
1.it improve performane.
2.it use less memory
3.it is apply for larger application
4.it is Easy to implementation.
5.it reduce code complexity
6.it works for dynamically

Question - 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault stop the default behavier of browser's . suppose it stop the move other page or resticted the form reload etc .
stopPropagation do interrupt to excess parent element . it is use to event bubble .If we add stopPropagation in children it will stay to children stage not to go upper stage .