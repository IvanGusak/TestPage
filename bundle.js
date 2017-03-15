/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2);

	var _script = __webpack_require__(7);

	var flat = void 0;

	//import  "./script/smooth/smoothScroll";

	var balcony = void 0;
	var houses = void 0;
	var button = void 0;
	var menu = void 0;

	function getDom() {
		flat = document.getElementsByClassName("flat-toggle");
		balcony = document.getElementsByClassName("balcony-toggle");
		houses = document.getElementsByClassName("ecran2-img");
		menu = document.getElementById("menu");
	}

	function attachEvent() {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = flat[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var elem = _step.value;

				elem.addEventListener("click", _script.flatToggle);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = balcony[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _elem = _step2.value;

				_elem.addEventListener("click", _script.flatToggle);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = houses[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _elem2 = _step3.value;

				_elem2.addEventListener("click", _script.houseToggle);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		menu.addEventListener("click", _script.menuToggle);
	}

	(0, _script.httpGet)("json/apartment.json").then(function (response) {
		return (0, _script.renderHouse)("container", response);
	}, function (error) {
		return alert("Rejected: " + error);
	}).then(function () {
		getDom();
	}).then(function () {
		attachEvent();
	}).then(function () {
		smooth_scroll.init({
			header_id: "header",
			ignore_links: ["header", "footer"]
		});
	});

	(0, _script.renderFlats)("\u0416\u0438\u0442\u043B\u043E\u0432\u0438\u0439 \u043C\u0430\u0441\u0438\u0432 \"\u0417\u0430\u0442\u0438\u0448\u043E\u043A \u0414\u043D\u0456\u043F\u0440\u0430\"", 1, false);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getJson = __webpack_require__(8);

	Object.defineProperty(exports, "httpPost", {
	  enumerable: true,
	  get: function get() {
	    return _getJson.httpPost;
	  }
	});
	Object.defineProperty(exports, "httpGet", {
	  enumerable: true,
	  get: function get() {
	    return _getJson.httpGet;
	  }
	});

	var _renderHouseDescription = __webpack_require__(9);

	Object.defineProperty(exports, "renderHouse", {
	  enumerable: true,
	  get: function get() {
	    return _renderHouseDescription.renderHouse;
	  }
	});

	var _flatGenerator = __webpack_require__(10);

	Object.defineProperty(exports, "flatGenerator", {
	  enumerable: true,
	  get: function get() {
	    return _flatGenerator.flatGenerator;
	  }
	});
	Object.defineProperty(exports, "randomFlat", {
	  enumerable: true,
	  get: function get() {
	    return _flatGenerator.randomFlat;
	  }
	});

	var _renderFlats = __webpack_require__(11);

	Object.defineProperty(exports, "renderFlats", {
	  enumerable: true,
	  get: function get() {
	    return _renderFlats.renderFlats;
	  }
	});

	var _toggles = __webpack_require__(12);

	Object.defineProperty(exports, "flatToggle", {
	  enumerable: true,
	  get: function get() {
	    return _toggles.flatToggle;
	  }
	});
	Object.defineProperty(exports, "houseToggle", {
	  enumerable: true,
	  get: function get() {
	    return _toggles.houseToggle;
	  }
	});
	Object.defineProperty(exports, "menuToggle", {
	  enumerable: true,
	  get: function get() {
	    return _toggles.menuToggle;
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.httpPost = exports.httpGet = undefined;

	var _ = __webpack_require__(7);

	function httpGet(url) {

		return new Promise(function (resolve, reject) {

			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);

			xhr.onload = function () {
				if (this.status == 200) {
					resolve(JSON.parse(this.response));
				} else {
					var error = new Error(this.statusText);
					error.code = this.status;
					reject(error);
				}
			};

			xhr.onerror = function () {
				reject(new Error("Network Error"));
			};

			xhr.send();
		});
	}

	function httpPost(url, data) {
		//return new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onload = function () {
			if (this.status == 200) {
				//resolve(JSON.parse(xhr.responseText));
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				//reject(error);
			}
		};

		xhr.onerror = function () {
			//reject(new Error("Network Error"));
		};

		xhr.send(data);
		//});
	}

	exports.httpGet = httpGet;
	exports.httpPost = httpPost;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.renderHouse = undefined;

	var _ = __webpack_require__(7);

	function renderHouse(className, json) {
	    var houses = json;
	    var node = document.getElementsByClassName(className)[0];
	    var innerNode = "";
	    var output = void 0;

	    innerNode += houses.map(function (house) {
	        return "\n            <div class=\"apart-box\">\n                <div class=\"ecran2-img\">\n                    <img id=\"houses\" src=\"" + house.img + "\" alt='" + house.name + "'>\n                    <div class=\"triangle\"></div>\n                </div>\n                <div class=\"side\">\n                    <p class=\"name\">" + house.name + "</p>\n                    <p class=\"city\">" + house.address.city + "</p>\n                    <p class=\"street\">" + house.address.street + "</p>\n                    <p class=\"capacity\">" + house.capacity + "</p>\n                    <a href=\"#apartments\" class=\"button\">\u041E\u0431\u0440\u0430\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</a>\n                </div>\n            </div>\n            ";
	    });
	    output = innerNode.split(",").join("");
	    node.innerHTML = output;
	}

	exports.renderHouse = renderHouse;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.randomFlat = exports.flatGenerator = undefined;

	var _ = __webpack_require__(7);

	function randomFlat(number) {
	    var randomCapacity = Math.floor(Math.random() * 5 + 1);
	    var randomBalcony = Math.random() < 0.5 ? true : false;
	    return {
	        "number": number,
	        "balcony": randomBalcony,
	        "capacity": randomCapacity
	    };
	}

	function flatGenerator(url, capacity) {
	    (0, _.httpGet)(url).then(function (response) {
	        var result = response;
	        console.log(result[0]);
	        for (var i = 1; i <= capacity; i++) {

	            result[0].flats.push(randomFlat(i));
	        }
	        return result;
	    }, function (error) {
	        return alert("Rejected: " + error);
	    }).then(function (result) {
	        console.log(JSON.stringify(result));
	    });
	}

	exports.flatGenerator = flatGenerator;
	exports.randomFlat = randomFlat;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.renderFlats = undefined;

	var _ = __webpack_require__(7);

	function renderFlats(houseName, capacity, balcony) {
	    var dom = "";

	    (0, _.httpGet)("json/flats.json").then(function (response) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var house = _step.value;

	                if (house.name == houseName) {
	                    dom += house.flats.map(function (room) {
	                        if (room.capacity == capacity && room.balcony == balcony) {
	                            return "<div class=\"room-ceil\">" + room.number + "</div>";
	                        }
	                    });
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return dom;
	    }).then(function (result) {
	        document.getElementsByClassName("rooms-table")[0].innerHTML = result.split(",").join("");
	    });
	}

	exports.renderFlats = renderFlats;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.menuToggle = exports.houseToggle = exports.flatToggle = undefined;

	var _ = __webpack_require__(7);

	function flatToggle(event) {
	    var houseName = document.getElementsByClassName("house-name")[0].innerText;
	    var preTarget = document.getElementsByClassName("flat-toggle active")[0];
	    var preTargetList = preTarget.classList;
	    var currTargetList = event.target.classList;
	    var number = event.target.innerText.split("")[0];
	    var bool = false;
	    var output = "";
	    var balcony = document.getElementsByClassName("balcony-toggle")[0];

	    if (currTargetList.contains("flat-toggle")) {
	        preTargetList.toggle("active");
	    } else {
	        output = event.target.innerText == "так" ? "  \u043D\u0456" : "так";
	        event.target.innerText = output;
	        number = preTarget.innerText.split("")[0];
	    }

	    bool = balcony.innerText == "так" ? true : false;

	    currTargetList.toggle("active");

	    (0, _.renderFlats)(houseName, number, bool);
	}

	function houseToggle() {
	    var header = document.getElementsByClassName("house-name")[0];
	    var number = document.getElementsByClassName("flat-toggle active")[0].innerText.split("")[0];
	    var balcony = document.getElementsByClassName("balcony-toggle")[0].innerText;
	    var preTarget = document.getElementsByClassName("ecran2-img active")[0];
	    var elem = event.currentTarget;
	    var img = elem.childNodes[1] || document.getElementsByClassName("houses")[0];
	    var houseName = img.getAttribute("alt");

	    if (preTarget) {
	        preTarget.classList.toggle("active");
	    }

	    elem.classList.toggle("active");
	    header.innerText = houseName;
	    (0, _.renderFlats)(houseName, number, balcony == "так" ? true : false);
	}

	function menuToggle(event) {
	    var elem = event.currentTarget;

	    elem.classList.toggle("active");
	}

	exports.flatToggle = flatToggle;
	exports.houseToggle = houseToggle;
	exports.menuToggle = menuToggle;

/***/ }
/******/ ]);