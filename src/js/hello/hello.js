/**
 * The welcome to Introduktion till mjukvarukvalitet kursen application.
 *
 * @author Josef Matyasek <jm224ae@student.lnu.se>
 * @version 1.0.0
 */

// Define template
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
  }

</style>
<div class="hello">
  <h1>Välkommen till mjukvarukvalitet kursen!</h1>
  <input type= "text" id="nameInput" placeholder="Skriv dit namn">
  <button id="greetButton">Välkommen!</button>
  <h2 id="greetingMessage"></h2>
</div>
`
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

      // Event listener för hello.
      greetButton.addEventListener('click', () => {
        const name = nameInput.value
        if (name) {
          greetingMessage.textContent = 'Hej ' + name + ' Välkommen'
        } else {
          greetingMessage.textContent = 'Vara snäl och ange namnet!'
        }
      })
        }})