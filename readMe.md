# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aimanaaw/lotide`

**Require it:**

`const _ = require('@aimanaaw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an array
* `tail`: Returns the tail end of an array (Tail end of array can be modified)
* `middle`: The middle value of an array if the array has an odd number of elements. This function shall return the middle 2 values of an array if the array has an even number of elements.
