The "**Drinks Demo App**" is a sample SPA web application that shows you awesome alcoholic drinks!

[Preview the app here](https://imalitavakoli.github.io/drinks-app/).

*Drinks Demo App* is just an other sample SPA web app that I have built by `Vue.js`, `jQuery`, and `Framework8` (my personal Front-end Framework). It connects to the [thecocktaildb.com](https://www.thecocktaildb.com/api.php) API and loads the alcoholic drinks.




# Features

- **alcoholic drinks** at a glance!
- Clean UI & easy UX.
- Structure & scaffolding based on `Vue.js` best practices.
- **Routing** based on REST architecture.
- **State management** pattern used.
- All API calls from a single place.
- 404 page is built in.
- Loading and error states are considered, while connecting to API.
- Cleaning the API JSON response, when providing it to the HTML templates.
- Comments everywhere inside of the codes.
- Designed a pre-loader as an app-shell.
- **Light/dark mode switch**. User's preferred theme will be saved for next visits. By default, it first looks at the theme mode preference at the OS level.
- **Modular (scalable)** CSS & JS architecture components powered by Framework8 (my personal Front-end Framework).
- CSS components designed based on **BEM Methodology**.
- **CSS variables** for colors, sizes, spaces, fonts, etc.




# Folders structure

Everything starts from `public/index.html`. And this file loads our *Vue.js* app which is the `src/main.js` file!
Actually the whole app's structure is based on the recommendations of the *Vue.js* framework which can be created via the `vue create project-name` command that runs by *Vue CLI*.

**Note!** Below I have drawn only the map of important files and directories.

```
public/
├── img/
├── js/
│   └── jquery.min.js
└── index.html

src/
├── api/
│   └── drinks.js
├── assets/
│   ├── framework8/
│   ├── scripts/
│   │   ├── base.js
│   │   └── index.js
│   └── styles/
│       ├── _base.scss
│       ├── _root.scss
│       ├── _variables.scss
│       └── index.scss
├── components/
│   ├── Card.vue
│   └── Header.vue
├── router/
│   └── index.js
├── store/
│   ├── modules/
│   │   └── drinks.js
│   └── index.js
├── views/
│   ├── DrinksView.vue
│   ├── DrinkView.vue
│   └── NotFoundView.vue
├── App.vue
└── main.js
```

# How to compile

Well, you can run the project on your machine, and start modifying the codes!


## Install Required Dependencies

You must first [download and install node.js](https://nodejs.org/download/) (which includes npm) on your machine. npm stands for [node packaged modules](https://www.npmjs.com/) and is a way to manage development dependencies through node.js.

Then, open your Terminal / Command Prompt and run the following commands.  
**TIP!** If you're not so familiar with command line tools yet, [here is a great start](http://webdesign.tutsplus.com/series/the-command-line-for-web-design--cms-777)!


- Change directory to this folder on your machine: `cd my/path/to/here`
- Run `npm install` to install all required local dependencies


## Run/Build the Project

- Run `npm run serve` to Compile and hot-reload for development
- Run `npm run build` to compiles and minifiy for production
