
## Acceptance Requirements
The website has to contain the following pages/features:

- Login/authentication page. The rest of the pages have to be behind this "authorization wall".
- List and navigate bands.
- Filter and sorting should be enabled.
- View information of a specific band, including albums and members.
- Logout

## Tech Requirements
These are the following conditions for the development:

- The code should be using React 16.13 or superior.
- The code could be written in Javascript or Typescript.
- All the code and comments should be written in english.
- Use a proper naming conventions and standards when defining the structure of the project and the name of variables, functions, etc.
- Use a proper structure and hierarchy to define the different URL paths for the pages.
- The use of ESLint or other linter is optional.
- The use of Redux, Flux or any other container solution is optional.
## Table of Contents

-   [Scaffolding](#Scaffolding)
-   [Environment](#Environment)
-   [Install](#Install)

## Scaffolding

```
build/                       compiled version
src/                         project source code
|  |- components/            Componentes proyect (Dialog, Layout, Logo, Navbar, ..etc)
|  |- context/               Provider Store (DataSourceContext, ConnectionContext)
|  |- hook/                  customhook (useDatasource, useConnections)
|  |- pages/                 Pages Router (Login, Home, DataSource, NotFound)
|  |- service/               service module (Axios Config, Nexxus Api)
|  |- shared/                shared modules  (styles, static and utils)
|  |-
coverage/                    test and coverage reports
```

## Environment

-   [nodejs](https://nodejs.org/)
-   [npm](https://www.npmjs.com)

---

## Install

```bash
$ npm install
```

## Docker


```
docker build -f Dockerfile -t nubceo .
docker run -d -p 9000:80 --name nubceo nubceo
```

Open your browser at http://localhost:9000/

## Extras
- 