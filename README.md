# Search & Filter with Vue.js in WordPress

**License:** GPLv2 or later

**License URI:** http://www.gnu.org/licenses/gpl-2.0.html

**Tags:** WordPress Search with Vue.js, spa, search, rest api, single-file components.

**Requires WordPress:** 4.9

**Requires PHP at least:** 5.6.0

**A Single Page Search app integrated inside a child theme of the Twenty Seventeen WordPress theme implemented with Vue.js.**

_The intent is to help developers with a boilerplate single page app created with Vue.js inside a WordPress child theme._

## Description

The child theme registers a Custom Page Template `Search Page Template`.
The Custom Page Template loads a Single Page Search App implemented with Vue.js

## Installation Manually

1.  Download the latest archive and extract to a folder
2.  Make sure you have the WordPress `Twenty Seventeen` theme installed
3.  Upload the `vuetwentyseventeen` child theme folder from the extract to the `/wp-content/themes/` directory
4.  Activate the theme through the `Themes Menu` in WordPress

## Usage WordPress

1.  Make sure the `vuetwentyseventeen` child theme is activated.
2.  Create a Page from your admin dashboard in WordPress or use an existing one where you want the Vue Search App to render.
3.  Open the Page in Edit mode from your admin dashboard.
4.  On the right hand side under attributes you’ll see a template `Search Page Template`
5.  Select the `Search Page Template` and save the page.
6.  You'll see the Single Page Search app render on the page.

## To Make Changes

1.  Setup your development environment (see accompanying article)
2.  Navigate to the `spa` directory using your system terminal
3.  Run `npm install` to install required packages in `node_modules`
4.  Run `npm run dev`
5.  Enqueue the dynamic script `http://localhost:8080/dist/build.js` in the `wp_register_script()` inside `vuetwentyseventeen_enqueue_spa_scripts()` of the `includes/enqueue-scripts.php` file.
6.  When done, generate a build with `npm run build` and enqueue it again.

**_Note: You may need to modify the CSS to suit your theme._**

## Developer Notes

* Requires the Twenty Seventeen WordPress theme.
* Boilerplate files and comments have not been removed.
* Uses Bootstrap for the CSS
* The request to the WordPress REST API only loads 1000 records. Modify this in `spa/components/AppGetPosts.vue`

## Screenshots

#### 1. Set the Custom Page Template

![Custom Page Template](https://www.nuancedesignstudio.in/nds.in/wp-content/uploads/2018/06/cpt-for-vue-search-app.png "Access Custom Page Template on Edit Page screen in the Dashboard")

#### 2. The Search App with Vue.js!

![The Vue Search App](https://www.nuancedesignstudio.in/nds.in/wp-content/uploads/2018/06/vue-search-app-wordpress.png "The Search App with Vue.js")

## Flow of Control

#### ![Vue Search App Flow of Control](https://www.nuancedesignstudio.in/nds.in/wp-content/uploads/2018/06/internal-strucutre-vue-search-spa.png "Search App Flow of Control")
