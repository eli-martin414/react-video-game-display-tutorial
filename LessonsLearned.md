# Lessons Learned  
Lessons learned while working on the course:  
- new languages/technologies:
  - TypeScript: "a strongly typed programming language that builds on JavaScript"
  - React: "a JavaScript library for building dynamic and interactive UI" or "a front-end framework that has gradually become the go-to framework for modern web dev within the JS community"
    - It lets us build a single-page application (SPA); that is, it loads a single HTML document on the first request, and then updates any specific portion, content, or body that needs it using JavaScript. This is known as client-side routing because the client doesn't have to reload the full webpage to get a new page each time a user makes a new request; instead, React intercepts the request and only fetches and changes the sections that need changing without having to trigger a full page reload. React relies on a virtual DOM (Document Object Model). The virtual DOM is immediately reloaded to reflect any changes, and React then compares it to the actual DOM to find the least expensive way to patch the changes.
    - We do this through small, efficient "components" which React uses to efficiently create and update the DOM. Components help us write reusable, modular, and better-organized code. They're a bit like building blocks, and can be thought of as a tree, with the root being the whole app (App), and each child being smaller parts that build upon each other.
- React project structure:
  - node_modules: this folder contains all 3rd party libraries, including React
  - public: this folder contains public assets, like images, media files, etc.
  - src: this folder is the source for our application
    - contains App.tsx, which contains the App component
    - contains index.html
      - has a <div> element with the id "root", which is the container for our application
      - has a <script> element with the source "/src/main.tsx" which is the entry point to our application
    - contains package.json, which has info about the project (like the name, version, and dependencies)
      - dependencies are libraries the app itself depends on
      - devDependencies are used only for development, and are not shipped with the app
    - contains tsconfig.json, which has settings that tell the compiler how to compile our file to javascript
