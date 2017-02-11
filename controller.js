!(function (global) {
	var input = document.getElementById('input')
	var button = document.getElementById('button')

	var model = global.app.model

	function addNewItem() {
		var bootstrap = global.app.bootstrap

		model.list.push({
			title: model.value
		})
		model.value = ''

		bootstrap.render()
	}

	function onValueInput() {
		model.value = this.value.trim()
	}

	function onKeyDown(event) {
		if (event.keyCode === 13 && model.value) {
			addNewItem()
		}
	}

	function onButtonClicked() {
		if (model.value) {
			addNewItem()
		}
	}

	global.app = global.app || {}
	global.app.controller = {
		keyDown: onKeyDown,
		valueInput: onValueInput,
		buttonClicked: onButtonClicked
	}
})(this)