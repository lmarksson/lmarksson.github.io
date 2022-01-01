"use strict";

function setTocHeight() {
  // set the height correctly of the table of contents
	// CSS keeps getting off by a bit. We have to start with top: 64px so
  // height 100% is always going to be slightly too tall
	var toc = document.querySelector("nav.toc-shown div.toc");
  if (toc != null) {
    toc.style.height = (window.innerHeight - 64) + "px";
  }
}

function ToggleShowToc(e) {
  // prevent page from jumping to top when toc is toggled
  e.preventDefault();
  var nav = document.querySelector("nav");
  nav.classList.toggle("toc-shown");
	setTocHeight();
}

function HideToc(e) {
  var nav = document.querySelector("nav.toc-shown");
  if (nav != null) {
    nav.classList.remove("toc-shown");
  }
}

window.addEventListener('resize', function(e) {
	setTocHeight();
}, true);

window.onload = function() {
  var body = document.querySelector("div.body");
  if (body) {
    body.addEventListener('click', HideToc, true);
  }

  var footer = document.querySelector("div.footer");
  if (footer) {
    footer.addEventListener('click', HideToc, true);
  }
};

