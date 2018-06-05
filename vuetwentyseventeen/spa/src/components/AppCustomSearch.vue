<template>
  <div class="container">
    <h6 class="text-center mb-4">Select a Post Type: </h6>

    <!-- CPT Filters -->
    <app-filter-switches
      :app-filters="wpCustomPostTypes"
      filter-type="radio"
      @onFilterToggle="cptSelected = $event"
    />

    <!-- Search Box -->
    <div class="input-group my-4">
      <input
        v-model.lazy="searchTerm"
        type="text"
        class="form-control p-2"
        placeholder="Search"
        aria-label="Search" >
      <div class="input-group-append">
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="fetchData">Submit</button>
      </div>
    </div> <!-- .input-group -->

    <!-- Taxonomy Filters -->
    <app-filter-switches
      :app-filters="wpCategories"
      @onFilterToggle="taxFilters = $event"
    />

    <!-- AppGetPosts Component -->
    <app-get-posts
      :search-term="searchTerm"
      :app-filters="taxFilters"
      :route="cptSelected"
      :fetch-now="fetchNow"
    />

  </div><!-- container -->
</template>

<script>
import AppFilterSwitches from './AppFilterSwitches';
import AppGetPosts from './AppGetPosts';

export default {
	components: {
		'app-filter-switches': AppFilterSwitches,
		'app-get-posts': AppGetPosts
	},
	data() {
		/*global wpData:true*/
		/*eslint no-undef: "error"*/

		return {
			cptSelected: 'posts', // set default post type to posts in case nothing is selected.
			searchTerm: '',
			fetchNow: 0, // prevent REST API request on mount
			taxFilters: [],

			// assuming the category taxonmoy is shared across custom post types
			wpCategories: wpData.post_categories.map( term => term.toLowerCase() ),

			/* Hardcoding the following for demo purposes.
			 * You would normally retrieve these via wp_localize_script or the REST API
			 */
			wpCustomPostTypes: [ 'posts', 'sample-cpt-events', 'sample-cpt-videos' ]
		};
	},
	methods: {
		fetchData() {
			this.fetchNow++;
		}
	}
};
</script>

<style>
</style>
