/**
 * The welcome to Introduktion till mjukvarukvalitet kursen application.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
  .hello {
    text-align: center;
    margin-top: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    margin-right: 10px;
  }

  button {
    padding: 10px;
    font-size: 16px;
    margin-right: 10px;
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: darkgreen;
  }

  h2 {
    font-family: Arial, sans-serif;
    color: black;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: orange;
  }

  .binary {
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    margin-top: 10px;
    color: #00FF00;
    animation: color-change 2s infinite;
  }

  @keyframes color-change {
    0% { color: #00FF00; }
    50% { color: #FF00FF; }
    100% { color: #00FF00; }
  }

</style>
<div class="hello">
  <h1>Välkommen till mjukvarukvalitet kursen!</h1>
  <input type= "text" id="nameInput" placeholder="Skriv dit namn">
  <button id="greetButton">Välkommen!</button>
  <h2 id="greetingMessage"></h2>
  <div id= "binaryMessage" class="binary"></div>
</div>
`
/**
 * A function to convert a string to binary.
 */
function toBinary(text) {
  return text.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0') // Convert to binary and pad to 8 bits.
  }).join(' ')
}

/**
 * Define the 'hello-app' custom element.
 */
customElements.define('hello-app',
    /**
     * Represents the hello-app logic.
     */
      class extends HTMLElement {
      /**
       * Creates an isntance of the memory game.
       */
        constructor () {
          super()
          
        // Attach the shadow DOM and append th template.
      this.attachShadow({ mode: 'open' }).append(template.content.cloneNode(true))

      const greetButton = this.shadowRoot.querySelector('#greetButton')
      const nameInput = this.shadowRoot.querySelector('#nameInput')
      const greetingMessage = this.shadowRoot.querySelector('#greetingMessage')
      const binaryMessage = this.shadowRoot.querySelector('#binaryMessage')

      // Event lisener för hello med binär konvertering.
      greetButton.addEventListener('click', () => {
        const name = nameInput.value
        if (name) {
          greetingMessage.textContent = 'Hej ' + name + ' Välkommen'

          // Convert name to binary and display it.
          const binaryName = toBinary(name)
          binaryMessage.textContent = 'Ditt namn i binär form: ' + binaryName
        } else {
          greetingMessage.textContent = 'Vara snäl och ange ditt namn!'
          binaryMessage.textContent = '0'
        }
      })
        }})