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

![Screenshot of the REST Countries API project](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/yourusername/rest-countries-api-with-color-theme-switcher](https://github.com/yourusername/rest-countries-api-with-color-theme-switcher)
- Live Site URL: [https://your-live-site-url.com](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
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
const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  setCountries(data);
};
```

#### Example: Theme toggle button

```js
<button onClick={toggleTheme}>
  {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>
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
