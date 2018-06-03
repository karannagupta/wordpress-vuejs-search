import Vue from 'vue';
import App from './App';
import router from './app-routes';

/**
 * Mount the Vue instance on the DOM element "#wp-vue-app" in the Custom Page Template
 */

new Vue({
	el: '#wp-vue-app',
	router,
	render: h => h( App )
});
