# FrontEnd Mentor Todolist App

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter Todo activities into Completed and Active buckets


### Screenshot

![image](https://user-images.githubusercontent.com/95531716/179759754-443db6b3-1aa6-446d-8dfd-974e32506a14.png)



### Links

https://leoimewore.github.io/Todolist-App/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Major learnings 
1)using javascript array methods like map and filter 👍
2)Implementing ES6 syntax for example: spread and null operator👍
3)Implementing the useState and useEffect hooks👍

To see how you can add code snippets, see below:

```js
let arr = [props.role, props.level, ...props.languages, ...props.tools];
const handleClick = function (event) {
    const clickedSkill = event.target.textContent;
    if(!props.inputValue.includes(clickedSkill)){
    props.setInputValue([...props.inputValue, clickedSkill]);
}

    const filteredData = props.info.filter((ev) =>
      [ev.role, ev.level, ...ev.languages, ...ev.tools].includes(clickedSkill)
    );
    props.setInfo(filteredData);
  }
```


### Continued development

My major focus remains completing projects with react js and improve my skill set 



### Useful resources

https://reactjs.org/     


## Author


- Frontend Mentor - [@leoimewore](https://www.frontendmentor.io/profile/leoimewore)
- Twitter - [@capino48](https://www.twitter.com/capino48)



## Acknowledgments

Thank you Frontend Mentor
