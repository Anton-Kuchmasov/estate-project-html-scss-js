
# Capstone project EstatePro
In this project, I have implemented a scalable, user-friendly, and lightweight web application that allows users to browse and select real estate properties from around the world. 

This application serves as an effective demo but can be easily enhanced and upgraded into a fully functional commercial app. 

Enjoy! :)

## How to start
First, clone the project to your computer using:

`git clone <repository-url>`

You will automatically be in the `main` branch, which is the correct one. 

### !! IMPORTANT
Please, hit 
`mkdir dist`
to create an empty `dist` folder into root directory.
That's a temporary solution only for starting project for the very first time. If `dist` folder already exists, this step should be avoided.

Next, run:

`npm i`

to install all project dependencies.

To launch the EstatePro web app, use:

`npm start`

### NOTE!!! 
This project uses a lengthy and somewhat complex `start` script, which might look unusual. 

However, there's nothing particularly special about it. 

The `Parcel` server renames files when it starts, so to work with static file names (e.g., images of estate objects), the contents of the `public` directory are copied to the `dist` directory. 

If I find a better solution to this issue in the future, I’ll be delighted to update it! :)

## Technologies Used
During the development process, I utilized several web and front-end technologies, adhering to best practices:
- **HTML/CSS/SCSS**: Core tools for creating responsive layouts.
- **JavaScript**: Arguably the best language for web development.
- **Google Maps API**: Integrated to provide a scalable map, enhancing the usability of the Contact page.
- **Parcel**: A simple and efficient web server for development.
- **ESLint, Stylelint & Prettier**: Tools to maintain top-tier code quality and consistency.
- **Husky**: A plugin for pre-commit checks, ensuring code is linted before each commit.