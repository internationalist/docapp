var fixedNavbar;
var navbar;
var ticking = false;
window.onload = init;
var menuName;



function init() {
	
	  //var img = new Image();
	  //img.src = "../images/122203613_l-2.jpg";
	  /*img.addEventListener('load', function(){
		  console.log("image loaded");
		  addClass('banner', 'banner');
	  });*/
	 imageLazyLoad("../images/122203613_l-2.jpg", ()=>{
		  console.log("image loaded");
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

function imageLazyLoad(imgsrc, callback) {
	  let img = new Image();
	  img.src = imgsrc;
	  img.addEventListener('load', callback);
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

function removeClass(id, className) {
	  let element, arr;
	  element = document.getElementById(id);
	  let classNames = element.className;
	  classNames = className.replace(className, '');
	  element.className = className;
}

function vueNav() {
	let menuObject = {
		menu: [
			{name:'Our Lab', selected:false, link:'index.html'},
			{name:'Sumitra Deb\'s Lab', selected:false,
				dropdown:[{link:'research_sdeb.html', name:'Research interest'},
				{link:'publications_sdeb.html', name:'Publications'}]
			
			},	  				
			{name:'Swati Palit Deb\'s Lab', selected:false,dropdown:[{link:'research_spdeb.html', name:'Research interest'},
				{link:'publications_spdeb.html', name:'Publications'}]},
			{name:'About', selected:false, link:'about.html'}
		]
	};
	let index = matchArrayOnValue(menuObject.menu, 'name', menuName);
	menuObject.menu[index].selected = true;
	return menuObject;
}