import Ractive from 'ractive'

class Main {
	constructor() {
		this.el = document.querySelector('.interactive');
		this.template = "<p>Hello world</p>";
		this.data = {
		}
	}
}

export default new Ractive(new Main());