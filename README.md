### STILL IN PROGRESS

<h1 align="center"> Password Generator </h1>

A web app that generate random passwords with customs rules.

### Tech used :

-   React
-   Typescript
-   Hooks
-   Styled Components

## Quick start

```bash
# if using yarn
yarn install
yarn start

# if using npm : you should delete yarn.lock file first and run the following commands
npm install
npm start
```

### Features :

-   User can choose whether if the password contains uppercases, lowercases, digitals and symbols and generate it with those rules.
-   That's it.

### File structure :

I used the best practice like if I was building a big project. This is why this structure is complicated for a small app

    .
    ├── src/
        ├── containers/
            ├── Layout
                ├── index.tsx
                ├── style.ts
        ├── components/
            ├── CheckboxProperties/
                ├── index.tsx
                ├── style.ts
            ...
        ├── constants/
        ├── interfaces/
        ├── themes/
        ├── assets/
            ├── font.ttf
    ...

### For learning purposes :

This project could be done entirely in the App component but instead I devided the project in small components to learn the useState hook, props and styled components library.
