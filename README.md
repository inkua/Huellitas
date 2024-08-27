# Huellitas

The goal of the "Huellitas" project is to facilitate the digital presence of the Huellitas Cartagena Shelter Foundation by creating a website. This site allows potential collaborators, donors, and interested individuals to easily and quickly find the foundation from anywhere in the world. The website was designed and developed altruistically by a team of volunteers from the InkuA Foundation through the UnityWeb program.

## About UnityWeb:

UnityWeb is a program from InkuA's IT department aimed at facilitating the development of digital projects that benefit both external organizations in need of technological resources and our volunteers by providing them with real and relevant experience in the field.

## website 
[website link](https:/huellitasctgna.com/)

## Installation and Usage:
This project was developed using the Next.js framework. For data persistence, we used Firestore, and for file and image storage, we utilized Firebase Storage.

Dependencies used in the project:
| Dependencies | Version | Description |
| ------ | ------ | ------ |
| @headlessui/react | ^2.1.2 | UI components for React applications. |
| @nextui-org/accordion | ^2.0.34 | Accordion component for React with Next.js. |
| axios | ^1.7.2 | Promise-based HTTP client for the browser and Node.js. |
| babel-polyfill | ^6.26.0 | Provides support for older browsers in Babel projects. |
| draft-convert | ^2.1.13 | Converts Draft.js content state to HTML. |
| draft-js | ^0.11.7 | A React framework for building rich text editors. |
| firebase | ^10.12.3 | Google Firebase integration for React apps. |
| immutable | ^4.3.7 | Immutable data structures for JavaScript. |
| next | ^14.2.3 | The React framework for production. |
| nodemailer | ^6.9.14 | ^6.9.14 |
| react | ^18.3.1 | JavaScript library for building user interfaces. |
| react-dom | ^18.3.1 | React package for working with the DOM. |
| react-hook-form | ^7.52.1 | Performant form library for React. |
| react-slick | ^0.30.2 | Carousel component for React. |
| react-swipeable | ^7.0.1 | Swipe event handler for React components. |
| react-toastify | ^10.0.5 | Toast notifications for React applications. |
| slick-carousel| ^1.8.1 | Dependency for slick carousel used in React Slick. |
| swiper | ^11.1.4 | Mobile touch slider and framework. |

## Installation Steps:

### 1. Clone the repository from GitHub

```sh
    git clone https://github.com/inkua/Huellitas.git
```
### 2. Install all necessary dependencies

```sh
    npn install
```
### 3. Add a .env file with the following environment variables:

- NEXT_PUBLIC_API_URL=deployOrURLDeploy
- NEXT_PUBLIC_FIREBASE_API_KEY=firebasekey
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=firebase
- NEXT_PUBLIC_FIREBASE_PROJECT_ID=firebase
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=firebase
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=firebase
- NEXT_PUBLIC_FIREBASE_APP_ID=firebase
- EMAIL_USER=emailForContact (for Nodemailer)
- EMAIL_PASS=nodemailer email password
- NEXT_PUBLIC_ADMIN_EMAIL=rootEmail
- NEXT_PUBLIC_ADMIN_PASS=rootPassword

### 4. Start the project

```sh
    npm run dev
```

> The project is also ready for deployment.

## Security Focus in Development:
Security has been a priority from the design phase through to the implementation of this website. Below are some key security aspects we considered, based on ASVS 4.0.3 L1:

#### _Authentication and Access Control:_
Secure authentication has been implemented along with proper session management to protect data and access.

#### _Secure Error Handling:_
Error messages are designed not to expose sensitive information that could be exploited by an attacker.

## License:
The project's code is licensed under GPL. However, all elements related to visual identity, such as the UI design and logo, are the exclusive property of the Huellitas Cartagena Foundation, registered under NIT 901748068 in Cartagena de Indias, Colombia.

## Project Development:
This project was developed following agile methodology principles, with a team organized by roles:
- Project Manager (Product Owner): Agustín Avellaneda, [linkedin](https://www.linkedin.com/in/avellaneda-agust%C3%ADn-tns/), [GitHub Profile](https://github.com/nitdraig)
- Technical Leader: Manuel Florez, [linkedin](https://www.linkedin.com/in/manuel14mds/), [GitHub Profile](https://github.com/manuel14mds)
- Graphic/UX/UI Designer: Danila Cardinale, [linkedin](https://www.linkedin.com/in/danila-cardinale/), [Behance](https://www.behance.net/DaniLaCardinale)
- Graphic/UX/UI Designer: Maria Imbrosiano, [linkedin](https://www.linkedin.com/in/mar%C3%ADa-florencia-imbrosiano-/), [Behance](https://www.behance.net/marafimbrosi)
- Software Developer: Melani Depetris, [linkedin](https://www.linkedin.com/in/melani-depetris/), [GitHub Profile](https://github.com/Melani-Depetris)
- Software Developer: Gonzalo Vega, [linkedin](https://www.linkedin.com/in/gevegaeche/), [GitHub Profile](https://github.com/gevega)
- Software Developer: Faustino Harriague, [linkedin](https://www.linkedin.com/in/faustino-harriague-26532299/), [GitHub Profile](https://github.com/FausUCU)
- Software Developer: Santiago Larrosa, [linkedin](https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/), [GitHub Profile](https://github.com/Dev-Santi)

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

> Thank you for taking the time to read through this README. We hope that this project will be helpful and beneficial for your needs. Your support and interest mean a lot to us, and we’re excited to see how this project might contribute to the great work being done. If you have any questions or need further assistance, please don't hesitate to reach out.

[![N|inkua](https://inkua.de/web/image/1324-2e45f650/rgb-1000px-blanco.webp)](https://inkua.de)
