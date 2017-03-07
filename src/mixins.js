import Clipboard from './../node_modules/clipboard/dist/clipboard.min.js'

export default {

  methods: {

      onMouseLeave: function() {
console.log('mouseleave');
        //$('#copyHtml').removeClass('tooltipped tooltipped-w');
      },

      collapseSelection: function(elementId) {

        const elem = document.getElementById(elementId)

        if (window.getSelection()) {
            window.getSelection().collapse(elem, 0)
        }
      },

      cloneRenderedVersion: function() {
        const htmlVersion = document.getElementById('rendered')
        document.getElementById('clone').innerText = htmlVersion.innerHTML
      },

      copyTextVersion: () => { 
        console.log('copytextversion') 
      },

      copyHtml: function() {

        this.collapseSelection('clone');
        this.cloneRenderedVersion();

        const clipboard = new Clipboard('#copyHtml', {
          target: function(trigger) {
            return document.getElementById('clone');
          }
        });

        clipboard.on('success', function(evt) {

          console.log('Copied!');

          const rendered = document.getElementById('rendered')
          rendered.classList.add('animated', 'jello');

          rendered.addEventListener('animationend', function(evt) { 
            this.classList.remove('animated', 'jello');
          }, { once: true })

//          $('#highlight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//            $(this).removeClass('animated jello');
//          });
//          $('#copyHtml').addClass('tooltipped tooltipped-w');
          clipboard.destroy();
        });
      },
  }
}
