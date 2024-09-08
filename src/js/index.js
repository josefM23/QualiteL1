/**
 * The main script file of the Hello application.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

console.log("Index.js loaded")

import './hello/index.js'
//create an instance of the hello-app
const helloApp = document.createElement('hello-app')

// Append the hello-app ellement to the document.
document.body.append(helloApp)