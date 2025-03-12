'use strict';

var antd = require('antd');



Object.keys(antd).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return antd[k]; }
	});
});
//# sourceMappingURL=index.cjs.map
