import Clipboard from './../node_modules/clipboard/dist/clipboard.min.js'

export default {

  mounted: function() {
    this.addSelectOnFocus()
  },

  props: [ 'currentTemplate' ],

  methods: {

      addSelectOnFocus: function() {
        document.querySelectorAll('input[type=text]')
          .forEach(function(input) { 
            input.addEventListener('focus', function() { 
              this.select(); 
            })
          })
      },

      reset: function() {
        Object.assign(this.$data, this.$options.data())
      },

      onMouseLeave: function() {
        document.getElementById('copyHtml').classList.remove('tooltipped', 'tooltipped-w')
      },

      getRenderedHtml: function() {
        return document.getElementById('rendered').innerHTML
      },

      collapseSelection: function(elementId) {

        const elem = document.getElementById(elementId)

        if (window.getSelection()) {
            window.getSelection().collapse(elem, 0)
        }
      },

      cloneHtml: function(html) {
        document.getElementById('clone').innerText = html
      },

      cloneRenderedVersion: function() {
        const htmlVersion = document.getElementById('rendered')
      },

      copyTextVersion: () => { 
        console.log('copytextversion') 
      },

      /**
       * Copy HTML of the rendered element
       *
       * @param {function} manipulate Function to execute on markup
       *   of the rendered element, such as find-replace.
       */
      copyHtml: function(manipulate = (html) => html) {

        this.collapseSelection('clone')

        const rawHtml = this.getRenderedHtml()

        let html = manipulate(rawHtml)

        this.cloneHtml(html)

        const clipboard = new Clipboard('#copyHtml', {
          target: function(trigger) {
            return document.getElementById('clone');
          }
        });

        clipboard.on('success', function(evt) {

          const rendered = document.getElementById('rendered')
          rendered.classList.add('animated', 'jello');

          rendered.addEventListener('animationend', function(evt) { 
            this.classList.remove('animated', 'jello');
          }, { once: true })

          document.getElementById('copyHtml').classList.add('tooltipped', 'tooltipped-w')

          clipboard.destroy();
        });
      },

      /**
       * Surround a term with the surround character
       *
       * @param {string} term The string to surround
       * @param {string} str The string in which to find the term
       * @param {string} str The character to surround the string
       */
      surround: function(term, str, surroundChar) {
        const re = new RegExp(term, 'g')
        return str.replace(re, surroundChar + '$&' + surroundChar)
      }
  }
}
