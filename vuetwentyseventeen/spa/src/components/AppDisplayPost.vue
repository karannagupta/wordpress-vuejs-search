<template>

  <div class="card">
    <img
      v-if="postType.vue_meta.featuredmedia_url"
      :src="postType.vue_meta.featuredmedia_url"
      :alt="postType.vue_meta.featuredmedia_alt || 'post thumbnail'"
      class="card-img-top">

    <div class="card-body">
      <h5 class="card-title text-center">
        <a :href="postType.link">
          <span v-html="highlightedPostTitle || postType.title.rendered" />
        </a>
      </h5>
      <p class="card-text">
        <span v-html="highlightedPostExcerpt || postType.vue_meta.custom_excerpt"/>
      </p>
    </div><!-- .card-body -->

    <div class="card-footer">
      <small class="text-muted">
        <span
          v-if="postType.vue_meta.terms.length"
          v-html="postType.vue_meta.term_links.join(', ')"/>
        <span v-else>uncategorized</span>
      </small>
    </div><!-- .card-footer -->

  </div><!-- .card -->

</template>

<script>
export default {
	props: {
		postType: {
			type: Object,
			required: true,
			default: null
		},
		searchTerm: {
			type: String,
			required: false,
			default: null
		}
	},
	computed: {

		// highlight the search term in post titles.
		highlightedPostTitle() {
			if ( this.searchTerm ) {
				return this.highlightData( this.postType.title.rendered );
			}
		},

		// highlight the search term in post excerpts.
		highlightedPostExcerpt() {
			if ( this.searchTerm ) {
				return this.highlightData( this.postType.vue_meta.custom_excerpt );
			}
		}
	},
	methods: {

		// add span tags with the hl-search CSS class to the search term.
		highlightData( data ) {
			if ( this.searchTerm ) {
				const pattern = new RegExp( this.searchTerm, 'i' );
				const highlightedData = data.replace(
					pattern,
					`<span class="hl-search">${this.searchTerm}</span>`
				);
				return highlightedData;
			}
		}
	}
};
</script>

<style>
.card {
	min-width: 33%;
}

.card-img-top {
	height: 15vw;
	object-fit: cover;
}

.card .hl-search {
	background-color: yellow;
}

@media only screen and (max-width: 768px) {
	.card {
		min-width: 50%;
	}
}

@media only screen and (max-width: 480px) {
	.card {
		min-width: 100%;
	}
}
</style>

