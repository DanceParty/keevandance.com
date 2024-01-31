---
layout: ../../layouts/posts-layout.astro
title: "Beginner Big O Notation"
pubDate: 2019-02-11
description: "Some notes on relearning big o notation for interviews"
author: "Keevan Dance"
tags: ["development", "javascript", "react"]
---

## Introduction

Big O Notation is often used in Computer Science to estimate the time complexity (or the time it takes) for a program/function to run. Some of the more common measurements end up being Constant Time, Linear Time, Exponential Time, and Logarithmic Time. On to the examples:

## O(1) — Constant Time

Constant time is used to represent functions that don’t change their time complexity regardless of the change in input size. So even as the size of uselessParam (an array) might increase, the function does not change what it does at all. It will still assign 10 to x (1 action), and then it will return x (1 action).

```js
function constantExample(uselessParams) {
  let x = 10;
  return x;
}
```

## O(n) — Linear Time

Linear time is used to represent functions which increase in time complexity linearly as the size of the arguments increase. Common examples of this are iterating through a single array using a for or a while loop. In the example below, as the size of arr increases, the number of iterations in the for loop increase as well increasing the total time of the function making this O(n) where n is the size of the array.

```js
function linearExample(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++>) {
    total += arr[i]
  }
  return total
}
```

## O(n²) — Exponential Time

With exponential time, a common example is when you are nesting for loops for a single array (think comparing items). As seen in the example below there are two for loops (one inside the other) which equates to O(n²) because it is iterating over the same set of data. If there were three then it would be O(n³), etc…

```js
function exponentialExample(arr) {
  // check if duplicate letters exist
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++>) {
      if (j !== i) {
        if (arr[i] === arr[j]) {
          return true
        }
      }
    }
  }
  return false
}
```

## O(ab)

This can be somewhat tricky and easy to mistake with exponential time because they look so similar. The key thing to remember here is that you are iterating over 2 different arrays.

```js
function exponentialExample(arr1, arr2) {
  // check if duplicate letters exist
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++>) {
      if (j !== i) {
        if (arr1[i] === arr2[j]) {
          return true
        }
      }
    }
  }
  return false
}
```
