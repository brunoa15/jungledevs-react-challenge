# Jungle Devs ReactJS Challenge

This project was developed using ReactJS.\
You can see it live on: https://jungledevs-bruno-vieira.herokuapp.com/

## How to run it in development mode

First, considering you already got Node and Yarn installed, in the project directory\
you need to install dependencies running: `yarn` or `yarn install`

Then, to start application you need to run: `yarn start`\
The app will be available at [http://localhost:3000](http://localhost:3000)

## How to create a production build

As in development mode example, go to the project directory then run: `yarn build`\
A build folder will be created and it will be ready to be deployed.

## Notes

* All commits on main branch are automatically deployed to heroku;
* I've decided to follow BEM methodology since I've noticed that Hapu's\
original website applies it on their CSS;
* To make it easy to work with BEM and improve the code readability and\
organization, I've decided to use SASS as CSS preprocessor;
* Given the low amount of data needed to be stored on app state and no\
needing of share them with another components, I thought it was not necessary\
to use Redux or Context.
* Honestly, I've never implemented an A/B Test on React, so my aproach to this\
was to generate a random number (0 or 1) on user first access to page. Based on\
that random number, a different hero section is shown to user and this information\
is stored at browser's local storage.
