# Frontend Mentor - REST Countries API with color theme switcher solution by Eivind Simonsen

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Live Site URL: [Live site here](https://eas-world-countries.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/documentation/) - For styles

### What I learned

I've learned how to implement a color-scheme changer. It started of terrible, because i had my scss variables, and applied a "darkMode" class to conditionally to every element which needed it. This resulted in a lot of extra code. However, I fixed the issue by avoiding some sass rules with variables, and the result is much cleaner. Now theres one set of variables used as usual, and the values change based on a data attribute.

```scss
:root {
  --input: hsl(0, 0%, 52%);
  --text: hsl(200, 15%, 8%);
  --bg: hsl(0, 0%, 98%);
  --elements: hsl(0, 0%, 100%);
  --shadows: 0.5px 0.5px 0.8px #f2f2f2, 1.7px 1.7px 2.8px -0.8px #f2f2f2, 4.2px 4.3px 6.9px -1.5px #f2f2f2, 10.2px 10.4px 16.8px -2.3px #f2f2f2;

  --dark-input: hsl(0, 0%, 100%);
  --dark-text: hsl(0, 0%, 100%);
  --dark-bg: hsl(207, 26%, 17%);
  --dark-elements: hsl(209, 23%, 22%);
  --dark-shadows: 0.5px 0.5px 0.8px #00202c37, 1.7px 1.7px 2.8px -0.8px #00202c37, 4.2px 4.3px 6.9px -1.5px #00202c37, 10.2px 10.4px 16.8px -2.3px #00202c37;
}

[data-theme="dark"] {
  --input: var(--dark-input);
  --text: var(--dark-text);
  --bg: var(--dark-bg);
  --elements: var(--dark-elements);
  --shadows: var(--dark-shadows);
}
```

This code toggles the light and dark state. State resides in handleThemeContext.

```jsx
function Navigation() {
  const { toggleTheme, setToggleTheme } = useTheme();

  const toggleThemeMode = () => {
    setToggleTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav>
      <div className="container nav-items">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button
          onClick={toggleThemeMode}
          className="theme-toggler">
          <i className={toggleTheme === "dark" ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i>
          {toggleTheme === "dark" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}
```

## Author

- Website - [https://www.easimonsen.com/](https://www.easimonsen.com/)
- Frontend Mentor - [@eivindsimonsen](https://www.frontendmentor.io/profile/eivindsimonsen)
- LinkedIn - [@eivindsimonsen](https://www.linkedin.com/in/eivind-simonsen-9469121b9/)
