/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gitsample/gitsample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
