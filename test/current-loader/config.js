var loader = require('@loader');

if(typeof window !== "undefined" && window.QUnit) {

	QUnit.ok(loader == steal.loader,  "got back the current loader");

	QUnit.start();
	removeMyself();
} else {
	console.log("Systems", loader == steal.loader);
}
