(async function () {
  if (window.require) {
    const h5native = require('h5native')
    await h5native.requireAsync('ssh2')
    await h5native.requireAsync('ansi-to-html')
  }
})()

// eslint-disable-next-line no-new
new Vue({
  el: '#ssh-app',
  components: {
    app: httpVueLoader('src/App.vue')
  },
  vuetify: new Vuetify()
})
