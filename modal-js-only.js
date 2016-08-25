(function(){

///////////////////////////////////////////////////////////////////////////////////
// ________________________________________________________________________________
// ________________________________________________________________________________

// this refers to window nod, too keep the plug in inner functions private
this.Modal = function(){

this.closeButton = null;
this.modal = null;
this.overlay = null;


this.transitionEnd = transitionSelect();

var defaults = {
  autoOpen: false,
  className: 'fade-and-drop',
  closeButton: true,
  maxWidth: 600,
  minWidth: 280,
  overlay: true
}


// // take the given options by the user and overight the default
// if (arguments[0] && typeof arguments[0] === "object") {
//   this.options = extendDefaults(defaults, arguments[0]);
//   //^^ this receve options sets from extenddefaults function , this funcion receve default options, and provided options

// };

}
Modal.prototype.close = function(){
var _ = this;
this.modal.className = this.modal.className.replace(" scotch-open", "");
this.overlay.className = this.overlay.className.replace(" scotch-open", "");

this.modal.addEventListener(this.transitionend, function () {
	_.modal.parentNode.removeChild(_.modal);
});

this.overlay.addEventListener(this.transitionend, function () {
	 if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay)
});

}
// ________________________________________________________________________________
// ________________________________________________________________________________
///////////////////////////////////////////////////////////////////////////////////

Modal.prototype.open = function(){


buildOut.call(this);
initializeEvents.call(this);

window.getComputedStyle(this.modal).height;

this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? " scotch-open schotch-anchored" : " scotch-open");
this.overlay.className = this.overlay.className + " scotch-open";




}

function buildOut () {
	 var content, contentHolder, docFrag;

	 if (typeof this.options.content === "string") {
	 	content = this.options.content;
	 }else {
	 	content = this.options.content.innerHTML;
	 }

	 docfrag = document.createDocumentFragment();

	 this.modal = document.createElement("div");
	 this.modal.className = "scotch-modal " + this.options.className;
	 this.modal.style.minWidth = this.options.minWidth + "px";
	 this.modal.style.maxWidth = this.options.maxWidth + "px";

	 if (this.options.closeButton === true) {
	 	this.closeButton = document.createElement("button");
	 	this.closeButton.className = "scotch-close close-button";
	 	this.closeButton.innerHTML = "x";
	 	this.modal.appendChild(this.closeButton);
	 }
	 if (this.options.overlay === true) {
	 	this.overlay = document.createElement("div");
	 	this.overlay.className = "scotch-overlay " +  this.options.className;
	 	docFrag.appendChild(this.overlay)
	 }

	 contentHolder = document.createElement("div");
	 contentHolder.className = "scrotch-content";
	 contentHolder.innerHTML = content;
	 this.modal.appendChild(contentHolder);

	 docFrag.appendChild(this.modal);
	 document.body.appendChild(docFrag);
}

///////////////////////////////////////////////////////////////////////////////////
// ________________________________________________________________________________
// ________________________________________________________________________________
 function initializeEvents(){
if (this.closeButton) {
	this.closeButton.addEventListener('click', this.close.bind(this));
}
if (this.overlay) {
	this.overlay.addEventListener('click', this.close.bind(this));
}
 }



// ________________________________________________________________________________
// ________________________________________________________________________________
///////////////////////////////////////////////////////////////////////////////////

function extendDefaults(source, properties){

var property;
for(property in properties){
  source[property] = properties[property];
}
return source;
}



///////////////////////////////////////////////////////////////////////////////////
// ________________________________________________________________________________
// ________________________________________________________________________________


function transitionSelect () {
	 var el = createElement("div");
	 if(el.webkitTransition) return "webkitTransitionEnd";
	 if(el.OTransition) return "oTransitionEnd";
	 return 'transitionend';
}

// ________________________________________________________________________________
// ________________________________________________________________________________
///////////////////////////////////////////////////////////////////////////////////


var myContent = getElementById('content');
var myModal = new Modal({
	content : myContent
});

var triggerButton = document.getElementById('trigger');
triggerButton.addEventListener('click', function () {
	 myModal.open();
})




}());