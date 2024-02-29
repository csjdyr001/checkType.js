(function() {
	window.$checkType = (obj, desiredTypeString) => checkType.$checkType(obj, desiredTypeString);
	window.int = Number;
	window.Integer = Number;
	class checkType {
		static _TAG = "checkType.js: ";
		static _typeof(objClass) {
			if (objClass && objClass.constructor) {
				if (objClass.constructor.name) {
					return objClass.constructor.name;
				} else {
					let strFun = objClass.constructor.toString();
					let className = strFun.substr(0, strFun.indexOf('('));
					className = className.replace('function', '');
					return className.replace(/(^\s*)|(\s*$)/ig, '');
				}
			}
			return typeof(objClass);
		}
		static $checkType(obj, desiredTypeString) {
			let desiredTypeString2 = desiredTypeString;
			if (desiredTypeString2 === "int" || desiredTypeString2 === "Integer") {
				desiredTypeString2 = desiredTypeString2.replace("int", "Number")
					.replace("Integer", "Number");
			}
			if (!(this._typeof(desiredTypeString2) === "String")) {
				throw new Error(this._TAG + 'The "$checkType" method accepts an object and a string');
			}
			if (this._typeof(obj) === desiredTypeString2) {
				return;
			}
			throw new Error(this._TAG + `Expecting "${desiredTypeString2}" and getting "${this._typeof(obj)}"`);
		}
	}
})();