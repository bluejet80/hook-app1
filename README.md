# React App Using Hooks

This is the first app that I will make that uses hooks. In creating it I will learn more about
hooks and the various methods in which they are used.

## Files needed in the SRC Directory

When I create a react app I delete the src directory and then create my own files. This helps me to
learn more. Below are listed the various files that are needed and their purpose in the app.

### Index.js

This is the first file that needs to be created.

Inside the file we will link our app to the **root div** in the **index.html** file.

        import React from 'react';
        import {createRoot} from "react-dom/client";

        import App from "./App";
        import "./index.css";

        const container = document.getElementById("root");
        const root = createRoot(container);

        root.render(<App tab="home" />);

### App.js

This is the file that will contain all of the components of our app. It is considered the
entry point of our app.

If you have a simple component, you no longer need to import React.

The inside of this file will look like this:

        import React from 'react';

        const App = () => {
            return (
                <div>
                {components}
                </div>
            )
        }

        export default App

### Other files that you can create

Some other files that you might want to create are the:

- App.css (this is used for styling your main component)
- index.css (this file will hold all of your global styles)

### The Folder structure

I think that you should have two main folders.

#### Components

This folder will hold all of the the simple components. The building blocks of the app.

#### Containers

This folder holds the more complex components, those which are made up of one or more simple
components.
