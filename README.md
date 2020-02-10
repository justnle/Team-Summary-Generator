# Team Summary Generator
This is a Node.js application that creates a `.html` file based on the user's input via the command line. The web page displays the team's composition made up of the manager, the engineers, and the interns (if either roles even exist on the project!). This is a great tool for delivering some key information in an easily digestable format for people on or off the project.
## Getting Started
### Installation
Run:

```bash
npm i
```

### Usage
After installation, remain in the terminal and run:

```bash
npm start
```

This will start the script. The user will be prompted with a series of questions relating to the manager of the team. After the data for the manager is collected, the user will be able to add an engineer or an intern to the team, with the corresponding questions following. The user may add as many engineers/interns as necessary before opting to finish building the team. All of the data will be written to a `.html` file which will then be saved to the `output/` folder and opened for the user to view. 

The information displayed for each of the team members:
* Name
* Role
* ID
* Email

Unique role information displayed:
* Manager - Office room number
* Engineer - GitHub username
* Intern - Educational institution

### Generated HTML Screenshot
![](https://github.com/twopcz/Team-Summary-Generator/blob/regex/assets/images/teamgenerator.png?raw=true)

### Demo
![](https://github.com/twopcz/Team-Summary-Generator/blob/master/assets/images/team-generator.gif?raw=true)
[Video](https://github.com/twopcz/Team-Summary-Generator/blob/master/assets/images/team-generator.mp4)

# Technologies

This application was built with:

* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* JavaScript
* [Node.js](https://nodejs.org/en/)

The dependencies required:

```
  "dependencies": {
    "inquirer": "^7.0.4",
    "open": "^7.0.2"
  },
  "devDependencies": {
    "jest": "^25.1.0"
  }
  ```

Documentation on dependencies:

* [Inquirer](https://www.npmjs.com/package/inquirer#documentation) - used to prompt the user and store their answers
* [Jest](https://jestjs.io/docs/en/getting-started) - unit testing framework
* [open](https://www.npmjs.com/package/open) - used to open the .pdf file

# Testing
Run:
```bash
npm test
```

Which will start the `jest` module to run the tests in the `tests/` folder.

# Enhancements
I would like to add validation for some of the team member's information such as their ID number, email, github, etc. Each of those are likely to be unique to the team member and it should be handled correctly. Also I would make sure that the user's input would be formatted correctly, e.g. proper capitalization for team member names, schools, etc.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details