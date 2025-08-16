# Design Decisions – League List Frontend

- File Naming: Used kebab-case for consistency and readability.

- CSS Normalization: Added normalize.css to unify default styles across browsers.

- UI Library: Selected Element UI, as required in the job description. (Initially considered Tailwind, but chose Element UI to learn and apply something new.)

- State Management: Chose Vuex for its simplicity and reduced boilerplate compared to Redux or Zustand, making it well-suited for Vue apps.

- Service Utilities: Isolated API calls into service modules, ensuring a more decoupled architecture and easier refactoring.
