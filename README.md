# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). This project helped me practice working with APIs, React, and implementing a dark/light theme switcher.

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

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![Screenshot of the REST Countries API project](./src/design/desktop-design-home-dark.jpg)

### Links

- Solution URL: [https://github.com/DemoStephen/Country-Scope](https://github.com/DemoStephen/Country-Scope)
- Live Site URL: [https://countryscope.vercel.app/](https://countryscope.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### What I learned

- How to fetch and display data from a public API in React.
- Implementing a theme switcher using React state and Tailwind CSS.
- Managing global state for theme and filters.
- Routing with React Router for country detail pages.

#### Example: Fetching countries from the API

```js
const fetchCountries = () =>
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => setCountries(data))
    .finally(() => setLoading(false));
```

#### Example: Theme toggle function

```js
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
}
```

### Continued development

- Improve accessibility, especially for keyboard navigation and screen readers.
- Add unit and integration tests.
- Enhance error handling for API requests.
- Optimize performance for large datasets.

### Useful resources

- [REST Countries API Docs](https://restcountries.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)

## Author

- Frontend Mentor - [@demostephen](https://www.frontendmentor.io/profile/demostephen)
- GitHub - [demostephen](https://github.com/demostephen)

## Acknowledgments

Thanks to the Frontend Mentor community for feedback and support!
