<template>

  <div id="vue-search-app">

    <app-navigation>
      <!-- Load the App Navigation Component-->
    </app-navigation>
    <keep-alive>
      <router-view>
        <!-- Load the router-view component provided by the vue-router plugin -->
      </router-view>
    </keep-alive>

  </div><!-- #vue-search-app -->

</template>

<script>
import AppNavigation from './components/AppNavigation';

export default {
	components: {
		'app-navigation': AppNavigation
	}
};
</script>

<style>

</style>
