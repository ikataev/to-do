!(function (global) {
	var input = document.getElementById('input')
	var button = document.getElementById('button')

	input.addEventListener('keydown', global.app.controller.keyDown)
	input.addEventListener('input', global.app.controller.valueInput)

	button.addEventListener('click', global.app.controller.buttonClicked)
})(this)

!(function (global) {
	var list = document.getElementById('list')
	var input = document.getElementById('input')

	function getLiTemplate(title) {
		return '<li>' + title + '</li>'
	}
	
	function reduceList(prevValue, value) {
		return prevValue + getLiTemplate(value.title)
	}

	function render() {
		var model = global.app.model

		input.value = model.value
		list.innerHTML = model.list.reduce(reduceList, '')
	}

	global.app = global.app || {}
	global.app.bootstrap = {
		render: render
	}

	render()
})(this)