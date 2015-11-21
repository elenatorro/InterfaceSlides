function Step(name, description, element, doSomething) {
	var step         = this;
	this.name        = name;
	this.description = description;
	this.element     = document.getElementById(element);
	this.stepsList   = document.getElementById('steps');
	this.doSomething = doSomething; 
	this.template    = '<li><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>  ' + this.element + '</li>';

	this.getElement = function() {
		return step.element;
	};

	this.doSomething = function(attributes) {
		step.doSomething(attributes);
	};

	this.show = function() {
		step.element.style.visibility = "visible";
	};

	this.hide = function() {
		step.element.style.visibility = "hidden";
	};

	return step;
};