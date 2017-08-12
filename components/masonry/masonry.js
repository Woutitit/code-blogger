(function ($) {
	'use strict';

	Drupal.behaviors.masonry = {
		attach: function(context, settings) {

			$('.views-view-grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  // Todo: Add (manually or through preprocess for the front_page_view the classes "masonry" for the grid and "masonry__item" for the item)
  itemSelector: '.col-sm-6',
  percentPosition: true
})
		}
	};

}(jQuery));