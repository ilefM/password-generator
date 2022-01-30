### STILL IN PROGRESS

<h1 align="center"> Password Generator </h1>

A web app that generates random passwords with custom rules.

### Tech used :

-   React
-   Typescript
-   Hooks
-   Styled Components

### Quick start

```bash
# if using yarn
yarn install
yarn start

# if using npm
# delete yarn.lock file
npm install
npm start
```

### File structure :

I used the best practices like if I was building a big project. This is why the file structure is too complexe for this small app.

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

This project could be done entirely in the App component but instead I devided the project in small components to learn the useState hook, props and the styled components library.
