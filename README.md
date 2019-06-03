### W6D1 Breakout!!!

Today we talked about components in react, and which tools to use while writing react.

[react dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Things to Remember when writing components (For Now)

 - `import React, {Component} from 'react';` <- always import (for now)
 - `class Hello extends Component`           <- always write class ___ extends Component (for now)
 -  class must have a `render()`
 -  `export default App;`                    <- always export your Component

### What is a State

State lives in your Class. When you change state, the DOM re-renders the components that the state was used in, and shows without refresh.
To change state we use the function called

`this.setState({ ... })`

### Props(Properties)

Props are properties. We pass props down to components so that the other component can use the values/functions.

```html
<Controls numberUp={this.numberUp} numberDown={this.numberDown} />
```

### Functions

Creating functions in react using es6

```html
myfunction = (param) => {
  console.log(param)
}
```

We should always use `es6`, because it gives us a scope for `this` to be the entire component. This is useful because inside the function we can:
  - manilpulate state
  - get props
  - use other react functions declared in the component

We can do it with es5 and using the `bind` technique, buut . . .  as was shown, it is alot more convinient to use es6 functionality!

### Using Conditionals

We cannot use conditionals inside of a render of jsx

Wrong Way!

```html
render(){
  return (
    <div>
      {if (true) return <h1>Hello</h1>}
    </div>
  )
}
```

We cannot do this because JSX only takes in expressions! For this we use:

```html
render(){
  return (
    <div>
      {true && 'Hello'}
    </div>
  )
}
```

Or Turniary Operators...

```html
render(){
  return (
    <div>
      {true ? <h1>hello im true</h1> : <h2>Hi i was false</h2>}
    </div>
  )
}
```

Remember how some things will be different such as `class` is now `className` and so on.
Here is a page on all of the events that react has to offer and its syntax.

[react events](https://reactjs.org/docs/events.html)
