---
title: "React Basic 01"
date: "2023-02-02"
author: "ozan ocak"
tags: ["React", "Front-end"]
subtitle: "React app starts from index.js (or main.js if you use vite)..."
---

## React Basics

React app starts from index.js (or main.js if you use vite). End of the index.js, ReactDom renders jsx elements to virtual Dom
and start observing changes of state of virtual dom by using diffing algorith.

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

we can replace **<h4>hello world from JSX!</h4>** with <App/> but if we want to place more react element or component, we need to wrap
it with **<> </>** . We can also put there react component just like above code and define <App /> somewhere above in the file.

```javascript
const App = () => {
  const local_name = "jan";
  return (
    <>
      <p>hello</p>
      <p>hola {local_name}</p>
    </>
  );
};
```

As seen above, we can declare our react function wich is react component which return jsx syntax to transpile by babel later. We can also use any local
variable.

### import/export component

we create heading.js under components folder and export it at the and of the file

```javascript
import React from "react";

const Heading = () => <h1>Hello Everyone</h1>;
export default Heading;
```

we should import it in the index.js and call it with in fragment tag. if the function was not default, it should import within
curly parantheses.

```javascript
import Heading from "./components/heading.js";
<>
      <Heading />
```

### prop passing

if we want call / place another react component such as **<Name name="jane" />**
we need to recieve name paramether as an argument in the function decleration

```javascript
const Name = (props) => {
  return <p>hello {props.name}</p>;
};
```

note that prop is a javascript object so we can also recieve **{name}** as argument

### event handling

Now we place a button in fragment
**
<button onClick={guessMe}> guess a number 1 to 3 </button>
**

we pass a javascript function as a argument to button react element, note that function is not called but its name pass as a reference
so when it is clicked the code of guessMe function is start being executed.

```javascript
function guessMe() {
  let random = Math.floor(Math.random() * 4) + 1;
  let guess = prompt("guess a number");
  let message =
    parseInt(guess, 10) === random
      ? "you got it !!!!!"
      : `your guess is ${guess} but random number is ${random}`;
  alert(message);
}
```

Yo can find all code is in [here](https://codesandbox.io/s/codepen-with-react-forked-sfwxsz?file=/src/index.js)
