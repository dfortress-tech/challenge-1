# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

- My Desktop View Screenshot
<img width="1264" height="599" alt="Screenshot 2026-05-06 222346" src="https://github.com/user-attachments/assets/840e85e0-c296-4cbc-a5c9-c50cdbdc31e8" />

- My Mobiler View Screenshot
<img width="484" height="591" alt="Mobile View Screenshot" src="https://github.com/user-attachments/assets/7e98e5d0-7c89-45df-9d1b-0b7fe0799649" />

### Links

- Solution URL: https://github.com/DFortress-tech/Challenge-1
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS Functions


### What I learned

Through this challenge, I was able to solidify my knowledge on how to handle error for validations and success toast using JavaScript Functions

```js
function showToast() {
        const toast = document.getElementById("toast");

        // Add the "show" class to the div
        toast.classList.add("show");

        // After 3 seconds, remove the show class
        setTimeout(function () {
          toast.classList.remove("show");
        }, 3000);
      }

      // ── Submit handler ──
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        // run all validations and collect results
        const isValid = [
          validateFname(),
          validateLname(),
          validateEmail(),
          validateQuery(),
          validateMessage(),
          validateConsent(),
        ].every(Boolean); // true only if ALL return true

        if (isValid) {
          showToast();
        }
```

### AI Collaboration

While undertaking the project, I made use of Claude and GitHub Copilot to debug my code and provide adequate solutions.

## Author

- Frontend Mentor - [@DFortress-tech](https://www.frontendmentor.io/profile/DFortress-tech)
- Twitter - [@VictorOguejiof4](https://www.x.com/VictorOguejiof4)
