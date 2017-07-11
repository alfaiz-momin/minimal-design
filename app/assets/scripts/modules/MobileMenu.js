import $ from 'jquery';

class MobileMenu {

	constructor() {
		this.siteHeader = $('');//enter class or Id name which you want to trigger
		this.menuIcon = $("");//enter class or Id name which you want to trigger
		this.menuContet = $('');//enter class or Id name which you want to trigger
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

//it toggles remove and add a class on click
	toggleTheMenu() {
		this.menuContet.toggleClass("site-header__menu-content--is-visible");//enter css class name which content code for animation
		this.siteHeader.toggleClass("site-header__is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;