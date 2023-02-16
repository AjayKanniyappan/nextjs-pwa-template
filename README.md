<p align="center">
  <a href="https://vercel.com">
    <img src="https://user-images.githubusercontent.com/108562458/218249242-eae38eaa-c41c-4ab3-87d6-58eabdee6adb.png" height="150">
     </a>
</p>

<h2 align="center">Cats Realm 🐾
</h2>
 
<p align="center">
   <a href="https://github.com/AjayKanniyappan/react-electron-template#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/Documentation-yes-brightgreen.svg" />
  </a>
   <img alt="Version" src="https://img.shields.io/badge/Version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/AjayKanniyappan/react-electron-template/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
	<a href="https://web.dev/measure">
		<img alt="100% lighthouse scores" src="https://img.shields.io/badge/lighthouse-100%25-845EF7.svg?logo=lighthouse&logoColor=red&style=flat-square" />
	</a> 
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="prettier" src="https://img.shields.io/badge/Code_style-prettier-ff69b4.svg?style=flat-square" />
  </a>
</p>

## <p align="center"> 🏠 [Homepage](https://nextjs-pwa-template-repo.vercel.app)</p>

**Next.js PWA template** 🐾 created by AjayKanniyappan is a starter template that provides a comprehensive setup for building a progressive web app (PWA) using the Next.js framework. This template includes a pre-configured setup for service workers, offline support, and manifest files, making it easy for developers to create a high-performing PWA with minimal setup. The template also includes a basic layout and routing system, along with some basic components and styles, to help developers get started quickly. Additionally, it includes a range of popular libraries and tools, such as Prettier, ESLint, and Tailwind CSS, to ensure that the code is well-formatted and follows best practices. With the help of this template, developers can easily create a fast and reliable PWA that can work seamlessly across all devices.

## 📚 Before You Begin

Before you begin i recommend you read about the basic building blocks that assemble a **Next.js PWA Template**:

- **React.js** - React's [Official Website](https://reactjs.org/) is a great starting point. You can also use [W3Schools Popular Guide](https://www.w3schools.com/REACT/DEFAULT.ASP), and [Egghead Videos](https://egghead.io/).

- **Next.js** - The best way to understand Next.js is through its [Official Website](https://nextjs.org), which has a [Getting Started](https://nextjs.org/docs/getting-started) guide, You can also go through this [TutorialsPoint Guide](https://www.tutorialspoint.com/nextjs/index.htm) for more resources.

- **TypeScript** - Go through [TypeScript Official Website](https://www.typescriptlang.org/) and proceed to their [Official Manual](https://www.typescriptlang.org/docs/), which should help you understand TypeScript better.

- **Node.js** - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

## 🖥️ Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- **Git** - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- **Node.js** - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.

NOTE: This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.

## ⏩ Table of contents

- [Homepage](#-homepage)
- [Before You Begin](#-before-you-begin)
- [Prerequisites](#%EF%B8%8F-prerequisites)
- [Table of contents](#-table-of-contents)
- [Features](#-features)
- [Getting Started](#%EF%B8%8F-getting-started)
- [Directory Structure](#-directory-structure)
- [Tech Used](#%EF%B8%8F-tech-used)
- [Contributing](#-contributing)
- [Show your support](#-show-your-support)
- [Donate](#-donate)
- [Authors](#%EF%B8%8F-author)
- [License](#%EF%B8%8F-license)

## 🔍 Features

- 🐾 **Cats Realm** PWA using Next 13
- 🌗 Awesome dark/light themes
- 📱 Native like mobile experience
- 🎯 Make Development simple
- 🐞 Vscode debugging
- 🔥 Hot Module Replacement(HMR)
- 💪 Eslint, Prettier and Airbnb make your code stronger
- 🖥 Build your application for multi-platform

## 🏃‍♂️ Getting Started

These instructions will get you a copy of the project and running on your local machine for development and testing purposes. See [Deploy](#) for notes on how to lunch your PWA app in live.

## 📂 Directory Structure

**Next.js PWA Template** files and folder structure.

```diff
+├── .husky                       Automate your git commits
 ├── .next                        Contains the minimized version of the source code
+├── .vscode                      vscode debug folder and extension support
 │
+├── public                       Project assets folder
 │   ├── icons                    Icon sets folder
 │   │  └── NxN.png               Different pixel png's
 │   └── manifest.json            Manifest for PWA application
 │
+├── src                          Source code folder
 │   ├── common                   It contains common data
 │   ├── components               This folder consists of a collection of UI components
 │   ├── constants                It contains constant urls and data
 │   ├── hooks                    It contains custom hooks for all pages
 │   ├── layouts                  It contains page layout
 │   ├── pages                    Pages and indicate the routes
+│   │   └── index.tsx            Starting point of the application
 │   ├── services                 It contains API Services
 │   ├── styles                   It contains css styles
 │   ├── svg                      It contains SVG Vectors
 │   ├── types                    Typescript types declaration folder
 │   └── utils                    It contains a set of utility functions
 │
 ├── .editorconfig                EditorConfig for defining coding styles
 ├── .eslintrc.json               Eslint configurations
 ├── .prettierrc                  prettier code formatter
+├── next.config.js               Next.js PWA configurations
+├── package.json                 Package.json for development
 |── postcss.config.js            Post CSS configurations
+├── tailwind.config.js           Tailwind CSS configurations
 ├── tsconfig.json                TypeScript Configuration
+└── tsconfig.node.json           TypeScript paths
```

## 🛫 Quick Start

There are several ways you can get the Next.js PWA Template:

### 🌀 Cloning The GitHub Repository

The recommended way to get Next.js PWA Template is to use git to directly clone the repository:

```bash
# Clone the project
git clone https://github.com/AjayKanniyappan/nextjs-pwa-template.git <your-project-name>

# Enter the project directory
cd <your-project-name>
```

This will clone the latest version of the Next.js PWA Template repository to a **nextjs-pwa-template** folder.

### 🗃️ Downloading The Repository Zip File

Another way to use the Next.js PWA Template is to download a zip copy from the [main branch on GitHub](https://github.com/AjayKanniyappan/nextjs-pwa-template/archive/refs/heads/main.zip). You can also do this using the `wget` command:

```sh
wget https://github.com/AjayKanniyappan/nextjs-pwa-template/archive/refs/heads/main.zip -O react-electron-template-main.zip; unzip nextjs-pwa-template-main.zip; rm nextjs-pwa-template-main.zip
```

Don't forget to rename nextjs-pwa-template-main after your project name.

### 🧰 Quick Install

Once you've downloaded the Template and installed all the prerequisites, you're just a few steps away from starting to develop your Progressive Web App using Next.js.

The Template comes pre-bundled with a `package.json` file that contain the list of modules you need to start your application.

To install the dependencies, run this in the application folder from the command-line:

```bash
# Install dependency
npm install
```

Or if you prefer using Yarn:

```bash
# Install dependency
yarn install
```

This command does a few things:

- First it will install the dependencies needed for the application to run.
- If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.

## 👨‍💻 Starting Development

Use your favorite JavaScript Package Managers **npm** or **yarn** or **pnpm**

## 🏗️ Tech Used

**Next.js PWA Template** Built With

- <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
- <img src="https://img.shields.io/badge/React%20-%2361DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>
  <br/>
- <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <br/>
- <img src="https://img.shields.io/badge/postcss-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white"/>
  <br/>
- <img src="https://img.shields.io/badge/Node.js%20-%23339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/> 
  <br/>
- <img src="https://img.shields.io/badge/Prettier%20-%23F7B93E.svg?&style=for-the-badge&logo=Prettier&logoColor=white"/> 
  <br/>
- <img src="https://img.shields.io/badge/ESLint%20-%234B32C3.svg?&style=for-the-badge&logo=ESLint&logoColor=white"/>
  <br/>
- <img src="https://img.shields.io/badge/Airbnb%20-%23FF5A5F.svg?&style=for-the-badge&logo=Airbnb&logoColor=white"/>
  <br/>
- <img src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>   
  <br/>
- <img src="https://img.shields.io/badge/CSS3%20-%231572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
  <br/>
- <img src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>
  <br/>
- <img src="https://img.shields.io/badge/TypeScript%20-%233178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Just be sure to read the [contributing](https://github.com/AjayKanniyappan/nextjs-pwa-template/blob/main/CONTRIBUTING.md) document to get started. Feel free to check [issues page](https://github.com/AjayKanniyappan/nextjs-pwa-template/issues).

## 💖 Show your support

**I hope 🙏 it will helped you! Give a ⭐️ to support this project!**

If you like 💗 the project, there is other way to support us

- Tweet about it
- Refer this project in your project's readme
- Mention the project at local meetups and tell your friends/colleagues

## ☕ Donate

Donations will help us to ensure the following:

- ⚡ Quick responses to issues, bug reports and help requests
- ➕ Adding new features
- ⚒️ Long term maintenance of the project

<a href="https://www.buymeacoffee.com/ajaykanniyappan">
<img height="40" width="150" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png">
</a>

## 🛠️ Author

👨‍💻 **Ajay Kanniyappan**

- Website: https://ajaykanniyappan.com
- Twitter: [@AjayKanniyappan](https://twitter.com/AjayKanniyappan)
- Github: [AjayKanniyappan](https://github.com/AjayKanniyappan)
- LinkedIn: [Ajay Kanniyappan](https://in.linkedin.com/in/ajaykanniyappan)

## ©️ License

[MIT License](https://github.com/AjayKanniyappan/nextjs-pwa-template/blob/main/LICENSE) © Ajay Kanniyappan
