### STILL IN PROGRESS

# Password Generator

A web app that generate random passwords with customs rules.

### Tech used :

-   React
-   Typescript
-   Hooks
-   Styled Components

### Features :

-   User can choose whether if the password contains uppercases, lowercases, digitals and symbols and just generate it.
-   That's it.

### File structure :

I used the best practice like if I was building a big project. This is why this structure is complicated for a small app

        containers/
            Layout/
                index.tsx
                style.ts
        components/
            CheckboxProperties/
                index.tsx
                style.ts
            ...
        constants/
            index.ts
        interfaces/
            index.ts
            ...
        themes/
            index.ts
        assets/
            font.tff

### For learning purposes :

This project could be done entirely in the App component but instead I devided the project in small components to learn the useState hook, props and styled components library.
