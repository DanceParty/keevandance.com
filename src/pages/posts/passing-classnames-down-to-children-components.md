---
layout: ../../layouts/posts-layout.astro
title: "Passing ClassNames Down to Children Components"
pubDate: 2019-01-13
description: "A React prop trick I learned while watching Michael Chan code"
author: "Keevan Dance"
tags: ["development", "javascript", "react"]
---

A little trick I learned while watching [Michael Chan](https://twitter.com/chantastic?lang=en)’s React Holiday 2018 Series (which you should totally check out [here](https://www.youtube.com/playlist?list=PLnc_NxpmOxaPbyq_lEGZKWF7R3BbK3PSZ)) is how to pass down classNames as props to children components without affecting the className that may be pre-defined on said child component.

If we have a parent and a child component like this:

```js
function Parent() {
  return <Child />;
}

function Child() {
  return (
    <div className="wrapper">
      <h1 className="title">I am the child component</h1>
    </div>
  );
}
```

And we wanted to pass down one or more modifying classes to the h1 tag in order to change the text color or size BUT we don’t want to mess up the previously defined className, we can use the Array prototype method “join()” to concatenate all of the classNames we wish to pass down with the preexisting ones. Check out the example below.

```js
function Parent() {
  return <Child className="is-pink is-large" />;
}

function Child(props) {
  return (
    <div className="wrapper">
      <h1 className={["title", props.className].join(" ")}>
        I am the child component
      </h1>
    </div>
  );
}
```

Now when we run our code, the Child component will render the <h1> tag with the class as “title is-pink is-large” which will allow us to add any number of classNames to this component in the future.

Thanks for taking the time to read this short blog! Please comment below if you have any questions or feedback.
