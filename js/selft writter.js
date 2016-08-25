(function(){

	this.Modal = function  () {
		this.closeButton = null;
		this.modal = null;
		this.overlay = null;
this.transitionend = transitionSelect();

		var defaults = {
			autoOpen: false,
			closeButton: true,
			maxWidth: 600,
			minWidth: 200,
			mainClass: 'fadeAndDrop',
			overlay: false

		}


if (arguments[0] && typeof arguments[0] === 'object') {
	this.options = extendDefaults(defaults, arguments[0]);
}

 if(this.options.autoOpen === true) this.open();
	 
}

Modal.prototype.close = function () {

var _ = this;
console.log("main " + this);
this.modal.className = this.modal.className.replace(" scotch-open", " ");
this.overlay.className = this.overlay.className.replace(" scotch-open", " ");

this.modal.addEventListener(this.transitionend, function () {
	 console.log("inside this " + this);
	 _.modal.parentNode.removeChild(_.modal);

});


this.overlay.addEventListener(this.transitionend, function () {
	 console.log("inside this " + this);
	 _.modal.parentNode.removeChild(_.modal);

});
	 
}


Modal.prototype.open = function () {

	buildOut.call(this);
	initializeEvents.call(this);
	 window.getComputedStyle(this.modal).height;
	 this.modal.className = this.modal.className
	  + (this.modal.offsetHeight > window.innerHeight
	   ? " scotch-open scotch-anchored" : " scotch-open");
}




function buildOut () {

var content, contentHolder, dogFrag;

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      content = this.options.content.innerHTML;
    }

docFrag = document.createDocumentFragment();

this.modal = document.createElement('div');

this.modal.className = "scotch-modal " + this.options.className;
this.modal.style.maxWidth = this.options.maxWidth + "px";
this.modal.style.minWidth = this.options.minWidth + "px";

	 
	 if (this.closeButton) {
	 	this.closeButton = documnet.createElement('div');
	 	this.closeButton.className = "scotch-close close-button";
	 	this.closeButton.innerHTML = "&times;";
	 	this.modal.appendChild(this.closeButton);
	 }


	 if (this.overlay) {
	 	this.overlay = document.createElement('div');
	 	this.overlay.className = "scotch-overlay " + this.options.className;
	 	docfrag.appendChild(this.overlay);
	 }

	 contentHolder = document.createElement('div');
	 contentHolder.className = "scotch-content";
	 contentHolder.innerHTML =  content;
	 this.modal.appendChild(contentHolder);


	 docfrag.appendChild(this.modal);
	 document.body.appendChild(docFrag);




}



function extendDefaults(source, properties){

var property;
for (property in properties) {
	if (property.hasOwnProperty(property)) {

	source[property] = properties[property];
	}
}
return property;
}

function initializeEvents() {
	 if (this.closeButton) {
	 	(this.closeButton).addEventListener('click', this.close.bind(this));
	 }
	 if (this.overlay) {
	 	this.overlay.addEventListener('click', this.close.bind(this));
	 }
}




function transitionSelect(){
var el = document.createElement('div');
if (el.style.WebkitTransition) return "webkitTransitionEnd";
if (el.style.OTransition) return "oTransitionEnd";
return 'transitionend';
}


}());



var myContent = document.getElementById('content');
console.log(myContent);
var myModal = new Modal({
  content: myContent
});

var triggerButton = document.getElementById('trigger');

triggerButton.addEventListener('click', function() {
  myModal.open();
});