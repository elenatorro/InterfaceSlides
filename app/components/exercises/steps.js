function Step(name, description, targetElement, doSomething) {
	var step         = this;
	this.name        = name;
	this.description = description;
	this.targetElement = document.getElementById(targetElement);
	this.stepsList   = document.getElementById('steps');
	this.doSomething = doSomething; 
	this.template    = '<h3><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>  ' + this.name + '<h3><h4> ' + this.description + '</h4>';

	this.getElement = function() {
		return step.element;
	};

	this.createElement = function() {
		step.element = document.createElement('li');
		step.element.innerHTML = step.template;
		step.element.classList.add('step--element');
		step.element.classList.add('hidden');
		return step.element;
	};

	this.show = function() {
		step.element.classList.add('visible');
		step.element.classList.remove('hidden');
		step.targetElement.classList.add('visible');
		step.targetElement.classList.remove('hidden');
		if (step.doSomething) {
			step.doSomething();
		}
	};

	this.hide = function() {
		step.element.classList.add('hidden');
		step.element.classList.remove('visible');
		step.targetElement.classList.add('hidden');
		step.targetElement.classList.remove('visible');
	};

	return step;
};