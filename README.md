
# Star Wars Hall of Fame

Welcome to the Star Wars Hall of Fame project! This application allows users to explore characters from the Star Wars universe, view their details, and search for characters by name. The application uses React for the frontend and Node.js for the backend middleware. Data is sourced from the Star Wars API.

## Table of Contents

- [Technical Documentation](#technical-documentation)
- [Installation Guide](#installation-guide)
- [QA/Test Plan](#qa-test-plan)
- [Rationale Document](#rationale-document)


## Technical Documentation

### Project Overview

Sanuker is an NX monorepo for a coding test project aimed at creating a Star Wars character exploration application. The project is organized into a React frontend named `galacticui-frontend` and a Next.js backend called `middleware-server`. This modular setup aligns with the project's requirements and enhances maintainability.

#### Backend Structure

The Next.js backend contains a `star-wars` module that serves as the API gateway for the application. It includes a search API and additional APIs to retrieve information about vehicles, planets, films, species, and starships from the Star Wars universe.

#### Frontend Structure

The React frontend, `galacticui-frontend`, is responsible for the user interface. It features a main page that hosts a search input allowing users to search for Star Wars characters by name. Upon searching, the frontend interacts with the backend to fetch character data. This data is then passed to the `CharacterCard` component, which further makes API calls to retrieve details about associated vehicles, planets, films, species, and starships. The obtained information is displayed on the screen for user exploration.

#### System Architecture
```
galacticui-frontend (React) <--> middleware-backend (Next.js) <--> SWAPI
                                                              <--> lcoaly searches extra_character.json
```
[SWAPI](https://swapi.dev/)


## Installation Guide

Follow these steps to set up the project locally:

1. Clone the repository: `git clone https://github.com/mmhshayer/sanuker-galacticui.git`
2. Navigate to the project folder: `cd sanuker-galacticui`
3. Install dependencies: `npm install`
4. Start the backend server: `npm start`
5. Access the application in your browser at `http://localhost:4200`


## QA/Test Plan

To ensure the reliability and functionality of the application, a comprehensive QA/Test plan has been implemented. The plan includes the following tests:

- Unit tests for components and functions
- Integration tests for backend APIs
- UI/UX testing for responsiveness and user interaction
- Performance testing to ensure efficient data fetching and rendering
- Cross-browser compatibility testing

### Frontend

- **File/Module**
  - `src/App.tsx`: Main application component rendering UI and handling user interactions.
  - `src/CharacterCard.tsx`: Displays character information and associated data.
  - `src/api`: Module with API utility functions for backend communication.

- **Components**
  - `SearchInterface`: Search input component for searching Star Wars characters.
  - `CharacterCard`: Renders character info and associated data (vehicles, planets, films, species, starships).

### Backend (`middleware-server`)

- **File/Module**
  - `star-wars` module: Ensure bindings
  - Functions in `star-wars` controller: Contains APIs for Star Wars characters, vehicles, planets, films, species, starships.

- **Service**
  - Functions in `star-wars` service: Handle API requests and fetch data from external sources.

- extra_character.json
  - Contains extra character data for testing purposes.
  - Located in `middleware-server/extra_character.json`


## Rationale For System Architecture

The chosen system architecture is a result of thoughtful decisions aimed at delivering a performant, scalable, and user-friendly application. These decisions were driven by the project's requirements and the goal of creating a seamless experience for users exploring Star Wars characters and their associated details.

### Frontend: React and SCSS

The selection of React as the frontend framework was a clear choice due to its ability to handle dynamic data presentation efficiently. Additionally, SCSS was adopted for styling due to its flexibility and quick implementation, ensuring a visually appealing user interface. The lightweight nature of React also contributes to fast page loads, enhancing the user experience.

### Backend: NestJS

NestJS was chosen for building the backend due to its comprehensive feature set, making backend development streamlined and efficient. Its type-safe nature aligns perfectly with the project's goals, ensuring data integrity and minimizing potential errors. The modular architecture of NestJS promotes adaptability and extensibility, allowing the application to grow with future enhancements.

### Search Mechanism: Input with Debounce

The decision to use a simple input mechanism with a debounce feature for character search was driven by a desire to provide a modern and intuitive user experience. This approach eliminates the need for a traditional form submission and makes the application more responsive by fetching results as the user types. This design choice not only improves usability but also aligns well with the application's dynamic nature.


#### Search Mechanism Enhancement

The search functionality has been enhanced to also include characters from an `extra_character.json` file. When a user searches for a character by name, the system now fetches characters from both the SWAPI API and the `extra_character.json` file. It then filters and combines the results, providing a unified search experience.


### Data Fetching: Promise.All

To efficiently handle character data, including its multiple nested levels, Promise.all was employed. This decision optimizes data retrieval by making parallel API requests, minimizing latency and enhancing the application's responsiveness. This approach ensures that users receive comprehensive character information swiftly and smoothly.

In conclusion, the architecture decisions were meticulously made to deliver a well-rounded application that balances performance, user experience, and ease of development. By leveraging React, SCSS, NestJS, and modern UX patterns, the application meets its goals of being user-friendly, scalable, and technically robust.


### Predestination
This project was developed as a coding test for the Fullstack engineer position at Sanukar. Some of the requirements were pre-defined by the tester. The decisions made for the system architecture were driven by the project's goals of creating a performant, scalable, and user-friendly application.

To explore the detailed technical documentation, installation guide, and the initial QA/Test plan for this project, you can refer to the [PDF file](/technical-test-full-stack.pdf) located at the root of the project repository.

Thank you for your interest in the project!

---

Thank you for exploring the Star Wars Hall of Fame project! Feel free to contribute, report issues, or provide feedback.

