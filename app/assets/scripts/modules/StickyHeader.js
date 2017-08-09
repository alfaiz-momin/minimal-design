// in this file lazylode for image optimization and sticky header.

import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

	constructor() {
		this.lazyImages = $(".lazyload");
		this.headerLinks = $(".nav-link");
		this.addSmoothScrooling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on(function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrooling() {
		this.headerLinks.smoothScroll();
	}

}

export default StickyHeader;