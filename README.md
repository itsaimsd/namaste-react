- Namaste React

- npx execute the package,

- CDN is not a good way to use react

- How to write code in parcel with git step by step

- git init
- git branch -M main
- git commit -m "episode-01"
- git remote add origin (copy paste from syntax from git)
- git push origin main
  <!-- Here How to install npm and parcel -->
  -[1] npm init - package name: (namaste-react-practice) - version: (1.0.0) - description: This is namaste react practice - entry point: (app.js) - test command: jest - git repository: - keywords: react, namaste react, practice, akshay shaini
  - author: Akshay saini - license: (ISC)
- [2] npm install -D parcel
<!-- you can delete node module it is easy to install (npm install) -->

# How to ignite app after installing parcel

    1. npx parcel index.html(source file: index.html)
    2. npm install react
    3. npm i react-dom
    4. When succesfully installed everythings then from package.json delete { "main": "App.js"}

# If error come then use this syntax

1.  npx parcel clean
2.  rm -rf .parcel-cache
3.  rm -rf dist
4.  rm -rf node_modules
    npm install
5.  npm update
6.  write minimal code
7.  npm install react react-dom
8.  npx parcel index.html

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm , writtem in c++
- Caching - Faster Builds
- image Optimization
- Minification
- Bundling
- Compress
- Consistent Hahing
- Code Spliting
- Differential Bunding - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking -remove unused code
- Different dev and prod bundle

# parcel (start project after modifying script)

"scripts": {
"start": "parcel index.html",
"build":"parcel build index.html"
},

To start project
Type: npm run start/ npm start

To build project
Type: npm run build

# Food Ordering App Namaste React

- Header
  -Logo
  -nav Items
- Body
  -Search Bar
  -RestaurentContainer
  -Restaurent Card
  -
- Footer
  -copyright
  -Links
  -Address
  -Contact

# Two type of Export/Import

- Default Export/Import
  - export default Components;
  - import Components from "path"
- Named Export/Import
  - export const Components
  - import {Component} from "path";

# React Hooks

- (Normal js utilities functions)

* useState() - Superpowerful state variables in react
* useEfect() -

# 2 types Routing in web apps

- Client Side Routing (If we are not calling API then is called Client side routing)
- Server Side Routing (if we are calling API then this can be called Server side Routing)

# Chunking | Code Spliting | dynamic-bundling | Lazy Loading | On-demand-loading 
# (break down your website/app in smaller chunk)
