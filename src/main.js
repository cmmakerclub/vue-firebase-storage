import Vue from 'vue';
import App from './App.vue';
import router from './router';

const firebase = require('firebase');

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
});

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      firebase: firebase
    }
  },
  router,
  render: h => h(App),
}).$mount('#app');
