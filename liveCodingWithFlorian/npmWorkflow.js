// NPM Workflow
// NPM: Node Package Manager manage JS Packages which contain prewritten code
// All Packages are listed on npmjs.org !
// If you like to write quick frameworks/libaries/logic/programming problems (dealing with dates and mapping data structures)
// General Problem in all programming languages with dates and mapping them
// YYYY-MM-DD (specific database format, or mapping of i.e. DD_MM_YY, DD.MM.YYYY, sometimes this is connected to hours-minutes-seconds-miliseconds)
// Example with prewritten code for dates i.e. luxon

// Remember: You can use any of the npmjs.org packages !

// 1. npm init -y
// 2. package.json is created with all information and maybe scripts
// 3. Which script is availabe or do i have to create one
// (each script is available trough NPM RUN + COMMAND)
// 4. Which dependencies or devDependencies are listed in which version
// (after installation process with NPM I OR NPM INSTALL)
// 5. package-lock.json and node_modules are created!
// Remember: NEVER change the package-lock.json !
// With the npm install or npm uninstall we only add or remove the dependency inside of package.json
// Remember: NEVER change the node_modules, BUT you can delete the whole folder to send your project anywhere
// Process: Delete your node_modules folder and then upload/push somewhere and the other person has only to run the NPM INSTALL command!
// 6. Do you have devDependencies ? They are mentioned in the package.json aswell and are recognised by the flag -dev (npm install -dev readline-sync)
// Decide to use import/export ES6 statements!

// ES5 and ES6 imports/export old and new version!

// require is NOT import/export BUT is the ES5 version of the usage of external code - ES5 does NOT support import/export
//const readlineSync = require("readline-sync");

// Please use EVER the new ES6 import/export
// Default import from es NPM Package
//import { readlineSync } from 'readline-sync';
// Problem with that: By default in Node we will get an error like this: 
// Cannot use import statement outside a module

// Solution: We have to add to the package.json "type":"module"
// With this information the whole project is ES6 and we can use import/export

import React, {useState} from "react";
// usage of React with ES5 import is not supported!

import { DateTime as DT} from 'luxon';

const currentDate = DT.now().minus({weeks:1}).toISODate()//().fromISO().toFormat("YYYY MM DD"); 
// 2024-11-07T11:37:06.091+01:00, zone: Europe/Berlin, locale: de-DE }
// 2024-11-07T11:38:53.895+01:00
// 2014-08-06T13:07:04.054
// 2024-11-07
console.log(currentDate);

// Sometimes its important to bundle your code together, that the code can be deployed on a server for a real website
// The bundle process only wants to take the used code into account
// The webpage (user) wants to load minimalized HTML,CSS AND JS
// Bundle your project! (mostly with an build script)
const test = (x)=>console.log(x);
test(2);
// Gets minimalized to smaller JS

import {Card} from "react-bootstrap";