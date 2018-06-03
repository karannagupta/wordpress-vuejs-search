import Vue from 'vue';
import Router from 'vue-router';
import AppQuickSearch from './components/AppQuickSearch';
import AppCustomSearch from './components/AppCustomSearch';

/*global wpData:true*/
/*eslint no-undef: "error"*/
const appPath = `/${wpData.app_path}`;

Vue.use( Router );

/**
 * Each route should map to a component.
 * The "component" can either be an actual component or just a component options object.
 */
export default new Router({
	base: appPath, // path of the SPA relative to the domain.
	mode: 'hash', // or "history"
	routes: [
		{
			path: '/quick',
			name: 'QuickSearch',
			component: AppQuickSearch
		},
		{
			path: '/advanced',
			name: 'CustomSearch',
			component: AppCustomSearch
		},
		{
			path: '*',
			redirect: { name: 'QuickSearch' }
		}
	]
});

/*
 * Note: Turning on the HTML5 History Mode with "mode: 'history'" will eliminate the '#' in the URLs. However, as we're loading Vue on a Custom Page Template, the main routing is still handled by WordPress. As a result a page refresh of directly loading a Vue specific link will return 404 Not Found.
 * With the '#' in the URL the Vue specific link will work as regular link.
 * e.g.
 * http://wpvue.test/search-page/#/videos will work directly or even on page refresh but
 * http://wpvue.test/search-page/videos will not as WordPress will try to look for it.
 */
