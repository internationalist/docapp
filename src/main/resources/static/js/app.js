var fixedNavbar;
var navbar;
var ticking = false;
window.onload = init;
var menuName;



function init() {
	
	  var img = new Image();
	  img.src = "../images/122203613_l.jpg";
	  img.addEventListener('load', function(){
		  addClass('banner', 'banner');
	  });
	
	  new Vue({el:'#nav-component'});
	  new Vue({el:'#footer-component'});
	  window.addEventListener('scroll', function(e) {
		    last_known_scroll_position = window.scrollY;

		    if (!ticking) {
		      window.requestAnimationFrame(function() {
		    	fixNavBarOnScroll();
		        ticking = false;
		      });

		      ticking = true;
		    }
	 });
}
	  
function fixNavBarOnScroll() {
	if(!fixedNavbar) {
		fixedNavbar = document.getElementById('fixednav');
	}
	if(!navbar) {
		navbar = document.getElementById('nav');
	}	
	if(!isScrolledIntoView(navbar)) {
	    fixedNavbar.style.visibility="visible";
	} else {
	    fixedNavbar.style.visibility="hidden";
	}
}

function isScrolledIntoView(el) {
	var rect = el.getBoundingClientRect();
	var elemTop = rect.top;
	var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}


function matchArrayOnValue(array, key, value) {
	for(let i = 0; i < array.length; i++) {
		if(array[i][key] == value) {
			return i;
		}
	}
}

function addClass(id, className) {
	  let element, arr;
	  element = document.getElementById(id);
	  arr = element.className.split(" ");
	  if (arr.indexOf(name) == -1) {
	    element.className += " " + className;
	  }
}

function vueNav() {
	let menuObject = {
		menu: [
			{name:'Our Lab', selected:false, link:'index.html'},
			{name:'Research Areas', selected:false,
				dropdown:[{link:'research_spdeb.html', name:'Dr. Swati Deb\'s research'},
				{link:'research_sdeb.html', name:'Dr. Sumitra Deb\'s research'}]
			
			},	  				
			{name:'Publications', selected:false,dropdown:[{link:'publications_spdeb.html', name:'Dr. Swati Deb\'s publications'},
				{link:'publications_sdeb.html', name:'Dr. Sumitra Deb\'s publications'}]},
			{name:'About', selected:false, link:'about.html'}
		]
	};
	let index = matchArrayOnValue(menuObject.menu, 'name', menuName);
	menuObject.menu[index].selected = true;
	return menuObject;
}
