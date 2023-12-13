# SPA Project Readme

## Overview

This Single Page Application (SPA) project is designed with a modular architecture using microfrontends. The application comprises a main Angular app and four microfrontends, two implemented in Angular and two in React. The microfrontends contribute specific functionalities to create a cohesive and feature-rich web application.

## Project Structure

The project is organized into the following folders:

- **SPAproject**: Contains the main entry point and configuration for the Single Page Application.
  
- **Main App**: The main Angular app that serves as the core of the application.

- **AngularForm**: An Angular microfrontend responsible for handling form-related functionalities.

- **AngularParcel**: Another Angular microfrontend providing parcel-related features.

- **ReactTable**: A React microfrontend focused on displaying tabular data.

- **ReactChart**: A React microfrontend specialized in rendering charts.

## Running the Application

To run the application locally, follow these steps:

1. **Navigate to the SPAproject folder:**
   ```bash
   cd SPAproject
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   "start": "webpack serve --port 9000 --env isLocal",

   ```

3. **Run Scripts for Microfrontends:**

4. **Access the Application:**
   Once all scripts are running, open your web browser and go to [http://localhost:9000](http://localhost:9000) to view the final product.

## Additional Information

- Each microfrontend is encapsulated and can be developed and deployed independently, promoting a modular and scalable architecture.

- The main app orchestrates the integration of the microfrontends, creating a seamless user experience.