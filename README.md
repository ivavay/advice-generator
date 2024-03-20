# Advice Generator 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  

## Overview
This uses HTML/CSS/JS and the [Advice Slip API](https://api.adviceslip.com/) to generate a random advice upon clicking the dice button. 

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](/images/images/advice-generator.gif)

## My process
Took two hours from eyeing the specs of the design, to reviewing how the DOM works, to seeing how to use fetch API. Logging the data in the console really helped with debugging with displaying the content. 


### What I learned

These are the example code for using fetch API that I got from the [Rapid API documentation.](https://rapidapi.com/guides/fetch-api)

```js
fetch(`YOUR-API`, {
	method: 'METHOD-NAME',
	body: JSON.stringify({
		payLoadkey: `value`
	})
})
	.then(res => {
		res = res.json();
	})
	.catch(err => {
		console.log(err);
	});
```

