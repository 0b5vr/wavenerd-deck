/*!
 * @fms-cat/wavenerd-deck v0.1.1
 * a
 * Copyright (c) 2019 FMS-Cat
 * @fms-cat/wavenerd-deck is distributed under the MIT License
 * https://opensource.org/licenses/MIT
 * Repository: [object Object]
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WAVENERD_DECK"] = factory();
	else
		root["WAVENERD_DECK"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fms-cat/glcat-ts/dist/glcat.js":
/*!******************************************************!*\
  !*** ./node_modules/@fms-cat/glcat-ts/dist/glcat.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @fms-cat/glcat-ts v0.10.0
 * WebGL wrapper with plenty of hackability
 * 
 * Copyright (c) 2019 FMS-Cat
 * @fms-cat/glcat-ts is distributed under the MIT License
 * https://opensource.org/licenses/MIT
 * 
 * Repository: https://github.com/FMS-Cat/glcat-ts
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) {}
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "19bf8d566dbd203f09cb";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "glcat.js";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/index.ts")(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GL.ts":
/*!*******************!*\
  !*** ./src/GL.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GL = {
    ACTIVE_ATTRIBUTES: 35721,
    ACTIVE_ATTRIBUTE_MAX_LENGTH: 35722,
    ACTIVE_TEXTURE: 34016,
    ACTIVE_UNIFORMS: 35718,
    ACTIVE_UNIFORM_MAX_LENGTH: 35719,
    ALIASED_LINE_WIDTH_RANGE: 33902,
    ALIASED_POINT_SIZE_RANGE: 33901,
    ALPHA: 6406,
    ALPHA_BITS: 3413,
    ALWAYS: 519,
    ARRAY_BUFFER: 34962,
    ARRAY_BUFFER_BINDING: 34964,
    ATTACHED_SHADERS: 35717,
    BACK: 1029,
    BLEND: 3042,
    BLEND_COLOR: 32773,
    BLEND_DST_ALPHA: 32970,
    BLEND_DST_RGB: 32968,
    BLEND_EQUATION: 32777,
    BLEND_EQUATION_ALPHA: 34877,
    BLEND_EQUATION_RGB: 32777,
    BLEND_SRC_ALPHA: 32971,
    BLEND_SRC_RGB: 32969,
    BLUE_BITS: 3412,
    BOOL: 35670,
    BOOL_VEC2: 35671,
    BOOL_VEC3: 35672,
    BOOL_VEC4: 35673,
    BROWSER_DEFAULT_WEBGL: 37444,
    BUFFER_SIZE: 34660,
    BUFFER_USAGE: 34661,
    BYTE: 5120,
    CCW: 2305,
    CLAMP_TO_EDGE: 33071,
    COLOR_ATTACHMENT0: 36064,
    COLOR_BUFFER_BIT: 16384,
    COLOR_CLEAR_VALUE: 3106,
    COLOR_WRITEMASK: 3107,
    COMPILE_STATUS: 35713,
    COMPRESSED_TEXTURE_FORMATS: 34467,
    CONSTANT_ALPHA: 32771,
    CONSTANT_COLOR: 32769,
    CONTEXT_LOST_WEBGL: 37442,
    CULL_FACE: 2884,
    CULL_FACE_MODE: 2885,
    CURRENT_PROGRAM: 35725,
    CURRENT_VERTEX_ATTRIB: 34342,
    CW: 2304,
    DECR: 7683,
    DECR_WRAP: 34056,
    DELETE_STATUS: 35712,
    DEPTH_ATTACHMENT: 36096,
    DEPTH_BITS: 3414,
    DEPTH_BUFFER_BIT: 256,
    DEPTH_CLEAR_VALUE: 2931,
    DEPTH_COMPONENT: 6402,
    DEPTH_COMPONENT16: 33189,
    DEPTH_FUNC: 2932,
    DEPTH_RANGE: 2928,
    DEPTH_STENCIL: 34041,
    DEPTH_STENCIL_ATTACHMENT: 33306,
    DEPTH_TEST: 2929,
    DEPTH_WRITEMASK: 2930,
    DITHER: 3024,
    DONT_CARE: 4352,
    DST_ALPHA: 772,
    DST_COLOR: 774,
    DYNAMIC_DRAW: 35048,
    ELEMENT_ARRAY_BUFFER: 34963,
    ELEMENT_ARRAY_BUFFER_BINDING: 34965,
    EQUAL: 514,
    FASTEST: 4353,
    FLOAT: 5126,
    FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    FRAGMENT_SHADER: 35632,
    FRAMEBUFFER: 36160,
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
    FRAMEBUFFER_BINDING: 36006,
    FRAMEBUFFER_COMPLETE: 36053,
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
    FRAMEBUFFER_UNSUPPORTED: 36061,
    FRONT: 1028,
    FRONT_AND_BACK: 1032,
    FRONT_FACE: 2886,
    FUNC_ADD: 32774,
    FUNC_REVERSE_SUBTRACT: 32779,
    FUNC_SUBTRACT: 32778,
    GENERATE_MIPMAP_HINT: 33170,
    GEQUAL: 518,
    GREATER: 516,
    GREEN_BITS: 3411,
    HIGH_FLOAT: 36338,
    HIGH_INT: 36341,
    INCR: 7682,
    INCR_WRAP: 34055,
    INFO_LOG_LENGTH: 35716,
    INT: 5124,
    INT_VEC2: 35667,
    INT_VEC3: 35668,
    INT_VEC4: 35669,
    INVALID_ENUM: 1280,
    INVALID_FRAMEBUFFER_OPERATION: 1286,
    INVALID_OPERATION: 1282,
    INVALID_VALUE: 1281,
    INVERT: 5386,
    KEEP: 7680,
    LEQUAL: 515,
    LESS: 513,
    LINEAR: 9729,
    LINEAR_MIPMAP_LINEAR: 9987,
    LINEAR_MIPMAP_NEAREST: 9985,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    LINE_WIDTH: 2849,
    LINK_STATUS: 35714,
    LOW_FLOAT: 36336,
    LOW_INT: 36339,
    LUMINANCE: 6409,
    LUMINANCE_ALPHA: 6410,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
    MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
    MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
    MAX_RENDERBUFFER_SIZE: 34024,
    MAX_TEXTURE_IMAGE_UNITS: 34930,
    MAX_TEXTURE_SIZE: 3379,
    MAX_VARYING_VECTORS: 36348,
    MAX_VERTEX_ATTRIBS: 34921,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
    MAX_VERTEX_UNIFORM_VECTORS: 36347,
    MAX_VIEWPORT_DIMS: 3386,
    MEDIUM_FLOAT: 36337,
    MEDIUM_INT: 36340,
    MIRRORED_REPEAT: 33648,
    NEAREST: 9728,
    NEAREST_MIPMAP_LINEAR: 9986,
    NEAREST_MIPMAP_NEAREST: 9984,
    NEVER: 512,
    NICEST: 4354,
    NONE: 0,
    NOTEQUAL: 517,
    NO_ERROR: 0,
    NUM_COMPRESSED_TEXTURE_FORMATS: 34466,
    ONE: 1,
    ONE_MINUS_CONSTANT_ALPHA: 32772,
    ONE_MINUS_CONSTANT_COLOR: 32770,
    ONE_MINUS_DST_ALPHA: 773,
    ONE_MINUS_DST_COLOR: 775,
    ONE_MINUS_SRC_ALPHA: 771,
    ONE_MINUS_SRC_COLOR: 769,
    OUT_OF_MEMORY: 1285,
    PACK_ALIGNMENT: 3333,
    POINTS: 0,
    POLYGON_OFFSET_FACTOR: 32824,
    POLYGON_OFFSET_FILL: 32823,
    POLYGON_OFFSET_UNITS: 10752,
    RED_BITS: 3410,
    RENDERBUFFER: 36161,
    RENDERBUFFER_ALPHA_SIZE: 36179,
    RENDERBUFFER_BINDING: 36007,
    RENDERBUFFER_BLUE_SIZE: 36178,
    RENDERBUFFER_DEPTH_SIZE: 36180,
    RENDERBUFFER_GREEN_SIZE: 36177,
    RENDERBUFFER_HEIGHT: 36163,
    RENDERBUFFER_INTERNAL_FORMAT: 36164,
    RENDERBUFFER_RED_SIZE: 36176,
    RENDERBUFFER_STENCIL_SIZE: 36181,
    RENDERBUFFER_WIDTH: 36162,
    RENDERER: 7937,
    REPEAT: 10497,
    REPLACE: 7681,
    RGB: 6407,
    RGB5_A1: 32855,
    RGB565: 36194,
    RGBA: 6408,
    RGBA4: 32854,
    SAMPLER_2D: 35678,
    SAMPLER_CUBE: 35680,
    SAMPLES: 32937,
    SAMPLE_ALPHA_TO_COVERAGE: 32926,
    SAMPLE_BUFFERS: 32936,
    SAMPLE_COVERAGE: 32928,
    SAMPLE_COVERAGE_INVERT: 32939,
    SAMPLE_COVERAGE_VALUE: 32938,
    SCISSOR_BOX: 3088,
    SCISSOR_TEST: 3089,
    SHADER_COMPILER: 36346,
    SHADER_SOURCE_LENGTH: 35720,
    SHADER_TYPE: 35663,
    SHADING_LANGUAGE_VERSION: 35724,
    SHORT: 5122,
    SRC_ALPHA: 770,
    SRC_ALPHA_SATURATE: 776,
    SRC_COLOR: 768,
    STATIC_DRAW: 35044,
    STENCIL_ATTACHMENT: 36128,
    STENCIL_BACK_FAIL: 34817,
    STENCIL_BACK_FUNC: 34816,
    STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
    STENCIL_BACK_PASS_DEPTH_PASS: 34819,
    STENCIL_BACK_REF: 36003,
    STENCIL_BACK_VALUE_MASK: 36004,
    STENCIL_BACK_WRITEMASK: 36005,
    STENCIL_BITS: 3415,
    STENCIL_BUFFER_BIT: 1024,
    STENCIL_CLEAR_VALUE: 2961,
    STENCIL_FAIL: 2964,
    STENCIL_FUNC: 2962,
    STENCIL_INDEX: 6401,
    STENCIL_INDEX8: 36168,
    STENCIL_PASS_DEPTH_FAIL: 2965,
    STENCIL_PASS_DEPTH_PASS: 2966,
    STENCIL_REF: 2967,
    STENCIL_TEST: 2960,
    STENCIL_VALUE_MASK: 2963,
    STENCIL_WRITEMASK: 2968,
    STREAM_DRAW: 35040,
    SUBPIXEL_BITS: 3408,
    TEXTURE: 5890,
    TEXTURE0: 33984,
    TEXTURE1: 33985,
    TEXTURE2: 33986,
    TEXTURE3: 33987,
    TEXTURE4: 33988,
    TEXTURE5: 33989,
    TEXTURE6: 33990,
    TEXTURE7: 33991,
    TEXTURE8: 33992,
    TEXTURE9: 33993,
    TEXTURE10: 33994,
    TEXTURE11: 33995,
    TEXTURE12: 33996,
    TEXTURE13: 33997,
    TEXTURE14: 33998,
    TEXTURE15: 33999,
    TEXTURE16: 34000,
    TEXTURE17: 34001,
    TEXTURE18: 34002,
    TEXTURE19: 34003,
    TEXTURE20: 34004,
    TEXTURE21: 34005,
    TEXTURE22: 34006,
    TEXTURE23: 34007,
    TEXTURE24: 34008,
    TEXTURE25: 34009,
    TEXTURE26: 34010,
    TEXTURE27: 34011,
    TEXTURE28: 34012,
    TEXTURE29: 34013,
    TEXTURE30: 34014,
    TEXTURE31: 34015,
    TEXTURE_2D: 3553,
    TEXTURE_BINDING_2D: 32873,
    TEXTURE_BINDING_CUBE_MAP: 34068,
    TEXTURE_CUBE_MAP: 34067,
    TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
    TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
    TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
    TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
    TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
    TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
    TEXTURE_MAG_FILTER: 10240,
    TEXTURE_MIN_FILTER: 10241,
    TEXTURE_WRAP_S: 10242,
    TEXTURE_WRAP_T: 10243,
    TRIANGLES: 4,
    TRIANGLE_FAN: 6,
    TRIANGLE_STRIP: 5,
    UNPACK_ALIGNMENT: 3317,
    UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
    UNPACK_FLIP_Y_WEBGL: 37440,
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_INT: 5125,
    UNSIGNED_SHORT: 5123,
    UNSIGNED_SHORT_4_4_4_4: 32819,
    UNSIGNED_SHORT_5_5_5_1: 32820,
    UNSIGNED_SHORT_5_6_5: 33635,
    VALIDATE_STATUS: 35715,
    VENDOR: 7936,
    VERSION: 7938,
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
    VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
    VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
    VERTEX_ATTRIB_ARRAY_POINTER: 34373,
    VERTEX_ATTRIB_ARRAY_SIZE: 34339,
    VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
    VERTEX_ATTRIB_ARRAY_TYPE: 34341,
    VERTEX_SHADER: 35633,
    VIEWPORT: 2978,
    ZERO: 0
};


/***/ }),

/***/ "./src/GLCat.ts":
/*!**********************!*\
  !*** ./src/GLCat.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GLCatBuffer_1 = __webpack_require__(/*! ./GLCatBuffer */ "./src/GLCatBuffer.ts");
var GLCatFramebuffer_1 = __webpack_require__(/*! ./GLCatFramebuffer */ "./src/GLCatFramebuffer.ts");
var GLCatProgram_1 = __webpack_require__(/*! ./GLCatProgram */ "./src/GLCatProgram.ts");
var GLCatRenderbuffer_1 = __webpack_require__(/*! ./GLCatRenderbuffer */ "./src/GLCatRenderbuffer.ts");
var GLCatShader_1 = __webpack_require__(/*! ./GLCatShader */ "./src/GLCatShader.ts");
var GLCatTexture_1 = __webpack_require__(/*! ./GLCatTexture */ "./src/GLCatTexture.ts");
/**
 * WebGL wrapper with plenty of hackability.
 */
var GLCat = /** @class */ (function () {
    /**
     * Create a new GLCat instance.
     * WebGLRenderingContext is required.
     */
    function GLCat(gl) {
        this.__extensionCache = {};
        this.__gl = gl;
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    }
    Object.defineProperty(GLCat.prototype, "renderingContext", {
        /**
         * Its own WebGLRenderingContext.
         */
        get: function () {
            return this.__gl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCat.prototype, "gl", {
        /**
         * Its own WebGLRenderingContext. Shorter than [[GLCat.renderingContext]]
         */
        get: function () {
            return this.__gl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCat.prototype, "dummyTexture", {
        /**
         * A dummy texture, 100% organic pure #FF00FF texture.
         */
        get: function () {
            if (this.__dummyTextureCache) {
                return this.__dummyTextureCache;
            }
            var texture = this.createTexture();
            if (texture === null) {
                throw new Error(GLCat.unexpectedNullDetectedError);
            }
            texture.setTextureFromArray(1, 1, new Uint8Array([255, 0, 255, 255]));
            this.__dummyTextureCache = texture;
            return texture;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieve an extension.
     * If they is your precious one and you cannot live without him, turn on `throwIfNotFound`.
     */
    GLCat.prototype.getExtension = function (name, throwIfNotFound) {
        var gl = this.__gl;
        if (this.__extensionCache[name]) {
            return this.__extensionCache[name];
        }
        else {
            this.__extensionCache[name] = gl.getExtension(name);
            if (this.__extensionCache[name]) {
                return this.__extensionCache[name];
            }
            else {
                if (throwIfNotFound) {
                    throw new Error('GLCat.getExtension: The extension "' + name + '" is not supported');
                }
                return null;
            }
        }
    };
    /**
     * Retrieve extensions.
     * If they are your precious ones and you cannot live without them, turn on `throwIfNotFound`.
     */
    GLCat.prototype.getExtensions = function (names, throwIfNotFound) {
        var _this = this;
        return names.map(function (n) { return _this.getExtension(n, throwIfNotFound); });
    };
    /**
     * Create a new shader object.
     */
    GLCat.prototype.createShader = function (type) {
        var gl = this.__gl;
        var shader = gl.createShader(type);
        if (shader === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        return new GLCatShader_1.GLCatShader(this, shader);
    };
    /**
     * Create a new GLCat program object.
     */
    GLCat.prototype.createProgram = function () {
        var gl = this.__gl;
        var program = gl.createProgram();
        if (program === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        return new GLCatProgram_1.GLCatProgram(this, program);
    };
    /**
     * Create a new GLCat program object, in lazier way.
     */
    GLCat.prototype.lazyProgram = function (vert, frag) {
        var gl = this.__gl;
        // == vert =====================================================================================
        var vertexShader = this.createShader(gl.VERTEX_SHADER);
        if (vertexShader === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        try {
            vertexShader.compile(vert);
        }
        catch (e) {
            vertexShader.dispose();
            throw e;
        }
        // == frag =====================================================================================
        var fragmentShader = this.createShader(gl.FRAGMENT_SHADER);
        if (fragmentShader === null) {
            vertexShader.dispose();
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        try {
            fragmentShader.compile(frag);
        }
        catch (e) {
            vertexShader.dispose();
            fragmentShader.dispose();
            throw e;
        }
        // == program ==================================================================================
        var program = this.createProgram();
        if (program === null) {
            vertexShader.dispose();
            fragmentShader.dispose();
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        try {
            program.link(vertexShader, fragmentShader);
        }
        catch (e) {
            vertexShader.dispose();
            fragmentShader.dispose();
            program.dispose();
            throw e;
        }
        return program;
    };
    /**
     * Create a new GLCat program object, in lazier way.
     * It's gonna be asynchronous if you have the KHR_parallel_shader_compile extension support.
     */
    GLCat.prototype.lazyProgramAsync = function (vert, frag) {
        var gl = this.__gl;
        // == vert =====================================================================================
        var vertexShader = this.createShader(gl.VERTEX_SHADER);
        if (vertexShader === null) {
            return Promise.reject(new Error(GLCat.unexpectedNullDetectedError));
        }
        try {
            vertexShader.compile(vert);
        }
        catch (e) {
            vertexShader.dispose();
            return Promise.reject(e);
        }
        // == frag =====================================================================================
        var fragmentShader = this.createShader(gl.FRAGMENT_SHADER);
        if (fragmentShader === null) {
            vertexShader.dispose();
            return Promise.reject(new Error(GLCat.unexpectedNullDetectedError));
        }
        try {
            fragmentShader.compile(frag);
        }
        catch (e) {
            vertexShader.dispose();
            fragmentShader.dispose();
            return Promise.reject(e);
        }
        // == program ==================================================================================
        var program = this.createProgram();
        if (program === null) {
            vertexShader.dispose();
            fragmentShader.dispose();
            return Promise.reject(new Error(GLCat.unexpectedNullDetectedError));
        }
        return program.linkAsync(vertexShader, fragmentShader).then(function () {
            return program;
        }).catch(function (e) {
            vertexShader.dispose();
            fragmentShader.dispose();
            program.dispose();
            throw e;
        });
    };
    /**
     * Specify a program to use.
     */
    GLCat.prototype.useProgram = function (program) {
        var _a;
        var gl = this.__gl;
        gl.useProgram(((_a = program) === null || _a === void 0 ? void 0 : _a.raw) || null);
    };
    /**
     * Create a new vertex buffer.
     */
    GLCat.prototype.createBuffer = function () {
        var gl = this.__gl;
        var buffer = gl.createBuffer();
        if (buffer === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        return new GLCatBuffer_1.GLCatBuffer(this, buffer);
    };
    /**
     * Create a new texture.
     */
    GLCat.prototype.createTexture = function () {
        var gl = this.__gl;
        var texture = gl.createTexture();
        if (texture === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        return new GLCatTexture_1.GLCatTexture(this, texture);
    };
    /**
     * Create a new renderbuffer.
     */
    GLCat.prototype.createRenderbuffer = function () {
        var gl = this.__gl;
        var renderbuffer = gl.createRenderbuffer();
        if (renderbuffer === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        return new GLCatRenderbuffer_1.GLCatRenderbuffer(this, renderbuffer);
    };
    /**
     * Create a new framebuffer.
     * TODO: DrawBuffers
     */
    GLCat.prototype.createFramebuffer = function () {
        var gl = this.__gl;
        var framebuffer = gl.createFramebuffer();
        if (framebuffer === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        return new GLCatFramebuffer_1.GLCatFramebuffer(this, framebuffer);
    };
    /**
     * Create a new framebufer, in lazier way.
     */
    GLCat.prototype.lazyFramebuffer = function (width, height, isFloat) {
        if (isFloat === void 0) { isFloat = false; }
        var framebuffer = this.createFramebuffer();
        if (framebuffer === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        var renderbuffer = this.createRenderbuffer();
        if (renderbuffer === null) {
            framebuffer.dispose();
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        renderbuffer.init(width, height);
        framebuffer.attachRenderbuffer(renderbuffer);
        var texture = this.createTexture();
        if (texture === null) {
            framebuffer.dispose();
            renderbuffer.dispose();
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        if (isFloat) {
            texture.setTextureFromFloatArray(width, height, null);
        }
        else {
            texture.setTextureFromArray(width, height, null);
        }
        framebuffer.attachTexture(texture);
        return framebuffer;
    };
    /**
     * Create a new draw buffers, in lazier way.
     * If you can't grab `WEBGL_draw_buffers` extension, you'll die instantly at this point.
     */
    GLCat.prototype.lazyDrawbuffers = function (width, height, numBuffers, isFloat) {
        if (isFloat === void 0) { isFloat = false; }
        var ext = this.getExtension('WEBGL_draw_buffers', true);
        if (ext.MAX_DRAW_BUFFERS_WEBGL < numBuffers) {
            throw Error('GLCat: Maximum draw buffers count exceeded');
        }
        var framebuffer = this.createFramebuffer();
        if (framebuffer === null) {
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        var renderbuffer = this.createRenderbuffer();
        if (renderbuffer === null) {
            framebuffer.dispose();
            throw new Error(GLCat.unexpectedNullDetectedError);
        }
        renderbuffer.init(width, height);
        framebuffer.attachRenderbuffer(renderbuffer);
        for (var i = 0; i < numBuffers; i++) {
            var texture = this.createTexture();
            if (texture === null) {
                framebuffer.dispose();
                renderbuffer.dispose();
                throw new Error(GLCat.unexpectedNullDetectedError);
            }
            if (isFloat) {
                texture.setTextureFromFloatArray(width, height, null);
            }
            else {
                texture.setTextureFromArray(width, height, null);
            }
            framebuffer.attachTexture(texture, ext.COLOR_ATTACHMENT0_WEBGL + i);
        }
        return framebuffer;
    };
    /**
     * Call this before you're gonna use draw buffers.
     * If you can't grab `WEBGL_draw_buffers` extension, you'll die instantly at this point.
     */
    GLCat.prototype.drawBuffers = function (numBuffers) {
        var ext = this.getExtension('WEBGL_draw_buffers', true);
        if (Array.isArray(numBuffers)) {
            ext.drawBuffersWEBGL(numBuffers);
        }
        else {
            var array = [];
            for (var i = 0; i < numBuffers; i++) {
                array[i] = ext.COLOR_ATTACHMENT0_WEBGL + i;
            }
            ext.drawBuffersWEBGL(array);
        }
    };
    /**
     * Clear the current framebuffer.
     */
    GLCat.prototype.clear = function (red, green, blue, alpha, depth) {
        if (red === void 0) { red = 0.0; }
        if (green === void 0) { green = 0.0; }
        if (blue === void 0) { blue = 0.0; }
        if (alpha === void 0) { alpha = 1.0; }
        if (depth === void 0) { depth = 1.0; }
        var gl = this.__gl;
        gl.clearColor(red, green, blue, alpha);
        gl.clearDepth(depth);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    };
    GLCat.unexpectedNullDetectedError = 'GLCat: Unexpected null detected';
    return GLCat;
}());
exports.GLCat = GLCat;


/***/ }),

/***/ "./src/GLCatBuffer.ts":
/*!****************************!*\
  !*** ./src/GLCatBuffer.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GL_1 = __webpack_require__(/*! ./GL */ "./src/GL.ts");
/**
 * It's a WebGLBuffer.
 */
var GLCatBuffer = /** @class */ (function () {
    /**
     * Create a new GLCatBuffer instance.
     */
    function GLCatBuffer(glCat, buffer) {
        this.__glCat = glCat;
        this.__buffer = buffer;
    }
    Object.defineProperty(GLCatBuffer.prototype, "buffer", {
        /**
         * Its own buffer.
         */
        get: function () {
            return this.__buffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatBuffer.prototype, "raw", {
        /**
         * Its own buffer. Shorter than [[GLCatBuffer.buffer]].
         */
        get: function () {
            return this.__buffer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the buffer.
     */
    GLCatBuffer.prototype.dispose = function () {
        this.__glCat.gl.deleteBuffer(this.__buffer);
    };
    /**
     * Set new data into this buffer.
     */
    GLCatBuffer.prototype.setVertexbuffer = function (source, usage) {
        if (usage === void 0) { usage = GL_1.GL.STATIC_DRAW; }
        var gl = this.__glCat.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__buffer);
        gl.bufferData(gl.ARRAY_BUFFER, source, usage);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };
    /**
     * Set new index data into this buffer.
     */
    GLCatBuffer.prototype.setIndexbuffer = function (source, usage) {
        if (usage === void 0) { usage = GL_1.GL.STATIC_DRAW; }
        var gl = this.__glCat.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.__buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, source, usage);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };
    return GLCatBuffer;
}());
exports.GLCatBuffer = GLCatBuffer;


/***/ }),

/***/ "./src/GLCatFramebuffer.ts":
/*!*********************************!*\
  !*** ./src/GLCatFramebuffer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GL_1 = __webpack_require__(/*! ./GL */ "./src/GL.ts");
/**
 * It's a WebGLFramebuffer.
 */
var GLCatFramebuffer = /** @class */ (function () {
    /**
     * Create a new GLCatFramebuffer instance.
     */
    function GLCatFramebuffer(glCat, framebuffer) {
        this.__renderbuffer = null;
        this.__textureMap = {};
        this.__glCat = glCat;
        this.__framebuffer = framebuffer;
    }
    Object.defineProperty(GLCatFramebuffer.prototype, "framebuffer", {
        /**
         * Its own framebuffer.
         */
        get: function () {
            return this.__framebuffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatFramebuffer.prototype, "raw", {
        /**
         * Its own framebuffer. Shorter than [[GLCatFramebuffer.framebuffer]]
         */
        get: function () {
            return this.__framebuffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatFramebuffer.prototype, "renderbuffer", {
        /**
         * Its attached renderbuffer.
         */
        get: function () {
            return this.__renderbuffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatFramebuffer.prototype, "texture", {
        /**
         * Its attached texture.
         * If you want to retrieve other than `COLOR_ATTACHMENT0`, try [[GLCatFramebuffer.getTexture]] instead.
         */
        get: function () {
            return this.__textureMap[GL_1.GL.COLOR_ATTACHMENT0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the framebuffer.
     */
    GLCatFramebuffer.prototype.dispose = function (alsoAttached) {
        if (alsoAttached === void 0) { alsoAttached = false; }
        var gl = this.__glCat.gl;
        gl.deleteFramebuffer(this.__framebuffer);
        if (alsoAttached) {
            if (this.__renderbuffer) {
                gl.deleteRenderbuffer(this.__renderbuffer.raw);
            }
            Object.values(this.__textureMap).forEach(function (texture) {
                gl.deleteTexture(texture.raw);
            });
        }
    };
    /**
     * Retrieve its attached texture.
     */
    GLCatFramebuffer.prototype.getTexture = function (attachment) {
        if (attachment === void 0) { attachment = GL_1.GL.COLOR_ATTACHMENT0; }
        return this.__textureMap[attachment];
    };
    /**
     * Attach a renderbuffer to this framebuffer.
     */
    GLCatFramebuffer.prototype.attachRenderbuffer = function (renderbuffer, attachment) {
        if (attachment === void 0) { attachment = GL_1.GL.DEPTH_ATTACHMENT; }
        var gl = this.__glCat.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.__framebuffer);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachment, gl.RENDERBUFFER, renderbuffer.raw);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        this.__renderbuffer = renderbuffer;
    };
    /**
     * Attach a texture to this framebuffer.
     */
    GLCatFramebuffer.prototype.attachTexture = function (texture, attachment) {
        if (attachment === void 0) { attachment = GL_1.GL.COLOR_ATTACHMENT0; }
        var gl = this.__glCat.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.__framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture.raw, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        this.__textureMap[attachment] = texture;
    };
    return GLCatFramebuffer;
}());
exports.GLCatFramebuffer = GLCatFramebuffer;


/***/ }),

/***/ "./src/GLCatProgram.ts":
/*!*****************************!*\
  !*** ./src/GLCatProgram.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GL_1 = __webpack_require__(/*! ./GL */ "./src/GL.ts");
/**
 * It's a WebGLProgram, but has cache of variable locations.
 */
var GLCatProgram = /** @class */ (function () {
    /**
     * Create a new GLCatProgram instance.
     */
    function GLCatProgram(glCat, program) {
        this.__shaders = null;
        this.__attribLocationCache = {};
        this.__uniformLocationCache = {};
        this.__uniformTextureUnitMap = {};
        this.__uniformtextureUnitIndex = 0;
        this.__linked = false;
        this.__glCat = glCat;
        this.__program = program;
    }
    Object.defineProperty(GLCatProgram.prototype, "program", {
        /**
         * Its own program.
         */
        get: function () {
            return this.__program;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatProgram.prototype, "raw", {
        /**
         * Its own program. Shorter than [[GLCatProgram.program]].
         */
        get: function () {
            return this.__program;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatProgram.prototype, "shaders", {
        /**
         * Its shaders.
         */
        get: function () {
            return this.__shaders ? this.__shaders.concat() : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatProgram.prototype, "isLinked", {
        /**
         * Whether the last link operation was successful or not.
         */
        get: function () {
            return this.__linked;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the program.
     */
    GLCatProgram.prototype.dispose = function (alsoAttached) {
        if (alsoAttached === void 0) { alsoAttached = false; }
        var gl = this.__glCat.gl;
        gl.deleteProgram(this.__program);
        if (alsoAttached) {
            var shaders = this.shaders;
            if (shaders) {
                shaders.forEach(function (shader) {
                    shader.dispose();
                });
            }
        }
    };
    /**
     * Attach shaders and link this program.
     */
    GLCatProgram.prototype.link = function () {
        var _this = this;
        var shaders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shaders[_i] = arguments[_i];
        }
        var gl = this.__glCat.gl;
        shaders.forEach(function (shader) { return gl.attachShader(_this.__program, shader.raw); });
        gl.linkProgram(this.__program);
        this.__linked = gl.getProgramParameter(this.__program, gl.LINK_STATUS);
        if (!this.__linked) {
            throw new Error(gl.getProgramInfoLog(this.__program));
        }
        this.__shaders = shaders.concat();
    };
    /**
     * Attach shaders and link this program.
     * It's gonna be asynchronous if you have the KHR_parallel_shader_compile extension support.
     */
    GLCatProgram.prototype.linkAsync = function () {
        var _this = this;
        var shaders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shaders[_i] = arguments[_i];
        }
        var glCat = this.__glCat;
        var gl = this.__glCat.gl;
        var extParallel = glCat.getExtension('KHR_parallel_shader_compile');
        shaders.forEach(function (shader) { return gl.attachShader(_this.__program, shader.raw); });
        gl.linkProgram(this.__program);
        return new Promise(function (resolve, reject) {
            var update = function () {
                if (!extParallel ||
                    gl.getProgramParameter(_this.__program, extParallel.COMPLETION_STATUS_KHR) === true) {
                    _this.__linked = gl.getProgramParameter(_this.__program, gl.LINK_STATUS);
                    if (!_this.__linked) {
                        reject(gl.getProgramInfoLog(_this.__program));
                        return;
                    }
                    _this.__shaders = shaders.concat();
                    resolve();
                    return;
                }
                requestAnimationFrame(update);
            };
            update();
        });
    };
    /**
     * Attach an attribute variable.
     * @param name Name of the attribute variable
     * @param buffer Vertex buffer. Can be null, to disable attribute array
     * @param size Number of components per vertex. Must be 1, 2, 3 or 4
     */
    GLCatProgram.prototype.attribute = function (name, buffer, size, divisor, type, stride, offset) {
        if (size === void 0) { size = 1; }
        if (divisor === void 0) { divisor = 0; }
        if (type === void 0) { type = GL_1.GL.FLOAT; }
        if (stride === void 0) { stride = 0; }
        if (offset === void 0) { offset = 0; }
        var gl = this.__glCat.gl;
        var location = this.getAttribLocation(name);
        if (location === -1) {
            return;
        }
        if (buffer === null) {
            gl.disableVertexAttribArray(location);
            return;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer.raw);
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, size, type, false, stride, offset);
        var ext = this.__glCat.getExtension('ANGLE_instanced_arrays');
        if (ext) {
            ext.vertexAttribDivisorANGLE(location, divisor);
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };
    /**
     * Attach an uniform variable.
     * See also: [[GLCatProgram.uniformVector]]
     */
    GLCatProgram.prototype.uniform = function (name, type) {
        var value = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            value[_i - 2] = arguments[_i];
        }
        var func = this['uniform' + type];
        func.call.apply(func, __spreadArrays([this, name], value));
    };
    /**
     * Attach an uniform variable.
     * See also: [[GLCatProgram.uniform]]
     */
    GLCatProgram.prototype.uniformVector = function (name, type, value) {
        var func = this['uniform' + type];
        func.call(this, name, value);
    };
    /**
     * Attach an uniform1i variable.
     */
    GLCatProgram.prototype.uniform1i = function (name, value) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform1i(location, value);
    };
    /**
     * Attach an uniform2i variable.
     */
    GLCatProgram.prototype.uniform2i = function (name, x, y) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform2i(location, x, y);
    };
    /**
     * Attach an uniform3i variable.
     */
    GLCatProgram.prototype.uniform3i = function (name, x, y, z) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform3i(location, x, y, z);
    };
    /**
     * Attach an uniform4i variable.
     */
    GLCatProgram.prototype.uniform4i = function (name, x, y, z, w) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform4i(location, x, y, z, w);
    };
    /**
     * Attach an uniform1iv variable.
     */
    GLCatProgram.prototype.uniform1iv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform1iv(location, array);
    };
    /**
     * Attach an uniform2iv variable.
     */
    GLCatProgram.prototype.uniform2iv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform2iv(location, array);
    };
    /**
     * Attach an uniform3iv variable.
     */
    GLCatProgram.prototype.uniform3iv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform3iv(location, array);
    };
    /**
     * Attach an uniform4iv variable.
     */
    GLCatProgram.prototype.uniform4iv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform4iv(location, array);
    };
    /**
     * Attach an uniform1f variable.
     */
    GLCatProgram.prototype.uniform1f = function (name, value) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform1f(location, value);
    };
    /**
     * Attach an uniform2f variable.
     */
    GLCatProgram.prototype.uniform2f = function (name, x, y) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform2f(location, x, y);
    };
    /**
     * Attach an uniform3f variable.
     */
    GLCatProgram.prototype.uniform3f = function (name, x, y, z) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform3f(location, x, y, z);
    };
    /**
     * Attach an uniform4f variable.
     */
    GLCatProgram.prototype.uniform4f = function (name, x, y, z, w) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform4f(location, x, y, z, w);
    };
    /**
     * Attach an uniform1fv variable.
     */
    GLCatProgram.prototype.uniform1fv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform1fv(location, array);
    };
    /**
     * Attach an uniform2fv variable.
     */
    GLCatProgram.prototype.uniform2fv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform2fv(location, array);
    };
    /**
     * Attach an uniform3fv variable.
     */
    GLCatProgram.prototype.uniform3fv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform3fv(location, array);
    };
    /**
     * Attach an uniform4fv variable.
     */
    GLCatProgram.prototype.uniform4fv = function (name, array) {
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniform4fv(location, array);
    };
    /**
     * Attach an uniformMatrix2fv variable.
     */
    GLCatProgram.prototype.uniformMatrix2fv = function (name, array, transpose) {
        if (transpose === void 0) { transpose = false; }
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniformMatrix2fv(location, transpose, array);
    };
    /**
     * Attach an uniformMatrix3fv variable.
     */
    GLCatProgram.prototype.uniformMatrix3fv = function (name, array, transpose) {
        if (transpose === void 0) { transpose = false; }
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniformMatrix3fv(location, transpose, array);
    };
    /**
     * Attach an uniformMatrix4fv variable.
     */
    GLCatProgram.prototype.uniformMatrix4fv = function (name, array, transpose) {
        if (transpose === void 0) { transpose = false; }
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        gl.uniformMatrix4fv(location, transpose, array);
    };
    /**
     * Attach a `sampler2D` type uniform texture.
     * @param name Name of the uniform texture
     * @param texture Texture object
     */
    GLCatProgram.prototype.uniformTexture = function (name, texture) {
        var _a;
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        var unit = this.getUniformTextureUnit(name);
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, ((_a = texture) === null || _a === void 0 ? void 0 : _a.raw) || null);
        gl.uniform1i(location, unit);
    };
    /**
     * Attach a `samplerCube` type uniform texture.
     * @param name Name of the uniform texture
     * @param texture Texture object
     */
    GLCatProgram.prototype.uniformCubemap = function (name, texture) {
        var _a;
        var gl = this.__glCat.gl;
        var location = this.getUniformLocation(name);
        var unit = this.getUniformTextureUnit(name);
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, ((_a = texture) === null || _a === void 0 ? void 0 : _a.raw) || null);
        gl.uniform1i(location, unit);
    };
    /**
     * Retrieve attribute location.
     */
    GLCatProgram.prototype.getAttribLocation = function (name) {
        var gl = this.__glCat.gl;
        if (this.__attribLocationCache[name] !== undefined) {
            return this.__attribLocationCache[name];
        }
        else {
            var location = gl.getAttribLocation(this.__program, name);
            // if ( location === -1 ) {
            //   this.glCat.spit( 'GLCatProgram.getAttribLocation: Could not retrieve attribute location' );
            //   return -1;
            // }
            this.__attribLocationCache[name] = location;
            return location;
        }
    };
    /**
     * Retrieve uniform location.
     */
    GLCatProgram.prototype.getUniformLocation = function (name) {
        var gl = this.__glCat.gl;
        if (this.__uniformLocationCache[name] !== undefined) {
            return this.__uniformLocationCache[name];
        }
        else {
            var location = gl.getUniformLocation(this.__program, name);
            // if ( location === null ) {
            //   this.glCat.spit( 'GLCatProgram.getUniformLocation: Could not retrieve uniform location' );
            //   return location;
            // }
            this.__uniformLocationCache[name] = location;
            return location;
        }
    };
    /**
     * Retrieve or create a texture unit that corresponds to given name.
     */
    GLCatProgram.prototype.getUniformTextureUnit = function (name) {
        if (this.__uniformTextureUnitMap[name] === undefined) {
            this.__uniformTextureUnitMap[name] = this.__uniformtextureUnitIndex;
            this.__uniformtextureUnitIndex++;
        }
        return this.__uniformTextureUnitMap[name];
    };
    return GLCatProgram;
}());
exports.GLCatProgram = GLCatProgram;


/***/ }),

/***/ "./src/GLCatRenderbuffer.ts":
/*!**********************************!*\
  !*** ./src/GLCatRenderbuffer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GL_1 = __webpack_require__(/*! ./GL */ "./src/GL.ts");
/**
 * It's a WebGLRenderbuffer.
 */
var GLCatRenderbuffer = /** @class */ (function () {
    /**
     * Create a new GLCatTexture instance.
     */
    function GLCatRenderbuffer(glCat, renderbuffer) {
        this.__width = 0;
        this.__height = 0;
        this.__glCat = glCat;
        this.__renderbuffer = renderbuffer;
    }
    Object.defineProperty(GLCatRenderbuffer.prototype, "renderbuffer", {
        /**
         * Its own renderbuffer.
         */
        get: function () {
            return this.__renderbuffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatRenderbuffer.prototype, "raw", {
        /**
         * Its own renderbuffer. Shorter than [[GLCatRenderBuffer.renderbuffer]].
         */
        get: function () {
            return this.__renderbuffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatRenderbuffer.prototype, "width", {
        /**
         * Its width.
         */
        get: function () {
            return this.__width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatRenderbuffer.prototype, "height", {
        /**
         * Its height.
         */
        get: function () {
            return this.__height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the renderbuffer.
     */
    GLCatRenderbuffer.prototype.dispose = function () {
        this.__glCat.gl.deleteRenderbuffer(this.__renderbuffer);
    };
    /**
     * Initialize this renderbuffer.
     * If `format` is not given, it will be initialized as `DEPTH_COMPONENT16` .
     */
    GLCatRenderbuffer.prototype.init = function (width, height, format) {
        if (format === void 0) { format = GL_1.GL.DEPTH_COMPONENT16; }
        var gl = this.__glCat.gl;
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.__renderbuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        this.__width = width;
        this.__height = height;
    };
    return GLCatRenderbuffer;
}());
exports.GLCatRenderbuffer = GLCatRenderbuffer;


/***/ }),

/***/ "./src/GLCatShader.ts":
/*!****************************!*\
  !*** ./src/GLCatShader.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * It's a WebGLShader.
 */
var GLCatShader = /** @class */ (function () {
    /**
     * Create a new GLCatShader instance.
     */
    function GLCatShader(glCat, shader) {
        this.__compiled = false;
        this.__glCat = glCat;
        this.__shader = shader;
    }
    Object.defineProperty(GLCatShader.prototype, "shader", {
        /**
         * Its own shader.
         */
        get: function () {
            return this.__shader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatShader.prototype, "raw", {
        /**
         * Its own shader. Shorter than [[GLCatShader.shader]].
         */
        get: function () {
            return this.__shader;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the shader.
     */
    GLCatShader.prototype.dispose = function () {
        this.__glCat.gl.deleteShader(this.__shader);
    };
    /**
     * Return whether the last compilation was successful or not.
     */
    GLCatShader.prototype.isCompiled = function () {
        return this.__compiled;
    };
    /**
     * Compile the shader.
     */
    GLCatShader.prototype.compile = function (code) {
        var gl = this.__glCat.gl;
        gl.shaderSource(this.__shader, code);
        gl.compileShader(this.__shader);
        this.__compiled = gl.getShaderParameter(this.__shader, gl.COMPILE_STATUS);
        if (!this.__compiled) {
            throw new Error(gl.getShaderInfoLog(this.__shader));
        }
    };
    return GLCatShader;
}());
exports.GLCatShader = GLCatShader;


/***/ }),

/***/ "./src/GLCatTexture.ts":
/*!*****************************!*\
  !*** ./src/GLCatTexture.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GL_1 = __webpack_require__(/*! ./GL */ "./src/GL.ts");
var zeroTextureArray = new Uint8Array([0, 0, 0, 0]);
/**
 * It's a WebGLTexture.
 */
var GLCatTexture = /** @class */ (function () {
    /**
     * Create a new GLCatTexture instance.
     */
    function GLCatTexture(glCat, texture) {
        this.__width = 0;
        this.__height = 0;
        this.__glCat = glCat;
        this.__texture = texture;
        this.textureFilter(GL_1.GL.LINEAR);
        this.textureWrap(GL_1.GL.CLAMP_TO_EDGE);
    }
    Object.defineProperty(GLCatTexture.prototype, "texture", {
        /**
         * Its own texture.
         */
        get: function () {
            return this.__texture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatTexture.prototype, "raw", {
        /**
         * Its own texture. Shorter than [[GLCatTexture.textured]]
         */
        get: function () {
            return this.__texture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatTexture.prototype, "width", {
        /**
         * Its width.
         */
        get: function () {
            return this.__width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLCatTexture.prototype, "height", {
        /**
         * Its height.
         */
        get: function () {
            return this.__height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the texture.
     */
    GLCatTexture.prototype.dispose = function () {
        this.__glCat.gl.deleteTexture(this.__texture);
    };
    GLCatTexture.prototype.textureFilter = function (filterMag, filterMin) {
        if (filterMag === void 0) { filterMag = GL_1.GL.NEAREST; }
        if (filterMin === void 0) { filterMin = filterMag; }
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filterMag);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filterMin);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    GLCatTexture.prototype.textureWrap = function (wrapS, wrapT) {
        if (wrapS === void 0) { wrapS = GL_1.GL.CLAMP_TO_EDGE; }
        if (wrapT === void 0) { wrapT = wrapS; }
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    /**
     * Return a value for the passed parameter name.
     * See: https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter
     */
    GLCatTexture.prototype.getParameter = function (pname) {
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.getParameter(pname);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    /**
     * Specify the pixel storage modes.
     * See: https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/pixelStorei
     */
    GLCatTexture.prototype.pixelStorei = function (pname, param) {
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.pixelStorei(pname, param);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    /**
     * Set new data into this texture.
     */
    GLCatTexture.prototype.setTexture = function (source) {
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        gl.bindTexture(gl.TEXTURE_2D, null);
        this.__width = source.width;
        this.__height = source.height;
    };
    /**
     * Set new data into this texture.
     * This function uses `Uint8Array`. If you want to source image data, use `GLCat.setTexture()` instead.
     * Or you want to use float texture? Try this: `GLCat.setTextureFromFloatArray()`
     */
    GLCatTexture.prototype.setTextureFromArray = function (width, height, source, format) {
        if (format === void 0) { format = GL_1.GL.RGBA; }
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, gl.UNSIGNED_BYTE, source);
        gl.bindTexture(gl.TEXTURE_2D, null);
        this.__width = width;
        this.__height = height;
    };
    /**
     * Set new data into this texture.
     * This function uses `Float32Array`.
     * If you can't grab `OES_texture_float` extension here, you will die at this point.
     */
    GLCatTexture.prototype.setTextureFromFloatArray = function (width, height, source, format) {
        if (format === void 0) { format = GL_1.GL.RGBA; }
        var gl = this.__glCat.gl;
        this.__glCat.getExtension('OES_texture_float', true);
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, gl.FLOAT, source);
        if (this.__glCat.getExtension('OES_texture_float_linear') === null) {
            this.textureFilter(gl.NEAREST);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
        this.__width = width;
        this.__height = height;
    };
    /**
     * Copy pixels from current framebuffer to given texture.
     */
    GLCatTexture.prototype.copyTexture = function (width, height) {
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.__texture);
        gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, width, height, 0);
        gl.bindTexture(gl.TEXTURE_2D, null);
        this.__width = width;
        this.__height = height;
    };
    /**
     * Set new cubemap data into this texture.
     * @param textures Array of iamges. Order: `X+`, `X-`, `Y+`, `Y-`, `Z+`, `Z-`
     * @todo due to compatibility of its `width` and `height` it should not be used yet
     */
    GLCatTexture.prototype.setCubemap = function (textures) {
        var gl = this.__glCat.gl;
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.__texture);
        for (var i = 0; i < 6; i++) {
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textures[i]);
        }
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    };
    /**
     * Set [ 0, 0, 0, 0 ] to this texture.
     * Useful for temporary use..
     */
    GLCatTexture.prototype.setZeroTexture = function () {
        this.setTextureFromArray(1, 1, zeroTextureArray);
    };
    return GLCatTexture;
}());
exports.GLCatTexture = GLCatTexture;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./GL */ "./src/GL.ts"));
__export(__webpack_require__(/*! ./GLCat */ "./src/GLCat.ts"));
__export(__webpack_require__(/*! ./GLCatBuffer */ "./src/GLCatBuffer.ts"));
__export(__webpack_require__(/*! ./GLCatFramebuffer */ "./src/GLCatFramebuffer.ts"));
__export(__webpack_require__(/*! ./GLCatProgram */ "./src/GLCatProgram.ts"));
__export(__webpack_require__(/*! ./GLCatRenderbuffer */ "./src/GLCatRenderbuffer.ts"));
__export(__webpack_require__(/*! ./GLCatShader */ "./src/GLCatShader.ts"));
__export(__webpack_require__(/*! ./GLCatTexture */ "./src/GLCatTexture.ts"));


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvR0wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dMQ2F0LnRzIiwid2VicGFjazovLy8uL3NyYy9HTENhdEJ1ZmZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR0xDYXRGcmFtZWJ1ZmZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR0xDYXRQcm9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9HTENhdFJlbmRlcmJ1ZmZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR0xDYXRTaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dMQ2F0VGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEdBQUc7O1FBRUg7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoVGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUMzQyx5QkFBeUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDckQscUJBQXFCLG1CQUFPLENBQUMsNkNBQWdCO0FBQzdDLDBCQUEwQixtQkFBTyxDQUFDLHVEQUFxQjtBQUN2RCxvQkFBb0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUMzQyxxQkFBcUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywrQ0FBK0MsRUFBRTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQy9aYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFdBQVcsbUJBQU8sQ0FBQyx5QkFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM3RWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzVEYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFdBQVcsbUJBQU8sQ0FBQyx5QkFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDZCQUE2QjtBQUNoRSxtQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RCwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdkxhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLHlCQUFNO0FBQ3ZCLFNBQVMsbUJBQU8sQ0FBQywrQkFBUztBQUMxQixTQUFTLG1CQUFPLENBQUMsMkNBQWU7QUFDaEMsU0FBUyxtQkFBTyxDQUFDLHFEQUFvQjtBQUNyQyxTQUFTLG1CQUFPLENBQUMsNkNBQWdCO0FBQ2pDLFNBQVMsbUJBQU8sQ0FBQyx1REFBcUI7QUFDdEMsU0FBUyxtQkFBTyxDQUFDLDJDQUFlO0FBQ2hDLFNBQVMsbUJBQU8sQ0FBQyw2Q0FBZ0IiLCJmaWxlIjoiZ2xjYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0dGhpc1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCIxOWJmOGQ1NjZkYmQyMDNmMDljYlwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJnbGNhdC5qc1wiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9pbmRleC50c1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdMID0ge1xuICAgIEFDVElWRV9BVFRSSUJVVEVTOiAzNTcyMSxcbiAgICBBQ1RJVkVfQVRUUklCVVRFX01BWF9MRU5HVEg6IDM1NzIyLFxuICAgIEFDVElWRV9URVhUVVJFOiAzNDAxNixcbiAgICBBQ1RJVkVfVU5JRk9STVM6IDM1NzE4LFxuICAgIEFDVElWRV9VTklGT1JNX01BWF9MRU5HVEg6IDM1NzE5LFxuICAgIEFMSUFTRURfTElORV9XSURUSF9SQU5HRTogMzM5MDIsXG4gICAgQUxJQVNFRF9QT0lOVF9TSVpFX1JBTkdFOiAzMzkwMSxcbiAgICBBTFBIQTogNjQwNixcbiAgICBBTFBIQV9CSVRTOiAzNDEzLFxuICAgIEFMV0FZUzogNTE5LFxuICAgIEFSUkFZX0JVRkZFUjogMzQ5NjIsXG4gICAgQVJSQVlfQlVGRkVSX0JJTkRJTkc6IDM0OTY0LFxuICAgIEFUVEFDSEVEX1NIQURFUlM6IDM1NzE3LFxuICAgIEJBQ0s6IDEwMjksXG4gICAgQkxFTkQ6IDMwNDIsXG4gICAgQkxFTkRfQ09MT1I6IDMyNzczLFxuICAgIEJMRU5EX0RTVF9BTFBIQTogMzI5NzAsXG4gICAgQkxFTkRfRFNUX1JHQjogMzI5NjgsXG4gICAgQkxFTkRfRVFVQVRJT046IDMyNzc3LFxuICAgIEJMRU5EX0VRVUFUSU9OX0FMUEhBOiAzNDg3NyxcbiAgICBCTEVORF9FUVVBVElPTl9SR0I6IDMyNzc3LFxuICAgIEJMRU5EX1NSQ19BTFBIQTogMzI5NzEsXG4gICAgQkxFTkRfU1JDX1JHQjogMzI5NjksXG4gICAgQkxVRV9CSVRTOiAzNDEyLFxuICAgIEJPT0w6IDM1NjcwLFxuICAgIEJPT0xfVkVDMjogMzU2NzEsXG4gICAgQk9PTF9WRUMzOiAzNTY3MixcbiAgICBCT09MX1ZFQzQ6IDM1NjczLFxuICAgIEJST1dTRVJfREVGQVVMVF9XRUJHTDogMzc0NDQsXG4gICAgQlVGRkVSX1NJWkU6IDM0NjYwLFxuICAgIEJVRkZFUl9VU0FHRTogMzQ2NjEsXG4gICAgQllURTogNTEyMCxcbiAgICBDQ1c6IDIzMDUsXG4gICAgQ0xBTVBfVE9fRURHRTogMzMwNzEsXG4gICAgQ09MT1JfQVRUQUNITUVOVDA6IDM2MDY0LFxuICAgIENPTE9SX0JVRkZFUl9CSVQ6IDE2Mzg0LFxuICAgIENPTE9SX0NMRUFSX1ZBTFVFOiAzMTA2LFxuICAgIENPTE9SX1dSSVRFTUFTSzogMzEwNyxcbiAgICBDT01QSUxFX1NUQVRVUzogMzU3MTMsXG4gICAgQ09NUFJFU1NFRF9URVhUVVJFX0ZPUk1BVFM6IDM0NDY3LFxuICAgIENPTlNUQU5UX0FMUEhBOiAzMjc3MSxcbiAgICBDT05TVEFOVF9DT0xPUjogMzI3NjksXG4gICAgQ09OVEVYVF9MT1NUX1dFQkdMOiAzNzQ0MixcbiAgICBDVUxMX0ZBQ0U6IDI4ODQsXG4gICAgQ1VMTF9GQUNFX01PREU6IDI4ODUsXG4gICAgQ1VSUkVOVF9QUk9HUkFNOiAzNTcyNSxcbiAgICBDVVJSRU5UX1ZFUlRFWF9BVFRSSUI6IDM0MzQyLFxuICAgIENXOiAyMzA0LFxuICAgIERFQ1I6IDc2ODMsXG4gICAgREVDUl9XUkFQOiAzNDA1NixcbiAgICBERUxFVEVfU1RBVFVTOiAzNTcxMixcbiAgICBERVBUSF9BVFRBQ0hNRU5UOiAzNjA5NixcbiAgICBERVBUSF9CSVRTOiAzNDE0LFxuICAgIERFUFRIX0JVRkZFUl9CSVQ6IDI1NixcbiAgICBERVBUSF9DTEVBUl9WQUxVRTogMjkzMSxcbiAgICBERVBUSF9DT01QT05FTlQ6IDY0MDIsXG4gICAgREVQVEhfQ09NUE9ORU5UMTY6IDMzMTg5LFxuICAgIERFUFRIX0ZVTkM6IDI5MzIsXG4gICAgREVQVEhfUkFOR0U6IDI5MjgsXG4gICAgREVQVEhfU1RFTkNJTDogMzQwNDEsXG4gICAgREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UOiAzMzMwNixcbiAgICBERVBUSF9URVNUOiAyOTI5LFxuICAgIERFUFRIX1dSSVRFTUFTSzogMjkzMCxcbiAgICBESVRIRVI6IDMwMjQsXG4gICAgRE9OVF9DQVJFOiA0MzUyLFxuICAgIERTVF9BTFBIQTogNzcyLFxuICAgIERTVF9DT0xPUjogNzc0LFxuICAgIERZTkFNSUNfRFJBVzogMzUwNDgsXG4gICAgRUxFTUVOVF9BUlJBWV9CVUZGRVI6IDM0OTYzLFxuICAgIEVMRU1FTlRfQVJSQVlfQlVGRkVSX0JJTkRJTkc6IDM0OTY1LFxuICAgIEVRVUFMOiA1MTQsXG4gICAgRkFTVEVTVDogNDM1MyxcbiAgICBGTE9BVDogNTEyNixcbiAgICBGTE9BVF9NQVQyOiAzNTY3NCxcbiAgICBGTE9BVF9NQVQzOiAzNTY3NSxcbiAgICBGTE9BVF9NQVQ0OiAzNTY3NixcbiAgICBGTE9BVF9WRUMyOiAzNTY2NCxcbiAgICBGTE9BVF9WRUMzOiAzNTY2NSxcbiAgICBGTE9BVF9WRUM0OiAzNTY2NixcbiAgICBGUkFHTUVOVF9TSEFERVI6IDM1NjMyLFxuICAgIEZSQU1FQlVGRkVSOiAzNjE2MCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX09CSkVDVF9OQU1FOiAzNjA0OSxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX09CSkVDVF9UWVBFOiAzNjA0OCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1RFWFRVUkVfQ1VCRV9NQVBfRkFDRTogMzYwNTEsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9URVhUVVJFX0xFVkVMOiAzNjA1MCxcbiAgICBGUkFNRUJVRkZFUl9CSU5ESU5HOiAzNjAwNixcbiAgICBGUkFNRUJVRkZFUl9DT01QTEVURTogMzYwNTMsXG4gICAgRlJBTUVCVUZGRVJfSU5DT01QTEVURV9BVFRBQ0hNRU5UOiAzNjA1NCxcbiAgICBGUkFNRUJVRkZFUl9JTkNPTVBMRVRFX0RJTUVOU0lPTlM6IDM2MDU3LFxuICAgIEZSQU1FQlVGRkVSX0lOQ09NUExFVEVfTUlTU0lOR19BVFRBQ0hNRU5UOiAzNjA1NSxcbiAgICBGUkFNRUJVRkZFUl9VTlNVUFBPUlRFRDogMzYwNjEsXG4gICAgRlJPTlQ6IDEwMjgsXG4gICAgRlJPTlRfQU5EX0JBQ0s6IDEwMzIsXG4gICAgRlJPTlRfRkFDRTogMjg4NixcbiAgICBGVU5DX0FERDogMzI3NzQsXG4gICAgRlVOQ19SRVZFUlNFX1NVQlRSQUNUOiAzMjc3OSxcbiAgICBGVU5DX1NVQlRSQUNUOiAzMjc3OCxcbiAgICBHRU5FUkFURV9NSVBNQVBfSElOVDogMzMxNzAsXG4gICAgR0VRVUFMOiA1MTgsXG4gICAgR1JFQVRFUjogNTE2LFxuICAgIEdSRUVOX0JJVFM6IDM0MTEsXG4gICAgSElHSF9GTE9BVDogMzYzMzgsXG4gICAgSElHSF9JTlQ6IDM2MzQxLFxuICAgIElOQ1I6IDc2ODIsXG4gICAgSU5DUl9XUkFQOiAzNDA1NSxcbiAgICBJTkZPX0xPR19MRU5HVEg6IDM1NzE2LFxuICAgIElOVDogNTEyNCxcbiAgICBJTlRfVkVDMjogMzU2NjcsXG4gICAgSU5UX1ZFQzM6IDM1NjY4LFxuICAgIElOVF9WRUM0OiAzNTY2OSxcbiAgICBJTlZBTElEX0VOVU06IDEyODAsXG4gICAgSU5WQUxJRF9GUkFNRUJVRkZFUl9PUEVSQVRJT046IDEyODYsXG4gICAgSU5WQUxJRF9PUEVSQVRJT046IDEyODIsXG4gICAgSU5WQUxJRF9WQUxVRTogMTI4MSxcbiAgICBJTlZFUlQ6IDUzODYsXG4gICAgS0VFUDogNzY4MCxcbiAgICBMRVFVQUw6IDUxNSxcbiAgICBMRVNTOiA1MTMsXG4gICAgTElORUFSOiA5NzI5LFxuICAgIExJTkVBUl9NSVBNQVBfTElORUFSOiA5OTg3LFxuICAgIExJTkVBUl9NSVBNQVBfTkVBUkVTVDogOTk4NSxcbiAgICBMSU5FUzogMSxcbiAgICBMSU5FX0xPT1A6IDIsXG4gICAgTElORV9TVFJJUDogMyxcbiAgICBMSU5FX1dJRFRIOiAyODQ5LFxuICAgIExJTktfU1RBVFVTOiAzNTcxNCxcbiAgICBMT1dfRkxPQVQ6IDM2MzM2LFxuICAgIExPV19JTlQ6IDM2MzM5LFxuICAgIExVTUlOQU5DRTogNjQwOSxcbiAgICBMVU1JTkFOQ0VfQUxQSEE6IDY0MTAsXG4gICAgTUFYX0NPTUJJTkVEX1RFWFRVUkVfSU1BR0VfVU5JVFM6IDM1NjYxLFxuICAgIE1BWF9DVUJFX01BUF9URVhUVVJFX1NJWkU6IDM0MDc2LFxuICAgIE1BWF9GUkFHTUVOVF9VTklGT1JNX1ZFQ1RPUlM6IDM2MzQ5LFxuICAgIE1BWF9SRU5ERVJCVUZGRVJfU0laRTogMzQwMjQsXG4gICAgTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFM6IDM0OTMwLFxuICAgIE1BWF9URVhUVVJFX1NJWkU6IDMzNzksXG4gICAgTUFYX1ZBUllJTkdfVkVDVE9SUzogMzYzNDgsXG4gICAgTUFYX1ZFUlRFWF9BVFRSSUJTOiAzNDkyMSxcbiAgICBNQVhfVkVSVEVYX1RFWFRVUkVfSU1BR0VfVU5JVFM6IDM1NjYwLFxuICAgIE1BWF9WRVJURVhfVU5JRk9STV9WRUNUT1JTOiAzNjM0NyxcbiAgICBNQVhfVklFV1BPUlRfRElNUzogMzM4NixcbiAgICBNRURJVU1fRkxPQVQ6IDM2MzM3LFxuICAgIE1FRElVTV9JTlQ6IDM2MzQwLFxuICAgIE1JUlJPUkVEX1JFUEVBVDogMzM2NDgsXG4gICAgTkVBUkVTVDogOTcyOCxcbiAgICBORUFSRVNUX01JUE1BUF9MSU5FQVI6IDk5ODYsXG4gICAgTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDogOTk4NCxcbiAgICBORVZFUjogNTEyLFxuICAgIE5JQ0VTVDogNDM1NCxcbiAgICBOT05FOiAwLFxuICAgIE5PVEVRVUFMOiA1MTcsXG4gICAgTk9fRVJST1I6IDAsXG4gICAgTlVNX0NPTVBSRVNTRURfVEVYVFVSRV9GT1JNQVRTOiAzNDQ2NixcbiAgICBPTkU6IDEsXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0FMUEhBOiAzMjc3MixcbiAgICBPTkVfTUlOVVNfQ09OU1RBTlRfQ09MT1I6IDMyNzcwLFxuICAgIE9ORV9NSU5VU19EU1RfQUxQSEE6IDc3MyxcbiAgICBPTkVfTUlOVVNfRFNUX0NPTE9SOiA3NzUsXG4gICAgT05FX01JTlVTX1NSQ19BTFBIQTogNzcxLFxuICAgIE9ORV9NSU5VU19TUkNfQ09MT1I6IDc2OSxcbiAgICBPVVRfT0ZfTUVNT1JZOiAxMjg1LFxuICAgIFBBQ0tfQUxJR05NRU5UOiAzMzMzLFxuICAgIFBPSU5UUzogMCxcbiAgICBQT0xZR09OX09GRlNFVF9GQUNUT1I6IDMyODI0LFxuICAgIFBPTFlHT05fT0ZGU0VUX0ZJTEw6IDMyODIzLFxuICAgIFBPTFlHT05fT0ZGU0VUX1VOSVRTOiAxMDc1MixcbiAgICBSRURfQklUUzogMzQxMCxcbiAgICBSRU5ERVJCVUZGRVI6IDM2MTYxLFxuICAgIFJFTkRFUkJVRkZFUl9BTFBIQV9TSVpFOiAzNjE3OSxcbiAgICBSRU5ERVJCVUZGRVJfQklORElORzogMzYwMDcsXG4gICAgUkVOREVSQlVGRkVSX0JMVUVfU0laRTogMzYxNzgsXG4gICAgUkVOREVSQlVGRkVSX0RFUFRIX1NJWkU6IDM2MTgwLFxuICAgIFJFTkRFUkJVRkZFUl9HUkVFTl9TSVpFOiAzNjE3NyxcbiAgICBSRU5ERVJCVUZGRVJfSEVJR0hUOiAzNjE2MyxcbiAgICBSRU5ERVJCVUZGRVJfSU5URVJOQUxfRk9STUFUOiAzNjE2NCxcbiAgICBSRU5ERVJCVUZGRVJfUkVEX1NJWkU6IDM2MTc2LFxuICAgIFJFTkRFUkJVRkZFUl9TVEVOQ0lMX1NJWkU6IDM2MTgxLFxuICAgIFJFTkRFUkJVRkZFUl9XSURUSDogMzYxNjIsXG4gICAgUkVOREVSRVI6IDc5MzcsXG4gICAgUkVQRUFUOiAxMDQ5NyxcbiAgICBSRVBMQUNFOiA3NjgxLFxuICAgIFJHQjogNjQwNyxcbiAgICBSR0I1X0ExOiAzMjg1NSxcbiAgICBSR0I1NjU6IDM2MTk0LFxuICAgIFJHQkE6IDY0MDgsXG4gICAgUkdCQTQ6IDMyODU0LFxuICAgIFNBTVBMRVJfMkQ6IDM1Njc4LFxuICAgIFNBTVBMRVJfQ1VCRTogMzU2ODAsXG4gICAgU0FNUExFUzogMzI5MzcsXG4gICAgU0FNUExFX0FMUEhBX1RPX0NPVkVSQUdFOiAzMjkyNixcbiAgICBTQU1QTEVfQlVGRkVSUzogMzI5MzYsXG4gICAgU0FNUExFX0NPVkVSQUdFOiAzMjkyOCxcbiAgICBTQU1QTEVfQ09WRVJBR0VfSU5WRVJUOiAzMjkzOSxcbiAgICBTQU1QTEVfQ09WRVJBR0VfVkFMVUU6IDMyOTM4LFxuICAgIFNDSVNTT1JfQk9YOiAzMDg4LFxuICAgIFNDSVNTT1JfVEVTVDogMzA4OSxcbiAgICBTSEFERVJfQ09NUElMRVI6IDM2MzQ2LFxuICAgIFNIQURFUl9TT1VSQ0VfTEVOR1RIOiAzNTcyMCxcbiAgICBTSEFERVJfVFlQRTogMzU2NjMsXG4gICAgU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OOiAzNTcyNCxcbiAgICBTSE9SVDogNTEyMixcbiAgICBTUkNfQUxQSEE6IDc3MCxcbiAgICBTUkNfQUxQSEFfU0FUVVJBVEU6IDc3NixcbiAgICBTUkNfQ09MT1I6IDc2OCxcbiAgICBTVEFUSUNfRFJBVzogMzUwNDQsXG4gICAgU1RFTkNJTF9BVFRBQ0hNRU5UOiAzNjEyOCxcbiAgICBTVEVOQ0lMX0JBQ0tfRkFJTDogMzQ4MTcsXG4gICAgU1RFTkNJTF9CQUNLX0ZVTkM6IDM0ODE2LFxuICAgIFNURU5DSUxfQkFDS19QQVNTX0RFUFRIX0ZBSUw6IDM0ODE4LFxuICAgIFNURU5DSUxfQkFDS19QQVNTX0RFUFRIX1BBU1M6IDM0ODE5LFxuICAgIFNURU5DSUxfQkFDS19SRUY6IDM2MDAzLFxuICAgIFNURU5DSUxfQkFDS19WQUxVRV9NQVNLOiAzNjAwNCxcbiAgICBTVEVOQ0lMX0JBQ0tfV1JJVEVNQVNLOiAzNjAwNSxcbiAgICBTVEVOQ0lMX0JJVFM6IDM0MTUsXG4gICAgU1RFTkNJTF9CVUZGRVJfQklUOiAxMDI0LFxuICAgIFNURU5DSUxfQ0xFQVJfVkFMVUU6IDI5NjEsXG4gICAgU1RFTkNJTF9GQUlMOiAyOTY0LFxuICAgIFNURU5DSUxfRlVOQzogMjk2MixcbiAgICBTVEVOQ0lMX0lOREVYOiA2NDAxLFxuICAgIFNURU5DSUxfSU5ERVg4OiAzNjE2OCxcbiAgICBTVEVOQ0lMX1BBU1NfREVQVEhfRkFJTDogMjk2NSxcbiAgICBTVEVOQ0lMX1BBU1NfREVQVEhfUEFTUzogMjk2NixcbiAgICBTVEVOQ0lMX1JFRjogMjk2NyxcbiAgICBTVEVOQ0lMX1RFU1Q6IDI5NjAsXG4gICAgU1RFTkNJTF9WQUxVRV9NQVNLOiAyOTYzLFxuICAgIFNURU5DSUxfV1JJVEVNQVNLOiAyOTY4LFxuICAgIFNUUkVBTV9EUkFXOiAzNTA0MCxcbiAgICBTVUJQSVhFTF9CSVRTOiAzNDA4LFxuICAgIFRFWFRVUkU6IDU4OTAsXG4gICAgVEVYVFVSRTA6IDMzOTg0LFxuICAgIFRFWFRVUkUxOiAzMzk4NSxcbiAgICBURVhUVVJFMjogMzM5ODYsXG4gICAgVEVYVFVSRTM6IDMzOTg3LFxuICAgIFRFWFRVUkU0OiAzMzk4OCxcbiAgICBURVhUVVJFNTogMzM5ODksXG4gICAgVEVYVFVSRTY6IDMzOTkwLFxuICAgIFRFWFRVUkU3OiAzMzk5MSxcbiAgICBURVhUVVJFODogMzM5OTIsXG4gICAgVEVYVFVSRTk6IDMzOTkzLFxuICAgIFRFWFRVUkUxMDogMzM5OTQsXG4gICAgVEVYVFVSRTExOiAzMzk5NSxcbiAgICBURVhUVVJFMTI6IDMzOTk2LFxuICAgIFRFWFRVUkUxMzogMzM5OTcsXG4gICAgVEVYVFVSRTE0OiAzMzk5OCxcbiAgICBURVhUVVJFMTU6IDMzOTk5LFxuICAgIFRFWFRVUkUxNjogMzQwMDAsXG4gICAgVEVYVFVSRTE3OiAzNDAwMSxcbiAgICBURVhUVVJFMTg6IDM0MDAyLFxuICAgIFRFWFRVUkUxOTogMzQwMDMsXG4gICAgVEVYVFVSRTIwOiAzNDAwNCxcbiAgICBURVhUVVJFMjE6IDM0MDA1LFxuICAgIFRFWFRVUkUyMjogMzQwMDYsXG4gICAgVEVYVFVSRTIzOiAzNDAwNyxcbiAgICBURVhUVVJFMjQ6IDM0MDA4LFxuICAgIFRFWFRVUkUyNTogMzQwMDksXG4gICAgVEVYVFVSRTI2OiAzNDAxMCxcbiAgICBURVhUVVJFMjc6IDM0MDExLFxuICAgIFRFWFRVUkUyODogMzQwMTIsXG4gICAgVEVYVFVSRTI5OiAzNDAxMyxcbiAgICBURVhUVVJFMzA6IDM0MDE0LFxuICAgIFRFWFRVUkUzMTogMzQwMTUsXG4gICAgVEVYVFVSRV8yRDogMzU1MyxcbiAgICBURVhUVVJFX0JJTkRJTkdfMkQ6IDMyODczLFxuICAgIFRFWFRVUkVfQklORElOR19DVUJFX01BUDogMzQwNjgsXG4gICAgVEVYVFVSRV9DVUJFX01BUDogMzQwNjcsXG4gICAgVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YOiAzNDA3MCxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1k6IDM0MDcyLFxuICAgIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWjogMzQwNzQsXG4gICAgVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YOiAzNDA2OSxcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1k6IDM0MDcxLFxuICAgIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWjogMzQwNzMsXG4gICAgVEVYVFVSRV9NQUdfRklMVEVSOiAxMDI0MCxcbiAgICBURVhUVVJFX01JTl9GSUxURVI6IDEwMjQxLFxuICAgIFRFWFRVUkVfV1JBUF9TOiAxMDI0MixcbiAgICBURVhUVVJFX1dSQVBfVDogMTAyNDMsXG4gICAgVFJJQU5HTEVTOiA0LFxuICAgIFRSSUFOR0xFX0ZBTjogNixcbiAgICBUUklBTkdMRV9TVFJJUDogNSxcbiAgICBVTlBBQ0tfQUxJR05NRU5UOiAzMzE3LFxuICAgIFVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0w6IDM3NDQzLFxuICAgIFVOUEFDS19GTElQX1lfV0VCR0w6IDM3NDQwLFxuICAgIFVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTDogMzc0NDEsXG4gICAgVU5TSUdORURfQllURTogNTEyMSxcbiAgICBVTlNJR05FRF9JTlQ6IDUxMjUsXG4gICAgVU5TSUdORURfU0hPUlQ6IDUxMjMsXG4gICAgVU5TSUdORURfU0hPUlRfNF80XzRfNDogMzI4MTksXG4gICAgVU5TSUdORURfU0hPUlRfNV81XzVfMTogMzI4MjAsXG4gICAgVU5TSUdORURfU0hPUlRfNV82XzU6IDMzNjM1LFxuICAgIFZBTElEQVRFX1NUQVRVUzogMzU3MTUsXG4gICAgVkVORE9SOiA3OTM2LFxuICAgIFZFUlNJT046IDc5MzgsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9CVUZGRVJfQklORElORzogMzQ5NzUsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9FTkFCTEVEOiAzNDMzOCxcbiAgICBWRVJURVhfQVRUUklCX0FSUkFZX05PUk1BTElaRUQ6IDM0OTIyLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfUE9JTlRFUjogMzQzNzMsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9TSVpFOiAzNDMzOSxcbiAgICBWRVJURVhfQVRUUklCX0FSUkFZX1NUUklERTogMzQzNDAsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9UWVBFOiAzNDM0MSxcbiAgICBWRVJURVhfU0hBREVSOiAzNTYzMyxcbiAgICBWSUVXUE9SVDogMjk3OCxcbiAgICBaRVJPOiAwXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xDYXRCdWZmZXJfMSA9IHJlcXVpcmUoXCIuL0dMQ2F0QnVmZmVyXCIpO1xudmFyIEdMQ2F0RnJhbWVidWZmZXJfMSA9IHJlcXVpcmUoXCIuL0dMQ2F0RnJhbWVidWZmZXJcIik7XG52YXIgR0xDYXRQcm9ncmFtXzEgPSByZXF1aXJlKFwiLi9HTENhdFByb2dyYW1cIik7XG52YXIgR0xDYXRSZW5kZXJidWZmZXJfMSA9IHJlcXVpcmUoXCIuL0dMQ2F0UmVuZGVyYnVmZmVyXCIpO1xudmFyIEdMQ2F0U2hhZGVyXzEgPSByZXF1aXJlKFwiLi9HTENhdFNoYWRlclwiKTtcbnZhciBHTENhdFRleHR1cmVfMSA9IHJlcXVpcmUoXCIuL0dMQ2F0VGV4dHVyZVwiKTtcbi8qKlxuICogV2ViR0wgd3JhcHBlciB3aXRoIHBsZW50eSBvZiBoYWNrYWJpbGl0eS5cbiAqL1xudmFyIEdMQ2F0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBHTENhdCBpbnN0YW5jZS5cbiAgICAgKiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gR0xDYXQoZ2wpIHtcbiAgICAgICAgdGhpcy5fX2V4dGVuc2lvbkNhY2hlID0ge307XG4gICAgICAgIHRoaXMuX19nbCA9IGdsO1xuICAgICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgICAgIGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpO1xuICAgICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgICAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0LnByb3RvdHlwZSwgXCJyZW5kZXJpbmdDb250ZXh0XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2dsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXQucHJvdG90eXBlLCBcImdsXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gV2ViR0xSZW5kZXJpbmdDb250ZXh0LiBTaG9ydGVyIHRoYW4gW1tHTENhdC5yZW5kZXJpbmdDb250ZXh0XV1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19nbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0LnByb3RvdHlwZSwgXCJkdW1teVRleHR1cmVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBkdW1teSB0ZXh0dXJlLCAxMDAlIG9yZ2FuaWMgcHVyZSAjRkYwMEZGIHRleHR1cmUuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fZHVtbXlUZXh0dXJlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2R1bW15VGV4dHVyZUNhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXh0dXJlLnNldFRleHR1cmVGcm9tQXJyYXkoMSwgMSwgbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMCwgMjU1LCAyNTVdKSk7XG4gICAgICAgICAgICB0aGlzLl9fZHVtbXlUZXh0dXJlQ2FjaGUgPSB0ZXh0dXJlO1xuICAgICAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIGFuIGV4dGVuc2lvbi5cbiAgICAgKiBJZiB0aGV5IGlzIHlvdXIgcHJlY2lvdXMgb25lIGFuZCB5b3UgY2Fubm90IGxpdmUgd2l0aG91dCBoaW0sIHR1cm4gb24gYHRocm93SWZOb3RGb3VuZGAuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmdldEV4dGVuc2lvbiA9IGZ1bmN0aW9uIChuYW1lLCB0aHJvd0lmTm90Rm91bmQpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICBpZiAodGhpcy5fX2V4dGVuc2lvbkNhY2hlW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2V4dGVuc2lvbkNhY2hlW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX2V4dGVuc2lvbkNhY2hlW25hbWVdID0gZ2wuZ2V0RXh0ZW5zaW9uKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19leHRlbnNpb25DYWNoZVtuYW1lXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZXh0ZW5zaW9uQ2FjaGVbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhyb3dJZk5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR0xDYXQuZ2V0RXh0ZW5zaW9uOiBUaGUgZXh0ZW5zaW9uIFwiJyArIG5hbWUgKyAnXCIgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgZXh0ZW5zaW9ucy5cbiAgICAgKiBJZiB0aGV5IGFyZSB5b3VyIHByZWNpb3VzIG9uZXMgYW5kIHlvdSBjYW5ub3QgbGl2ZSB3aXRob3V0IHRoZW0sIHR1cm4gb24gYHRocm93SWZOb3RGb3VuZGAuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmdldEV4dGVuc2lvbnMgPSBmdW5jdGlvbiAobmFtZXMsIHRocm93SWZOb3RGb3VuZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmFtZXMubWFwKGZ1bmN0aW9uIChuKSB7IHJldHVybiBfdGhpcy5nZXRFeHRlbnNpb24obiwgdGhyb3dJZk5vdEZvdW5kKTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgc2hhZGVyIG9iamVjdC5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUuY3JlYXRlU2hhZGVyID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgICAgICBpZiAoc2hhZGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdMQ2F0U2hhZGVyXzEuR0xDYXRTaGFkZXIodGhpcywgc2hhZGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBHTENhdCBwcm9ncmFtIG9iamVjdC5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUuY3JlYXRlUHJvZ3JhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgICAgaWYgKHByb2dyYW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR0xDYXRQcm9ncmFtXzEuR0xDYXRQcm9ncmFtKHRoaXMsIHByb2dyYW0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEdMQ2F0IHByb2dyYW0gb2JqZWN0LCBpbiBsYXppZXIgd2F5LlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5sYXp5UHJvZ3JhbSA9IGZ1bmN0aW9uICh2ZXJ0LCBmcmFnKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgLy8gPT0gdmVydCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICAgICAgaWYgKHZlcnRleFNoYWRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5jb21waWxlKHZlcnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyA9PSBmcmFnID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgdmFyIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICAgICAgaWYgKGZyYWdtZW50U2hhZGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyLmNvbXBpbGUoZnJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIC8vID09IHByb2dyYW0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICBpZiAocHJvZ3JhbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9ncmFtLmxpbmsodmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBwcm9ncmFtLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXQgcHJvZ3JhbSBvYmplY3QsIGluIGxhemllciB3YXkuXG4gICAgICogSXQncyBnb25uYSBiZSBhc3luY2hyb25vdXMgaWYgeW91IGhhdmUgdGhlIEtIUl9wYXJhbGxlbF9zaGFkZXJfY29tcGlsZSBleHRlbnNpb24gc3VwcG9ydC5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUubGF6eVByb2dyYW1Bc3luYyA9IGZ1bmN0aW9uICh2ZXJ0LCBmcmFnKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgLy8gPT0gdmVydCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICAgICAgaWYgKHZlcnRleFNoYWRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyLmNvbXBpbGUodmVydCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gPT0gZnJhZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICAgIGlmIChmcmFnbWVudFNoYWRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyLmNvbXBpbGUoZnJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gPT0gcHJvZ3JhbSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICAgIGlmIChwcm9ncmFtID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZ3JhbS5saW5rQXN5bmModmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBwcm9ncmFtLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIHByb2dyYW0gdG8gdXNlLlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS51c2VQcm9ncmFtID0gZnVuY3Rpb24gKHByb2dyYW0pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2w7XG4gICAgICAgIGdsLnVzZVByb2dyYW0oKChfYSA9IHByb2dyYW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yYXcpIHx8IG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHZlcnRleCBidWZmZXIuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmNyZWF0ZUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICB2YXIgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIGlmIChidWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR0xDYXRCdWZmZXJfMS5HTENhdEJ1ZmZlcih0aGlzLCBidWZmZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHRleHR1cmUuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmNyZWF0ZVRleHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgdmFyIHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGlmICh0ZXh0dXJlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdMQ2F0VGV4dHVyZV8xLkdMQ2F0VGV4dHVyZSh0aGlzLCB0ZXh0dXJlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyByZW5kZXJidWZmZXIuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmNyZWF0ZVJlbmRlcmJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICB2YXIgcmVuZGVyYnVmZmVyID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG4gICAgICAgIGlmIChyZW5kZXJidWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR0xDYXRSZW5kZXJidWZmZXJfMS5HTENhdFJlbmRlcmJ1ZmZlcih0aGlzLCByZW5kZXJidWZmZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGZyYW1lYnVmZmVyLlxuICAgICAqIFRPRE86IERyYXdCdWZmZXJzXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmNyZWF0ZUZyYW1lYnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2w7XG4gICAgICAgIHZhciBmcmFtZWJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG4gICAgICAgIGlmIChmcmFtZWJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHTENhdEZyYW1lYnVmZmVyXzEuR0xDYXRGcmFtZWJ1ZmZlcih0aGlzLCBmcmFtZWJ1ZmZlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgZnJhbWVidWZlciwgaW4gbGF6aWVyIHdheS5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUubGF6eUZyYW1lYnVmZmVyID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGlzRmxvYXQpIHtcbiAgICAgICAgaWYgKGlzRmxvYXQgPT09IHZvaWQgMCkgeyBpc0Zsb2F0ID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGZyYW1lYnVmZmVyID0gdGhpcy5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICBpZiAoZnJhbWVidWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW5kZXJidWZmZXIgPSB0aGlzLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuICAgICAgICBpZiAocmVuZGVyYnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBmcmFtZWJ1ZmZlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJidWZmZXIuaW5pdCh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgZnJhbWVidWZmZXIuYXR0YWNoUmVuZGVyYnVmZmVyKHJlbmRlcmJ1ZmZlcik7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGlmICh0ZXh0dXJlID09PSBudWxsKSB7XG4gICAgICAgICAgICBmcmFtZWJ1ZmZlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZW5kZXJidWZmZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRmxvYXQpIHtcbiAgICAgICAgICAgIHRleHR1cmUuc2V0VGV4dHVyZUZyb21GbG9hdEFycmF5KHdpZHRoLCBoZWlnaHQsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGV4dHVyZS5zZXRUZXh0dXJlRnJvbUFycmF5KHdpZHRoLCBoZWlnaHQsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGZyYW1lYnVmZmVyLmF0dGFjaFRleHR1cmUodGV4dHVyZSk7XG4gICAgICAgIHJldHVybiBmcmFtZWJ1ZmZlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBkcmF3IGJ1ZmZlcnMsIGluIGxhemllciB3YXkuXG4gICAgICogSWYgeW91IGNhbid0IGdyYWIgYFdFQkdMX2RyYXdfYnVmZmVyc2AgZXh0ZW5zaW9uLCB5b3UnbGwgZGllIGluc3RhbnRseSBhdCB0aGlzIHBvaW50LlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5sYXp5RHJhd2J1ZmZlcnMgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgbnVtQnVmZmVycywgaXNGbG9hdCkge1xuICAgICAgICBpZiAoaXNGbG9hdCA9PT0gdm9pZCAwKSB7IGlzRmxvYXQgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZXh0ID0gdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2RyYXdfYnVmZmVycycsIHRydWUpO1xuICAgICAgICBpZiAoZXh0Lk1BWF9EUkFXX0JVRkZFUlNfV0VCR0wgPCBudW1CdWZmZXJzKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignR0xDYXQ6IE1heGltdW0gZHJhdyBidWZmZXJzIGNvdW50IGV4Y2VlZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyYW1lYnVmZmVyID0gdGhpcy5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICBpZiAoZnJhbWVidWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW5kZXJidWZmZXIgPSB0aGlzLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuICAgICAgICBpZiAocmVuZGVyYnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBmcmFtZWJ1ZmZlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJidWZmZXIuaW5pdCh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgZnJhbWVidWZmZXIuYXR0YWNoUmVuZGVyYnVmZmVyKHJlbmRlcmJ1ZmZlcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQnVmZmVyczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgaWYgKHRleHR1cmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmcmFtZWJ1ZmZlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyYnVmZmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Zsb2F0KSB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5zZXRUZXh0dXJlRnJvbUZsb2F0QXJyYXkod2lkdGgsIGhlaWdodCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLnNldFRleHR1cmVGcm9tQXJyYXkod2lkdGgsIGhlaWdodCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcmFtZWJ1ZmZlci5hdHRhY2hUZXh0dXJlKHRleHR1cmUsIGV4dC5DT0xPUl9BVFRBQ0hNRU5UMF9XRUJHTCArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFtZWJ1ZmZlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGwgdGhpcyBiZWZvcmUgeW91J3JlIGdvbm5hIHVzZSBkcmF3IGJ1ZmZlcnMuXG4gICAgICogSWYgeW91IGNhbid0IGdyYWIgYFdFQkdMX2RyYXdfYnVmZmVyc2AgZXh0ZW5zaW9uLCB5b3UnbGwgZGllIGluc3RhbnRseSBhdCB0aGlzIHBvaW50LlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5kcmF3QnVmZmVycyA9IGZ1bmN0aW9uIChudW1CdWZmZXJzKSB7XG4gICAgICAgIHZhciBleHQgPSB0aGlzLmdldEV4dGVuc2lvbignV0VCR0xfZHJhd19idWZmZXJzJywgdHJ1ZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG51bUJ1ZmZlcnMpKSB7XG4gICAgICAgICAgICBleHQuZHJhd0J1ZmZlcnNXRUJHTChudW1CdWZmZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1CdWZmZXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IGV4dC5DT0xPUl9BVFRBQ0hNRU5UMF9XRUJHTCArIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHQuZHJhd0J1ZmZlcnNXRUJHTChhcnJheSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBjdXJyZW50IGZyYW1lYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIChyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSwgZGVwdGgpIHtcbiAgICAgICAgaWYgKHJlZCA9PT0gdm9pZCAwKSB7IHJlZCA9IDAuMDsgfVxuICAgICAgICBpZiAoZ3JlZW4gPT09IHZvaWQgMCkgeyBncmVlbiA9IDAuMDsgfVxuICAgICAgICBpZiAoYmx1ZSA9PT0gdm9pZCAwKSB7IGJsdWUgPSAwLjA7IH1cbiAgICAgICAgaWYgKGFscGhhID09PSB2b2lkIDApIHsgYWxwaGEgPSAxLjA7IH1cbiAgICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHsgZGVwdGggPSAxLjA7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICBnbC5jbGVhckNvbG9yKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKTtcbiAgICAgICAgZ2wuY2xlYXJEZXB0aChkZXB0aCk7XG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICB9O1xuICAgIEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvciA9ICdHTENhdDogVW5leHBlY3RlZCBudWxsIGRldGVjdGVkJztcbiAgICByZXR1cm4gR0xDYXQ7XG59KCkpO1xuZXhwb3J0cy5HTENhdCA9IEdMQ2F0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xfMSA9IHJlcXVpcmUoXCIuL0dMXCIpO1xuLyoqXG4gKiBJdCdzIGEgV2ViR0xCdWZmZXIuXG4gKi9cbnZhciBHTENhdEJ1ZmZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXRCdWZmZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gR0xDYXRCdWZmZXIoZ2xDYXQsIGJ1ZmZlcikge1xuICAgICAgICB0aGlzLl9fZ2xDYXQgPSBnbENhdDtcbiAgICAgICAgdGhpcy5fX2J1ZmZlciA9IGJ1ZmZlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0QnVmZmVyLnByb3RvdHlwZSwgXCJidWZmZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biBidWZmZXIuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fYnVmZmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRCdWZmZXIucHJvdG90eXBlLCBcInJhd1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIGJ1ZmZlci4gU2hvcnRlciB0aGFuIFtbR0xDYXRCdWZmZXIuYnVmZmVyXV0uXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fYnVmZmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHRoZSBidWZmZXIuXG4gICAgICovXG4gICAgR0xDYXRCdWZmZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX19nbENhdC5nbC5kZWxldGVCdWZmZXIodGhpcy5fX2J1ZmZlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IGRhdGEgaW50byB0aGlzIGJ1ZmZlci5cbiAgICAgKi9cbiAgICBHTENhdEJ1ZmZlci5wcm90b3R5cGUuc2V0VmVydGV4YnVmZmVyID0gZnVuY3Rpb24gKHNvdXJjZSwgdXNhZ2UpIHtcbiAgICAgICAgaWYgKHVzYWdlID09PSB2b2lkIDApIHsgdXNhZ2UgPSBHTF8xLkdMLlNUQVRJQ19EUkFXOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX19idWZmZXIpO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgc291cmNlLCB1c2FnZSk7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBuZXcgaW5kZXggZGF0YSBpbnRvIHRoaXMgYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0QnVmZmVyLnByb3RvdHlwZS5zZXRJbmRleGJ1ZmZlciA9IGZ1bmN0aW9uIChzb3VyY2UsIHVzYWdlKSB7XG4gICAgICAgIGlmICh1c2FnZSA9PT0gdm9pZCAwKSB7IHVzYWdlID0gR0xfMS5HTC5TVEFUSUNfRFJBVzsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuX19idWZmZXIpO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBzb3VyY2UsIHVzYWdlKTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gR0xDYXRCdWZmZXI7XG59KCkpO1xuZXhwb3J0cy5HTENhdEJ1ZmZlciA9IEdMQ2F0QnVmZmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xfMSA9IHJlcXVpcmUoXCIuL0dMXCIpO1xuLyoqXG4gKiBJdCdzIGEgV2ViR0xGcmFtZWJ1ZmZlci5cbiAqL1xudmFyIEdMQ2F0RnJhbWVidWZmZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEdMQ2F0RnJhbWVidWZmZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gR0xDYXRGcmFtZWJ1ZmZlcihnbENhdCwgZnJhbWVidWZmZXIpIHtcbiAgICAgICAgdGhpcy5fX3JlbmRlcmJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX190ZXh0dXJlTWFwID0ge307XG4gICAgICAgIHRoaXMuX19nbENhdCA9IGdsQ2F0O1xuICAgICAgICB0aGlzLl9fZnJhbWVidWZmZXIgPSBmcmFtZWJ1ZmZlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0RnJhbWVidWZmZXIucHJvdG90eXBlLCBcImZyYW1lYnVmZmVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gZnJhbWVidWZmZXIuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZnJhbWVidWZmZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdEZyYW1lYnVmZmVyLnByb3RvdHlwZSwgXCJyYXdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biBmcmFtZWJ1ZmZlci4gU2hvcnRlciB0aGFuIFtbR0xDYXRGcmFtZWJ1ZmZlci5mcmFtZWJ1ZmZlcl1dXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZnJhbWVidWZmZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdEZyYW1lYnVmZmVyLnByb3RvdHlwZSwgXCJyZW5kZXJidWZmZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIGF0dGFjaGVkIHJlbmRlcmJ1ZmZlci5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19yZW5kZXJidWZmZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdEZyYW1lYnVmZmVyLnByb3RvdHlwZSwgXCJ0ZXh0dXJlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBhdHRhY2hlZCB0ZXh0dXJlLlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byByZXRyaWV2ZSBvdGhlciB0aGFuIGBDT0xPUl9BVFRBQ0hNRU5UMGAsIHRyeSBbW0dMQ2F0RnJhbWVidWZmZXIuZ2V0VGV4dHVyZV1dIGluc3RlYWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fdGV4dHVyZU1hcFtHTF8xLkdMLkNPTE9SX0FUVEFDSE1FTlQwXTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB0aGUgZnJhbWVidWZmZXIuXG4gICAgICovXG4gICAgR0xDYXRGcmFtZWJ1ZmZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIChhbHNvQXR0YWNoZWQpIHtcbiAgICAgICAgaWYgKGFsc29BdHRhY2hlZCA9PT0gdm9pZCAwKSB7IGFsc29BdHRhY2hlZCA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5fX2ZyYW1lYnVmZmVyKTtcbiAgICAgICAgaWYgKGFsc29BdHRhY2hlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX19yZW5kZXJidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBnbC5kZWxldGVSZW5kZXJidWZmZXIodGhpcy5fX3JlbmRlcmJ1ZmZlci5yYXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9fdGV4dHVyZU1hcCkuZm9yRWFjaChmdW5jdGlvbiAodGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIGdsLmRlbGV0ZVRleHR1cmUodGV4dHVyZS5yYXcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIGl0cyBhdHRhY2hlZCB0ZXh0dXJlLlxuICAgICAqL1xuICAgIEdMQ2F0RnJhbWVidWZmZXIucHJvdG90eXBlLmdldFRleHR1cmUgPSBmdW5jdGlvbiAoYXR0YWNobWVudCkge1xuICAgICAgICBpZiAoYXR0YWNobWVudCA9PT0gdm9pZCAwKSB7IGF0dGFjaG1lbnQgPSBHTF8xLkdMLkNPTE9SX0FUVEFDSE1FTlQwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9fdGV4dHVyZU1hcFthdHRhY2htZW50XTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhIHJlbmRlcmJ1ZmZlciB0byB0aGlzIGZyYW1lYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0RnJhbWVidWZmZXIucHJvdG90eXBlLmF0dGFjaFJlbmRlcmJ1ZmZlciA9IGZ1bmN0aW9uIChyZW5kZXJidWZmZXIsIGF0dGFjaG1lbnQpIHtcbiAgICAgICAgaWYgKGF0dGFjaG1lbnQgPT09IHZvaWQgMCkgeyBhdHRhY2htZW50ID0gR0xfMS5HTC5ERVBUSF9BVFRBQ0hNRU5UOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLl9fZnJhbWVidWZmZXIpO1xuICAgICAgICBnbC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgYXR0YWNobWVudCwgZ2wuUkVOREVSQlVGRkVSLCByZW5kZXJidWZmZXIucmF3KTtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgdGhpcy5fX3JlbmRlcmJ1ZmZlciA9IHJlbmRlcmJ1ZmZlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhIHRleHR1cmUgdG8gdGhpcyBmcmFtZWJ1ZmZlci5cbiAgICAgKi9cbiAgICBHTENhdEZyYW1lYnVmZmVyLnByb3RvdHlwZS5hdHRhY2hUZXh0dXJlID0gZnVuY3Rpb24gKHRleHR1cmUsIGF0dGFjaG1lbnQpIHtcbiAgICAgICAgaWYgKGF0dGFjaG1lbnQgPT09IHZvaWQgMCkgeyBhdHRhY2htZW50ID0gR0xfMS5HTC5DT0xPUl9BVFRBQ0hNRU5UMDsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5fX2ZyYW1lYnVmZmVyKTtcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGF0dGFjaG1lbnQsIGdsLlRFWFRVUkVfMkQsIHRleHR1cmUucmF3LCAwKTtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgdGhpcy5fX3RleHR1cmVNYXBbYXR0YWNobWVudF0gPSB0ZXh0dXJlO1xuICAgIH07XG4gICAgcmV0dXJuIEdMQ2F0RnJhbWVidWZmZXI7XG59KCkpO1xuZXhwb3J0cy5HTENhdEZyYW1lYnVmZmVyID0gR0xDYXRGcmFtZWJ1ZmZlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xfMSA9IHJlcXVpcmUoXCIuL0dMXCIpO1xuLyoqXG4gKiBJdCdzIGEgV2ViR0xQcm9ncmFtLCBidXQgaGFzIGNhY2hlIG9mIHZhcmlhYmxlIGxvY2F0aW9ucy5cbiAqL1xudmFyIEdMQ2F0UHJvZ3JhbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXRQcm9ncmFtIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEdMQ2F0UHJvZ3JhbShnbENhdCwgcHJvZ3JhbSkge1xuICAgICAgICB0aGlzLl9fc2hhZGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuX19hdHRyaWJMb2NhdGlvbkNhY2hlID0ge307XG4gICAgICAgIHRoaXMuX191bmlmb3JtTG9jYXRpb25DYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9fdW5pZm9ybVRleHR1cmVVbml0TWFwID0ge307XG4gICAgICAgIHRoaXMuX191bmlmb3JtdGV4dHVyZVVuaXRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX19saW5rZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2dsQ2F0ID0gZ2xDYXQ7XG4gICAgICAgIHRoaXMuX19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUsIFwicHJvZ3JhbVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIHByb2dyYW0uXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fcHJvZ3JhbTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUsIFwicmF3XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gcHJvZ3JhbS4gU2hvcnRlciB0aGFuIFtbR0xDYXRQcm9ncmFtLnByb2dyYW1dXS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19wcm9ncmFtO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRQcm9ncmFtLnByb3RvdHlwZSwgXCJzaGFkZXJzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBzaGFkZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3NoYWRlcnMgPyB0aGlzLl9fc2hhZGVycy5jb25jYXQoKSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFByb2dyYW0ucHJvdG90eXBlLCBcImlzTGlua2VkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdGhlIGxhc3QgbGluayBvcGVyYXRpb24gd2FzIHN1Y2Nlc3NmdWwgb3Igbm90LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xpbmtlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB0aGUgcHJvZ3JhbS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoYWxzb0F0dGFjaGVkKSB7XG4gICAgICAgIGlmIChhbHNvQXR0YWNoZWQgPT09IHZvaWQgMCkgeyBhbHNvQXR0YWNoZWQgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0odGhpcy5fX3Byb2dyYW0pO1xuICAgICAgICBpZiAoYWxzb0F0dGFjaGVkKSB7XG4gICAgICAgICAgICB2YXIgc2hhZGVycyA9IHRoaXMuc2hhZGVycztcbiAgICAgICAgICAgIGlmIChzaGFkZXJzKSB7XG4gICAgICAgICAgICAgICAgc2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHNoYWRlcnMgYW5kIGxpbmsgdGhpcyBwcm9ncmFtLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNoYWRlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHNoYWRlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHNoYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc2hhZGVyKSB7IHJldHVybiBnbC5hdHRhY2hTaGFkZXIoX3RoaXMuX19wcm9ncmFtLCBzaGFkZXIucmF3KTsgfSk7XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMuX19wcm9ncmFtKTtcbiAgICAgICAgdGhpcy5fX2xpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5fX3Byb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcbiAgICAgICAgaWYgKCF0aGlzLl9fbGlua2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5fX3Byb2dyYW0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2hhZGVycyA9IHNoYWRlcnMuY29uY2F0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggc2hhZGVycyBhbmQgbGluayB0aGlzIHByb2dyYW0uXG4gICAgICogSXQncyBnb25uYSBiZSBhc3luY2hyb25vdXMgaWYgeW91IGhhdmUgdGhlIEtIUl9wYXJhbGxlbF9zaGFkZXJfY29tcGlsZSBleHRlbnNpb24gc3VwcG9ydC5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLmxpbmtBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNoYWRlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHNoYWRlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2xDYXQgPSB0aGlzLl9fZ2xDYXQ7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGV4dFBhcmFsbGVsID0gZ2xDYXQuZ2V0RXh0ZW5zaW9uKCdLSFJfcGFyYWxsZWxfc2hhZGVyX2NvbXBpbGUnKTtcbiAgICAgICAgc2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkZXIpIHsgcmV0dXJuIGdsLmF0dGFjaFNoYWRlcihfdGhpcy5fX3Byb2dyYW0sIHNoYWRlci5yYXcpOyB9KTtcbiAgICAgICAgZ2wubGlua1Byb2dyYW0odGhpcy5fX3Byb2dyYW0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV4dFBhcmFsbGVsIHx8XG4gICAgICAgICAgICAgICAgICAgIGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoX3RoaXMuX19wcm9ncmFtLCBleHRQYXJhbGxlbC5DT01QTEVUSU9OX1NUQVRVU19LSFIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9fbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihfdGhpcy5fX3Byb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fX2xpbmtlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGdsLmdldFByb2dyYW1JbmZvTG9nKF90aGlzLl9fcHJvZ3JhbSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9fc2hhZGVycyA9IHNoYWRlcnMuY29uY2F0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gYXR0cmlidXRlIHZhcmlhYmxlLlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB2YXJpYWJsZVxuICAgICAqIEBwYXJhbSBidWZmZXIgVmVydGV4IGJ1ZmZlci4gQ2FuIGJlIG51bGwsIHRvIGRpc2FibGUgYXR0cmlidXRlIGFycmF5XG4gICAgICogQHBhcmFtIHNpemUgTnVtYmVyIG9mIGNvbXBvbmVudHMgcGVyIHZlcnRleC4gTXVzdCBiZSAxLCAyLCAzIG9yIDRcbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLmF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCBidWZmZXIsIHNpemUsIGRpdmlzb3IsIHR5cGUsIHN0cmlkZSwgb2Zmc2V0KSB7XG4gICAgICAgIGlmIChzaXplID09PSB2b2lkIDApIHsgc2l6ZSA9IDE7IH1cbiAgICAgICAgaWYgKGRpdmlzb3IgPT09IHZvaWQgMCkgeyBkaXZpc29yID0gMDsgfVxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSBHTF8xLkdMLkZMT0FUOyB9XG4gICAgICAgIGlmIChzdHJpZGUgPT09IHZvaWQgMCkgeyBzdHJpZGUgPSAwOyB9XG4gICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgeyBvZmZzZXQgPSAwOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRBdHRyaWJMb2NhdGlvbihuYW1lKTtcbiAgICAgICAgaWYgKGxvY2F0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlci5yYXcpO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIobG9jYXRpb24sIHNpemUsIHR5cGUsIGZhbHNlLCBzdHJpZGUsIG9mZnNldCk7XG4gICAgICAgIHZhciBleHQgPSB0aGlzLl9fZ2xDYXQuZ2V0RXh0ZW5zaW9uKCdBTkdMRV9pbnN0YW5jZWRfYXJyYXlzJyk7XG4gICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgIGV4dC52ZXJ0ZXhBdHRyaWJEaXZpc29yQU5HTEUobG9jYXRpb24sIGRpdmlzb3IpO1xuICAgICAgICB9XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtIHZhcmlhYmxlLlxuICAgICAqIFNlZSBhbHNvOiBbW0dMQ2F0UHJvZ3JhbS51bmlmb3JtVmVjdG9yXV1cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0gPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhbHVlW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmdW5jID0gdGhpc1sndW5pZm9ybScgKyB0eXBlXTtcbiAgICAgICAgZnVuYy5jYWxsLmFwcGx5KGZ1bmMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBuYW1lXSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtIHZhcmlhYmxlLlxuICAgICAqIFNlZSBhbHNvOiBbW0dMQ2F0UHJvZ3JhbS51bmlmb3JtXV1cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm1WZWN0b3IgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSB0aGlzWyd1bmlmb3JtJyArIHR5cGVdO1xuICAgICAgICBmdW5jLmNhbGwodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0xaSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0xaSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtMmkgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtMmkgPSBmdW5jdGlvbiAobmFtZSwgeCwgeSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtMmkobG9jYXRpb24sIHgsIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0zaSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0zaSA9IGZ1bmN0aW9uIChuYW1lLCB4LCB5LCB6KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0zaShsb2NhdGlvbiwgeCwgeSwgeik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTRpIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTRpID0gZnVuY3Rpb24gKG5hbWUsIHgsIHksIHosIHcpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTRpKGxvY2F0aW9uLCB4LCB5LCB6LCB3KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtMWl2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTFpdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTJpdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0yaXYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXkpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgYXJyYXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0zaXYgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtM2l2ID0gZnVuY3Rpb24gKG5hbWUsIGFycmF5KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtNGl2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTRpdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTFmIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTFmID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0yZiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0yZiA9IGZ1bmN0aW9uIChuYW1lLCB4LCB5KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0yZihsb2NhdGlvbiwgeCwgeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTNmIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTNmID0gZnVuY3Rpb24gKG5hbWUsIHgsIHksIHopIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTNmKGxvY2F0aW9uLCB4LCB5LCB6KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtNGYgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtNGYgPSBmdW5jdGlvbiAobmFtZSwgeCwgeSwgeiwgdykge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtNGYobG9jYXRpb24sIHgsIHksIHosIHcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0xZnYgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtMWZ2ID0gZnVuY3Rpb24gKG5hbWUsIGFycmF5KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0xZnYobG9jYXRpb24sIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtMmZ2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTJmdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTNmdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0zZnYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXkpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgYXJyYXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm00ZnYgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtNGZ2ID0gZnVuY3Rpb24gKG5hbWUsIGFycmF5KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm00ZnYobG9jYXRpb24sIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtTWF0cml4MmZ2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybU1hdHJpeDJmdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSwgdHJhbnNwb3NlKSB7XG4gICAgICAgIGlmICh0cmFuc3Bvc2UgPT09IHZvaWQgMCkgeyB0cmFuc3Bvc2UgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4MmZ2KGxvY2F0aW9uLCB0cmFuc3Bvc2UsIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtTWF0cml4M2Z2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybU1hdHJpeDNmdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSwgdHJhbnNwb3NlKSB7XG4gICAgICAgIGlmICh0cmFuc3Bvc2UgPT09IHZvaWQgMCkgeyB0cmFuc3Bvc2UgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KGxvY2F0aW9uLCB0cmFuc3Bvc2UsIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtTWF0cml4NGZ2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybU1hdHJpeDRmdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSwgdHJhbnNwb3NlKSB7XG4gICAgICAgIGlmICh0cmFuc3Bvc2UgPT09IHZvaWQgMCkgeyB0cmFuc3Bvc2UgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCB0cmFuc3Bvc2UsIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhIGBzYW1wbGVyMkRgIHR5cGUgdW5pZm9ybSB0ZXh0dXJlLlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHVuaWZvcm0gdGV4dHVyZVxuICAgICAqIEBwYXJhbSB0ZXh0dXJlIFRleHR1cmUgb2JqZWN0XG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtVGV4dHVyZSA9IGZ1bmN0aW9uIChuYW1lLCB0ZXh0dXJlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgdmFyIHVuaXQgPSB0aGlzLmdldFVuaWZvcm1UZXh0dXJlVW5pdChuYW1lKTtcbiAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXQpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCAoKF9hID0gdGV4dHVyZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJhdykgfHwgbnVsbCk7XG4gICAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdW5pdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYSBgc2FtcGxlckN1YmVgIHR5cGUgdW5pZm9ybSB0ZXh0dXJlLlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHVuaWZvcm0gdGV4dHVyZVxuICAgICAqIEBwYXJhbSB0ZXh0dXJlIFRleHR1cmUgb2JqZWN0XG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtQ3ViZW1hcCA9IGZ1bmN0aW9uIChuYW1lLCB0ZXh0dXJlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgdmFyIHVuaXQgPSB0aGlzLmdldFVuaWZvcm1UZXh0dXJlVW5pdChuYW1lKTtcbiAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXQpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCAoKF9hID0gdGV4dHVyZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJhdykgfHwgbnVsbCk7XG4gICAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdW5pdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBhdHRyaWJ1dGUgbG9jYXRpb24uXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS5nZXRBdHRyaWJMb2NhdGlvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgaWYgKHRoaXMuX19hdHRyaWJMb2NhdGlvbkNhY2hlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fYXR0cmliTG9jYXRpb25DYWNoZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX19wcm9ncmFtLCBuYW1lKTtcbiAgICAgICAgICAgIC8vIGlmICggbG9jYXRpb24gPT09IC0xICkge1xuICAgICAgICAgICAgLy8gICB0aGlzLmdsQ2F0LnNwaXQoICdHTENhdFByb2dyYW0uZ2V0QXR0cmliTG9jYXRpb246IENvdWxkIG5vdCByZXRyaWV2ZSBhdHRyaWJ1dGUgbG9jYXRpb24nICk7XG4gICAgICAgICAgICAvLyAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMuX19hdHRyaWJMb2NhdGlvbkNhY2hlW25hbWVdID0gbG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHVuaWZvcm0gbG9jYXRpb24uXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS5nZXRVbmlmb3JtTG9jYXRpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGlmICh0aGlzLl9fdW5pZm9ybUxvY2F0aW9uQ2FjaGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX191bmlmb3JtTG9jYXRpb25DYWNoZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9fcHJvZ3JhbSwgbmFtZSk7XG4gICAgICAgICAgICAvLyBpZiAoIGxvY2F0aW9uID09PSBudWxsICkge1xuICAgICAgICAgICAgLy8gICB0aGlzLmdsQ2F0LnNwaXQoICdHTENhdFByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uOiBDb3VsZCBub3QgcmV0cmlldmUgdW5pZm9ybSBsb2NhdGlvbicgKTtcbiAgICAgICAgICAgIC8vICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5fX3VuaWZvcm1Mb2NhdGlvbkNhY2hlW25hbWVdID0gbG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIG9yIGNyZWF0ZSBhIHRleHR1cmUgdW5pdCB0aGF0IGNvcnJlc3BvbmRzIHRvIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS5nZXRVbmlmb3JtVGV4dHVyZVVuaXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fX3VuaWZvcm1UZXh0dXJlVW5pdE1hcFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9fdW5pZm9ybVRleHR1cmVVbml0TWFwW25hbWVdID0gdGhpcy5fX3VuaWZvcm10ZXh0dXJlVW5pdEluZGV4O1xuICAgICAgICAgICAgdGhpcy5fX3VuaWZvcm10ZXh0dXJlVW5pdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX191bmlmb3JtVGV4dHVyZVVuaXRNYXBbbmFtZV07XG4gICAgfTtcbiAgICByZXR1cm4gR0xDYXRQcm9ncmFtO1xufSgpKTtcbmV4cG9ydHMuR0xDYXRQcm9ncmFtID0gR0xDYXRQcm9ncmFtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xfMSA9IHJlcXVpcmUoXCIuL0dMXCIpO1xuLyoqXG4gKiBJdCdzIGEgV2ViR0xSZW5kZXJidWZmZXIuXG4gKi9cbnZhciBHTENhdFJlbmRlcmJ1ZmZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXRUZXh0dXJlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEdMQ2F0UmVuZGVyYnVmZmVyKGdsQ2F0LCByZW5kZXJidWZmZXIpIHtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX19nbENhdCA9IGdsQ2F0O1xuICAgICAgICB0aGlzLl9fcmVuZGVyYnVmZmVyID0gcmVuZGVyYnVmZmVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRSZW5kZXJidWZmZXIucHJvdG90eXBlLCBcInJlbmRlcmJ1ZmZlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIHJlbmRlcmJ1ZmZlci5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19yZW5kZXJidWZmZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFJlbmRlcmJ1ZmZlci5wcm90b3R5cGUsIFwicmF3XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gcmVuZGVyYnVmZmVyLiBTaG9ydGVyIHRoYW4gW1tHTENhdFJlbmRlckJ1ZmZlci5yZW5kZXJidWZmZXJdXS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19yZW5kZXJidWZmZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFJlbmRlcmJ1ZmZlci5wcm90b3R5cGUsIFwid2lkdGhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIHdpZHRoLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3dpZHRoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRSZW5kZXJidWZmZXIucHJvdG90eXBlLCBcImhlaWdodFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgaGVpZ2h0LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2hlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB0aGUgcmVuZGVyYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0UmVuZGVyYnVmZmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9fZ2xDYXQuZ2wuZGVsZXRlUmVuZGVyYnVmZmVyKHRoaXMuX19yZW5kZXJidWZmZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGlzIHJlbmRlcmJ1ZmZlci5cbiAgICAgKiBJZiBgZm9ybWF0YCBpcyBub3QgZ2l2ZW4sIGl0IHdpbGwgYmUgaW5pdGlhbGl6ZWQgYXMgYERFUFRIX0NPTVBPTkVOVDE2YCAuXG4gICAgICovXG4gICAgR0xDYXRSZW5kZXJidWZmZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgZm9ybWF0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBHTF8xLkdMLkRFUFRIX0NPTVBPTkVOVDE2OyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIHRoaXMuX19yZW5kZXJidWZmZXIpO1xuICAgICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIG51bGwpO1xuICAgICAgICB0aGlzLl9fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIHJldHVybiBHTENhdFJlbmRlcmJ1ZmZlcjtcbn0oKSk7XG5leHBvcnRzLkdMQ2F0UmVuZGVyYnVmZmVyID0gR0xDYXRSZW5kZXJidWZmZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogSXQncyBhIFdlYkdMU2hhZGVyLlxuICovXG52YXIgR0xDYXRTaGFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEdMQ2F0U2hhZGVyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEdMQ2F0U2hhZGVyKGdsQ2F0LCBzaGFkZXIpIHtcbiAgICAgICAgdGhpcy5fX2NvbXBpbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19nbENhdCA9IGdsQ2F0O1xuICAgICAgICB0aGlzLl9fc2hhZGVyID0gc2hhZGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRTaGFkZXIucHJvdG90eXBlLCBcInNoYWRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIHNoYWRlci5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19zaGFkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFNoYWRlci5wcm90b3R5cGUsIFwicmF3XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gc2hhZGVyLiBTaG9ydGVyIHRoYW4gW1tHTENhdFNoYWRlci5zaGFkZXJdXS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19zaGFkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgdGhlIHNoYWRlci5cbiAgICAgKi9cbiAgICBHTENhdFNoYWRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX2dsQ2F0LmdsLmRlbGV0ZVNoYWRlcih0aGlzLl9fc2hhZGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB3aGV0aGVyIHRoZSBsYXN0IGNvbXBpbGF0aW9uIHdhcyBzdWNjZXNzZnVsIG9yIG5vdC5cbiAgICAgKi9cbiAgICBHTENhdFNoYWRlci5wcm90b3R5cGUuaXNDb21waWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jb21waWxlZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXBpbGUgdGhlIHNoYWRlci5cbiAgICAgKi9cbiAgICBHTENhdFNoYWRlci5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHRoaXMuX19zaGFkZXIsIGNvZGUpO1xuICAgICAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMuX19zaGFkZXIpO1xuICAgICAgICB0aGlzLl9fY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy5fX3NoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xuICAgICAgICBpZiAoIXRoaXMuX19jb21waWxlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2codGhpcy5fX3NoYWRlcikpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gR0xDYXRTaGFkZXI7XG59KCkpO1xuZXhwb3J0cy5HTENhdFNoYWRlciA9IEdMQ2F0U2hhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xfMSA9IHJlcXVpcmUoXCIuL0dMXCIpO1xudmFyIHplcm9UZXh0dXJlQXJyYXkgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMF0pO1xuLyoqXG4gKiBJdCdzIGEgV2ViR0xUZXh0dXJlLlxuICovXG52YXIgR0xDYXRUZXh0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBHTENhdFRleHR1cmUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gR0xDYXRUZXh0dXJlKGdsQ2F0LCB0ZXh0dXJlKSB7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9fZ2xDYXQgPSBnbENhdDtcbiAgICAgICAgdGhpcy5fX3RleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLnRleHR1cmVGaWx0ZXIoR0xfMS5HTC5MSU5FQVIpO1xuICAgICAgICB0aGlzLnRleHR1cmVXcmFwKEdMXzEuR0wuQ0xBTVBfVE9fRURHRSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFRleHR1cmUucHJvdG90eXBlLCBcInRleHR1cmVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biB0ZXh0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3RleHR1cmU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFRleHR1cmUucHJvdG90eXBlLCBcInJhd1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIHRleHR1cmUuIFNob3J0ZXIgdGhhbiBbW0dMQ2F0VGV4dHVyZS50ZXh0dXJlZF1dXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fdGV4dHVyZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUsIFwid2lkdGhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIHdpZHRoLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3dpZHRoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRUZXh0dXJlLnByb3RvdHlwZSwgXCJoZWlnaHRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIGhlaWdodC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19oZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgdGhlIHRleHR1cmUuXG4gICAgICovXG4gICAgR0xDYXRUZXh0dXJlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9fZ2xDYXQuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLl9fdGV4dHVyZSk7XG4gICAgfTtcbiAgICBHTENhdFRleHR1cmUucHJvdG90eXBlLnRleHR1cmVGaWx0ZXIgPSBmdW5jdGlvbiAoZmlsdGVyTWFnLCBmaWx0ZXJNaW4pIHtcbiAgICAgICAgaWYgKGZpbHRlck1hZyA9PT0gdm9pZCAwKSB7IGZpbHRlck1hZyA9IEdMXzEuR0wuTkVBUkVTVDsgfVxuICAgICAgICBpZiAoZmlsdGVyTWluID09PSB2b2lkIDApIHsgZmlsdGVyTWluID0gZmlsdGVyTWFnOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyTWFnKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGZpbHRlck1pbik7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICAgIH07XG4gICAgR0xDYXRUZXh0dXJlLnByb3RvdHlwZS50ZXh0dXJlV3JhcCA9IGZ1bmN0aW9uICh3cmFwUywgd3JhcFQpIHtcbiAgICAgICAgaWYgKHdyYXBTID09PSB2b2lkIDApIHsgd3JhcFMgPSBHTF8xLkdMLkNMQU1QX1RPX0VER0U7IH1cbiAgICAgICAgaWYgKHdyYXBUID09PSB2b2lkIDApIHsgd3JhcFQgPSB3cmFwUzsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuX190ZXh0dXJlKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgd3JhcFMpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCB3cmFwVCk7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgdmFsdWUgZm9yIHRoZSBwYXNzZWQgcGFyYW1ldGVyIG5hbWUuXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViR0xSZW5kZXJpbmdDb250ZXh0L2dldFBhcmFtZXRlclxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUuZ2V0UGFyYW1ldGVyID0gZnVuY3Rpb24gKHBuYW1lKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBnbC5nZXRQYXJhbWV0ZXIocG5hbWUpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgdGhlIHBpeGVsIHN0b3JhZ2UgbW9kZXMuXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViR0xSZW5kZXJpbmdDb250ZXh0L3BpeGVsU3RvcmVpXG4gICAgICovXG4gICAgR0xDYXRUZXh0dXJlLnByb3RvdHlwZS5waXhlbFN0b3JlaSA9IGZ1bmN0aW9uIChwbmFtZSwgcGFyYW0pIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9fdGV4dHVyZSk7XG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKHBuYW1lLCBwYXJhbSk7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBkYXRhIGludG8gdGhpcyB0ZXh0dXJlLlxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUuc2V0VGV4dHVyZSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9fdGV4dHVyZSk7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgc291cmNlKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IHNvdXJjZS53aWR0aDtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IGRhdGEgaW50byB0aGlzIHRleHR1cmUuXG4gICAgICogVGhpcyBmdW5jdGlvbiB1c2VzIGBVaW50OEFycmF5YC4gSWYgeW91IHdhbnQgdG8gc291cmNlIGltYWdlIGRhdGEsIHVzZSBgR0xDYXQuc2V0VGV4dHVyZSgpYCBpbnN0ZWFkLlxuICAgICAqIE9yIHlvdSB3YW50IHRvIHVzZSBmbG9hdCB0ZXh0dXJlPyBUcnkgdGhpczogYEdMQ2F0LnNldFRleHR1cmVGcm9tRmxvYXRBcnJheSgpYFxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUuc2V0VGV4dHVyZUZyb21BcnJheSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBzb3VyY2UsIGZvcm1hdCkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gR0xfMS5HTC5SR0JBOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMCwgZm9ybWF0LCBnbC5VTlNJR05FRF9CWVRFLCBzb3VyY2UpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IGRhdGEgaW50byB0aGlzIHRleHR1cmUuXG4gICAgICogVGhpcyBmdW5jdGlvbiB1c2VzIGBGbG9hdDMyQXJyYXlgLlxuICAgICAqIElmIHlvdSBjYW4ndCBncmFiIGBPRVNfdGV4dHVyZV9mbG9hdGAgZXh0ZW5zaW9uIGhlcmUsIHlvdSB3aWxsIGRpZSBhdCB0aGlzIHBvaW50LlxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUuc2V0VGV4dHVyZUZyb21GbG9hdEFycmF5ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHNvdXJjZSwgZm9ybWF0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBHTF8xLkdMLlJHQkE7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB0aGlzLl9fZ2xDYXQuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9mbG9hdCcsIHRydWUpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9fdGV4dHVyZSk7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIGdsLkZMT0FULCBzb3VyY2UpO1xuICAgICAgICBpZiAodGhpcy5fX2dsQ2F0LmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZUZpbHRlcihnbC5ORUFSRVNUKTtcbiAgICAgICAgfVxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb3B5IHBpeGVscyBmcm9tIGN1cnJlbnQgZnJhbWVidWZmZXIgdG8gZ2l2ZW4gdGV4dHVyZS5cbiAgICAgKi9cbiAgICBHTENhdFRleHR1cmUucHJvdG90eXBlLmNvcHlUZXh0dXJlID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9fdGV4dHVyZSk7XG4gICAgICAgIGdsLmNvcHlUZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIDApO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IGN1YmVtYXAgZGF0YSBpbnRvIHRoaXMgdGV4dHVyZS5cbiAgICAgKiBAcGFyYW0gdGV4dHVyZXMgQXJyYXkgb2YgaWFtZ2VzLiBPcmRlcjogYFgrYCwgYFgtYCwgYFkrYCwgYFktYCwgYForYCwgYFotYFxuICAgICAqIEB0b2RvIGR1ZSB0byBjb21wYXRpYmlsaXR5IG9mIGl0cyBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBpdCBzaG91bGQgbm90IGJlIHVzZWQgeWV0XG4gICAgICovXG4gICAgR0xDYXRUZXh0dXJlLnByb3RvdHlwZS5zZXRDdWJlbWFwID0gZnVuY3Rpb24gKHRleHR1cmVzKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ggKyBpLCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCB0ZXh0dXJlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IFsgMCwgMCwgMCwgMCBdIHRvIHRoaXMgdGV4dHVyZS5cbiAgICAgKiBVc2VmdWwgZm9yIHRlbXBvcmFyeSB1c2UuLlxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUuc2V0WmVyb1RleHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0VGV4dHVyZUZyb21BcnJheSgxLCAxLCB6ZXJvVGV4dHVyZUFycmF5KTtcbiAgICB9O1xuICAgIHJldHVybiBHTENhdFRleHR1cmU7XG59KCkpO1xuZXhwb3J0cy5HTENhdFRleHR1cmUgPSBHTENhdFRleHR1cmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9HTFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9HTENhdFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9HTENhdEJ1ZmZlclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9HTENhdEZyYW1lYnVmZmVyXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0dMQ2F0UHJvZ3JhbVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9HTENhdFJlbmRlcmJ1ZmZlclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9HTENhdFNoYWRlclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9HTENhdFRleHR1cmVcIikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/BeatManager.ts":
/*!****************************!*\
  !*** ./src/BeatManager.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeatManager = void 0;
var EventEmittable_1 = __webpack_require__(/*! ./utils/EventEmittable */ "./src/utils/EventEmittable.ts");
var applyMixins_1 = __webpack_require__(/*! ./utils/applyMixins */ "./src/utils/applyMixins.ts");
var mod_1 = __webpack_require__(/*! ./utils/mod */ "./src/utils/mod.ts");
var BeatManager = /** @class */ (function () {
    function BeatManager() {
        this.__bpm = 140.0;
        this.__time = 0.0;
        this.__beat = 0.0;
        this.__bar = 0.0;
        this.__sixteenBar = 0.0;
    }
    Object.defineProperty(BeatManager.prototype, "bpm", {
        get: function () {
            return this.__bpm;
        },
        set: function (value) {
            this.__bpm = value;
            this.__emit('changeBPM', { bpm: value });
        },
        enumerable: false,
        configurable: true
    });
    BeatManager.CalcBeatSeconds = function (bpm) {
        return 60.0 / bpm;
    };
    BeatManager.CalcBarSeconds = function (bpm) {
        // return this.beatLength * 4.0;
        return 240.0 / bpm;
    };
    BeatManager.CalcSixteenBarSeconds = function (bpm) {
        // return this.barLength * 16.0;
        return 3840.0 / bpm;
    };
    BeatManager.prototype.reset = function () {
        this.__time = 0.0;
        this.__beat = 0.0;
        this.__bar = 0.0;
        this.__sixteenBar = 0.0;
    };
    BeatManager.prototype.update = function (time) {
        var beatSeconds = BeatManager.CalcBeatSeconds(this.__bpm);
        var barSeconds = BeatManager.CalcBarSeconds(this.__bpm);
        var sixteenBarSeconds = BeatManager.CalcSixteenBarSeconds(this.__bpm);
        var deltaTime = time - this.__time;
        this.__beat = mod_1.mod(this.__beat + deltaTime / beatSeconds, 1.0);
        this.__bar = mod_1.mod(this.__bar + deltaTime / barSeconds, 1.0);
        this.__sixteenBar = mod_1.mod(this.__sixteenBar + deltaTime / sixteenBarSeconds, 1.0);
        this.__time = time;
        var event = {
            time: time,
            deltaTime: deltaTime,
            bpm: this.__bpm,
            beat: this.__beat,
            bar: this.__bar,
            sixteenBar: this.__sixteenBar
        };
        this.__emit('update', event);
        return event;
    };
    return BeatManager;
}());
exports.BeatManager = BeatManager;
applyMixins_1.applyMixins(BeatManager, [EventEmittable_1.EventEmittable]);


/***/ }),

/***/ "./src/WavenerdDeck.ts":
/*!*****************************!*\
  !*** ./src/WavenerdDeck.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WavenerdDeck = void 0;
var BeatManager_1 = __webpack_require__(/*! ./BeatManager */ "./src/BeatManager.ts");
var glcat_ts_1 = __webpack_require__(/*! @fms-cat/glcat-ts */ "./node_modules/@fms-cat/glcat-ts/dist/glcat.js");
var shaderchunks_1 = __webpack_require__(/*! ./shaderchunks */ "./src/shaderchunks.ts");
var EventEmittable_1 = __webpack_require__(/*! ./utils/EventEmittable */ "./src/utils/EventEmittable.ts");
var applyMixins_1 = __webpack_require__(/*! ./utils/applyMixins */ "./src/utils/applyMixins.ts");
var vertQuad = "attribute vec2 p;\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n";
var WavenerdDeck = /** @class */ (function () {
    /**
     * Constructor of the WavenerdDeck.
     */
    function WavenerdDeck(_a) {
        var _this = this;
        var glCat = _a.glCat, audio = _a.audio, hostDeck = _a.hostDeck, bufferSize = _a.bufferSize, chunkSize = _a.chunkSize, bpm = _a.bpm, timeErrorThreshold = _a.timeErrorThreshold;
        /**
         * Its current cue status.
         * `'none'`: There is nothing in its current cue.
         * `'ready'`: There is a cue shader and is ready to be applied.
         * `'applying'`: There is a cue shader and is going to be applied in the next bar.
         */
        this.__cueStatus = 'none';
        this.__chunkHead = 0;
        /**
         * Its current time.
         */
        this.__time = 0;
        this.__program = null;
        this.__programCue = null;
        this.__samples = new Map();
        this.timeErrorThreshold = timeErrorThreshold !== null && timeErrorThreshold !== void 0 ? timeErrorThreshold : 0.01;
        this.__bufferSize = bufferSize !== null && bufferSize !== void 0 ? bufferSize : 2048;
        this.__chunkSize = chunkSize !== null && chunkSize !== void 0 ? chunkSize : 64;
        // -- host deck --------------------------------------------------------------------------------
        if (hostDeck) {
            this.hostDeck = hostDeck;
        }
        // -- beat manager -----------------------------------------------------------------------------
        this.__beatManager = new BeatManager_1.BeatManager();
        this.__beatManager.bpm = bpm !== null && bpm !== void 0 ? bpm : 140;
        this.__beatManager.on('changeBPM', function (_a) {
            var bpm = _a.bpm;
            _this.__chunkHead = 0;
            _this.__emit('changeBPM', { bpm: bpm });
        });
        // -- glCat ------------------------------------------------------------------------------------
        this.__glCat = glCat;
        this.__bufferQuad = this.__glCat.createBuffer();
        this.__bufferQuad.setVertexbuffer(new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]));
        this.__framebufferTexture = this.__glCat.createTexture();
        this.__framebufferTexture.setTextureFromFloatArray(this.__bufferSize / 2, this.__chunkSize, null, glcat_ts_1.GL.RGBA);
        this.__framebuffer = this.__glCat.createFramebuffer();
        this.__framebuffer.attachTexture(this.__framebufferTexture);
        this.__pixelBuffer = new Float32Array(this.__bufferSize * 2 * this.__chunkSize);
        // -- audio ------------------------------------------------------------------------------------
        this.__audio = audio;
        this.__node = audio.createScriptProcessor(this.__bufferSize, 2, 2);
        this.__node.onaudioprocess = function (event) { return _this.__handleProcess(event); };
    }
    Object.defineProperty(WavenerdDeck.prototype, "cueStatus", {
        get: function () {
            return this.__cueStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "bufferSize", {
        get: function () {
            return this.__bufferSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "chunkSize", {
        get: function () {
            return this.__chunkSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "bpm", {
        /**
         * Its current bpm.
         */
        get: function () {
            return this.beatManager.bpm;
        },
        set: function (value) {
            this.beatManager.bpm = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "time", {
        get: function () {
            if (this.hostDeck) {
                return this.hostDeck.time;
            }
            return this.__time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "glCat", {
        get: function () {
            return this.__glCat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "lastError", {
        get: function () {
            return this.__lastError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "audio", {
        get: function () {
            return this.__audio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "node", {
        get: function () {
            return this.__node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "sampleRate", {
        /**
         * Alias for the `audio.sampleRate` .
         */
        get: function () {
            return this.__audio.sampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "beatManager", {
        get: function () {
            var _a;
            var hostDeckBeatManager = (_a = this.hostDeck) === null || _a === void 0 ? void 0 : _a.beatManager;
            if (hostDeckBeatManager) {
                return hostDeckBeatManager;
            }
            return this.__beatManager;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "samples", {
        get: function () {
            if (this.hostDeck) {
                return this.hostDeck.samples;
            }
            return this.__samples;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Dispose this WavenerdDeck.
     */
    WavenerdDeck.prototype.dispose = function () {
        this.__setCueStatus('none');
        this.__bufferQuad.dispose();
        if (this.__program) {
            this.__program.program.dispose(true);
        }
        if (this.__programCue) {
            this.__programCue.program.dispose(true);
        }
    };
    /**
     * Compile given shader code and cue the shader.
     */
    WavenerdDeck.prototype.compile = function (code) {
        return __awaiter(this, void 0, Promise, function () {
            var program, requiredSamples, _a, _b, name;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.__glCat.lazyProgramAsync(vertQuad, shaderchunks_1.shaderchunkPre + code + shaderchunks_1.shaderchunkPost).catch(function (e) {
                            var error = _this.__processErrorMessage(e);
                            _this.__lastError = error;
                            _this.__programCue = null;
                            _this.__setCueStatus('none');
                            _this.__emit('error', { error: error });
                            throw new Error(error !== null && error !== void 0 ? error : undefined);
                        })];
                    case 1:
                        program = _d.sent();
                        requiredSamples = new Set();
                        try {
                            for (_a = __values(this.samples.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                name = _b.value;
                                if (code.search('sample_' + name) !== -1) {
                                    requiredSamples.add(name);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        this.__programCue = {
                            program: program,
                            code: code,
                            requiredSamples: requiredSamples
                        };
                        this.__setCueStatus('ready');
                        this.__emit('error', { error: null });
                        this.__lastError = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Apply the cue shader after the bar ends.
     */
    WavenerdDeck.prototype.applyCue = function () {
        if (this.__cueStatus === 'ready') {
            this.__setCueStatus('applying');
        }
    };
    /**
     * Load a sample and store as a uniform texture.
     */
    WavenerdDeck.prototype.loadSample = function (name, buffer) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.__audio.decodeAudioData(buffer)
                    .then(function (audioBuffer) {
                    var sampleRate = audioBuffer.sampleRate, duration = audioBuffer.duration;
                    var frames = audioBuffer.length;
                    var width = 2048;
                    var lengthCeiled = Math.ceil(frames / 2048.0);
                    var height = lengthCeiled;
                    var buffer = new Float32Array(width * height * 4);
                    var channels = audioBuffer.numberOfChannels;
                    var dataL = audioBuffer.getChannelData(0);
                    var dataR = audioBuffer.getChannelData(channels === 1 ? 0 : 1);
                    for (var i = 0; i < frames; i++) {
                        buffer[i * 4 + 0] = dataL[i];
                        buffer[i * 4 + 1] = dataR[i];
                    }
                    var texture = _this.__glCat.createTexture();
                    texture.setTextureFromFloatArray(width, height, buffer, glcat_ts_1.GL.RGBA);
                    texture.textureFilter(glcat_ts_1.GL.NEAREST);
                    _this.__samples.set(name, {
                        name: name,
                        texture: texture,
                        sampleRate: sampleRate,
                        duration: duration
                    });
                    if (_this.__program && _this.__program.code.search('sample_' + name)) {
                        _this.__program.requiredSamples.add(name);
                    }
                    if (_this.__programCue && _this.__programCue.code.search('sample_' + name)) {
                        _this.__programCue.requiredSamples.add(name);
                    }
                    _this.__emit('loadSample', { name: name, duration: duration, sampleRate: sampleRate });
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Delete a sample.
     */
    WavenerdDeck.prototype.deleteSample = function (name) {
        if (this.__samples.has(name)) {
            this.__samples.delete(name);
            this.__emit('deleteSample', { name: name });
        }
    };
    WavenerdDeck.prototype.__handleProcess = function (event) {
        var time = this.time;
        if (!this.hostDeck) {
            time += this.__bufferSize / this.__audio.sampleRate;
            if (this.timeErrorThreshold < Math.abs(time - event.playbackTime)) {
                time = event.playbackTime;
            }
        }
        this.__time = time;
        var beatManagerUpdateEvent = this.beatManager.update(time);
        var bar = beatManagerUpdateEvent.bar;
        var outL = event.outputBuffer.getChannelData(0);
        var outR = event.outputBuffer.getChannelData(1);
        // should I process the next program?
        var _a = this, sampleRate = _a.sampleRate, bufferSize = _a.__bufferSize;
        var beginNext = this.__cueStatus === 'applying'
            ? Math.min(bufferSize, Math.floor((1.0 - bar) * sampleRate))
            : bufferSize;
        if (this.__chunkHead === 0) {
            this.__prepareBuffer(beatManagerUpdateEvent);
        }
        // insert into its audio buffer
        for (var i = 0; i < beginNext; i++) {
            var chunkIndex = this.__chunkHead * this.__bufferSize * 2;
            outL[i] = this.__pixelBuffer[chunkIndex + i * 2 + 0];
            outR[i] = this.__pixelBuffer[chunkIndex + i * 2 + 1];
        }
        // process the next program??
        if (beginNext !== bufferSize) {
            this.__setCueStatus('none');
            if (this.__programCue) {
                var prevProgram = this.__program;
                this.__program = this.__programCue;
                if (prevProgram) {
                    prevProgram.program.dispose(true);
                }
                this.__programCue = null;
                // render
                this.__prepareBuffer(beatManagerUpdateEvent);
            }
            this.__chunkHead = 0;
            // insert into its audio buffer
            for (var i = beginNext; i < bufferSize; i++) {
                outL[i] = this.__pixelBuffer[i * 2 + 0];
                outR[i] = this.__pixelBuffer[i * 2 + 1];
            }
        }
        this.__chunkHead = (this.__chunkHead + 1) % this.__chunkSize;
        // emit an event
        this.__emit('process');
    };
    WavenerdDeck.prototype.__prepareBuffer = function (event) {
        var _this = this;
        var time = event.time, beat = event.beat, bar = event.bar, sixteenBar = event.sixteenBar, bpm = event.bpm;
        var beatSeconds = BeatManager_1.BeatManager.CalcBeatSeconds(bpm);
        var barSeconds = BeatManager_1.BeatManager.CalcBarSeconds(bpm);
        var sixteenBarSeconds = BeatManager_1.BeatManager.CalcSixteenBarSeconds(bpm);
        var _a = this, sampleRate = _a.sampleRate, bufferSize = _a.__bufferSize, chunkSize = _a.__chunkSize;
        var gl = this.__glCat.gl;
        // render
        if (this.__program) {
            this.__glCat.useProgram(this.__program.program);
            gl.viewport(0, 0, this.__bufferSize / 2, this.__chunkSize);
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.__framebuffer.raw);
            gl.blendFunc(glcat_ts_1.GL.ONE, glcat_ts_1.GL.ZERO);
            this.samples.forEach(function (sample) {
                _this.__program.program.uniformTexture('sample_' + sample.name, sample.texture);
                _this.__program.program.uniform4f('sample_' + sample.name + '_meta', sample.texture.width, sample.texture.height, sample.sampleRate, sample.duration);
            });
            this.__program.program.attribute('p', this.__bufferQuad, 2);
            this.__program.program.uniform1f('bpm', this.bpm);
            this.__program.program.uniform1f('_deltaSample', 1.0 / sampleRate);
            this.__program.program.uniform1f('_deltaChunk', this.__bufferSize / sampleRate);
            this.__program.program.uniform4f('timeLength', beatSeconds, barSeconds, sixteenBarSeconds, 1E16);
            this.__program.program.uniform4f('_timeHead', beat * beatSeconds, bar * barSeconds, sixteenBar * sixteenBarSeconds, time);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            // read pixels
            gl.flush();
            gl.readPixels(0, // x
            0, // y
            bufferSize / 2, // width
            chunkSize, // height
            glcat_ts_1.GL.RGBA, // format
            glcat_ts_1.GL.FLOAT, // type
            this.__pixelBuffer // dst
            );
        }
    };
    WavenerdDeck.prototype.__setCueStatus = function (cueStatus) {
        this.__cueStatus = cueStatus;
        this.__emit('changeCueStatus', { cueStatus: cueStatus });
    };
    WavenerdDeck.prototype.__processErrorMessage = function (error) {
        var str = error === null || error === void 0 ? void 0 : error.message;
        if (!str) {
            return null;
        }
        return str.replace(/ERROR: (\d+):(\d+)/g, function (match) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var line = parseInt(args[1]) - shaderchunks_1.shaderchunkPreLines + 1;
            return "ERROR: " + args[0] + ":" + line;
        });
    };
    return WavenerdDeck;
}());
exports.WavenerdDeck = WavenerdDeck;
applyMixins_1.applyMixins(WavenerdDeck, [EventEmittable_1.EventEmittable]);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WavenerdDeck_1 = __webpack_require__(/*! ./WavenerdDeck */ "./src/WavenerdDeck.ts");
Object.defineProperty(exports, "WavenerdDeck", { enumerable: true, get: function () { return WavenerdDeck_1.WavenerdDeck; } });
var WavenerdDeck_2 = __webpack_require__(/*! ./WavenerdDeck */ "./src/WavenerdDeck.ts");
exports.default = WavenerdDeck_2.WavenerdDeck;


/***/ }),

/***/ "./src/shaderchunks.ts":
/*!*****************************!*\
  !*** ./src/shaderchunks.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shaderchunkPost = exports.shaderchunkPreLines = exports.shaderchunkPre = void 0;
exports.shaderchunkPre = "precision highp float;\n\n#define _PI 3.14159265359\n\nuniform float bpm;\nuniform vec4 timeLength;\nuniform float sampleRate;\nuniform float _deltaSample;\nuniform float _deltaChunk;\nuniform vec4 _timeHead;\n\nvec2 sampleNearest( sampler2D s, vec4 meta, float time ) {\n  if ( meta.w < time ) { return vec2( 0.0 ); }\n  float x = time / meta.x * meta.z;\n  vec2 uv = fract( vec2(\n    x,\n    floor( x ) / meta.y\n  ) ) + 0.5 / meta.xy;\n  return texture2D( s, uv ).xy;\n}\n\n// I have 0% confidence that the algorithm is perfect\nvec2 sample( sampler2D s, vec4 meta, float time ) {\n  if ( meta.w < time ) { return vec2( 0.0 ); }\n  vec2 sum = vec2( 0.0 );\n  float def = 0.5 - fract( time * meta.z );\n  for ( int i = -5; i <= 5; i ++ ) {\n    float x = floor( time * meta.z + float( i ) ) / meta.x;\n    float deft = def + float( i );\n    vec2 uv = fract( vec2(\n      x,\n      floor( x ) / meta.y\n    ) ) + 0.5 / meta.xy;\n    sum += texture2D( s, uv ).xy * min( sin( deft * _PI ) / deft / _PI, 1.0 );\n  }\n  return sum;\n}\n";
exports.shaderchunkPreLines = exports.shaderchunkPre.split('\n').length;
exports.shaderchunkPost = "void main() {\n  float off = floor( gl_FragCoord.x ) * 2.0;\n  vec4 head = _timeHead + _deltaChunk * floor( gl_FragCoord.y );\n  gl_FragColor = vec4(\n    mainAudio( mod( head + ( off ) * _deltaSample, timeLength ) ),\n    mainAudio( mod( head + ( off + 1.0 ) * _deltaSample, timeLength ) )\n  );\n}";


/***/ }),

/***/ "./src/utils/EventEmittable.ts":
/*!*************************************!*\
  !*** ./src/utils/EventEmittable.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Ref: https://github.com/andywer/typed-emitter/blob/master/index.d.ts
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmittable = void 0;
var EventEmittable = /** @class */ (function () {
    function EventEmittable() {
    }
    EventEmittable.prototype.on = function (type, listener) {
        this.__eventListeners = this.__eventListeners || new Map();
        var array = this.__eventListeners.get(type);
        if (!array) {
            array = [];
            this.__eventListeners.set(type, array);
        }
        array.push(listener);
        return listener;
    };
    EventEmittable.prototype.off = function (type, listener) {
        this.__eventListeners = this.__eventListeners || new Map();
        var array = this.__eventListeners.get(type);
        if (!array) {
            array = [];
            this.__eventListeners.set(type, array);
        }
        var index = array.indexOf(listener);
        if (index !== -1) {
            array.splice(index, 1);
        }
    };
    EventEmittable.prototype.__emit = function () {
        var _a;
        var _b = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _b[_i] = arguments[_i];
        }
        var _c = __read(_b, 2), type = _c[0], event = _c[1];
        this.__eventListeners = this.__eventListeners || new Map();
        (_a = this.__eventListeners.get(type)) === null || _a === void 0 ? void 0 : _a.forEach(function (listener) { return listener(event); });
    };
    return EventEmittable;
}());
exports.EventEmittable = EventEmittable;


/***/ }),

/***/ "./src/utils/applyMixins.ts":
/*!**********************************!*\
  !*** ./src/utils/applyMixins.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
exports.applyMixins = applyMixins;


/***/ }),

/***/ "./src/utils/mod.ts":
/*!**************************!*\
  !*** ./src/utils/mod.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
function mod(value, divisor) {
    return value - Math.floor(value / divisor) * divisor;
}
exports.mod = mod;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9ub2RlX21vZHVsZXMvQGZtcy1jYXQvZ2xjYXQtdHMvZGlzdC9nbGNhdC5qcyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL0JlYXRNYW5hZ2VyLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvV2F2ZW5lcmREZWNrLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy9zaGFkZXJjaHVua3MudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy91dGlscy9FdmVudEVtaXR0YWJsZS50cyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL3V0aWxzL2FwcGx5TWl4aW5zLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvdXRpbHMvbW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sYUFLSjtBQUNGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRUFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdCQUFnQjtBQUM3QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLCtDQUErQyxFQUFFO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEMsK0JBQStCLGFBQWE7QUFDNUMsOEJBQThCLFlBQVk7QUFDMUMsK0JBQStCLGFBQWE7QUFDNUMsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZCQUE2QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkJBQTZCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdDQUF3QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUNBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdDQUF3QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscURBQXFELEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxREFBcUQsRUFBRTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QyxpQ0FBaUMsYUFBYTtBQUM5Qyw4QkFBOEIsc0JBQXNCO0FBQ3BELGdDQUFnQyxZQUFZO0FBQzVDLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQ0FBb0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2QkFBNkI7QUFDaEUsbUNBQW1DLHVCQUF1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Q0FBRSxPQUFPLENBQUUsVUFBRSxRQUFRLElBQU0sZUFBUSxDQUFFLEtBQUssQ0FBRSxFQUFqQixDQUFpQixFQUFHO0lBQ2xGLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7QUExQ1ksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKM0IsU0FBZ0IsV0FBVyxDQUFFLFdBQWdCLEVBQUUsU0FBZ0I7SUFDN0QsU0FBUyxDQUFDLE9BQU8sQ0FBRSxVQUFFLFFBQVE7UUFDM0IsTUFBTSxDQUFDLG1CQUFtQixDQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUUsQ0FBQyxPQUFPLENBQUUsVUFBRSxJQUFJO1lBQzlELE1BQU0sQ0FBQyxjQUFjLENBQ25CLFdBQVcsQ0FBQyxTQUFTLEVBQ3JCLElBQUksRUFDSixNQUFNLENBQUMsd0JBQXdCLENBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUcsQ0FDN0QsQ0FBQztRQUNKLENBQUMsQ0FBRSxDQUFDO0lBQ04sQ0FBQyxDQUFFLENBQUM7QUFDTixDQUFDO0FBVkQsa0NBVUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxTQUFnQixHQUFHLENBQUUsS0FBYSxFQUFFLE9BQWU7SUFDakQsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxLQUFLLEdBQUcsT0FBTyxDQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3pELENBQUM7QUFGRCxrQkFFQyIsImZpbGUiOiJ3YXZlbmVyZC1kZWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV0FWRU5FUkRfREVDS1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJXQVZFTkVSRF9ERUNLXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiFcbiAqIEBmbXMtY2F0L2dsY2F0LXRzIHYwLjEwLjBcbiAqIFdlYkdMIHdyYXBwZXIgd2l0aCBwbGVudHkgb2YgaGFja2FiaWxpdHlcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE5IEZNUy1DYXRcbiAqIEBmbXMtY2F0L2dsY2F0LXRzIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIFxuICogUmVwb3NpdG9yeTogaHR0cHM6Ly9naXRodWIuY29tL0ZNUy1DYXQvZ2xjYXQtdHNcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbi8qKioqKiovIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuLyoqKioqKi8gXHR0aGlzW1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdH0gO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4vKioqKioqLyBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4vKioqKioqLyBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuLyoqKioqKi8gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4vKioqKioqLyBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbi8qKioqKiovIFx0XHRcdFx0XHRyZWplY3QoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4vKioqKioqLyBcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuLyoqKioqKi8gXHRcdFx0XHRcdHJlc29sdmUoKTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4vKioqKioqLyBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHN1Y2Nlc3Ncbi8qKioqKiovIFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4vKioqKioqLyBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjE5YmY4ZDU2NmRiZDIwM2YwOWNiXCI7XG4vKioqKioqLyBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbi8qKioqKiovIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4vKioqKioqLyBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4vKioqKioqLyBcdFx0XHRcdHRocm93IGVycjtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0cmV0dXJuIGZuO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0dmFyIGhvdCA9IHtcbi8qKioqKiovIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbi8qKioqKiovIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4vKioqKioqLyBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuLyoqKioqKi8gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuLyoqKioqKi8gXHRcdFx0YWN0aXZlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbi8qKioqKiovIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbi8qKioqKiovIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbi8qKioqKiovIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4vKioqKioqLyBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4vKioqKioqLyBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuLyoqKioqKi8gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0cmV0dXJuIGhvdDtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4vKioqKioqLyBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbi8qKioqKiovIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbi8qKioqKiovIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbi8qKioqKiovIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4vKioqKioqLyBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbi8qKioqKiovIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdHZhciBob3REZWZlcnJlZDtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuLyoqKioqKi8gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuLyoqKioqKi8gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuLyoqKioqKi8gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuLyoqKioqKi8gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4vKioqKioqLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuLyoqKioqKi8gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuLyoqKioqKi8gXHRcdFx0dmFyIGNodW5rSWQgPSBcImdsY2F0LmpzXCI7XG4vKioqKioqLyBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3Ncbi8qKioqKiovIFx0XHRcdHtcbi8qKioqKiovIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbi8qKioqKiovIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbi8qKioqKiovIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuLyoqKioqKi8gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbi8qKioqKiovIFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbi8qKioqKiovIFx0XHR9KTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4vKioqKioqLyBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm47XG4vKioqKioqLyBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbi8qKioqKiovIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4vKioqKioqLyBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuLyoqKioqKi8gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4vKioqKioqLyBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbi8qKioqKiovIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbi8qKioqKiovIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4vKioqKioqLyBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuLyoqKioqKi8gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuLyoqKioqKi8gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4vKioqKioqLyBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4vKioqKioqLyBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuLyoqKioqKi8gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4vKioqKioqLyBcdFx0XHRcdH0pXG4vKioqKioqLyBcdFx0XHRcdC50aGVuKFxuLyoqKioqKi8gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuLyoqKioqKi8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuLyoqKioqKi8gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHR2YXIgY2I7XG4vKioqKioqLyBcdFx0dmFyIGk7XG4vKioqKioqLyBcdFx0dmFyIGo7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZTtcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlSWQ7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuLyoqKioqKi8gXHRcdFx0XHRcdGlkOiBpZFxuLyoqKioqKi8gXHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4vKioqKioqLyBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuLyoqKioqKi8gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbi8qKioqKiovIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4vKioqKioqLyBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4vKioqKioqLyBcdFx0XHRjb25zb2xlLndhcm4oXG4vKioqKioqLyBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4vKioqKioqLyBcdFx0XHQpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuLyoqKioqKi8gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4vKioqKioqLyBcdFx0XHRcdHZhciByZXN1bHQ7XG4vKioqKioqLyBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4vKioqKioqLyBcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdGRlZmF1bHQ6XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbi8qKioqKiovIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuLyoqKioqKi8gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbi8qKioqKiovIFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbi8qKioqKiovIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbi8qKioqKiovIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuLyoqKioqKi8gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlXG4vKioqKioqLyBcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4vKioqKioqLyBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuLyoqKioqKi8gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdHZhciBpZHg7XG4vKioqKioqLyBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4vKioqKioqLyBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbi8qKioqKiovIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbi8qKioqKiovIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4vKioqKioqLyBcdFx0XHRcdGNiKGRhdGEpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuLyoqKioqKi8gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbi8qKioqKiovIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4vKioqKioqLyBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0dmFyIGRlcGVuZGVuY3k7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuLyoqKioqKi8gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbi8qKioqKiovIFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbi8qKioqKiovIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdHZhciBlcnJvciA9IG51bGw7XG4vKioqKioqLyBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChjYikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuLyoqKioqKi8gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbi8qKioqKiovIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbi8qKioqKiovIFx0XHRpZiAoZXJyb3IpIHtcbi8qKioqKiovIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuLyoqKioqKi8gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4vKioqKioqLyBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4vKioqKioqLyBcdFx0XHRjaGlsZHJlbjogW11cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19oYXNoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9pbmRleC50c1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL0dMLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0dMLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdMID0ge1xuICAgIEFDVElWRV9BVFRSSUJVVEVTOiAzNTcyMSxcbiAgICBBQ1RJVkVfQVRUUklCVVRFX01BWF9MRU5HVEg6IDM1NzIyLFxuICAgIEFDVElWRV9URVhUVVJFOiAzNDAxNixcbiAgICBBQ1RJVkVfVU5JRk9STVM6IDM1NzE4LFxuICAgIEFDVElWRV9VTklGT1JNX01BWF9MRU5HVEg6IDM1NzE5LFxuICAgIEFMSUFTRURfTElORV9XSURUSF9SQU5HRTogMzM5MDIsXG4gICAgQUxJQVNFRF9QT0lOVF9TSVpFX1JBTkdFOiAzMzkwMSxcbiAgICBBTFBIQTogNjQwNixcbiAgICBBTFBIQV9CSVRTOiAzNDEzLFxuICAgIEFMV0FZUzogNTE5LFxuICAgIEFSUkFZX0JVRkZFUjogMzQ5NjIsXG4gICAgQVJSQVlfQlVGRkVSX0JJTkRJTkc6IDM0OTY0LFxuICAgIEFUVEFDSEVEX1NIQURFUlM6IDM1NzE3LFxuICAgIEJBQ0s6IDEwMjksXG4gICAgQkxFTkQ6IDMwNDIsXG4gICAgQkxFTkRfQ09MT1I6IDMyNzczLFxuICAgIEJMRU5EX0RTVF9BTFBIQTogMzI5NzAsXG4gICAgQkxFTkRfRFNUX1JHQjogMzI5NjgsXG4gICAgQkxFTkRfRVFVQVRJT046IDMyNzc3LFxuICAgIEJMRU5EX0VRVUFUSU9OX0FMUEhBOiAzNDg3NyxcbiAgICBCTEVORF9FUVVBVElPTl9SR0I6IDMyNzc3LFxuICAgIEJMRU5EX1NSQ19BTFBIQTogMzI5NzEsXG4gICAgQkxFTkRfU1JDX1JHQjogMzI5NjksXG4gICAgQkxVRV9CSVRTOiAzNDEyLFxuICAgIEJPT0w6IDM1NjcwLFxuICAgIEJPT0xfVkVDMjogMzU2NzEsXG4gICAgQk9PTF9WRUMzOiAzNTY3MixcbiAgICBCT09MX1ZFQzQ6IDM1NjczLFxuICAgIEJST1dTRVJfREVGQVVMVF9XRUJHTDogMzc0NDQsXG4gICAgQlVGRkVSX1NJWkU6IDM0NjYwLFxuICAgIEJVRkZFUl9VU0FHRTogMzQ2NjEsXG4gICAgQllURTogNTEyMCxcbiAgICBDQ1c6IDIzMDUsXG4gICAgQ0xBTVBfVE9fRURHRTogMzMwNzEsXG4gICAgQ09MT1JfQVRUQUNITUVOVDA6IDM2MDY0LFxuICAgIENPTE9SX0JVRkZFUl9CSVQ6IDE2Mzg0LFxuICAgIENPTE9SX0NMRUFSX1ZBTFVFOiAzMTA2LFxuICAgIENPTE9SX1dSSVRFTUFTSzogMzEwNyxcbiAgICBDT01QSUxFX1NUQVRVUzogMzU3MTMsXG4gICAgQ09NUFJFU1NFRF9URVhUVVJFX0ZPUk1BVFM6IDM0NDY3LFxuICAgIENPTlNUQU5UX0FMUEhBOiAzMjc3MSxcbiAgICBDT05TVEFOVF9DT0xPUjogMzI3NjksXG4gICAgQ09OVEVYVF9MT1NUX1dFQkdMOiAzNzQ0MixcbiAgICBDVUxMX0ZBQ0U6IDI4ODQsXG4gICAgQ1VMTF9GQUNFX01PREU6IDI4ODUsXG4gICAgQ1VSUkVOVF9QUk9HUkFNOiAzNTcyNSxcbiAgICBDVVJSRU5UX1ZFUlRFWF9BVFRSSUI6IDM0MzQyLFxuICAgIENXOiAyMzA0LFxuICAgIERFQ1I6IDc2ODMsXG4gICAgREVDUl9XUkFQOiAzNDA1NixcbiAgICBERUxFVEVfU1RBVFVTOiAzNTcxMixcbiAgICBERVBUSF9BVFRBQ0hNRU5UOiAzNjA5NixcbiAgICBERVBUSF9CSVRTOiAzNDE0LFxuICAgIERFUFRIX0JVRkZFUl9CSVQ6IDI1NixcbiAgICBERVBUSF9DTEVBUl9WQUxVRTogMjkzMSxcbiAgICBERVBUSF9DT01QT05FTlQ6IDY0MDIsXG4gICAgREVQVEhfQ09NUE9ORU5UMTY6IDMzMTg5LFxuICAgIERFUFRIX0ZVTkM6IDI5MzIsXG4gICAgREVQVEhfUkFOR0U6IDI5MjgsXG4gICAgREVQVEhfU1RFTkNJTDogMzQwNDEsXG4gICAgREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UOiAzMzMwNixcbiAgICBERVBUSF9URVNUOiAyOTI5LFxuICAgIERFUFRIX1dSSVRFTUFTSzogMjkzMCxcbiAgICBESVRIRVI6IDMwMjQsXG4gICAgRE9OVF9DQVJFOiA0MzUyLFxuICAgIERTVF9BTFBIQTogNzcyLFxuICAgIERTVF9DT0xPUjogNzc0LFxuICAgIERZTkFNSUNfRFJBVzogMzUwNDgsXG4gICAgRUxFTUVOVF9BUlJBWV9CVUZGRVI6IDM0OTYzLFxuICAgIEVMRU1FTlRfQVJSQVlfQlVGRkVSX0JJTkRJTkc6IDM0OTY1LFxuICAgIEVRVUFMOiA1MTQsXG4gICAgRkFTVEVTVDogNDM1MyxcbiAgICBGTE9BVDogNTEyNixcbiAgICBGTE9BVF9NQVQyOiAzNTY3NCxcbiAgICBGTE9BVF9NQVQzOiAzNTY3NSxcbiAgICBGTE9BVF9NQVQ0OiAzNTY3NixcbiAgICBGTE9BVF9WRUMyOiAzNTY2NCxcbiAgICBGTE9BVF9WRUMzOiAzNTY2NSxcbiAgICBGTE9BVF9WRUM0OiAzNTY2NixcbiAgICBGUkFHTUVOVF9TSEFERVI6IDM1NjMyLFxuICAgIEZSQU1FQlVGRkVSOiAzNjE2MCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX09CSkVDVF9OQU1FOiAzNjA0OSxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX09CSkVDVF9UWVBFOiAzNjA0OCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1RFWFRVUkVfQ1VCRV9NQVBfRkFDRTogMzYwNTEsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9URVhUVVJFX0xFVkVMOiAzNjA1MCxcbiAgICBGUkFNRUJVRkZFUl9CSU5ESU5HOiAzNjAwNixcbiAgICBGUkFNRUJVRkZFUl9DT01QTEVURTogMzYwNTMsXG4gICAgRlJBTUVCVUZGRVJfSU5DT01QTEVURV9BVFRBQ0hNRU5UOiAzNjA1NCxcbiAgICBGUkFNRUJVRkZFUl9JTkNPTVBMRVRFX0RJTUVOU0lPTlM6IDM2MDU3LFxuICAgIEZSQU1FQlVGRkVSX0lOQ09NUExFVEVfTUlTU0lOR19BVFRBQ0hNRU5UOiAzNjA1NSxcbiAgICBGUkFNRUJVRkZFUl9VTlNVUFBPUlRFRDogMzYwNjEsXG4gICAgRlJPTlQ6IDEwMjgsXG4gICAgRlJPTlRfQU5EX0JBQ0s6IDEwMzIsXG4gICAgRlJPTlRfRkFDRTogMjg4NixcbiAgICBGVU5DX0FERDogMzI3NzQsXG4gICAgRlVOQ19SRVZFUlNFX1NVQlRSQUNUOiAzMjc3OSxcbiAgICBGVU5DX1NVQlRSQUNUOiAzMjc3OCxcbiAgICBHRU5FUkFURV9NSVBNQVBfSElOVDogMzMxNzAsXG4gICAgR0VRVUFMOiA1MTgsXG4gICAgR1JFQVRFUjogNTE2LFxuICAgIEdSRUVOX0JJVFM6IDM0MTEsXG4gICAgSElHSF9GTE9BVDogMzYzMzgsXG4gICAgSElHSF9JTlQ6IDM2MzQxLFxuICAgIElOQ1I6IDc2ODIsXG4gICAgSU5DUl9XUkFQOiAzNDA1NSxcbiAgICBJTkZPX0xPR19MRU5HVEg6IDM1NzE2LFxuICAgIElOVDogNTEyNCxcbiAgICBJTlRfVkVDMjogMzU2NjcsXG4gICAgSU5UX1ZFQzM6IDM1NjY4LFxuICAgIElOVF9WRUM0OiAzNTY2OSxcbiAgICBJTlZBTElEX0VOVU06IDEyODAsXG4gICAgSU5WQUxJRF9GUkFNRUJVRkZFUl9PUEVSQVRJT046IDEyODYsXG4gICAgSU5WQUxJRF9PUEVSQVRJT046IDEyODIsXG4gICAgSU5WQUxJRF9WQUxVRTogMTI4MSxcbiAgICBJTlZFUlQ6IDUzODYsXG4gICAgS0VFUDogNzY4MCxcbiAgICBMRVFVQUw6IDUxNSxcbiAgICBMRVNTOiA1MTMsXG4gICAgTElORUFSOiA5NzI5LFxuICAgIExJTkVBUl9NSVBNQVBfTElORUFSOiA5OTg3LFxuICAgIExJTkVBUl9NSVBNQVBfTkVBUkVTVDogOTk4NSxcbiAgICBMSU5FUzogMSxcbiAgICBMSU5FX0xPT1A6IDIsXG4gICAgTElORV9TVFJJUDogMyxcbiAgICBMSU5FX1dJRFRIOiAyODQ5LFxuICAgIExJTktfU1RBVFVTOiAzNTcxNCxcbiAgICBMT1dfRkxPQVQ6IDM2MzM2LFxuICAgIExPV19JTlQ6IDM2MzM5LFxuICAgIExVTUlOQU5DRTogNjQwOSxcbiAgICBMVU1JTkFOQ0VfQUxQSEE6IDY0MTAsXG4gICAgTUFYX0NPTUJJTkVEX1RFWFRVUkVfSU1BR0VfVU5JVFM6IDM1NjYxLFxuICAgIE1BWF9DVUJFX01BUF9URVhUVVJFX1NJWkU6IDM0MDc2LFxuICAgIE1BWF9GUkFHTUVOVF9VTklGT1JNX1ZFQ1RPUlM6IDM2MzQ5LFxuICAgIE1BWF9SRU5ERVJCVUZGRVJfU0laRTogMzQwMjQsXG4gICAgTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFM6IDM0OTMwLFxuICAgIE1BWF9URVhUVVJFX1NJWkU6IDMzNzksXG4gICAgTUFYX1ZBUllJTkdfVkVDVE9SUzogMzYzNDgsXG4gICAgTUFYX1ZFUlRFWF9BVFRSSUJTOiAzNDkyMSxcbiAgICBNQVhfVkVSVEVYX1RFWFRVUkVfSU1BR0VfVU5JVFM6IDM1NjYwLFxuICAgIE1BWF9WRVJURVhfVU5JRk9STV9WRUNUT1JTOiAzNjM0NyxcbiAgICBNQVhfVklFV1BPUlRfRElNUzogMzM4NixcbiAgICBNRURJVU1fRkxPQVQ6IDM2MzM3LFxuICAgIE1FRElVTV9JTlQ6IDM2MzQwLFxuICAgIE1JUlJPUkVEX1JFUEVBVDogMzM2NDgsXG4gICAgTkVBUkVTVDogOTcyOCxcbiAgICBORUFSRVNUX01JUE1BUF9MSU5FQVI6IDk5ODYsXG4gICAgTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDogOTk4NCxcbiAgICBORVZFUjogNTEyLFxuICAgIE5JQ0VTVDogNDM1NCxcbiAgICBOT05FOiAwLFxuICAgIE5PVEVRVUFMOiA1MTcsXG4gICAgTk9fRVJST1I6IDAsXG4gICAgTlVNX0NPTVBSRVNTRURfVEVYVFVSRV9GT1JNQVRTOiAzNDQ2NixcbiAgICBPTkU6IDEsXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0FMUEhBOiAzMjc3MixcbiAgICBPTkVfTUlOVVNfQ09OU1RBTlRfQ09MT1I6IDMyNzcwLFxuICAgIE9ORV9NSU5VU19EU1RfQUxQSEE6IDc3MyxcbiAgICBPTkVfTUlOVVNfRFNUX0NPTE9SOiA3NzUsXG4gICAgT05FX01JTlVTX1NSQ19BTFBIQTogNzcxLFxuICAgIE9ORV9NSU5VU19TUkNfQ09MT1I6IDc2OSxcbiAgICBPVVRfT0ZfTUVNT1JZOiAxMjg1LFxuICAgIFBBQ0tfQUxJR05NRU5UOiAzMzMzLFxuICAgIFBPSU5UUzogMCxcbiAgICBQT0xZR09OX09GRlNFVF9GQUNUT1I6IDMyODI0LFxuICAgIFBPTFlHT05fT0ZGU0VUX0ZJTEw6IDMyODIzLFxuICAgIFBPTFlHT05fT0ZGU0VUX1VOSVRTOiAxMDc1MixcbiAgICBSRURfQklUUzogMzQxMCxcbiAgICBSRU5ERVJCVUZGRVI6IDM2MTYxLFxuICAgIFJFTkRFUkJVRkZFUl9BTFBIQV9TSVpFOiAzNjE3OSxcbiAgICBSRU5ERVJCVUZGRVJfQklORElORzogMzYwMDcsXG4gICAgUkVOREVSQlVGRkVSX0JMVUVfU0laRTogMzYxNzgsXG4gICAgUkVOREVSQlVGRkVSX0RFUFRIX1NJWkU6IDM2MTgwLFxuICAgIFJFTkRFUkJVRkZFUl9HUkVFTl9TSVpFOiAzNjE3NyxcbiAgICBSRU5ERVJCVUZGRVJfSEVJR0hUOiAzNjE2MyxcbiAgICBSRU5ERVJCVUZGRVJfSU5URVJOQUxfRk9STUFUOiAzNjE2NCxcbiAgICBSRU5ERVJCVUZGRVJfUkVEX1NJWkU6IDM2MTc2LFxuICAgIFJFTkRFUkJVRkZFUl9TVEVOQ0lMX1NJWkU6IDM2MTgxLFxuICAgIFJFTkRFUkJVRkZFUl9XSURUSDogMzYxNjIsXG4gICAgUkVOREVSRVI6IDc5MzcsXG4gICAgUkVQRUFUOiAxMDQ5NyxcbiAgICBSRVBMQUNFOiA3NjgxLFxuICAgIFJHQjogNjQwNyxcbiAgICBSR0I1X0ExOiAzMjg1NSxcbiAgICBSR0I1NjU6IDM2MTk0LFxuICAgIFJHQkE6IDY0MDgsXG4gICAgUkdCQTQ6IDMyODU0LFxuICAgIFNBTVBMRVJfMkQ6IDM1Njc4LFxuICAgIFNBTVBMRVJfQ1VCRTogMzU2ODAsXG4gICAgU0FNUExFUzogMzI5MzcsXG4gICAgU0FNUExFX0FMUEhBX1RPX0NPVkVSQUdFOiAzMjkyNixcbiAgICBTQU1QTEVfQlVGRkVSUzogMzI5MzYsXG4gICAgU0FNUExFX0NPVkVSQUdFOiAzMjkyOCxcbiAgICBTQU1QTEVfQ09WRVJBR0VfSU5WRVJUOiAzMjkzOSxcbiAgICBTQU1QTEVfQ09WRVJBR0VfVkFMVUU6IDMyOTM4LFxuICAgIFNDSVNTT1JfQk9YOiAzMDg4LFxuICAgIFNDSVNTT1JfVEVTVDogMzA4OSxcbiAgICBTSEFERVJfQ09NUElMRVI6IDM2MzQ2LFxuICAgIFNIQURFUl9TT1VSQ0VfTEVOR1RIOiAzNTcyMCxcbiAgICBTSEFERVJfVFlQRTogMzU2NjMsXG4gICAgU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OOiAzNTcyNCxcbiAgICBTSE9SVDogNTEyMixcbiAgICBTUkNfQUxQSEE6IDc3MCxcbiAgICBTUkNfQUxQSEFfU0FUVVJBVEU6IDc3NixcbiAgICBTUkNfQ09MT1I6IDc2OCxcbiAgICBTVEFUSUNfRFJBVzogMzUwNDQsXG4gICAgU1RFTkNJTF9BVFRBQ0hNRU5UOiAzNjEyOCxcbiAgICBTVEVOQ0lMX0JBQ0tfRkFJTDogMzQ4MTcsXG4gICAgU1RFTkNJTF9CQUNLX0ZVTkM6IDM0ODE2LFxuICAgIFNURU5DSUxfQkFDS19QQVNTX0RFUFRIX0ZBSUw6IDM0ODE4LFxuICAgIFNURU5DSUxfQkFDS19QQVNTX0RFUFRIX1BBU1M6IDM0ODE5LFxuICAgIFNURU5DSUxfQkFDS19SRUY6IDM2MDAzLFxuICAgIFNURU5DSUxfQkFDS19WQUxVRV9NQVNLOiAzNjAwNCxcbiAgICBTVEVOQ0lMX0JBQ0tfV1JJVEVNQVNLOiAzNjAwNSxcbiAgICBTVEVOQ0lMX0JJVFM6IDM0MTUsXG4gICAgU1RFTkNJTF9CVUZGRVJfQklUOiAxMDI0LFxuICAgIFNURU5DSUxfQ0xFQVJfVkFMVUU6IDI5NjEsXG4gICAgU1RFTkNJTF9GQUlMOiAyOTY0LFxuICAgIFNURU5DSUxfRlVOQzogMjk2MixcbiAgICBTVEVOQ0lMX0lOREVYOiA2NDAxLFxuICAgIFNURU5DSUxfSU5ERVg4OiAzNjE2OCxcbiAgICBTVEVOQ0lMX1BBU1NfREVQVEhfRkFJTDogMjk2NSxcbiAgICBTVEVOQ0lMX1BBU1NfREVQVEhfUEFTUzogMjk2NixcbiAgICBTVEVOQ0lMX1JFRjogMjk2NyxcbiAgICBTVEVOQ0lMX1RFU1Q6IDI5NjAsXG4gICAgU1RFTkNJTF9WQUxVRV9NQVNLOiAyOTYzLFxuICAgIFNURU5DSUxfV1JJVEVNQVNLOiAyOTY4LFxuICAgIFNUUkVBTV9EUkFXOiAzNTA0MCxcbiAgICBTVUJQSVhFTF9CSVRTOiAzNDA4LFxuICAgIFRFWFRVUkU6IDU4OTAsXG4gICAgVEVYVFVSRTA6IDMzOTg0LFxuICAgIFRFWFRVUkUxOiAzMzk4NSxcbiAgICBURVhUVVJFMjogMzM5ODYsXG4gICAgVEVYVFVSRTM6IDMzOTg3LFxuICAgIFRFWFRVUkU0OiAzMzk4OCxcbiAgICBURVhUVVJFNTogMzM5ODksXG4gICAgVEVYVFVSRTY6IDMzOTkwLFxuICAgIFRFWFRVUkU3OiAzMzk5MSxcbiAgICBURVhUVVJFODogMzM5OTIsXG4gICAgVEVYVFVSRTk6IDMzOTkzLFxuICAgIFRFWFRVUkUxMDogMzM5OTQsXG4gICAgVEVYVFVSRTExOiAzMzk5NSxcbiAgICBURVhUVVJFMTI6IDMzOTk2LFxuICAgIFRFWFRVUkUxMzogMzM5OTcsXG4gICAgVEVYVFVSRTE0OiAzMzk5OCxcbiAgICBURVhUVVJFMTU6IDMzOTk5LFxuICAgIFRFWFRVUkUxNjogMzQwMDAsXG4gICAgVEVYVFVSRTE3OiAzNDAwMSxcbiAgICBURVhUVVJFMTg6IDM0MDAyLFxuICAgIFRFWFRVUkUxOTogMzQwMDMsXG4gICAgVEVYVFVSRTIwOiAzNDAwNCxcbiAgICBURVhUVVJFMjE6IDM0MDA1LFxuICAgIFRFWFRVUkUyMjogMzQwMDYsXG4gICAgVEVYVFVSRTIzOiAzNDAwNyxcbiAgICBURVhUVVJFMjQ6IDM0MDA4LFxuICAgIFRFWFRVUkUyNTogMzQwMDksXG4gICAgVEVYVFVSRTI2OiAzNDAxMCxcbiAgICBURVhUVVJFMjc6IDM0MDExLFxuICAgIFRFWFRVUkUyODogMzQwMTIsXG4gICAgVEVYVFVSRTI5OiAzNDAxMyxcbiAgICBURVhUVVJFMzA6IDM0MDE0LFxuICAgIFRFWFRVUkUzMTogMzQwMTUsXG4gICAgVEVYVFVSRV8yRDogMzU1MyxcbiAgICBURVhUVVJFX0JJTkRJTkdfMkQ6IDMyODczLFxuICAgIFRFWFRVUkVfQklORElOR19DVUJFX01BUDogMzQwNjgsXG4gICAgVEVYVFVSRV9DVUJFX01BUDogMzQwNjcsXG4gICAgVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YOiAzNDA3MCxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1k6IDM0MDcyLFxuICAgIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWjogMzQwNzQsXG4gICAgVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YOiAzNDA2OSxcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1k6IDM0MDcxLFxuICAgIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWjogMzQwNzMsXG4gICAgVEVYVFVSRV9NQUdfRklMVEVSOiAxMDI0MCxcbiAgICBURVhUVVJFX01JTl9GSUxURVI6IDEwMjQxLFxuICAgIFRFWFRVUkVfV1JBUF9TOiAxMDI0MixcbiAgICBURVhUVVJFX1dSQVBfVDogMTAyNDMsXG4gICAgVFJJQU5HTEVTOiA0LFxuICAgIFRSSUFOR0xFX0ZBTjogNixcbiAgICBUUklBTkdMRV9TVFJJUDogNSxcbiAgICBVTlBBQ0tfQUxJR05NRU5UOiAzMzE3LFxuICAgIFVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0w6IDM3NDQzLFxuICAgIFVOUEFDS19GTElQX1lfV0VCR0w6IDM3NDQwLFxuICAgIFVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTDogMzc0NDEsXG4gICAgVU5TSUdORURfQllURTogNTEyMSxcbiAgICBVTlNJR05FRF9JTlQ6IDUxMjUsXG4gICAgVU5TSUdORURfU0hPUlQ6IDUxMjMsXG4gICAgVU5TSUdORURfU0hPUlRfNF80XzRfNDogMzI4MTksXG4gICAgVU5TSUdORURfU0hPUlRfNV81XzVfMTogMzI4MjAsXG4gICAgVU5TSUdORURfU0hPUlRfNV82XzU6IDMzNjM1LFxuICAgIFZBTElEQVRFX1NUQVRVUzogMzU3MTUsXG4gICAgVkVORE9SOiA3OTM2LFxuICAgIFZFUlNJT046IDc5MzgsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9CVUZGRVJfQklORElORzogMzQ5NzUsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9FTkFCTEVEOiAzNDMzOCxcbiAgICBWRVJURVhfQVRUUklCX0FSUkFZX05PUk1BTElaRUQ6IDM0OTIyLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfUE9JTlRFUjogMzQzNzMsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9TSVpFOiAzNDMzOSxcbiAgICBWRVJURVhfQVRUUklCX0FSUkFZX1NUUklERTogMzQzNDAsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9UWVBFOiAzNDM0MSxcbiAgICBWRVJURVhfU0hBREVSOiAzNTYzMyxcbiAgICBWSUVXUE9SVDogMjk3OCxcbiAgICBaRVJPOiAwXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0dMQ2F0LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0dMQ2F0LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xDYXRCdWZmZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR0xDYXRCdWZmZXIgKi8gXCIuL3NyYy9HTENhdEJ1ZmZlci50c1wiKTtcbnZhciBHTENhdEZyYW1lYnVmZmVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dMQ2F0RnJhbWVidWZmZXIgKi8gXCIuL3NyYy9HTENhdEZyYW1lYnVmZmVyLnRzXCIpO1xudmFyIEdMQ2F0UHJvZ3JhbV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HTENhdFByb2dyYW0gKi8gXCIuL3NyYy9HTENhdFByb2dyYW0udHNcIik7XG52YXIgR0xDYXRSZW5kZXJidWZmZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR0xDYXRSZW5kZXJidWZmZXIgKi8gXCIuL3NyYy9HTENhdFJlbmRlcmJ1ZmZlci50c1wiKTtcbnZhciBHTENhdFNoYWRlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HTENhdFNoYWRlciAqLyBcIi4vc3JjL0dMQ2F0U2hhZGVyLnRzXCIpO1xudmFyIEdMQ2F0VGV4dHVyZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HTENhdFRleHR1cmUgKi8gXCIuL3NyYy9HTENhdFRleHR1cmUudHNcIik7XG4vKipcbiAqIFdlYkdMIHdyYXBwZXIgd2l0aCBwbGVudHkgb2YgaGFja2FiaWxpdHkuXG4gKi9cbnZhciBHTENhdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXQgaW5zdGFuY2UuXG4gICAgICogV2ViR0xSZW5kZXJpbmdDb250ZXh0IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEdMQ2F0KGdsKSB7XG4gICAgICAgIHRoaXMuX19leHRlbnNpb25DYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9fZ2wgPSBnbDtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xuICAgICAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdC5wcm90b3R5cGUsIFwicmVuZGVyaW5nQ29udGV4dFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19nbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0LnByb3RvdHlwZSwgXCJnbFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIFdlYkdMUmVuZGVyaW5nQ29udGV4dC4gU2hvcnRlciB0aGFuIFtbR0xDYXQucmVuZGVyaW5nQ29udGV4dF1dXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZ2w7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdC5wcm90b3R5cGUsIFwiZHVtbXlUZXh0dXJlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZHVtbXkgdGV4dHVyZSwgMTAwJSBvcmdhbmljIHB1cmUgI0ZGMDBGRiB0ZXh0dXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX2R1bW15VGV4dHVyZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19kdW1teVRleHR1cmVDYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgICAgICBpZiAodGV4dHVyZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dHVyZS5zZXRUZXh0dXJlRnJvbUFycmF5KDEsIDEsIG5ldyBVaW50OEFycmF5KFsyNTUsIDAsIDI1NSwgMjU1XSkpO1xuICAgICAgICAgICAgdGhpcy5fX2R1bW15VGV4dHVyZUNhY2hlID0gdGV4dHVyZTtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBhbiBleHRlbnNpb24uXG4gICAgICogSWYgdGhleSBpcyB5b3VyIHByZWNpb3VzIG9uZSBhbmQgeW91IGNhbm5vdCBsaXZlIHdpdGhvdXQgaGltLCB0dXJuIG9uIGB0aHJvd0lmTm90Rm91bmRgLlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5nZXRFeHRlbnNpb24gPSBmdW5jdGlvbiAobmFtZSwgdGhyb3dJZk5vdEZvdW5kKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgaWYgKHRoaXMuX19leHRlbnNpb25DYWNoZVtuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19leHRlbnNpb25DYWNoZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19leHRlbnNpb25DYWNoZVtuYW1lXSA9IGdsLmdldEV4dGVuc2lvbihuYW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fZXh0ZW5zaW9uQ2FjaGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2V4dGVuc2lvbkNhY2hlW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRocm93SWZOb3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dMQ2F0LmdldEV4dGVuc2lvbjogVGhlIGV4dGVuc2lvbiBcIicgKyBuYW1lICsgJ1wiIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIGV4dGVuc2lvbnMuXG4gICAgICogSWYgdGhleSBhcmUgeW91ciBwcmVjaW91cyBvbmVzIGFuZCB5b3UgY2Fubm90IGxpdmUgd2l0aG91dCB0aGVtLCB0dXJuIG9uIGB0aHJvd0lmTm90Rm91bmRgLlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5nZXRFeHRlbnNpb25zID0gZnVuY3Rpb24gKG5hbWVzLCB0aHJvd0lmTm90Rm91bmQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5hbWVzLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gX3RoaXMuZ2V0RXh0ZW5zaW9uKG4sIHRocm93SWZOb3RGb3VuZCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHNoYWRlciBvYmplY3QuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmNyZWF0ZVNoYWRlciA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgICAgICAgaWYgKHNoYWRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHTENhdFNoYWRlcl8xLkdMQ2F0U2hhZGVyKHRoaXMsIHNoYWRlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXQgcHJvZ3JhbSBvYmplY3QuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmNyZWF0ZVByb2dyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICAgIGlmIChwcm9ncmFtID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdMQ2F0UHJvZ3JhbV8xLkdMQ2F0UHJvZ3JhbSh0aGlzLCBwcm9ncmFtKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBHTENhdCBwcm9ncmFtIG9iamVjdCwgaW4gbGF6aWVyIHdheS5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUubGF6eVByb2dyYW0gPSBmdW5jdGlvbiAodmVydCwgZnJhZykge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2w7XG4gICAgICAgIC8vID09IHZlcnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB2YXIgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICAgIGlmICh2ZXJ0ZXhTaGFkZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuY29tcGlsZSh2ZXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gPT0gZnJhZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICAgIGlmIChmcmFnbWVudFNoYWRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlci5jb21waWxlKGZyYWcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyA9PSBwcm9ncmFtID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgICAgaWYgKHByb2dyYW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHJvZ3JhbS5saW5rKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcHJvZ3JhbS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEdMQ2F0IHByb2dyYW0gb2JqZWN0LCBpbiBsYXppZXIgd2F5LlxuICAgICAqIEl0J3MgZ29ubmEgYmUgYXN5bmNocm9ub3VzIGlmIHlvdSBoYXZlIHRoZSBLSFJfcGFyYWxsZWxfc2hhZGVyX2NvbXBpbGUgZXh0ZW5zaW9uIHN1cHBvcnQuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmxhenlQcm9ncmFtQXN5bmMgPSBmdW5jdGlvbiAodmVydCwgZnJhZykge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2w7XG4gICAgICAgIC8vID09IHZlcnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB2YXIgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICAgIGlmICh2ZXJ0ZXhTaGFkZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5jb21waWxlKHZlcnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vID09IGZyYWcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgICAgICBpZiAoZnJhZ21lbnRTaGFkZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcikpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlci5jb21waWxlKGZyYWcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vID09IHByb2dyYW0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICBpZiAocHJvZ3JhbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2dyYW0ubGlua0FzeW5jKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcHJvZ3JhbS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBwcm9ncmFtIHRvIHVzZS5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUudXNlUHJvZ3JhbSA9IGZ1bmN0aW9uIChwcm9ncmFtKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICBnbC51c2VQcm9ncmFtKCgoX2EgPSBwcm9ncmFtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmF3KSB8fCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB2ZXJ0ZXggYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5jcmVhdGVCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBpZiAoYnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdMQ2F0QnVmZmVyXzEuR0xDYXRCdWZmZXIodGhpcywgYnVmZmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0ZXh0dXJlLlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5jcmVhdGVUZXh0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2w7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICBpZiAodGV4dHVyZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHTENhdFRleHR1cmVfMS5HTENhdFRleHR1cmUodGhpcywgdGV4dHVyZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgcmVuZGVyYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5jcmVhdGVSZW5kZXJidWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgdmFyIHJlbmRlcmJ1ZmZlciA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuICAgICAgICBpZiAocmVuZGVyYnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdMQ2F0UmVuZGVyYnVmZmVyXzEuR0xDYXRSZW5kZXJidWZmZXIodGhpcywgcmVuZGVyYnVmZmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBmcmFtZWJ1ZmZlci5cbiAgICAgKiBUT0RPOiBEcmF3QnVmZmVyc1xuICAgICAqL1xuICAgIEdMQ2F0LnByb3RvdHlwZS5jcmVhdGVGcmFtZWJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsO1xuICAgICAgICB2YXIgZnJhbWVidWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICBpZiAoZnJhbWVidWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR0xDYXRGcmFtZWJ1ZmZlcl8xLkdMQ2F0RnJhbWVidWZmZXIodGhpcywgZnJhbWVidWZmZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGZyYW1lYnVmZXIsIGluIGxhemllciB3YXkuXG4gICAgICovXG4gICAgR0xDYXQucHJvdG90eXBlLmxhenlGcmFtZWJ1ZmZlciA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBpc0Zsb2F0KSB7XG4gICAgICAgIGlmIChpc0Zsb2F0ID09PSB2b2lkIDApIHsgaXNGbG9hdCA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBmcmFtZWJ1ZmZlciA9IHRoaXMuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgICAgICAgaWYgKGZyYW1lYnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVuZGVyYnVmZmVyID0gdGhpcy5jcmVhdGVSZW5kZXJidWZmZXIoKTtcbiAgICAgICAgaWYgKHJlbmRlcmJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZnJhbWVidWZmZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyYnVmZmVyLmluaXQod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGZyYW1lYnVmZmVyLmF0dGFjaFJlbmRlcmJ1ZmZlcihyZW5kZXJidWZmZXIpO1xuICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICBpZiAodGV4dHVyZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZnJhbWVidWZmZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmVuZGVyYnVmZmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Zsb2F0KSB7XG4gICAgICAgICAgICB0ZXh0dXJlLnNldFRleHR1cmVGcm9tRmxvYXRBcnJheSh3aWR0aCwgaGVpZ2h0LCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRleHR1cmUuc2V0VGV4dHVyZUZyb21BcnJheSh3aWR0aCwgaGVpZ2h0LCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBmcmFtZWJ1ZmZlci5hdHRhY2hUZXh0dXJlKHRleHR1cmUpO1xuICAgICAgICByZXR1cm4gZnJhbWVidWZmZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgZHJhdyBidWZmZXJzLCBpbiBsYXppZXIgd2F5LlxuICAgICAqIElmIHlvdSBjYW4ndCBncmFiIGBXRUJHTF9kcmF3X2J1ZmZlcnNgIGV4dGVuc2lvbiwgeW91J2xsIGRpZSBpbnN0YW50bHkgYXQgdGhpcyBwb2ludC5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUubGF6eURyYXdidWZmZXJzID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIG51bUJ1ZmZlcnMsIGlzRmxvYXQpIHtcbiAgICAgICAgaWYgKGlzRmxvYXQgPT09IHZvaWQgMCkgeyBpc0Zsb2F0ID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGV4dCA9IHRoaXMuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kcmF3X2J1ZmZlcnMnLCB0cnVlKTtcbiAgICAgICAgaWYgKGV4dC5NQVhfRFJBV19CVUZGRVJTX1dFQkdMIDwgbnVtQnVmZmVycykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0dMQ2F0OiBNYXhpbXVtIGRyYXcgYnVmZmVycyBjb3VudCBleGNlZWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZWJ1ZmZlciA9IHRoaXMuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgICAgICAgaWYgKGZyYW1lYnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoR0xDYXQudW5leHBlY3RlZE51bGxEZXRlY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVuZGVyYnVmZmVyID0gdGhpcy5jcmVhdGVSZW5kZXJidWZmZXIoKTtcbiAgICAgICAgaWYgKHJlbmRlcmJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZnJhbWVidWZmZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyYnVmZmVyLmluaXQod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGZyYW1lYnVmZmVyLmF0dGFjaFJlbmRlcmJ1ZmZlcihyZW5kZXJidWZmZXIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUJ1ZmZlcnM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVidWZmZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHJlbmRlcmJ1ZmZlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEdMQ2F0LnVuZXhwZWN0ZWROdWxsRGV0ZWN0ZWRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNGbG9hdCkge1xuICAgICAgICAgICAgICAgIHRleHR1cmUuc2V0VGV4dHVyZUZyb21GbG9hdEFycmF5KHdpZHRoLCBoZWlnaHQsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5zZXRUZXh0dXJlRnJvbUFycmF5KHdpZHRoLCBoZWlnaHQsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWVidWZmZXIuYXR0YWNoVGV4dHVyZSh0ZXh0dXJlLCBleHQuQ09MT1JfQVRUQUNITUVOVDBfV0VCR0wgKyBpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhbWVidWZmZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsIHRoaXMgYmVmb3JlIHlvdSdyZSBnb25uYSB1c2UgZHJhdyBidWZmZXJzLlxuICAgICAqIElmIHlvdSBjYW4ndCBncmFiIGBXRUJHTF9kcmF3X2J1ZmZlcnNgIGV4dGVuc2lvbiwgeW91J2xsIGRpZSBpbnN0YW50bHkgYXQgdGhpcyBwb2ludC5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUuZHJhd0J1ZmZlcnMgPSBmdW5jdGlvbiAobnVtQnVmZmVycykge1xuICAgICAgICB2YXIgZXh0ID0gdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2RyYXdfYnVmZmVycycsIHRydWUpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShudW1CdWZmZXJzKSkge1xuICAgICAgICAgICAgZXh0LmRyYXdCdWZmZXJzV0VCR0wobnVtQnVmZmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQnVmZmVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSBleHQuQ09MT1JfQVRUQUNITUVOVDBfV0VCR0wgKyBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXh0LmRyYXdCdWZmZXJzV0VCR0woYXJyYXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgY3VycmVudCBmcmFtZWJ1ZmZlci5cbiAgICAgKi9cbiAgICBHTENhdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEsIGRlcHRoKSB7XG4gICAgICAgIGlmIChyZWQgPT09IHZvaWQgMCkgeyByZWQgPSAwLjA7IH1cbiAgICAgICAgaWYgKGdyZWVuID09PSB2b2lkIDApIHsgZ3JlZW4gPSAwLjA7IH1cbiAgICAgICAgaWYgKGJsdWUgPT09IHZvaWQgMCkgeyBibHVlID0gMC4wOyB9XG4gICAgICAgIGlmIChhbHBoYSA9PT0gdm9pZCAwKSB7IGFscGhhID0gMS4wOyB9XG4gICAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7IGRlcHRoID0gMS4wOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbDtcbiAgICAgICAgZ2wuY2xlYXJDb2xvcihyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSk7XG4gICAgICAgIGdsLmNsZWFyRGVwdGgoZGVwdGgpO1xuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgfTtcbiAgICBHTENhdC51bmV4cGVjdGVkTnVsbERldGVjdGVkRXJyb3IgPSAnR0xDYXQ6IFVuZXhwZWN0ZWQgbnVsbCBkZXRlY3RlZCc7XG4gICAgcmV0dXJuIEdMQ2F0O1xufSgpKTtcbmV4cG9ydHMuR0xDYXQgPSBHTENhdDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9HTENhdEJ1ZmZlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HTENhdEJ1ZmZlci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdMXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dMICovIFwiLi9zcmMvR0wudHNcIik7XG4vKipcbiAqIEl0J3MgYSBXZWJHTEJ1ZmZlci5cbiAqL1xudmFyIEdMQ2F0QnVmZmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBHTENhdEJ1ZmZlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBHTENhdEJ1ZmZlcihnbENhdCwgYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuX19nbENhdCA9IGdsQ2F0O1xuICAgICAgICB0aGlzLl9fYnVmZmVyID0gYnVmZmVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRCdWZmZXIucHJvdG90eXBlLCBcImJ1ZmZlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIGJ1ZmZlci5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19idWZmZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdEJ1ZmZlci5wcm90b3R5cGUsIFwicmF3XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gYnVmZmVyLiBTaG9ydGVyIHRoYW4gW1tHTENhdEJ1ZmZlci5idWZmZXJdXS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19idWZmZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgdGhlIGJ1ZmZlci5cbiAgICAgKi9cbiAgICBHTENhdEJ1ZmZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX2dsQ2F0LmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLl9fYnVmZmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBuZXcgZGF0YSBpbnRvIHRoaXMgYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0QnVmZmVyLnByb3RvdHlwZS5zZXRWZXJ0ZXhidWZmZXIgPSBmdW5jdGlvbiAoc291cmNlLCB1c2FnZSkge1xuICAgICAgICBpZiAodXNhZ2UgPT09IHZvaWQgMCkgeyB1c2FnZSA9IEdMXzEuR0wuU1RBVElDX0RSQVc7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fX2J1ZmZlcik7XG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBzb3VyY2UsIHVzYWdlKTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBpbmRleCBkYXRhIGludG8gdGhpcyBidWZmZXIuXG4gICAgICovXG4gICAgR0xDYXRCdWZmZXIucHJvdG90eXBlLnNldEluZGV4YnVmZmVyID0gZnVuY3Rpb24gKHNvdXJjZSwgdXNhZ2UpIHtcbiAgICAgICAgaWYgKHVzYWdlID09PSB2b2lkIDApIHsgdXNhZ2UgPSBHTF8xLkdMLlNUQVRJQ19EUkFXOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5fX2J1ZmZlcik7XG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHNvdXJjZSwgdXNhZ2UpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiBHTENhdEJ1ZmZlcjtcbn0oKSk7XG5leHBvcnRzLkdMQ2F0QnVmZmVyID0gR0xDYXRCdWZmZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvR0xDYXRGcmFtZWJ1ZmZlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0dMQ2F0RnJhbWVidWZmZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdMXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dMICovIFwiLi9zcmMvR0wudHNcIik7XG4vKipcbiAqIEl0J3MgYSBXZWJHTEZyYW1lYnVmZmVyLlxuICovXG52YXIgR0xDYXRGcmFtZWJ1ZmZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXRGcmFtZWJ1ZmZlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBHTENhdEZyYW1lYnVmZmVyKGdsQ2F0LCBmcmFtZWJ1ZmZlcikge1xuICAgICAgICB0aGlzLl9fcmVuZGVyYnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX3RleHR1cmVNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5fX2dsQ2F0ID0gZ2xDYXQ7XG4gICAgICAgIHRoaXMuX19mcmFtZWJ1ZmZlciA9IGZyYW1lYnVmZmVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRGcmFtZWJ1ZmZlci5wcm90b3R5cGUsIFwiZnJhbWVidWZmZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biBmcmFtZWJ1ZmZlci5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19mcmFtZWJ1ZmZlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0RnJhbWVidWZmZXIucHJvdG90eXBlLCBcInJhd1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIGZyYW1lYnVmZmVyLiBTaG9ydGVyIHRoYW4gW1tHTENhdEZyYW1lYnVmZmVyLmZyYW1lYnVmZmVyXV1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19mcmFtZWJ1ZmZlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0RnJhbWVidWZmZXIucHJvdG90eXBlLCBcInJlbmRlcmJ1ZmZlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgYXR0YWNoZWQgcmVuZGVyYnVmZmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JlbmRlcmJ1ZmZlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0RnJhbWVidWZmZXIucHJvdG90eXBlLCBcInRleHR1cmVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIGF0dGFjaGVkIHRleHR1cmUuXG4gICAgICAgICAqIElmIHlvdSB3YW50IHRvIHJldHJpZXZlIG90aGVyIHRoYW4gYENPTE9SX0FUVEFDSE1FTlQwYCwgdHJ5IFtbR0xDYXRGcmFtZWJ1ZmZlci5nZXRUZXh0dXJlXV0gaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190ZXh0dXJlTWFwW0dMXzEuR0wuQ09MT1JfQVRUQUNITUVOVDBdO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHRoZSBmcmFtZWJ1ZmZlci5cbiAgICAgKi9cbiAgICBHTENhdEZyYW1lYnVmZmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKGFsc29BdHRhY2hlZCkge1xuICAgICAgICBpZiAoYWxzb0F0dGFjaGVkID09PSB2b2lkIDApIHsgYWxzb0F0dGFjaGVkID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5kZWxldGVGcmFtZWJ1ZmZlcih0aGlzLl9fZnJhbWVidWZmZXIpO1xuICAgICAgICBpZiAoYWxzb0F0dGFjaGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX3JlbmRlcmJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGdsLmRlbGV0ZVJlbmRlcmJ1ZmZlcih0aGlzLl9fcmVuZGVyYnVmZmVyLnJhdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuX190ZXh0dXJlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgZ2wuZGVsZXRlVGV4dHVyZSh0ZXh0dXJlLnJhdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgaXRzIGF0dGFjaGVkIHRleHR1cmUuXG4gICAgICovXG4gICAgR0xDYXRGcmFtZWJ1ZmZlci5wcm90b3R5cGUuZ2V0VGV4dHVyZSA9IGZ1bmN0aW9uIChhdHRhY2htZW50KSB7XG4gICAgICAgIGlmIChhdHRhY2htZW50ID09PSB2b2lkIDApIHsgYXR0YWNobWVudCA9IEdMXzEuR0wuQ09MT1JfQVRUQUNITUVOVDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX190ZXh0dXJlTWFwW2F0dGFjaG1lbnRdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGEgcmVuZGVyYnVmZmVyIHRvIHRoaXMgZnJhbWVidWZmZXIuXG4gICAgICovXG4gICAgR0xDYXRGcmFtZWJ1ZmZlci5wcm90b3R5cGUuYXR0YWNoUmVuZGVyYnVmZmVyID0gZnVuY3Rpb24gKHJlbmRlcmJ1ZmZlciwgYXR0YWNobWVudCkge1xuICAgICAgICBpZiAoYXR0YWNobWVudCA9PT0gdm9pZCAwKSB7IGF0dGFjaG1lbnQgPSBHTF8xLkdMLkRFUFRIX0FUVEFDSE1FTlQ7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuX19mcmFtZWJ1ZmZlcik7XG4gICAgICAgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBhdHRhY2htZW50LCBnbC5SRU5ERVJCVUZGRVIsIHJlbmRlcmJ1ZmZlci5yYXcpO1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICB0aGlzLl9fcmVuZGVyYnVmZmVyID0gcmVuZGVyYnVmZmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGEgdGV4dHVyZSB0byB0aGlzIGZyYW1lYnVmZmVyLlxuICAgICAqL1xuICAgIEdMQ2F0RnJhbWVidWZmZXIucHJvdG90eXBlLmF0dGFjaFRleHR1cmUgPSBmdW5jdGlvbiAodGV4dHVyZSwgYXR0YWNobWVudCkge1xuICAgICAgICBpZiAoYXR0YWNobWVudCA9PT0gdm9pZCAwKSB7IGF0dGFjaG1lbnQgPSBHTF8xLkdMLkNPTE9SX0FUVEFDSE1FTlQwOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLl9fZnJhbWVidWZmZXIpO1xuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgYXR0YWNobWVudCwgZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZS5yYXcsIDApO1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICB0aGlzLl9fdGV4dHVyZU1hcFthdHRhY2htZW50XSA9IHRleHR1cmU7XG4gICAgfTtcbiAgICByZXR1cm4gR0xDYXRGcmFtZWJ1ZmZlcjtcbn0oKSk7XG5leHBvcnRzLkdMQ2F0RnJhbWVidWZmZXIgPSBHTENhdEZyYW1lYnVmZmVyO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0dMQ2F0UHJvZ3JhbS50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvR0xDYXRQcm9ncmFtLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR0wgKi8gXCIuL3NyYy9HTC50c1wiKTtcbi8qKlxuICogSXQncyBhIFdlYkdMUHJvZ3JhbSwgYnV0IGhhcyBjYWNoZSBvZiB2YXJpYWJsZSBsb2NhdGlvbnMuXG4gKi9cbnZhciBHTENhdFByb2dyYW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEdMQ2F0UHJvZ3JhbSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBHTENhdFByb2dyYW0oZ2xDYXQsIHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5fX3NoYWRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLl9fYXR0cmliTG9jYXRpb25DYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9fdW5pZm9ybUxvY2F0aW9uQ2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5fX3VuaWZvcm1UZXh0dXJlVW5pdE1hcCA9IHt9O1xuICAgICAgICB0aGlzLl9fdW5pZm9ybXRleHR1cmVVbml0SW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9fbGlua2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19nbENhdCA9IGdsQ2F0O1xuICAgICAgICB0aGlzLl9fcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFByb2dyYW0ucHJvdG90eXBlLCBcInByb2dyYW1cIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biBwcm9ncmFtLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3Byb2dyYW07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFByb2dyYW0ucHJvdG90eXBlLCBcInJhd1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgb3duIHByb2dyYW0uIFNob3J0ZXIgdGhhbiBbW0dMQ2F0UHJvZ3JhbS5wcm9ncmFtXV0uXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fcHJvZ3JhbTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUsIFwic2hhZGVyc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgc2hhZGVycy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19zaGFkZXJzID8gdGhpcy5fX3NoYWRlcnMuY29uY2F0KCkgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRQcm9ncmFtLnByb3RvdHlwZSwgXCJpc0xpbmtlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRoZSBsYXN0IGxpbmsgb3BlcmF0aW9uIHdhcyBzdWNjZXNzZnVsIG9yIG5vdC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19saW5rZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgdGhlIHByb2dyYW0uXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKGFsc29BdHRhY2hlZCkge1xuICAgICAgICBpZiAoYWxzb0F0dGFjaGVkID09PSB2b2lkIDApIHsgYWxzb0F0dGFjaGVkID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHRoaXMuX19wcm9ncmFtKTtcbiAgICAgICAgaWYgKGFsc29BdHRhY2hlZCkge1xuICAgICAgICAgICAgdmFyIHNoYWRlcnMgPSB0aGlzLnNoYWRlcnM7XG4gICAgICAgICAgICBpZiAoc2hhZGVycykge1xuICAgICAgICAgICAgICAgIHNoYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc2hhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBzaGFkZXJzIGFuZCBsaW5rIHRoaXMgcHJvZ3JhbS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzaGFkZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBzaGFkZXJzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBzaGFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRlcikgeyByZXR1cm4gZ2wuYXR0YWNoU2hhZGVyKF90aGlzLl9fcHJvZ3JhbSwgc2hhZGVyLnJhdyk7IH0pO1xuICAgICAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLl9fcHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuX19saW5rZWQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMuX19wcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgICAgIGlmICghdGhpcy5fX2xpbmtlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMuX19wcm9ncmFtKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NoYWRlcnMgPSBzaGFkZXJzLmNvbmNhdCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHNoYWRlcnMgYW5kIGxpbmsgdGhpcyBwcm9ncmFtLlxuICAgICAqIEl0J3MgZ29ubmEgYmUgYXN5bmNocm9ub3VzIGlmIHlvdSBoYXZlIHRoZSBLSFJfcGFyYWxsZWxfc2hhZGVyX2NvbXBpbGUgZXh0ZW5zaW9uIHN1cHBvcnQuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS5saW5rQXN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzaGFkZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBzaGFkZXJzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdsQ2F0ID0gdGhpcy5fX2dsQ2F0O1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBleHRQYXJhbGxlbCA9IGdsQ2F0LmdldEV4dGVuc2lvbignS0hSX3BhcmFsbGVsX3NoYWRlcl9jb21waWxlJyk7XG4gICAgICAgIHNoYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc2hhZGVyKSB7IHJldHVybiBnbC5hdHRhY2hTaGFkZXIoX3RoaXMuX19wcm9ncmFtLCBzaGFkZXIucmF3KTsgfSk7XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMuX19wcm9ncmFtKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFleHRQYXJhbGxlbCB8fFxuICAgICAgICAgICAgICAgICAgICBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKF90aGlzLl9fcHJvZ3JhbSwgZXh0UGFyYWxsZWwuQ09NUExFVElPTl9TVEFUVVNfS0hSKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fX2xpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoX3RoaXMuX19wcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX19saW5rZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChnbC5nZXRQcm9ncmFtSW5mb0xvZyhfdGhpcy5fX3Byb2dyYW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fX3NoYWRlcnMgPSBzaGFkZXJzLmNvbmNhdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGF0dHJpYnV0ZSB2YXJpYWJsZS5cbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdmFyaWFibGVcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFZlcnRleCBidWZmZXIuIENhbiBiZSBudWxsLCB0byBkaXNhYmxlIGF0dHJpYnV0ZSBhcnJheVxuICAgICAqIEBwYXJhbSBzaXplIE51bWJlciBvZiBjb21wb25lbnRzIHBlciB2ZXJ0ZXguIE11c3QgYmUgMSwgMiwgMyBvciA0XG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS5hdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSwgYnVmZmVyLCBzaXplLCBkaXZpc29yLCB0eXBlLCBzdHJpZGUsIG9mZnNldCkge1xuICAgICAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7IHNpemUgPSAxOyB9XG4gICAgICAgIGlmIChkaXZpc29yID09PSB2b2lkIDApIHsgZGl2aXNvciA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gR0xfMS5HTC5GTE9BVDsgfVxuICAgICAgICBpZiAoc3RyaWRlID09PSB2b2lkIDApIHsgc3RyaWRlID0gMDsgfVxuICAgICAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHsgb2Zmc2V0ID0gMDsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0QXR0cmliTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGlmIChsb2NhdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIucmF3KTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24pO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGxvY2F0aW9uLCBzaXplLCB0eXBlLCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQpO1xuICAgICAgICB2YXIgZXh0ID0gdGhpcy5fX2dsQ2F0LmdldEV4dGVuc2lvbignQU5HTEVfaW5zdGFuY2VkX2FycmF5cycpO1xuICAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICAgICBleHQudmVydGV4QXR0cmliRGl2aXNvckFOR0xFKGxvY2F0aW9uLCBkaXZpc29yKTtcbiAgICAgICAgfVxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybSB2YXJpYWJsZS5cbiAgICAgKiBTZWUgYWxzbzogW1tHTENhdFByb2dyYW0udW5pZm9ybVZlY3Rvcl1dXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZVtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnVuYyA9IHRoaXNbJ3VuaWZvcm0nICsgdHlwZV07XG4gICAgICAgIGZ1bmMuY2FsbC5hcHBseShmdW5jLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgbmFtZV0sIHZhbHVlKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybSB2YXJpYWJsZS5cbiAgICAgKiBTZWUgYWxzbzogW1tHTENhdFByb2dyYW0udW5pZm9ybV1dXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtVmVjdG9yID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBmdW5jID0gdGhpc1sndW5pZm9ybScgKyB0eXBlXTtcbiAgICAgICAgZnVuYy5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtMWkgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtMWkgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTJpIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTJpID0gZnVuY3Rpb24gKG5hbWUsIHgsIHkpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTJpKGxvY2F0aW9uLCB4LCB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtM2kgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtM2kgPSBmdW5jdGlvbiAobmFtZSwgeCwgeSwgeikge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtM2kobG9jYXRpb24sIHgsIHksIHopO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm00aSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm00aSA9IGZ1bmN0aW9uIChuYW1lLCB4LCB5LCB6LCB3KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm00aShsb2NhdGlvbiwgeCwgeSwgeiwgdyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTFpdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0xaXYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXkpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgYXJyYXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0yaXYgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtMml2ID0gZnVuY3Rpb24gKG5hbWUsIGFycmF5KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtM2l2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTNpdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTRpdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm00aXYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXkpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgYXJyYXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0xZiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0xZiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtMmYgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtMmYgPSBmdW5jdGlvbiAobmFtZSwgeCwgeSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtMmYobG9jYXRpb24sIHgsIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0zZiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0zZiA9IGZ1bmN0aW9uIChuYW1lLCB4LCB5LCB6KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0zZihsb2NhdGlvbiwgeCwgeSwgeik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTRmIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTRmID0gZnVuY3Rpb24gKG5hbWUsIHgsIHksIHosIHcpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTRmKGxvY2F0aW9uLCB4LCB5LCB6LCB3KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtMWZ2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTFmdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybTJmdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm0yZnYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXkpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgYXJyYXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIHVuaWZvcm0zZnYgdmFyaWFibGUuXG4gICAgICovXG4gICAgR0xDYXRQcm9ncmFtLnByb3RvdHlwZS51bmlmb3JtM2Z2ID0gZnVuY3Rpb24gKG5hbWUsIGFycmF5KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIGFycmF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhbiB1bmlmb3JtNGZ2IHZhcmlhYmxlLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybTRmdiA9IGZ1bmN0aW9uIChuYW1lLCBhcnJheSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpO1xuICAgICAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybU1hdHJpeDJmdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm1NYXRyaXgyZnYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXksIHRyYW5zcG9zZSkge1xuICAgICAgICBpZiAodHJhbnNwb3NlID09PSB2b2lkIDApIHsgdHJhbnNwb3NlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDJmdihsb2NhdGlvbiwgdHJhbnNwb3NlLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybU1hdHJpeDNmdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm1NYXRyaXgzZnYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXksIHRyYW5zcG9zZSkge1xuICAgICAgICBpZiAodHJhbnNwb3NlID09PSB2b2lkIDApIHsgdHJhbnNwb3NlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgdHJhbnNwb3NlLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gdW5pZm9ybU1hdHJpeDRmdiB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBHTENhdFByb2dyYW0ucHJvdG90eXBlLnVuaWZvcm1NYXRyaXg0ZnYgPSBmdW5jdGlvbiAobmFtZSwgYXJyYXksIHRyYW5zcG9zZSkge1xuICAgICAgICBpZiAodHJhbnNwb3NlID09PSB2b2lkIDApIHsgdHJhbnNwb3NlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgdHJhbnNwb3NlLCBhcnJheSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYSBgc2FtcGxlcjJEYCB0eXBlIHVuaWZvcm0gdGV4dHVyZS5cbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSB1bmlmb3JtIHRleHR1cmVcbiAgICAgKiBAcGFyYW0gdGV4dHVyZSBUZXh0dXJlIG9iamVjdFxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybVRleHR1cmUgPSBmdW5jdGlvbiAobmFtZSwgdGV4dHVyZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIHZhciB1bml0ID0gdGhpcy5nZXRVbmlmb3JtVGV4dHVyZVVuaXQobmFtZSk7XG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgKChfYSA9IHRleHR1cmUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yYXcpIHx8IG51bGwpO1xuICAgICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHVuaXQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoIGEgYHNhbXBsZXJDdWJlYCB0eXBlIHVuaWZvcm0gdGV4dHVyZS5cbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSB1bmlmb3JtIHRleHR1cmVcbiAgICAgKiBAcGFyYW0gdGV4dHVyZSBUZXh0dXJlIG9iamVjdFxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUudW5pZm9ybUN1YmVtYXAgPSBmdW5jdGlvbiAobmFtZSwgdGV4dHVyZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSk7XG4gICAgICAgIHZhciB1bml0ID0gdGhpcy5nZXRVbmlmb3JtVGV4dHVyZVVuaXQobmFtZSk7XG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgKChfYSA9IHRleHR1cmUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yYXcpIHx8IG51bGwpO1xuICAgICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHVuaXQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgYXR0cmlidXRlIGxvY2F0aW9uLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUuZ2V0QXR0cmliTG9jYXRpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGlmICh0aGlzLl9fYXR0cmliTG9jYXRpb25DYWNoZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2F0dHJpYkxvY2F0aW9uQ2FjaGVbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9fcHJvZ3JhbSwgbmFtZSk7XG4gICAgICAgICAgICAvLyBpZiAoIGxvY2F0aW9uID09PSAtMSApIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5nbENhdC5zcGl0KCAnR0xDYXRQcm9ncmFtLmdldEF0dHJpYkxvY2F0aW9uOiBDb3VsZCBub3QgcmV0cmlldmUgYXR0cmlidXRlIGxvY2F0aW9uJyApO1xuICAgICAgICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0aGlzLl9fYXR0cmliTG9jYXRpb25DYWNoZVtuYW1lXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSB1bmlmb3JtIGxvY2F0aW9uLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUuZ2V0VW5pZm9ybUxvY2F0aW9uID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBpZiAodGhpcy5fX3VuaWZvcm1Mb2NhdGlvbkNhY2hlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fdW5pZm9ybUxvY2F0aW9uQ2FjaGVbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fX3Byb2dyYW0sIG5hbWUpO1xuICAgICAgICAgICAgLy8gaWYgKCBsb2NhdGlvbiA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5nbENhdC5zcGl0KCAnR0xDYXRQcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbjogQ291bGQgbm90IHJldHJpZXZlIHVuaWZvcm0gbG9jYXRpb24nICk7XG4gICAgICAgICAgICAvLyAgIHJldHVybiBsb2NhdGlvbjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMuX191bmlmb3JtTG9jYXRpb25DYWNoZVtuYW1lXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBvciBjcmVhdGUgYSB0ZXh0dXJlIHVuaXQgdGhhdCBjb3JyZXNwb25kcyB0byBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIEdMQ2F0UHJvZ3JhbS5wcm90b3R5cGUuZ2V0VW5pZm9ybVRleHR1cmVVbml0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX191bmlmb3JtVGV4dHVyZVVuaXRNYXBbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fX3VuaWZvcm1UZXh0dXJlVW5pdE1hcFtuYW1lXSA9IHRoaXMuX191bmlmb3JtdGV4dHVyZVVuaXRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuX191bmlmb3JtdGV4dHVyZVVuaXRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9fdW5pZm9ybVRleHR1cmVVbml0TWFwW25hbWVdO1xuICAgIH07XG4gICAgcmV0dXJuIEdMQ2F0UHJvZ3JhbTtcbn0oKSk7XG5leHBvcnRzLkdMQ2F0UHJvZ3JhbSA9IEdMQ2F0UHJvZ3JhbTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9HTENhdFJlbmRlcmJ1ZmZlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HTENhdFJlbmRlcmJ1ZmZlci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdMXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dMICovIFwiLi9zcmMvR0wudHNcIik7XG4vKipcbiAqIEl0J3MgYSBXZWJHTFJlbmRlcmJ1ZmZlci5cbiAqL1xudmFyIEdMQ2F0UmVuZGVyYnVmZmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBHTENhdFRleHR1cmUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gR0xDYXRSZW5kZXJidWZmZXIoZ2xDYXQsIHJlbmRlcmJ1ZmZlcikge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fX2dsQ2F0ID0gZ2xDYXQ7XG4gICAgICAgIHRoaXMuX19yZW5kZXJidWZmZXIgPSByZW5kZXJidWZmZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFJlbmRlcmJ1ZmZlci5wcm90b3R5cGUsIFwicmVuZGVyYnVmZmVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gcmVuZGVyYnVmZmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JlbmRlcmJ1ZmZlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0UmVuZGVyYnVmZmVyLnByb3RvdHlwZSwgXCJyYXdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biByZW5kZXJidWZmZXIuIFNob3J0ZXIgdGhhbiBbW0dMQ2F0UmVuZGVyQnVmZmVyLnJlbmRlcmJ1ZmZlcl1dLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JlbmRlcmJ1ZmZlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0UmVuZGVyYnVmZmVyLnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdHMgd2lkdGguXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fd2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFJlbmRlcmJ1ZmZlci5wcm90b3R5cGUsIFwiaGVpZ2h0XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBoZWlnaHQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9faGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHRoZSByZW5kZXJidWZmZXIuXG4gICAgICovXG4gICAgR0xDYXRSZW5kZXJidWZmZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX19nbENhdC5nbC5kZWxldGVSZW5kZXJidWZmZXIodGhpcy5fX3JlbmRlcmJ1ZmZlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoaXMgcmVuZGVyYnVmZmVyLlxuICAgICAqIElmIGBmb3JtYXRgIGlzIG5vdCBnaXZlbiwgaXQgd2lsbCBiZSBpbml0aWFsaXplZCBhcyBgREVQVEhfQ09NUE9ORU5UMTZgIC5cbiAgICAgKi9cbiAgICBHTENhdFJlbmRlcmJ1ZmZlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IEdMXzEuR0wuREVQVEhfQ09NUE9ORU5UMTY7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5fX3JlbmRlcmJ1ZmZlcik7XG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBmb3JtYXQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbCk7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgcmV0dXJuIEdMQ2F0UmVuZGVyYnVmZmVyO1xufSgpKTtcbmV4cG9ydHMuR0xDYXRSZW5kZXJidWZmZXIgPSBHTENhdFJlbmRlcmJ1ZmZlcjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9HTENhdFNoYWRlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HTENhdFNoYWRlci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBJdCdzIGEgV2ViR0xTaGFkZXIuXG4gKi9cbnZhciBHTENhdFNoYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXRTaGFkZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gR0xDYXRTaGFkZXIoZ2xDYXQsIHNoYWRlcikge1xuICAgICAgICB0aGlzLl9fY29tcGlsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2dsQ2F0ID0gZ2xDYXQ7XG4gICAgICAgIHRoaXMuX19zaGFkZXIgPSBzaGFkZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFNoYWRlci5wcm90b3R5cGUsIFwic2hhZGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gc2hhZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3NoYWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0U2hhZGVyLnByb3RvdHlwZSwgXCJyYXdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biBzaGFkZXIuIFNob3J0ZXIgdGhhbiBbW0dMQ2F0U2hhZGVyLnNoYWRlcl1dLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3NoYWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB0aGUgc2hhZGVyLlxuICAgICAqL1xuICAgIEdMQ2F0U2hhZGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9fZ2xDYXQuZ2wuZGVsZXRlU2hhZGVyKHRoaXMuX19zaGFkZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHdoZXRoZXIgdGhlIGxhc3QgY29tcGlsYXRpb24gd2FzIHN1Y2Nlc3NmdWwgb3Igbm90LlxuICAgICAqL1xuICAgIEdMQ2F0U2hhZGVyLnByb3RvdHlwZS5pc0NvbXBpbGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NvbXBpbGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcGlsZSB0aGUgc2hhZGVyLlxuICAgICAqL1xuICAgIEdMQ2F0U2hhZGVyLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy5fX3NoYWRlciwgY29kZSk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy5fX3NoYWRlcik7XG4gICAgICAgIHRoaXMuX19jb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLl9fc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG4gICAgICAgIGlmICghdGhpcy5fX2NvbXBpbGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLl9fc2hhZGVyKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBHTENhdFNoYWRlcjtcbn0oKSk7XG5leHBvcnRzLkdMQ2F0U2hhZGVyID0gR0xDYXRTaGFkZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvR0xDYXRUZXh0dXJlLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9HTENhdFRleHR1cmUudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR0xfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR0wgKi8gXCIuL3NyYy9HTC50c1wiKTtcbnZhciB6ZXJvVGV4dHVyZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDBdKTtcbi8qKlxuICogSXQncyBhIFdlYkdMVGV4dHVyZS5cbiAqL1xudmFyIEdMQ2F0VGV4dHVyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgR0xDYXRUZXh0dXJlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEdMQ2F0VGV4dHVyZShnbENhdCwgdGV4dHVyZSkge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fX2dsQ2F0ID0gZ2xDYXQ7XG4gICAgICAgIHRoaXMuX190ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy50ZXh0dXJlRmlsdGVyKEdMXzEuR0wuTElORUFSKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlV3JhcChHTF8xLkdMLkNMQU1QX1RPX0VER0UpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRUZXh0dXJlLnByb3RvdHlwZSwgXCJ0ZXh0dXJlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBvd24gdGV4dHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190ZXh0dXJlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR0xDYXRUZXh0dXJlLnByb3RvdHlwZSwgXCJyYXdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRzIG93biB0ZXh0dXJlLiBTaG9ydGVyIHRoYW4gW1tHTENhdFRleHR1cmUudGV4dHVyZWRdXVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3RleHR1cmU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHTENhdFRleHR1cmUucHJvdG90eXBlLCBcIndpZHRoXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyB3aWR0aC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX193aWR0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUsIFwiaGVpZ2h0XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0cyBoZWlnaHQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9faGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHRoZSB0ZXh0dXJlLlxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX2dsQ2F0LmdsLmRlbGV0ZVRleHR1cmUodGhpcy5fX3RleHR1cmUpO1xuICAgIH07XG4gICAgR0xDYXRUZXh0dXJlLnByb3RvdHlwZS50ZXh0dXJlRmlsdGVyID0gZnVuY3Rpb24gKGZpbHRlck1hZywgZmlsdGVyTWluKSB7XG4gICAgICAgIGlmIChmaWx0ZXJNYWcgPT09IHZvaWQgMCkgeyBmaWx0ZXJNYWcgPSBHTF8xLkdMLk5FQVJFU1Q7IH1cbiAgICAgICAgaWYgKGZpbHRlck1pbiA9PT0gdm9pZCAwKSB7IGZpbHRlck1pbiA9IGZpbHRlck1hZzsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuX190ZXh0dXJlKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGZpbHRlck1hZyk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBmaWx0ZXJNaW4pO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICB9O1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUudGV4dHVyZVdyYXAgPSBmdW5jdGlvbiAod3JhcFMsIHdyYXBUKSB7XG4gICAgICAgIGlmICh3cmFwUyA9PT0gdm9pZCAwKSB7IHdyYXBTID0gR0xfMS5HTC5DTEFNUF9UT19FREdFOyB9XG4gICAgICAgIGlmICh3cmFwVCA9PT0gdm9pZCAwKSB7IHdyYXBUID0gd3JhcFM7IH1cbiAgICAgICAgdmFyIGdsID0gdGhpcy5fX2dsQ2F0LmdsO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9fdGV4dHVyZSk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIHdyYXBTKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgd3JhcFQpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhIHZhbHVlIGZvciB0aGUgcGFzc2VkIHBhcmFtZXRlciBuYW1lLlxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYkdMUmVuZGVyaW5nQ29udGV4dC9nZXRQYXJhbWV0ZXJcbiAgICAgKi9cbiAgICBHTENhdFRleHR1cmUucHJvdG90eXBlLmdldFBhcmFtZXRlciA9IGZ1bmN0aW9uIChwbmFtZSkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuX190ZXh0dXJlKTtcbiAgICAgICAgZ2wuZ2V0UGFyYW1ldGVyKHBuYW1lKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IHRoZSBwaXhlbCBzdG9yYWdlIG1vZGVzLlxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYkdMUmVuZGVyaW5nQ29udGV4dC9waXhlbFN0b3JlaVxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUucGl4ZWxTdG9yZWkgPSBmdW5jdGlvbiAocG5hbWUsIHBhcmFtKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBnbC5waXhlbFN0b3JlaShwbmFtZSwgcGFyYW0pO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBuZXcgZGF0YSBpbnRvIHRoaXMgdGV4dHVyZS5cbiAgICAgKi9cbiAgICBHTENhdFRleHR1cmUucHJvdG90eXBlLnNldFRleHR1cmUgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHNvdXJjZSk7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICAgICAgICB0aGlzLl9fd2lkdGggPSBzb3VyY2Uud2lkdGg7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBkYXRhIGludG8gdGhpcyB0ZXh0dXJlLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyBgVWludDhBcnJheWAuIElmIHlvdSB3YW50IHRvIHNvdXJjZSBpbWFnZSBkYXRhLCB1c2UgYEdMQ2F0LnNldFRleHR1cmUoKWAgaW5zdGVhZC5cbiAgICAgKiBPciB5b3Ugd2FudCB0byB1c2UgZmxvYXQgdGV4dHVyZT8gVHJ5IHRoaXM6IGBHTENhdC5zZXRUZXh0dXJlRnJvbUZsb2F0QXJyYXkoKWBcbiAgICAgKi9cbiAgICBHTENhdFRleHR1cmUucHJvdG90eXBlLnNldFRleHR1cmVGcm9tQXJyYXkgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgc291cmNlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IEdMXzEuR0wuUkdCQTsgfVxuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuX190ZXh0dXJlKTtcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBmb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgZ2wuVU5TSUdORURfQllURSwgc291cmNlKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBkYXRhIGludG8gdGhpcyB0ZXh0dXJlLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyBgRmxvYXQzMkFycmF5YC5cbiAgICAgKiBJZiB5b3UgY2FuJ3QgZ3JhYiBgT0VTX3RleHR1cmVfZmxvYXRgIGV4dGVuc2lvbiBoZXJlLCB5b3Ugd2lsbCBkaWUgYXQgdGhpcyBwb2ludC5cbiAgICAgKi9cbiAgICBHTENhdFRleHR1cmUucHJvdG90eXBlLnNldFRleHR1cmVGcm9tRmxvYXRBcnJheSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBzb3VyY2UsIGZvcm1hdCkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gR0xfMS5HTC5SR0JBOyB9XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgdGhpcy5fX2dsQ2F0LmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXQnLCB0cnVlKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMCwgZm9ybWF0LCBnbC5GTE9BVCwgc291cmNlKTtcbiAgICAgICAgaWYgKHRoaXMuX19nbENhdC5nZXRFeHRlbnNpb24oJ09FU190ZXh0dXJlX2Zsb2F0X2xpbmVhcicpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVGaWx0ZXIoZ2wuTkVBUkVTVCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29weSBwaXhlbHMgZnJvbSBjdXJyZW50IGZyYW1lYnVmZmVyIHRvIGdpdmVuIHRleHR1cmUuXG4gICAgICovXG4gICAgR0xDYXRUZXh0dXJlLnByb3RvdHlwZS5jb3B5VGV4dHVyZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuX19nbENhdC5nbDtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5fX3RleHR1cmUpO1xuICAgICAgICBnbC5jb3B5VGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCAwKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBjdWJlbWFwIGRhdGEgaW50byB0aGlzIHRleHR1cmUuXG4gICAgICogQHBhcmFtIHRleHR1cmVzIEFycmF5IG9mIGlhbWdlcy4gT3JkZXI6IGBYK2AsIGBYLWAsIGBZK2AsIGBZLWAsIGBaK2AsIGBaLWBcbiAgICAgKiBAdG9kbyBkdWUgdG8gY29tcGF0aWJpbGl0eSBvZiBpdHMgYHdpZHRoYCBhbmQgYGhlaWdodGAgaXQgc2hvdWxkIG5vdCBiZSB1c2VkIHlldFxuICAgICAqL1xuICAgIEdMQ2F0VGV4dHVyZS5wcm90b3R5cGUuc2V0Q3ViZW1hcCA9IGZ1bmN0aW9uICh0ZXh0dXJlcykge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLl9fZ2xDYXQuZ2w7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRoaXMuX190ZXh0dXJlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YICsgaSwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgdGV4dHVyZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBbIDAsIDAsIDAsIDAgXSB0byB0aGlzIHRleHR1cmUuXG4gICAgICogVXNlZnVsIGZvciB0ZW1wb3JhcnkgdXNlLi5cbiAgICAgKi9cbiAgICBHTENhdFRleHR1cmUucHJvdG90eXBlLnNldFplcm9UZXh0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFRleHR1cmVGcm9tQXJyYXkoMSwgMSwgemVyb1RleHR1cmVBcnJheSk7XG4gICAgfTtcbiAgICByZXR1cm4gR0xDYXRUZXh0dXJlO1xufSgpKTtcbmV4cG9ydHMuR0xDYXRUZXh0dXJlID0gR0xDYXRUZXh0dXJlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HTCAqLyBcIi4vc3JjL0dMLnRzXCIpKTtcbl9fZXhwb3J0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR0xDYXQgKi8gXCIuL3NyYy9HTENhdC50c1wiKSk7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dMQ2F0QnVmZmVyICovIFwiLi9zcmMvR0xDYXRCdWZmZXIudHNcIikpO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HTENhdEZyYW1lYnVmZmVyICovIFwiLi9zcmMvR0xDYXRGcmFtZWJ1ZmZlci50c1wiKSk7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dMQ2F0UHJvZ3JhbSAqLyBcIi4vc3JjL0dMQ2F0UHJvZ3JhbS50c1wiKSk7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0dMQ2F0UmVuZGVyYnVmZmVyICovIFwiLi9zcmMvR0xDYXRSZW5kZXJidWZmZXIudHNcIikpO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9HTENhdFNoYWRlciAqLyBcIi4vc3JjL0dMQ2F0U2hhZGVyLnRzXCIpKTtcbl9fZXhwb3J0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vR0xDYXRUZXh0dXJlICovIFwiLi9zcmMvR0xDYXRUZXh0dXJlLnRzXCIpKTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDSXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZSMHd1ZEhNaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwwZE1RMkYwTG5Seklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OUhURU5oZEVKMVptWmxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdlIweERZWFJHY21GdFpXSjFabVpsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZSMHhEWVhSUWNtOW5jbUZ0TG5Seklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OUhURU5oZEZKbGJtUmxjbUoxWm1abGNpNTBjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12UjB4RFlYUlRhR0ZrWlhJdWRITWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMGRNUTJGMFZHVjRkSFZ5WlM1MGN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8xRkRWa0U3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxFZEJRVWM3TzFGQlJVZzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxFdEJRVXM3VVVGRFREdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeE5RVUZOTzFGQlEwNDdVVUZEUVR0UlFVTkJMRTFCUVUwN1VVRkRUanRSUVVOQk8xRkJRMEVzVFVGQlRUdFJRVU5PTzFGQlEwRTdVVUZEUVR0UlFVTkJMRTlCUVU4N1VVRkRVRHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4SlFVRkpPMUZCUTBvN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4TlFVRk5PMUZCUTA0N1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRXNTMEZCU3p0UlFVTk1PMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRXNUVUZCVFR0UlFVTk9PMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3hMUVVGTE96dFJRVVZNTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEWkNRVUUyUWp0UlFVTTNRaXcyUWtGQk5rSTdVVUZETjBJN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzY1VKQlFYRkNMR2RDUVVGblFqdFJRVU55UXp0UlFVTkJPMUZCUTBFc1MwRkJTenRSUVVOTU8xRkJRMEU3VVVGRFFUdFJRVU5CTEhGQ1FVRnhRaXhuUWtGQlowSTdVVUZEY2tNN1VVRkRRVHRSUVVOQkxFdEJRVXM3VVVGRFREdFJRVU5CTzFGQlEwRXNTMEZCU3p0UlFVTk1PMUZCUTBFN1VVRkRRU3hMUVVGTE8xRkJRMHc3VVVGRFFUdFJRVU5CTzFGQlEwRXNTMEZCU3pzN1VVRkZURHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4TFFVRkxPMUZCUTB3N1VVRkRRVHRSUVVOQkxFdEJRVXM3VVVGRFREdFJRVU5CTzFGQlEwRTdVVUZEUVN4TFFVRkxPenRSUVVWTU8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVN4clFrRkJhMElzT0VKQlFUaENPMUZCUTJoRU8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzUzBGQlN6dFJRVU5NTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxFbEJRVWs3VVVGRFNqczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMRWxCUVVrN1VVRkRTanRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxFMUJRVTA3VVVGRFRqdFJRVU5CTzFGQlEwRTdVVUZEUVN4UFFVRlBPMUZCUTFBN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeEpRVUZKTzFGQlEwbzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeExRVUZMTzFGQlEwdzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMRzlDUVVGdlFpd3lRa0ZCTWtJN1VVRkRMME03VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMRTlCUVU4N1VVRkRVRHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRXNiVUpCUVcxQ0xHTkJRV003VVVGRGFrTTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxHZENRVUZuUWl4TFFVRkxPMUZCUTNKQ08xRkJRMEU3VVVGRFFUdFJRVU5CTEUxQlFVMDdVVUZEVGp0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzWjBKQlFXZENMRmxCUVZrN1VVRkROVUk3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRU3hqUVVGakxEUkNRVUUwUWp0UlFVTXhRenRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxFMUJRVTA3VVVGRFRqdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEVsQlFVazdPMUZCUlVvN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPenRSUVVWQk8xRkJRMEU3VVVGRFFTeGxRVUZsTERSQ1FVRTBRanRSUVVNelF6dFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEdWQlFXVXNORUpCUVRSQ08xRkJRek5ETzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4cFFrRkJhVUlzZFVOQlFYVkRPMUZCUTNoRU8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2FVSkJRV2xDTEhWRFFVRjFRenRSUVVONFJEdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxHbENRVUZwUWl4elFrRkJjMEk3VVVGRGRrTTdVVUZEUVR0UlFVTkJPMUZCUTBFc1VVRkJVVHRSUVVOU08xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMRlZCUVZVN1VVRkRWanRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFTeGpRVUZqTEhkRFFVRjNRenRSUVVOMFJEdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFc1MwRkJTenRSUVVOTU8xRkJRMEU3VVVGRFFUdFJRVU5CTEU5QlFVODdVVUZEVUR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeFRRVUZUTzFGQlExUTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzVFVGQlRUdFJRVU5PTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3hSUVVGUk8xRkJRMUk3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeEpRVUZKTzFGQlEwbzdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4bFFVRmxPMUZCUTJZN1VVRkRRVHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVRzN08xRkJSMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTERCRFFVRXdReXhuUTBGQlowTTdVVUZETVVVN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4M1JFRkJkMFFzYTBKQlFXdENPMUZCUXpGRk8xRkJRMEVzYVVSQlFXbEVMR05CUVdNN1VVRkRMMFE3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJMSGxEUVVGNVF5eHBRMEZCYVVNN1VVRkRNVVVzWjBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzFGQlEzSkpPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNNa0pCUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMUZCUTNaRUxHbERRVUZwUXl4bFFVRmxPMUZCUTJoRU8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJMSE5FUVVGelJDd3JSRUZCSzBRN08xRkJSWEpJTzFGQlEwRTdPMUZCUlVFN1VVRkRRU3h6UTBGQmMwTXNkVUpCUVhWQ096czdVVUZITjBRN1VVRkRRVHM3T3pzN096czdPenM3T3p0QlEzaDRRbUU3UVVGRFlpdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5vVkdFN1FVRkRZaXc0UTBGQk9FTXNZMEZCWXp0QlFVTTFSQ3h2UWtGQmIwSXNiVUpCUVU4c1EwRkJReXd5UTBGQlpUdEJRVU16UXl4NVFrRkJlVUlzYlVKQlFVOHNRMEZCUXl4eFJFRkJiMEk3UVVGRGNrUXNjVUpCUVhGQ0xHMUNRVUZQTEVOQlFVTXNOa05CUVdkQ08wRkJRemRETERCQ1FVRXdRaXh0UWtGQlR5eERRVUZETEhWRVFVRnhRanRCUVVOMlJDeHZRa0ZCYjBJc2JVSkJRVThzUTBGQlF5d3lRMEZCWlR0QlFVTXpReXh4UWtGQmNVSXNiVUpCUVU4c1EwRkJReXcyUTBGQlowSTdRVUZETjBNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSFZEUVVGMVF5d3JRMEZCSzBNc1JVRkJSVHRCUVVONFJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVOQlFXbERMR2xDUVVGcFFqdEJRVU5zUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbERRVUZwUXl4cFFrRkJhVUk3UVVGRGJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVKQlFYVkNMR2RDUVVGblFqdEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3eVFrRkJNa0lzWjBKQlFXZENPMEZCUXpORE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEWkNRVUUyUWl4WFFVRlhPMEZCUTNoRExDdENRVUVyUWl4aFFVRmhPMEZCUXpWRExEaENRVUU0UWl4WlFVRlpPMEZCUXpGRExDdENRVUVyUWl4aFFVRmhPMEZCUXpWRExDdENRVUVyUWl4aFFVRmhPMEZCUXpWRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORU96czdPenM3T3pzN096czdPMEZEYUZoaE8wRkJRMklzT0VOQlFUaERMR05CUVdNN1FVRkROVVFzVjBGQlZ5eHRRa0ZCVHl4RFFVRkRMSGxDUVVGTk8wRkJRM3BDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEN0Q1FVRXJRaXcyUWtGQk5rSTdRVUZETlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swSkJRU3RDTERaQ1FVRTJRanRCUVVNMVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3T3pzN096czdPenM3T3pzN1FVTTVSR0U3UVVGRFlpdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJDeFhRVUZYTEcxQ1FVRlBMRU5CUVVNc2VVSkJRVTA3UVVGRGVrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2MwTkJRWE5ETEhOQ1FVRnpRanRCUVVNMVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHOURRVUZ2UXl4M1EwRkJkME03UVVGRE5VVTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYjBOQlFXOURMSFZEUVVGMVF6dEJRVU16UlR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzlEUVVGdlF5eDNRMEZCZDBNN1FVRkROVVU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3T3pzN096czdPenM3T3pzN1FVTjRSMkU3UVVGRFlqdEJRVU5CTEdsRVFVRnBSQ3hSUVVGUk8wRkJRM3BFTEhkRFFVRjNReXhSUVVGUk8wRkJRMmhFTEhkRVFVRjNSQ3hSUVVGUk8wRkJRMmhGTzBGQlEwRTdRVUZEUVR0QlFVTkJMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVMRmRCUVZjc2JVSkJRVThzUTBGQlF5eDVRa0ZCVFR0QlFVTjZRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4elEwRkJjME1zYzBKQlFYTkNPMEZCUXpWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTzBGQlEycENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSGRDUVVGM1FpeDFRa0ZCZFVJN1FVRkRMME03UVVGRFFUdEJRVU5CTzBGQlEwRXNNa05CUVRKRExIRkVRVUZ4UkN4RlFVRkZPMEZCUTJ4SE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4M1FrRkJkMElzZFVKQlFYVkNPMEZCUXk5RE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3eVEwRkJNa01zY1VSQlFYRkVMRVZCUVVVN1FVRkRiRWM3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzT0VKQlFUaENMRlZCUVZVN1FVRkRlRU1zYVVOQlFXbERMR0ZCUVdFN1FVRkRPVU1zT0VKQlFUaENMSE5DUVVGelFqdEJRVU53UkN4blEwRkJaME1zV1VGQldUdEJRVU0xUXl4blEwRkJaME1zV1VGQldUdEJRVU0xUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDNRa0ZCZDBJc2RVSkJRWFZDTzBGQlF5OURPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVzFETEcxQ1FVRnRRanRCUVVOMFJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFXMURMRzFDUVVGdFFqdEJRVU4wUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVcxRExHMUNRVUZ0UWp0QlFVTjBSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHM3T3pzN096czdPenM3T3p0QlF5OWFZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRUxGZEJRVmNzYlVKQlFVOHNRMEZCUXl4NVFrRkJUVHRCUVVONlFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5RMEZCWjBNc2IwTkJRVzlETzBGQlEzQkZPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN096czdPenM3T3pzN096czdRVU0zUldFN1FVRkRZaXc0UTBGQk9FTXNZMEZCWXp0QlFVTTFSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHM3T3pzN096czdPenM3T3p0QlF6VkVZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRUxGZEJRVmNzYlVKQlFVOHNRMEZCUXl4NVFrRkJUVHRCUVVONlFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFXMURMRFpDUVVFMlFqdEJRVU5vUlN4dFEwRkJiVU1zZFVKQlFYVkNPMEZCUXpGRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swSkJRU3RDTEN0Q1FVRXJRanRCUVVNNVJDd3JRa0ZCSzBJc1pVRkJaVHRCUVVNNVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZERRVUZuUXl4MVFrRkJkVUk3UVVGRGRrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUTBGQlowTXNkVUpCUVhWQ08wRkJRM1pFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSFZDUVVGMVFpeFBRVUZQTzBGQlF6bENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVPenM3T3pzN096czdPenM3TzBGRGRreGhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEVzT0VOQlFUaERMR05CUVdNN1FVRkROVVFzVTBGQlV5eHRRa0ZCVHl4RFFVRkRMSGxDUVVGTk8wRkJRM1pDTEZOQlFWTXNiVUpCUVU4c1EwRkJReXdyUWtGQlV6dEJRVU14UWl4VFFVRlRMRzFDUVVGUExFTkJRVU1zTWtOQlFXVTdRVUZEYUVNc1UwRkJVeXh0UWtGQlR5eERRVUZETEhGRVFVRnZRanRCUVVOeVF5eFRRVUZUTEcxQ1FVRlBMRU5CUVVNc05rTkJRV2RDTzBGQlEycERMRk5CUVZNc2JVSkJRVThzUTBGQlF5eDFSRUZCY1VJN1FVRkRkRU1zVTBGQlV5eHRRa0ZCVHl4RFFVRkRMREpEUVVGbE8wRkJRMmhETEZOQlFWTXNiVUpCUVU4c1EwRkJReXcyUTBGQlowSWlMQ0ptYVd4bElqb2laMnhqWVhRdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2UxeHVYSFJjZEhaaGNpQmhJRDBnWm1GamRHOXllU2dwTzF4dVhIUmNkR1p2Y2loMllYSWdhU0JwYmlCaEtTQW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnWlhod2IzSjBjeUE2SUhKdmIzUXBXMmxkSUQwZ1lWdHBYVHRjYmx4MGZWeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9LU0I3WEc1eVpYUjFjbTRnSWl3aUlGeDBablZ1WTNScGIyNGdhRzkwUkdsemNHOXpaVU5vZFc1cktHTm9kVzVyU1dRcElIdGNiaUJjZEZ4MFpHVnNaWFJsSUdsdWMzUmhiR3hsWkVOb2RXNXJjMXRqYUhWdWEwbGtYVHRjYmlCY2RIMWNiaUJjZEhaaGNpQndZWEpsYm5SSWIzUlZjR1JoZEdWRFlXeHNZbUZqYXlBOUlIUm9hWE5iWENKM1pXSndZV05yU0c5MFZYQmtZWFJsWENKZE8xeHVJRngwZEdocGMxdGNJbmRsWW5CaFkydEliM1JWY0dSaGRHVmNJbDBnUFNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRkVzUxYzJWa0xYWmhjbk5jYmlCY2RHWjFibU4wYVc5dUlIZGxZbkJoWTJ0SWIzUlZjR1JoZEdWRFlXeHNZbUZqYXloamFIVnVhMGxrTENCdGIzSmxUVzlrZFd4bGN5a2dlMXh1SUZ4MFhIUm9iM1JCWkdSVmNHUmhkR1ZEYUhWdWF5aGphSFZ1YTBsa0xDQnRiM0psVFc5a2RXeGxjeWs3WEc0Z1hIUmNkR2xtSUNod1lYSmxiblJJYjNSVmNHUmhkR1ZEWVd4c1ltRmpheWtnY0dGeVpXNTBTRzkwVlhCa1lYUmxRMkZzYkdKaFkyc29ZMmgxYm10SlpDd2diVzl5WlUxdlpIVnNaWE1wTzF4dUlGeDBmU0E3WEc1Y2JpQmNkQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxMWJuVnpaV1F0ZG1GeWMxeHVJRngwWm5WdVkzUnBiMjRnYUc5MFJHOTNibXh2WVdSVmNHUmhkR1ZEYUhWdWF5aGphSFZ1YTBsa0tTQjdYRzRnWEhSY2RIWmhjaUJ6WTNKcGNIUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtGd2ljMk55YVhCMFhDSXBPMXh1SUZ4MFhIUnpZM0pwY0hRdVkyaGhjbk5sZENBOUlGd2lkWFJtTFRoY0lqdGNiaUJjZEZ4MGMyTnlhWEIwTG5OeVl5QTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBcklGd2lYQ0lnS3lCamFIVnVhMGxrSUNzZ1hDSXVYQ0lnS3lCb2IzUkRkWEp5Wlc1MFNHRnphQ0FySUZ3aUxtaHZkQzExY0dSaGRHVXVhbk5jSWp0Y2JpQmNkRngwYVdZZ0tHNTFiR3dwSUhOamNtbHdkQzVqY205emMwOXlhV2RwYmlBOUlHNTFiR3c3WEc0Z1hIUmNkR1J2WTNWdFpXNTBMbWhsWVdRdVlYQndaVzVrUTJocGJHUW9jMk55YVhCMEtUdGNiaUJjZEgxY2JseHVJRngwTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUc1dkxYVnVkWE5sWkMxMllYSnpYRzRnWEhSbWRXNWpkR2x2YmlCb2IzUkViM2R1Ykc5aFpFMWhibWxtWlhOMEtISmxjWFZsYzNSVWFXMWxiM1YwS1NCN1hHNGdYSFJjZEhKbGNYVmxjM1JVYVcxbGIzVjBJRDBnY21WeGRXVnpkRlJwYldWdmRYUWdmSHdnTVRBd01EQTdYRzRnWEhSY2RISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTaG1kVzVqZEdsdmJpaHlaWE52YkhabExDQnlaV3BsWTNRcElIdGNiaUJjZEZ4MFhIUnBaaUFvZEhsd1pXOW1JRmhOVEVoMGRIQlNaWEYxWlhOMElEMDlQU0JjSW5WdVpHVm1hVzVsWkZ3aUtTQjdYRzRnWEhSY2RGeDBYSFJ5WlhSMWNtNGdjbVZxWldOMEtHNWxkeUJGY25KdmNpaGNJazV2SUdKeWIzZHpaWElnYzNWd2NHOXlkRndpS1NrN1hHNGdYSFJjZEZ4MGZWeHVJRngwWEhSY2RIUnllU0I3WEc0Z1hIUmNkRngwWEhSMllYSWdjbVZ4ZFdWemRDQTlJRzVsZHlCWVRVeElkSFJ3VW1WeGRXVnpkQ2dwTzF4dUlGeDBYSFJjZEZ4MGRtRnlJSEpsY1hWbGMzUlFZWFJvSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJQ3NnWENKY0lpQXJJR2h2ZEVOMWNuSmxiblJJWVhOb0lDc2dYQ0l1YUc5MExYVndaR0YwWlM1cWMyOXVYQ0k3WEc0Z1hIUmNkRngwWEhSeVpYRjFaWE4wTG05d1pXNG9YQ0pIUlZSY0lpd2djbVZ4ZFdWemRGQmhkR2dzSUhSeWRXVXBPMXh1SUZ4MFhIUmNkRngwY21WeGRXVnpkQzUwYVcxbGIzVjBJRDBnY21WeGRXVnpkRlJwYldWdmRYUTdYRzRnWEhSY2RGeDBYSFJ5WlhGMVpYTjBMbk5sYm1Rb2JuVnNiQ2s3WEc0Z1hIUmNkRngwZlNCallYUmphQ0FvWlhKeUtTQjdYRzRnWEhSY2RGeDBYSFJ5WlhSMWNtNGdjbVZxWldOMEtHVnljaWs3WEc0Z1hIUmNkRngwZlZ4dUlGeDBYSFJjZEhKbGNYVmxjM1F1YjI1eVpXRmtlWE4wWVhSbFkyaGhibWRsSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnWEhSY2RGeDBYSFJwWmlBb2NtVnhkV1Z6ZEM1eVpXRmtlVk4wWVhSbElDRTlQU0EwS1NCeVpYUjFjbTQ3WEc0Z1hIUmNkRngwWEhScFppQW9jbVZ4ZFdWemRDNXpkR0YwZFhNZ1BUMDlJREFwSUh0Y2JpQmNkRngwWEhSY2RGeDBMeThnZEdsdFpXOTFkRnh1SUZ4MFhIUmNkRngwWEhSeVpXcGxZM1FvWEc0Z1hIUmNkRngwWEhSY2RGeDBibVYzSUVWeWNtOXlLRndpVFdGdWFXWmxjM1FnY21WeGRXVnpkQ0IwYnlCY0lpQXJJSEpsY1hWbGMzUlFZWFJvSUNzZ1hDSWdkR2x0WldRZ2IzVjBMbHdpS1Z4dUlGeDBYSFJjZEZ4MFhIUXBPMXh1SUZ4MFhIUmNkRngwZlNCbGJITmxJR2xtSUNoeVpYRjFaWE4wTG5OMFlYUjFjeUE5UFQwZ05EQTBLU0I3WEc0Z1hIUmNkRngwWEhSY2RDOHZJRzV2SUhWd1pHRjBaU0JoZG1GcGJHRmliR1ZjYmlCY2RGeDBYSFJjZEZ4MGNtVnpiMngyWlNncE8xeHVJRngwWEhSY2RGeDBmU0JsYkhObElHbG1JQ2h5WlhGMVpYTjBMbk4wWVhSMWN5QWhQVDBnTWpBd0lDWW1JSEpsY1hWbGMzUXVjM1JoZEhWeklDRTlQU0F6TURRcElIdGNiaUJjZEZ4MFhIUmNkRngwTHk4Z2IzUm9aWElnWm1GcGJIVnlaVnh1SUZ4MFhIUmNkRngwWEhSeVpXcGxZM1FvYm1WM0lFVnljbTl5S0Z3aVRXRnVhV1psYzNRZ2NtVnhkV1Z6ZENCMGJ5QmNJaUFySUhKbGNYVmxjM1JRWVhSb0lDc2dYQ0lnWm1GcGJHVmtMbHdpS1NrN1hHNGdYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHVJRngwWEhSY2RGeDBYSFF2THlCemRXTmpaWE56WEc0Z1hIUmNkRngwWEhSY2RIUnllU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBkbUZ5SUhWd1pHRjBaU0E5SUVwVFQwNHVjR0Z5YzJVb2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlZSbGVIUXBPMXh1SUZ4MFhIUmNkRngwWEhSOUlHTmhkR05vSUNobEtTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MGNtVnFaV04wS0dVcE8xeHVJRngwWEhSY2RGeDBYSFJjZEhKbGRIVnlianRjYmlCY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBYSFJ5WlhOdmJIWmxLSFZ3WkdGMFpTazdYRzRnWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwZlR0Y2JpQmNkRngwZlNrN1hHNGdYSFI5WEc1Y2JpQmNkSFpoY2lCb2IzUkJjSEJzZVU5dVZYQmtZWFJsSUQwZ2RISjFaVHRjYmlCY2RDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTExYm5WelpXUXRkbUZ5YzF4dUlGeDBkbUZ5SUdodmRFTjFjbkpsYm5SSVlYTm9JRDBnWENJeE9XSm1PR1ExTmpaa1ltUXlNRE5tTURsallsd2lPMXh1SUZ4MGRtRnlJR2h2ZEZKbGNYVmxjM1JVYVcxbGIzVjBJRDBnTVRBd01EQTdYRzRnWEhSMllYSWdhRzkwUTNWeWNtVnVkRTF2WkhWc1pVUmhkR0VnUFNCN2ZUdGNiaUJjZEhaaGNpQm9iM1JEZFhKeVpXNTBRMmhwYkdSTmIyUjFiR1U3WEc0Z1hIUXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdibTh0ZFc1MWMyVmtMWFpoY25OY2JpQmNkSFpoY2lCb2IzUkRkWEp5Wlc1MFVHRnlaVzUwY3lBOUlGdGRPMXh1SUZ4MEx5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHNXZMWFZ1ZFhObFpDMTJZWEp6WEc0Z1hIUjJZWElnYUc5MFEzVnljbVZ1ZEZCaGNtVnVkSE5VWlcxd0lEMGdXMTA3WEc1Y2JpQmNkQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxMWJuVnpaV1F0ZG1GeWMxeHVJRngwWm5WdVkzUnBiMjRnYUc5MFEzSmxZWFJsVW1WeGRXbHlaU2h0YjJSMWJHVkpaQ2tnZTF4dUlGeDBYSFIyWVhJZ2JXVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYVHRjYmlCY2RGeDBhV1lnS0NGdFpTa2djbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxODdYRzRnWEhSY2RIWmhjaUJtYmlBOUlHWjFibU4wYVc5dUtISmxjWFZsYzNRcElIdGNiaUJjZEZ4MFhIUnBaaUFvYldVdWFHOTBMbUZqZEdsMlpTa2dlMXh1SUZ4MFhIUmNkRngwYVdZZ0tHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmNtVnhkV1Z6ZEYwcElIdGNiaUJjZEZ4MFhIUmNkRngwYVdZZ0tHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmNtVnhkV1Z6ZEYwdWNHRnlaVzUwY3k1cGJtUmxlRTltS0cxdlpIVnNaVWxrS1NBOVBUMGdMVEVwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXM0psY1hWbGMzUmRMbkJoY21WdWRITXVjSFZ6YUNodGIyUjFiR1ZKWkNrN1hHNGdYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEc0Z1hIUmNkRngwWEhSY2RHaHZkRU4xY25KbGJuUlFZWEpsYm5SeklEMGdXMjF2WkhWc1pVbGtYVHRjYmlCY2RGeDBYSFJjZEZ4MGFHOTBRM1Z5Y21WdWRFTm9hV3hrVFc5a2RXeGxJRDBnY21WeGRXVnpkRHRjYmlCY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSY2RHbG1JQ2h0WlM1amFHbHNaSEpsYmk1cGJtUmxlRTltS0hKbGNYVmxjM1FwSUQwOVBTQXRNU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUnRaUzVqYUdsc1pISmxiaTV3ZFhOb0tISmxjWFZsYzNRcE8xeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkSDBnWld4elpTQjdYRzRnWEhSY2RGeDBYSFJqYjI1emIyeGxMbmRoY200b1hHNGdYSFJjZEZ4MFhIUmNkRndpVzBoTlVsMGdkVzVsZUhCbFkzUmxaQ0J5WlhGMWFYSmxLRndpSUN0Y2JpQmNkRngwWEhSY2RGeDBYSFJ5WlhGMVpYTjBJQ3RjYmlCY2RGeDBYSFJjZEZ4MFhIUmNJaWtnWm5KdmJTQmthWE53YjNObFpDQnRiMlIxYkdVZ1hDSWdLMXh1SUZ4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa1hHNGdYSFJjZEZ4MFhIUXBPMXh1SUZ4MFhIUmNkRngwYUc5MFEzVnljbVZ1ZEZCaGNtVnVkSE1nUFNCYlhUdGNiaUJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9jbVZ4ZFdWemRDazdYRzRnWEhSY2RIMDdYRzRnWEhSY2RIWmhjaUJQWW1wbFkzUkdZV04wYjNKNUlEMGdablZ1WTNScGIyNGdUMkpxWldOMFJtRmpkRzl5ZVNodVlXMWxLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJSHRjYmlCY2RGeDBYSFJjZEdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJRngwWEhSY2RGeDBYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYMXR1WVcxbFhUdGNiaUJjZEZ4MFhIUmNkSDBzWEc0Z1hIUmNkRngwWEhSelpYUTZJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdYRzRnWEhSY2RGeDBYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE5YmJtRnRaVjBnUFNCMllXeDFaVHRjYmlCY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSOU8xeHVJRngwWEhSOU8xeHVJRngwWEhSbWIzSWdLSFpoY2lCdVlXMWxJR2x1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cElIdGNiaUJjZEZ4MFhIUnBaaUFvWEc0Z1hIUmNkRngwWEhSUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5d2dibUZ0WlNrZ0ppWmNiaUJjZEZ4MFhIUmNkRzVoYldVZ0lUMDlJRndpWlZ3aUlDWW1YRzRnWEhSY2RGeDBYSFJ1WVcxbElDRTlQU0JjSW5SY0lseHVJRngwWEhSY2RDa2dlMXh1SUZ4MFhIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHWnVMQ0J1WVcxbExDQlBZbXBsWTNSR1lXTjBiM0o1S0c1aGJXVXBLVHRjYmlCY2RGeDBYSFI5WEc0Z1hIUmNkSDFjYmlCY2RGeDBabTR1WlNBOUlHWjFibU4wYVc5dUtHTm9kVzVyU1dRcElIdGNiaUJjZEZ4MFhIUnBaaUFvYUc5MFUzUmhkSFZ6SUQwOVBTQmNJbkpsWVdSNVhDSXBJR2h2ZEZObGRGTjBZWFIxY3loY0luQnlaWEJoY21WY0lpazdYRzRnWEhSY2RGeDBhRzkwUTJoMWJtdHpURzloWkdsdVp5c3JPMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVVvWTJoMWJtdEpaQ2t1ZEdobGJpaG1hVzVwYzJoRGFIVnVhMHh2WVdScGJtY3NJR1oxYm1OMGFXOXVLR1Z5Y2lrZ2UxeHVJRngwWEhSY2RGeDBabWx1YVhOb1EyaDFibXRNYjJGa2FXNW5LQ2s3WEc0Z1hIUmNkRngwWEhSMGFISnZkeUJsY25JN1hHNGdYSFJjZEZ4MGZTazdYRzVjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJtYVc1cGMyaERhSFZ1YTB4dllXUnBibWNvS1NCN1hHNGdYSFJjZEZ4MFhIUm9iM1JEYUhWdWEzTk1iMkZrYVc1bkxTMDdYRzRnWEhSY2RGeDBYSFJwWmlBb2FHOTBVM1JoZEhWeklEMDlQU0JjSW5CeVpYQmhjbVZjSWlrZ2UxeHVJRngwWEhSY2RGeDBYSFJwWmlBb0lXaHZkRmRoYVhScGJtZEdhV3hsYzAxaGNGdGphSFZ1YTBsa1hTa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHaHZkRVZ1YzNWeVpWVndaR0YwWlVOb2RXNXJLR05vZFc1clNXUXBPMXh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUmNkR2xtSUNob2IzUkRhSFZ1YTNOTWIyRmthVzVuSUQwOVBTQXdJQ1ltSUdodmRGZGhhWFJwYm1kR2FXeGxjeUE5UFQwZ01Da2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHaHZkRlZ3WkdGMFpVUnZkMjVzYjJGa1pXUW9LVHRjYmlCY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBmVHRjYmlCY2RGeDBabTR1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkRngwYVdZZ0tHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlHWnVLSFpoYkhWbEtUdGNiaUJjZEZ4MFhIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBLSFpoYkhWbExDQnRiMlJsSUNZZ2ZqRXBPMXh1SUZ4MFhIUjlPMXh1SUZ4MFhIUnlaWFIxY200Z1ptNDdYRzRnWEhSOVhHNWNiaUJjZEM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCdWJ5MTFiblZ6WldRdGRtRnljMXh1SUZ4MFpuVnVZM1JwYjI0Z2FHOTBRM0psWVhSbFRXOWtkV3hsS0cxdlpIVnNaVWxrS1NCN1hHNGdYSFJjZEhaaGNpQm9iM1FnUFNCN1hHNGdYSFJjZEZ4MEx5OGdjSEpwZG1GMFpTQnpkSFZtWmx4dUlGeDBYSFJjZEY5aFkyTmxjSFJsWkVSbGNHVnVaR1Z1WTJsbGN6b2dlMzBzWEc0Z1hIUmNkRngwWDJSbFkyeHBibVZrUkdWd1pXNWtaVzVqYVdWek9pQjdmU3hjYmlCY2RGeDBYSFJmYzJWc1prRmpZMlZ3ZEdWa09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSZmMyVnNaa1JsWTJ4cGJtVmtPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmZaR2x6Y0c5elpVaGhibVJzWlhKek9pQmJYU3hjYmlCY2RGeDBYSFJmYldGcGJqb2dhRzkwUTNWeWNtVnVkRU5vYVd4a1RXOWtkV3hsSUNFOVBTQnRiMlIxYkdWSlpDeGNibHh1SUZ4MFhIUmNkQzh2SUUxdlpIVnNaU0JCVUVsY2JpQmNkRngwWEhSaFkzUnBkbVU2SUhSeWRXVXNYRzRnWEhSY2RGeDBZV05qWlhCME9pQm1kVzVqZEdsdmJpaGtaWEFzSUdOaGJHeGlZV05yS1NCN1hHNGdYSFJjZEZ4MFhIUnBaaUFvWkdWd0lEMDlQU0IxYm1SbFptbHVaV1FwSUdodmRDNWZjMlZzWmtGalkyVndkR1ZrSUQwZ2RISjFaVHRjYmlCY2RGeDBYSFJjZEdWc2MyVWdhV1lnS0hSNWNHVnZaaUJrWlhBZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2FHOTBMbDl6Wld4bVFXTmpaWEIwWldRZ1BTQmtaWEE3WEc0Z1hIUmNkRngwWEhSbGJITmxJR2xtSUNoMGVYQmxiMllnWkdWd0lEMDlQU0JjSW05aWFtVmpkRndpS1Z4dUlGeDBYSFJjZEZ4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR1JsY0M1c1pXNW5kR2c3SUdrckt5bGNiaUJjZEZ4MFhIUmNkRngwWEhSb2IzUXVYMkZqWTJWd2RHVmtSR1Z3Wlc1a1pXNWphV1Z6VzJSbGNGdHBYVjBnUFNCallXeHNZbUZqYXlCOGZDQm1kVzVqZEdsdmJpZ3BJSHQ5TzF4dUlGeDBYSFJjZEZ4MFpXeHpaU0JvYjNRdVgyRmpZMlZ3ZEdWa1JHVndaVzVrWlc1amFXVnpXMlJsY0YwZ1BTQmpZV3hzWW1GamF5QjhmQ0JtZFc1amRHbHZiaWdwSUh0OU8xeHVJRngwWEhSY2RIMHNYRzRnWEhSY2RGeDBaR1ZqYkdsdVpUb2dablZ1WTNScGIyNG9aR1Z3S1NCN1hHNGdYSFJjZEZ4MFhIUnBaaUFvWkdWd0lEMDlQU0IxYm1SbFptbHVaV1FwSUdodmRDNWZjMlZzWmtSbFkyeHBibVZrSUQwZ2RISjFaVHRjYmlCY2RGeDBYSFJjZEdWc2MyVWdhV1lnS0hSNWNHVnZaaUJrWlhBZ1BUMDlJRndpYjJKcVpXTjBYQ0lwWEc0Z1hIUmNkRngwWEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daR1Z3TG14bGJtZDBhRHNnYVNzcktWeHVJRngwWEhSY2RGeDBYSFJjZEdodmRDNWZaR1ZqYkdsdVpXUkVaWEJsYm1SbGJtTnBaWE5iWkdWd1cybGRYU0E5SUhSeWRXVTdYRzRnWEhSY2RGeDBYSFJsYkhObElHaHZkQzVmWkdWamJHbHVaV1JFWlhCbGJtUmxibU5wWlhOYlpHVndYU0E5SUhSeWRXVTdYRzRnWEhSY2RGeDBmU3hjYmlCY2RGeDBYSFJrYVhOd2IzTmxPaUJtZFc1amRHbHZiaWhqWVd4c1ltRmpheWtnZTF4dUlGeDBYSFJjZEZ4MGFHOTBMbDlrYVhOd2IzTmxTR0Z1Wkd4bGNuTXVjSFZ6YUNoallXeHNZbUZqYXlrN1hHNGdYSFJjZEZ4MGZTeGNiaUJjZEZ4MFhIUmhaR1JFYVhOd2IzTmxTR0Z1Wkd4bGNqb2dablZ1WTNScGIyNG9ZMkZzYkdKaFkyc3BJSHRjYmlCY2RGeDBYSFJjZEdodmRDNWZaR2x6Y0c5elpVaGhibVJzWlhKekxuQjFjMmdvWTJGc2JHSmhZMnNwTzF4dUlGeDBYSFJjZEgwc1hHNGdYSFJjZEZ4MGNtVnRiM1psUkdsemNHOXpaVWhoYm1Sc1pYSTZJR1oxYm1OMGFXOXVLR05oYkd4aVlXTnJLU0I3WEc0Z1hIUmNkRngwWEhSMllYSWdhV1I0SUQwZ2FHOTBMbDlrYVhOd2IzTmxTR0Z1Wkd4bGNuTXVhVzVrWlhoUFppaGpZV3hzWW1GamF5azdYRzRnWEhSY2RGeDBYSFJwWmlBb2FXUjRJRDQ5SURBcElHaHZkQzVmWkdsemNHOXpaVWhoYm1Sc1pYSnpMbk53YkdsalpTaHBaSGdzSURFcE8xeHVJRngwWEhSY2RIMHNYRzVjYmlCY2RGeDBYSFF2THlCTllXNWhaMlZ0Wlc1MElFRlFTVnh1SUZ4MFhIUmNkR05vWldOck9pQm9iM1JEYUdWamF5eGNiaUJjZEZ4MFhIUmhjSEJzZVRvZ2FHOTBRWEJ3Ykhrc1hHNGdYSFJjZEZ4MGMzUmhkSFZ6T2lCbWRXNWpkR2x2Ymloc0tTQjdYRzRnWEhSY2RGeDBYSFJwWmlBb0lXd3BJSEpsZEhWeWJpQm9iM1JUZEdGMGRYTTdYRzRnWEhSY2RGeDBYSFJvYjNSVGRHRjBkWE5JWVc1a2JHVnljeTV3ZFhOb0tHd3BPMXh1SUZ4MFhIUmNkSDBzWEc0Z1hIUmNkRngwWVdSa1UzUmhkSFZ6U0dGdVpHeGxjam9nWm5WdVkzUnBiMjRvYkNrZ2UxeHVJRngwWEhSY2RGeDBhRzkwVTNSaGRIVnpTR0Z1Wkd4bGNuTXVjSFZ6YUNoc0tUdGNiaUJjZEZ4MFhIUjlMRnh1SUZ4MFhIUmNkSEpsYlc5MlpWTjBZWFIxYzBoaGJtUnNaWEk2SUdaMWJtTjBhVzl1S0d3cElIdGNiaUJjZEZ4MFhIUmNkSFpoY2lCcFpIZ2dQU0JvYjNSVGRHRjBkWE5JWVc1a2JHVnljeTVwYm1SbGVFOW1LR3dwTzF4dUlGeDBYSFJjZEZ4MGFXWWdLR2xrZUNBK1BTQXdLU0JvYjNSVGRHRjBkWE5JWVc1a2JHVnljeTV6Y0d4cFkyVW9hV1I0TENBeEtUdGNiaUJjZEZ4MFhIUjlMRnh1WEc0Z1hIUmNkRngwTHk5cGJtaGxjbWwwSUdaeWIyMGdjSEpsZG1sdmRYTWdaR2x6Y0c5elpTQmpZV3hzWEc0Z1hIUmNkRngwWkdGMFlUb2dhRzkwUTNWeWNtVnVkRTF2WkhWc1pVUmhkR0ZiYlc5a2RXeGxTV1JkWEc0Z1hIUmNkSDA3WEc0Z1hIUmNkR2h2ZEVOMWNuSmxiblJEYUdsc1pFMXZaSFZzWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUJjZEZ4MGNtVjBkWEp1SUdodmREdGNiaUJjZEgxY2JseHVJRngwZG1GeUlHaHZkRk4wWVhSMWMwaGhibVJzWlhKeklEMGdXMTA3WEc0Z1hIUjJZWElnYUc5MFUzUmhkSFZ6SUQwZ1hDSnBaR3hsWENJN1hHNWNiaUJjZEdaMWJtTjBhVzl1SUdodmRGTmxkRk4wWVhSMWN5aHVaWGRUZEdGMGRYTXBJSHRjYmlCY2RGeDBhRzkwVTNSaGRIVnpJRDBnYm1WM1UzUmhkSFZ6TzF4dUlGeDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdodmRGTjBZWFIxYzBoaGJtUnNaWEp6TG14bGJtZDBhRHNnYVNzcktWeHVJRngwWEhSY2RHaHZkRk4wWVhSMWMwaGhibVJzWlhKelcybGRMbU5oYkd3b2JuVnNiQ3dnYm1WM1UzUmhkSFZ6S1R0Y2JpQmNkSDFjYmx4dUlGeDBMeThnZDJocGJHVWdaRzkzYm14dllXUnBibWRjYmlCY2RIWmhjaUJvYjNSWFlXbDBhVzVuUm1sc1pYTWdQU0F3TzF4dUlGeDBkbUZ5SUdodmRFTm9kVzVyYzB4dllXUnBibWNnUFNBd08xeHVJRngwZG1GeUlHaHZkRmRoYVhScGJtZEdhV3hsYzAxaGNDQTlJSHQ5TzF4dUlGeDBkbUZ5SUdodmRGSmxjWFZsYzNSbFpFWnBiR1Z6VFdGd0lEMGdlMzA3WEc0Z1hIUjJZWElnYUc5MFFYWmhhV3hoWW14bFJtbHNaWE5OWVhBZ1BTQjdmVHRjYmlCY2RIWmhjaUJvYjNSRVpXWmxjbkpsWkR0Y2JseHVJRngwTHk4Z1ZHaGxJSFZ3WkdGMFpTQnBibVp2WEc0Z1hIUjJZWElnYUc5MFZYQmtZWFJsTENCb2IzUlZjR1JoZEdWT1pYZElZWE5vTzF4dVhHNGdYSFJtZFc1amRHbHZiaUIwYjAxdlpIVnNaVWxrS0dsa0tTQjdYRzRnWEhSY2RIWmhjaUJwYzA1MWJXSmxjaUE5SUN0cFpDQXJJRndpWENJZ1BUMDlJR2xrTzF4dUlGeDBYSFJ5WlhSMWNtNGdhWE5PZFcxaVpYSWdQeUFyYVdRZ09pQnBaRHRjYmlCY2RIMWNibHh1SUZ4MFpuVnVZM1JwYjI0Z2FHOTBRMmhsWTJzb1lYQndiSGtwSUh0Y2JpQmNkRngwYVdZZ0tHaHZkRk4wWVhSMWN5QWhQVDBnWENKcFpHeGxYQ0lwSUh0Y2JpQmNkRngwWEhSMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKamFHVmpheWdwSUdseklHOXViSGtnWVd4c2IzZGxaQ0JwYmlCcFpHeGxJSE4wWVhSMWMxd2lLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUm9iM1JCY0hCc2VVOXVWWEJrWVhSbElEMGdZWEJ3YkhrN1hHNGdYSFJjZEdodmRGTmxkRk4wWVhSMWN5aGNJbU5vWldOclhDSXBPMXh1SUZ4MFhIUnlaWFIxY200Z2FHOTBSRzkzYm14dllXUk5ZVzVwWm1WemRDaG9iM1JTWlhGMVpYTjBWR2x0Wlc5MWRDa3VkR2hsYmlobWRXNWpkR2x2YmloMWNHUmhkR1VwSUh0Y2JpQmNkRngwWEhScFppQW9JWFZ3WkdGMFpTa2dlMXh1SUZ4MFhIUmNkRngwYUc5MFUyVjBVM1JoZEhWektGd2lhV1JzWlZ3aUtUdGNiaUJjZEZ4MFhIUmNkSEpsZEhWeWJpQnVkV3hzTzF4dUlGeDBYSFJjZEgxY2JpQmNkRngwWEhSb2IzUlNaWEYxWlhOMFpXUkdhV3hsYzAxaGNDQTlJSHQ5TzF4dUlGeDBYSFJjZEdodmRGZGhhWFJwYm1kR2FXeGxjMDFoY0NBOUlIdDlPMXh1SUZ4MFhIUmNkR2h2ZEVGMllXbHNZV0pzWlVacGJHVnpUV0Z3SUQwZ2RYQmtZWFJsTG1NN1hHNGdYSFJjZEZ4MGFHOTBWWEJrWVhSbFRtVjNTR0Z6YUNBOUlIVndaR0YwWlM1b08xeHVYRzRnWEhSY2RGeDBhRzkwVTJWMFUzUmhkSFZ6S0Z3aWNISmxjR0Z5WlZ3aUtUdGNiaUJjZEZ4MFhIUjJZWElnY0hKdmJXbHpaU0E5SUc1bGR5QlFjbTl0YVhObEtHWjFibU4wYVc5dUtISmxjMjlzZG1Vc0lISmxhbVZqZENrZ2UxeHVJRngwWEhSY2RGeDBhRzkwUkdWbVpYSnlaV1FnUFNCN1hHNGdYSFJjZEZ4MFhIUmNkSEpsYzI5c2RtVTZJSEpsYzI5c2RtVXNYRzRnWEhSY2RGeDBYSFJjZEhKbGFtVmpkRG9nY21WcVpXTjBYRzRnWEhSY2RGeDBYSFI5TzF4dUlGeDBYSFJjZEgwcE8xeHVJRngwWEhSY2RHaHZkRlZ3WkdGMFpTQTlJSHQ5TzF4dUlGeDBYSFJjZEhaaGNpQmphSFZ1YTBsa0lEMGdYQ0puYkdOaGRDNXFjMXdpTzF4dUlGeDBYSFJjZEM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCdWJ5MXNiMjVsTFdKc2IyTnJjMXh1SUZ4MFhIUmNkSHRjYmlCY2RGeDBYSFJjZEM4cVoyeHZZbUZzY3lCamFIVnVhMGxrSUNvdlhHNGdYSFJjZEZ4MFhIUm9iM1JGYm5OMWNtVlZjR1JoZEdWRGFIVnVheWhqYUhWdWEwbGtLVHRjYmlCY2RGeDBYSFI5WEc0Z1hIUmNkRngwYVdZZ0tGeHVJRngwWEhSY2RGeDBhRzkwVTNSaGRIVnpJRDA5UFNCY0luQnlaWEJoY21WY0lpQW1KbHh1SUZ4MFhIUmNkRngwYUc5MFEyaDFibXR6VEc5aFpHbHVaeUE5UFQwZ01DQW1KbHh1SUZ4MFhIUmNkRngwYUc5MFYyRnBkR2x1WjBacGJHVnpJRDA5UFNBd1hHNGdYSFJjZEZ4MEtTQjdYRzRnWEhSY2RGeDBYSFJvYjNSVmNHUmhkR1ZFYjNkdWJHOWhaR1ZrS0NrN1hHNGdYSFJjZEZ4MGZWeHVJRngwWEhSY2RISmxkSFZ5YmlCd2NtOXRhWE5sTzF4dUlGeDBYSFI5S1R0Y2JpQmNkSDFjYmx4dUlGeDBMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFhWdWRYTmxaQzEyWVhKelhHNGdYSFJtZFc1amRHbHZiaUJvYjNSQlpHUlZjR1JoZEdWRGFIVnVheWhqYUhWdWEwbGtMQ0J0YjNKbFRXOWtkV3hsY3lrZ2UxeHVJRngwWEhScFppQW9JV2h2ZEVGMllXbHNZV0pzWlVacGJHVnpUV0Z3VzJOb2RXNXJTV1JkSUh4OElDRm9iM1JTWlhGMVpYTjBaV1JHYVd4bGMwMWhjRnRqYUhWdWEwbGtYU2xjYmlCY2RGeDBYSFJ5WlhSMWNtNDdYRzRnWEhSY2RHaHZkRkpsY1hWbGMzUmxaRVpwYkdWelRXRndXMk5vZFc1clNXUmRJRDBnWm1Gc2MyVTdYRzRnWEhSY2RHWnZjaUFvZG1GeUlHMXZaSFZzWlVsa0lHbHVJRzF2Y21WTmIyUjFiR1Z6S1NCN1hHNGdYSFJjZEZ4MGFXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h0YjNKbFRXOWtkV3hsY3l3Z2JXOWtkV3hsU1dRcEtTQjdYRzRnWEhSY2RGeDBYSFJvYjNSVmNHUmhkR1ZiYlc5a2RXeGxTV1JkSUQwZ2JXOXlaVTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRPMXh1SUZ4MFhIUmNkSDFjYmlCY2RGeDBmVnh1SUZ4MFhIUnBaaUFvTFMxb2IzUlhZV2wwYVc1blJtbHNaWE1nUFQwOUlEQWdKaVlnYUc5MFEyaDFibXR6VEc5aFpHbHVaeUE5UFQwZ01Da2dlMXh1SUZ4MFhIUmNkR2h2ZEZWd1pHRjBaVVJ2ZDI1c2IyRmtaV1FvS1R0Y2JpQmNkRngwZlZ4dUlGeDBmVnh1WEc0Z1hIUm1kVzVqZEdsdmJpQm9iM1JGYm5OMWNtVlZjR1JoZEdWRGFIVnVheWhqYUhWdWEwbGtLU0I3WEc0Z1hIUmNkR2xtSUNnaGFHOTBRWFpoYVd4aFlteGxSbWxzWlhOTllYQmJZMmgxYm10SlpGMHBJSHRjYmlCY2RGeDBYSFJvYjNSWFlXbDBhVzVuUm1sc1pYTk5ZWEJiWTJoMWJtdEpaRjBnUFNCMGNuVmxPMXh1SUZ4MFhIUjlJR1ZzYzJVZ2UxeHVJRngwWEhSY2RHaHZkRkpsY1hWbGMzUmxaRVpwYkdWelRXRndXMk5vZFc1clNXUmRJRDBnZEhKMVpUdGNiaUJjZEZ4MFhIUm9iM1JYWVdsMGFXNW5SbWxzWlhNckt6dGNiaUJjZEZ4MFhIUm9iM1JFYjNkdWJHOWhaRlZ3WkdGMFpVTm9kVzVyS0dOb2RXNXJTV1FwTzF4dUlGeDBYSFI5WEc0Z1hIUjlYRzVjYmlCY2RHWjFibU4wYVc5dUlHaHZkRlZ3WkdGMFpVUnZkMjVzYjJGa1pXUW9LU0I3WEc0Z1hIUmNkR2h2ZEZObGRGTjBZWFIxY3loY0luSmxZV1I1WENJcE8xeHVJRngwWEhSMllYSWdaR1ZtWlhKeVpXUWdQU0JvYjNSRVpXWmxjbkpsWkR0Y2JpQmNkRngwYUc5MFJHVm1aWEp5WldRZ1BTQnVkV3hzTzF4dUlGeDBYSFJwWmlBb0lXUmxabVZ5Y21Wa0tTQnlaWFIxY200N1hHNGdYSFJjZEdsbUlDaG9iM1JCY0hCc2VVOXVWWEJrWVhSbEtTQjdYRzRnWEhSY2RGeDBMeThnVjNKaGNDQmtaV1psY25KbFpDQnZZbXBsWTNRZ2FXNGdVSEp2YldselpTQjBieUJ0WVhKcklHbDBJR0Z6SUdFZ2QyVnNiQzFvWVc1a2JHVmtJRkJ5YjIxcGMyVWdkRzljYmlCY2RGeDBYSFF2THlCaGRtOXBaQ0IwY21sbloyVnlhVzVuSUhWdVkyRjFaMmgwSUdWNFkyVndkR2x2YmlCM1lYSnVhVzVuSUdsdUlFTm9jbTl0WlM1Y2JpQmNkRngwWEhRdkx5QlRaV1VnYUhSMGNITTZMeTlpZFdkekxtTm9jbTl0YVhWdExtOXlaeTl3TDJOb2NtOXRhWFZ0TDJsemMzVmxjeTlrWlhSaGFXdy9hV1E5TkRZMU5qWTJYRzRnWEhSY2RGeDBVSEp2YldselpTNXlaWE52YkhabEtDbGNiaUJjZEZ4MFhIUmNkQzUwYUdWdUtHWjFibU4wYVc5dUtDa2dlMXh1SUZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnYUc5MFFYQndiSGtvYUc5MFFYQndiSGxQYmxWd1pHRjBaU2s3WEc0Z1hIUmNkRngwWEhSOUtWeHVJRngwWEhSY2RGeDBMblJvWlc0b1hHNGdYSFJjZEZ4MFhIUmNkR1oxYm1OMGFXOXVLSEpsYzNWc2RDa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHUmxabVZ5Y21Wa0xuSmxjMjlzZG1Vb2NtVnpkV3gwS1R0Y2JpQmNkRngwWEhSY2RGeDBmU3hjYmlCY2RGeDBYSFJjZEZ4MFpuVnVZM1JwYjI0b1pYSnlLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBaR1ZtWlhKeVpXUXVjbVZxWldOMEtHVnljaWs3WEc0Z1hIUmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkQ2s3WEc0Z1hIUmNkSDBnWld4elpTQjdYRzRnWEhSY2RGeDBkbUZ5SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeUE5SUZ0ZE8xeHVJRngwWEhSY2RHWnZjaUFvZG1GeUlHbGtJR2x1SUdodmRGVndaR0YwWlNrZ2UxeHVJRngwWEhSY2RGeDBhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNob2IzUlZjR1JoZEdVc0lHbGtLU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUnZkWFJrWVhSbFpFMXZaSFZzWlhNdWNIVnphQ2gwYjAxdlpIVnNaVWxrS0dsa0tTazdYRzRnWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwZlZ4dUlGeDBYSFJjZEdSbFptVnljbVZrTG5KbGMyOXNkbVVvYjNWMFpHRjBaV1JOYjJSMWJHVnpLVHRjYmlCY2RGeDBmVnh1SUZ4MGZWeHVYRzRnWEhSbWRXNWpkR2x2YmlCb2IzUkJjSEJzZVNodmNIUnBiMjV6S1NCN1hHNGdYSFJjZEdsbUlDaG9iM1JUZEdGMGRYTWdJVDA5SUZ3aWNtVmhaSGxjSWlsY2JpQmNkRngwWEhSMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKaGNIQnNlU2dwSUdseklHOXViSGtnWVd4c2IzZGxaQ0JwYmlCeVpXRmtlU0J6ZEdGMGRYTmNJaWs3WEc0Z1hIUmNkRzl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpJSHg4SUh0OU8xeHVYRzRnWEhSY2RIWmhjaUJqWWp0Y2JpQmNkRngwZG1GeUlHazdYRzRnWEhSY2RIWmhjaUJxTzF4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsTzF4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsU1dRN1hHNWNiaUJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBRV1ptWldOMFpXUlRkSFZtWmloMWNHUmhkR1ZOYjJSMWJHVkpaQ2tnZTF4dUlGeDBYSFJjZEhaaGNpQnZkWFJrWVhSbFpFMXZaSFZzWlhNZ1BTQmJkWEJrWVhSbFRXOWtkV3hsU1dSZE8xeHVJRngwWEhSY2RIWmhjaUJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3lBOUlIdDlPMXh1WEc0Z1hIUmNkRngwZG1GeUlIRjFaWFZsSUQwZ2IzVjBaR0YwWldSTmIyUjFiR1Z6TG0xaGNDaG1kVzVqZEdsdmJpaHBaQ2tnZTF4dUlGeDBYSFJjZEZ4MGNtVjBkWEp1SUh0Y2JpQmNkRngwWEhSY2RGeDBZMmhoYVc0NklGdHBaRjBzWEc0Z1hIUmNkRngwWEhSY2RHbGtPaUJwWkZ4dUlGeDBYSFJjZEZ4MGZUdGNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBYSFIzYUdsc1pTQW9jWFZsZFdVdWJHVnVaM1JvSUQ0Z01Da2dlMXh1SUZ4MFhIUmNkRngwZG1GeUlIRjFaWFZsU1hSbGJTQTlJSEYxWlhWbExuQnZjQ2dwTzF4dUlGeDBYSFJjZEZ4MGRtRnlJRzF2WkhWc1pVbGtJRDBnY1hWbGRXVkpkR1Z0TG1sa08xeHVJRngwWEhSY2RGeDBkbUZ5SUdOb1lXbHVJRDBnY1hWbGRXVkpkR1Z0TG1Ob1lXbHVPMXh1SUZ4MFhIUmNkRngwYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjA3WEc0Z1hIUmNkRngwWEhScFppQW9JVzF2WkhWc1pTQjhmQ0J0YjJSMWJHVXVhRzkwTGw5elpXeG1RV05qWlhCMFpXUXBJR052Ym5ScGJuVmxPMXh1SUZ4MFhIUmNkRngwYVdZZ0tHMXZaSFZzWlM1b2IzUXVYM05sYkdaRVpXTnNhVzVsWkNrZ2UxeHVJRngwWEhSY2RGeDBYSFJ5WlhSMWNtNGdlMXh1SUZ4MFhIUmNkRngwWEhSY2RIUjVjR1U2SUZ3aWMyVnNaaTFrWldOc2FXNWxaRndpTEZ4dUlGeDBYSFJjZEZ4MFhIUmNkR05vWVdsdU9pQmphR0ZwYml4Y2JpQmNkRngwWEhSY2RGeDBYSFJ0YjJSMWJHVkpaRG9nYlc5a2RXeGxTV1JjYmlCY2RGeDBYSFJjZEZ4MGZUdGNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEdsbUlDaHRiMlIxYkdVdWFHOTBMbDl0WVdsdUtTQjdYRzRnWEhSY2RGeDBYSFJjZEhKbGRIVnliaUI3WEc0Z1hIUmNkRngwWEhSY2RGeDBkSGx3WlRvZ1hDSjFibUZqWTJWd2RHVmtYQ0lzWEc0Z1hIUmNkRngwWEhSY2RGeDBZMmhoYVc0NklHTm9ZV2x1TEZ4dUlGeDBYSFJjZEZ4MFhIUmNkRzF2WkhWc1pVbGtPaUJ0YjJSMWJHVkpaRnh1SUZ4MFhIUmNkRngwWEhSOU8xeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCdGIyUjFiR1V1Y0dGeVpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJRngwWEhSY2RGeDBYSFIyWVhJZ2NHRnlaVzUwU1dRZ1BTQnRiMlIxYkdVdWNHRnlaVzUwYzF0cFhUdGNiaUJjZEZ4MFhIUmNkRngwZG1GeUlIQmhjbVZ1ZENBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmNHRnlaVzUwU1dSZE8xeHVJRngwWEhSY2RGeDBYSFJwWmlBb0lYQmhjbVZ1ZENrZ1kyOXVkR2x1ZFdVN1hHNGdYSFJjZEZ4MFhIUmNkR2xtSUNod1lYSmxiblF1YUc5MExsOWtaV05zYVc1bFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJ5WlhSMWNtNGdlMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBkSGx3WlRvZ1hDSmtaV05zYVc1bFpGd2lMRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBZMmhoYVc0NklHTm9ZV2x1TG1OdmJtTmhkQ2hiY0dGeVpXNTBTV1JkS1N4Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEhCaGNtVnVkRWxrT2lCd1lYSmxiblJKWkZ4dUlGeDBYSFJjZEZ4MFhIUmNkSDA3WEc0Z1hIUmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkRngwYVdZZ0tHOTFkR1JoZEdWa1RXOWtkV3hsY3k1cGJtUmxlRTltS0hCaGNtVnVkRWxrS1NBaFBUMGdMVEVwSUdOdmJuUnBiblZsTzF4dUlGeDBYSFJjZEZ4MFhIUnBaaUFvY0dGeVpXNTBMbWh2ZEM1ZllXTmpaWEIwWldSRVpYQmxibVJsYm1OcFpYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0NGdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHdZWEpsYm5SSlpGMHBYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR3WVhKbGJuUkpaRjBnUFNCYlhUdGNiaUJjZEZ4MFhIUmNkRngwWEhSaFpHUkJiR3hVYjFObGRDaHZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR3WVhKbGJuUkpaRjBzSUZ0dGIyUjFiR1ZKWkYwcE8xeHVJRngwWEhSY2RGeDBYSFJjZEdOdmJuUnBiblZsTzF4dUlGeDBYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJjZEdSbGJHVjBaU0J2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsYzF0d1lYSmxiblJKWkYwN1hHNGdYSFJjZEZ4MFhIUmNkRzkxZEdSaGRHVmtUVzlrZFd4bGN5NXdkWE5vS0hCaGNtVnVkRWxrS1R0Y2JpQmNkRngwWEhSY2RGeDBjWFZsZFdVdWNIVnphQ2g3WEc0Z1hIUmNkRngwWEhSY2RGeDBZMmhoYVc0NklHTm9ZV2x1TG1OdmJtTmhkQ2hiY0dGeVpXNTBTV1JkS1N4Y2JpQmNkRngwWEhSY2RGeDBYSFJwWkRvZ2NHRnlaVzUwU1dSY2JpQmNkRngwWEhSY2RGeDBmU2s3WEc0Z1hIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MGZWeHVYRzRnWEhSY2RGeDBjbVYwZFhKdUlIdGNiaUJjZEZ4MFhIUmNkSFI1Y0dVNklGd2lZV05qWlhCMFpXUmNJaXhjYmlCY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCMWNHUmhkR1ZOYjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJjZEc5MWRHUmhkR1ZrVFc5a2RXeGxjem9nYjNWMFpHRjBaV1JOYjJSMWJHVnpMRnh1SUZ4MFhIUmNkRngwYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNNklHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpYRzRnWEhSY2RGeDBmVHRjYmlCY2RGeDBmVnh1WEc0Z1hIUmNkR1oxYm1OMGFXOXVJR0ZrWkVGc2JGUnZVMlYwS0dFc0lHSXBJSHRjYmlCY2RGeDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdJdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlCY2RGeDBYSFJjZEhaaGNpQnBkR1Z0SUQwZ1lsdHBYVHRjYmlCY2RGeDBYSFJjZEdsbUlDaGhMbWx1WkdWNFQyWW9hWFJsYlNrZ1BUMDlJQzB4S1NCaExuQjFjMmdvYVhSbGJTazdYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUjlYRzVjYmlCY2RGeDBMeThnWVhRZ1ltVm5hVzRnWVd4c0lIVndaR0YwWlhNZ2JXOWtkV3hsY3lCaGNtVWdiM1YwWkdGMFpXUmNiaUJjZEZ4MEx5OGdkR2hsSUZ3aWIzVjBaR0YwWldSY0lpQnpkR0YwZFhNZ1kyRnVJSEJ5YjNCaFoyRjBaU0IwYnlCd1lYSmxiblJ6SUdsbUlIUm9aWGtnWkc5dUozUWdZV05qWlhCMElIUm9aU0JqYUdsc1pISmxibHh1SUZ4MFhIUjJZWElnYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNZ1BTQjdmVHRjYmlCY2RGeDBkbUZ5SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeUE5SUZ0ZE8xeHVJRngwWEhSMllYSWdZWEJ3YkdsbFpGVndaR0YwWlNBOUlIdDlPMXh1WEc0Z1hIUmNkSFpoY2lCM1lYSnVWVzVsZUhCbFkzUmxaRkpsY1hWcGNtVWdQU0JtZFc1amRHbHZiaUIzWVhKdVZXNWxlSEJsWTNSbFpGSmxjWFZwY21Vb0tTQjdYRzRnWEhSY2RGeDBZMjl1YzI5c1pTNTNZWEp1S0Z4dUlGeDBYSFJjZEZ4MFhDSmJTRTFTWFNCMWJtVjRjR1ZqZEdWa0lISmxjWFZwY21Vb1hDSWdLeUJ5WlhOMWJIUXViVzlrZFd4bFNXUWdLeUJjSWlrZ2RHOGdaR2x6Y0c5elpXUWdiVzlrZFd4bFhDSmNiaUJjZEZ4MFhIUXBPMXh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkR1p2Y2lBb2RtRnlJR2xrSUdsdUlHaHZkRlZ3WkdGMFpTa2dlMXh1SUZ4MFhIUmNkR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2FHOTBWWEJrWVhSbExDQnBaQ2twSUh0Y2JpQmNkRngwWEhSY2RHMXZaSFZzWlVsa0lEMGdkRzlOYjJSMWJHVkpaQ2hwWkNrN1hHNGdYSFJjZEZ4MFhIUXZLaW9nUUhSNWNHVWdlMVJQUkU5OUlDb3ZYRzRnWEhSY2RGeDBYSFIyWVhJZ2NtVnpkV3gwTzF4dUlGeDBYSFJjZEZ4MGFXWWdLR2h2ZEZWd1pHRjBaVnRwWkYwcElIdGNiaUJjZEZ4MFhIUmNkRngwY21WemRXeDBJRDBnWjJWMFFXWm1aV04wWldSVGRIVm1aaWh0YjJSMWJHVkpaQ2s3WEc0Z1hIUmNkRngwWEhSOUlHVnNjMlVnZTF4dUlGeDBYSFJjZEZ4MFhIUnlaWE4xYkhRZ1BTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MGRIbHdaVG9nWENKa2FYTndiM05sWkZ3aUxGeHVJRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCcFpGeHVJRngwWEhSY2RGeDBYSFI5TzF4dUlGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBMeW9xSUVCMGVYQmxJSHRGY25KdmNueG1ZV3h6WlgwZ0tpOWNiaUJjZEZ4MFhIUmNkSFpoY2lCaFltOXlkRVZ5Y205eUlEMGdabUZzYzJVN1hHNGdYSFJjZEZ4MFhIUjJZWElnWkc5QmNIQnNlU0E5SUdaaGJITmxPMXh1SUZ4MFhIUmNkRngwZG1GeUlHUnZSR2x6Y0c5elpTQTlJR1poYkhObE8xeHVJRngwWEhSY2RGeDBkbUZ5SUdOb1lXbHVTVzVtYnlBOUlGd2lYQ0k3WEc0Z1hIUmNkRngwWEhScFppQW9jbVZ6ZFd4MExtTm9ZV2x1S1NCN1hHNGdYSFJjZEZ4MFhIUmNkR05vWVdsdVNXNW1ieUE5SUZ3aVhGeHVWWEJrWVhSbElIQnliM0JoWjJGMGFXOXVPaUJjSWlBcklISmxjM1ZzZEM1amFHRnBiaTVxYjJsdUtGd2lJQzArSUZ3aUtUdGNiaUJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEhOM2FYUmphQ0FvY21WemRXeDBMblI1Y0dVcElIdGNiaUJjZEZ4MFhIUmNkRngwWTJGelpTQmNJbk5sYkdZdFpHVmpiR2x1WldSY0lqcGNiaUJjZEZ4MFhIUmNkRngwWEhScFppQW9iM0IwYVc5dWN5NXZia1JsWTJ4cGJtVmtLU0J2Y0hScGIyNXpMbTl1UkdWamJHbHVaV1FvY21WemRXeDBLVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUnBaaUFvSVc5d2RHbHZibk11YVdkdWIzSmxSR1ZqYkdsdVpXUXBYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmhZbTl5ZEVWeWNtOXlJRDBnYm1WM0lFVnljbTl5S0Z4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY0lrRmliM0owWldRZ1ltVmpZWFZ6WlNCdlppQnpaV3htSUdSbFkyeHBibVU2SUZ3aUlDdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJ5WlhOMWJIUXViVzlrZFd4bFNXUWdLMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOb1lXbHVTVzVtYjF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwS1R0Y2JpQmNkRngwWEhSY2RGeDBYSFJpY21WaGF6dGNiaUJjZEZ4MFhIUmNkRngwWTJGelpTQmNJbVJsWTJ4cGJtVmtYQ0k2WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0c5d2RHbHZibk11YjI1RVpXTnNhVzVsWkNrZ2IzQjBhVzl1Y3k1dmJrUmxZMnhwYm1Wa0tISmxjM1ZzZENrN1hHNGdYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDRnZjSFJwYjI1ekxtbG5ibTl5WlVSbFkyeHBibVZrS1Z4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWVdKdmNuUkZjbkp2Y2lBOUlHNWxkeUJGY25KdmNpaGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYQ0pCWW05eWRHVmtJR0psWTJGMWMyVWdiMllnWkdWamJHbHVaV1FnWkdWd1pXNWtaVzVqZVRvZ1hDSWdLMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEhKbGMzVnNkQzV0YjJSMWJHVkpaQ0FyWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhDSWdhVzRnWENJZ0sxeHVJRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSEpsYzNWc2RDNXdZWEpsYm5SSlpDQXJYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWTJoaGFXNUpibVp2WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFFwTzF4dUlGeDBYSFJjZEZ4MFhIUmNkR0p5WldGck8xeHVJRngwWEhSY2RGeDBYSFJqWVhObElGd2lkVzVoWTJObGNIUmxaRndpT2x4dUlGeDBYSFJjZEZ4MFhIUmNkR2xtSUNodmNIUnBiMjV6TG05dVZXNWhZMk5sY0hSbFpDa2diM0IwYVc5dWN5NXZibFZ1WVdOalpYQjBaV1FvY21WemRXeDBLVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUnBaaUFvSVc5d2RHbHZibk11YVdkdWIzSmxWVzVoWTJObGNIUmxaQ2xjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkR0ZpYjNKMFJYSnliM0lnUFNCdVpYY2dSWEp5YjNJb1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RGd2lRV0p2Y25SbFpDQmlaV05oZFhObElGd2lJQ3NnYlc5a2RXeGxTV1FnS3lCY0lpQnBjeUJ1YjNRZ1lXTmpaWEIwWldSY0lpQXJJR05vWVdsdVNXNW1iMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBLVHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmljbVZoYXp0Y2JpQmNkRngwWEhSY2RGeDBZMkZ6WlNCY0ltRmpZMlZ3ZEdWa1hDSTZYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXWWdLRzl3ZEdsdmJuTXViMjVCWTJObGNIUmxaQ2tnYjNCMGFXOXVjeTV2YmtGalkyVndkR1ZrS0hKbGMzVnNkQ2s3WEc0Z1hIUmNkRngwWEhSY2RGeDBaRzlCY0hCc2VTQTlJSFJ5ZFdVN1hHNGdYSFJjZEZ4MFhIUmNkRngwWW5KbFlXczdYRzRnWEhSY2RGeDBYSFJjZEdOaGMyVWdYQ0prYVhOd2IzTmxaRndpT2x4dUlGeDBYSFJjZEZ4MFhIUmNkR2xtSUNodmNIUnBiMjV6TG05dVJHbHpjRzl6WldRcElHOXdkR2x2Ym5NdWIyNUVhWE53YjNObFpDaHlaWE4xYkhRcE8xeHVJRngwWEhSY2RGeDBYSFJjZEdSdlJHbHpjRzl6WlNBOUlIUnlkV1U3WEc0Z1hIUmNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNGdYSFJjZEZ4MFhIUmNkR1JsWm1GMWJIUTZYRzRnWEhSY2RGeDBYSFJjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0Z3aVZXNWxlR05sY0hScGIyNGdkSGx3WlNCY0lpQXJJSEpsYzNWc2RDNTBlWEJsS1R0Y2JpQmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkR2xtSUNoaFltOXlkRVZ5Y205eUtTQjdYRzRnWEhSY2RGeDBYSFJjZEdodmRGTmxkRk4wWVhSMWN5aGNJbUZpYjNKMFhDSXBPMXh1SUZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnVUhKdmJXbHpaUzV5WldwbFkzUW9ZV0p2Y25SRmNuSnZjaWs3WEc0Z1hIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUnBaaUFvWkc5QmNIQnNlU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUmhjSEJzYVdWa1ZYQmtZWFJsVzIxdlpIVnNaVWxrWFNBOUlHaHZkRlZ3WkdGMFpWdHRiMlIxYkdWSlpGMDdYRzRnWEhSY2RGeDBYSFJjZEdGa1pFRnNiRlJ2VTJWMEtHOTFkR1JoZEdWa1RXOWtkV3hsY3l3Z2NtVnpkV3gwTG05MWRHUmhkR1ZrVFc5a2RXeGxjeWs3WEc0Z1hIUmNkRngwWEhSY2RHWnZjaUFvYlc5a2RXeGxTV1FnYVc0Z2NtVnpkV3gwTG05MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWektTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXWWdLRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJ5WlhOMWJIUXViM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE1zWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFFwWEc0Z1hIUmNkRngwWEhSY2RGeDBLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJwWmlBb0lXOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpXMjF2WkhWc1pVbGtYU2xjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhOYmJXOWtkV3hsU1dSZElEMGdXMTA3WEc0Z1hIUmNkRngwWEhSY2RGeDBYSFJoWkdSQmJHeFViMU5sZENoY2JpQmNkRngwWEhSY2RGeDBYSFJjZEZ4MGIzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTmJiVzlrZFd4bFNXUmRMRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJ5WlhOMWJIUXViM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE5iYlc5a2RXeGxTV1JkWEc0Z1hIUmNkRngwWEhSY2RGeDBYSFFwTzF4dUlGeDBYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwYVdZZ0tHUnZSR2x6Y0c5elpTa2dlMXh1SUZ4MFhIUmNkRngwWEhSaFpHUkJiR3hVYjFObGRDaHZkWFJrWVhSbFpFMXZaSFZzWlhNc0lGdHlaWE4xYkhRdWJXOWtkV3hsU1dSZEtUdGNiaUJjZEZ4MFhIUmNkRngwWVhCd2JHbGxaRlZ3WkdGMFpWdHRiMlIxYkdWSlpGMGdQU0IzWVhKdVZXNWxlSEJsWTNSbFpGSmxjWFZwY21VN1hHNGdYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUjlYRzVjYmlCY2RGeDBMeThnVTNSdmNtVWdjMlZzWmlCaFkyTmxjSFJsWkNCdmRYUmtZWFJsWkNCdGIyUjFiR1Z6SUhSdklISmxjWFZwY21VZ2RHaGxiU0JzWVhSbGNpQmllU0IwYUdVZ2JXOWtkV3hsSUhONWMzUmxiVnh1SUZ4MFhIUjJZWElnYjNWMFpHRjBaV1JUWld4bVFXTmpaWEIwWldSTmIyUjFiR1Z6SUQwZ1cxMDdYRzRnWEhSY2RHWnZjaUFvYVNBOUlEQTdJR2tnUENCdmRYUmtZWFJsWkUxdlpIVnNaWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUJjZEZ4MFhIUnRiMlIxYkdWSlpDQTlJRzkxZEdSaGRHVmtUVzlrZFd4bGMxdHBYVHRjYmlCY2RGeDBYSFJwWmlBb1hHNGdYSFJjZEZ4MFhIUnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQW1KbHh1SUZ4MFhIUmNkRngwYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1YUc5MExsOXpaV3htUVdOalpYQjBaV1FnSmlaY2JpQmNkRngwWEhSY2RDOHZJSEpsYlc5MlpXUWdjMlZzWmkxaFkyTmxjSFJsWkNCdGIyUjFiR1Z6SUhOb2IzVnNaQ0J1YjNRZ1ltVWdjbVZ4ZFdseVpXUmNiaUJjZEZ4MFhIUmNkR0Z3Y0d4cFpXUlZjR1JoZEdWYmJXOWtkV3hsU1dSZElDRTlQU0IzWVhKdVZXNWxlSEJsWTNSbFpGSmxjWFZwY21WY2JpQmNkRngwWEhRcElIdGNiaUJjZEZ4MFhIUmNkRzkxZEdSaGRHVmtVMlZzWmtGalkyVndkR1ZrVFc5a2RXeGxjeTV3ZFhOb0tIdGNiaUJjZEZ4MFhIUmNkRngwYlc5a2RXeGxPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJjZEZ4MFpYSnliM0pJWVc1a2JHVnlPaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVvYjNRdVgzTmxiR1pCWTJObGNIUmxaRnh1SUZ4MFhIUmNkRngwZlNrN1hHNGdYSFJjZEZ4MGZWeHVJRngwWEhSOVhHNWNiaUJjZEZ4MEx5OGdUbTkzSUdsdUlGd2laR2x6Y0c5elpWd2lJSEJvWVhObFhHNGdYSFJjZEdodmRGTmxkRk4wWVhSMWN5aGNJbVJwYzNCdmMyVmNJaWs3WEc0Z1hIUmNkRTlpYW1WamRDNXJaWGx6S0dodmRFRjJZV2xzWVdKc1pVWnBiR1Z6VFdGd0tTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUtHTm9kVzVyU1dRcElIdGNiaUJjZEZ4MFhIUnBaaUFvYUc5MFFYWmhhV3hoWW14bFJtbHNaWE5OWVhCYlkyaDFibXRKWkYwZ1BUMDlJR1poYkhObEtTQjdYRzRnWEhSY2RGeDBYSFJvYjNSRWFYTndiM05sUTJoMWJtc29ZMmgxYm10SlpDazdYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUjlLVHRjYmx4dUlGeDBYSFIyWVhJZ2FXUjRPMXh1SUZ4MFhIUjJZWElnY1hWbGRXVWdQU0J2ZFhSa1lYUmxaRTF2WkhWc1pYTXVjMnhwWTJVb0tUdGNiaUJjZEZ4MGQyaHBiR1VnS0hGMVpYVmxMbXhsYm1kMGFDQStJREFwSUh0Y2JpQmNkRngwWEhSdGIyUjFiR1ZKWkNBOUlIRjFaWFZsTG5CdmNDZ3BPMXh1SUZ4MFhIUmNkRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRPMXh1SUZ4MFhIUmNkR2xtSUNnaGJXOWtkV3hsS1NCamIyNTBhVzUxWlR0Y2JseHVJRngwWEhSY2RIWmhjaUJrWVhSaElEMGdlMzA3WEc1Y2JpQmNkRngwWEhRdkx5QkRZV3hzSUdScGMzQnZjMlVnYUdGdVpHeGxjbk5jYmlCY2RGeDBYSFIyWVhJZ1pHbHpjRzl6WlVoaGJtUnNaWEp6SUQwZ2JXOWtkV3hsTG1odmRDNWZaR2x6Y0c5elpVaGhibVJzWlhKek8xeHVJRngwWEhSY2RHWnZjaUFvYWlBOUlEQTdJR29nUENCa2FYTndiM05sU0dGdVpHeGxjbk11YkdWdVozUm9PeUJxS3lzcElIdGNiaUJjZEZ4MFhIUmNkR05pSUQwZ1pHbHpjRzl6WlVoaGJtUnNaWEp6VzJwZE8xeHVJRngwWEhSY2RGeDBZMklvWkdGMFlTazdYRzRnWEhSY2RGeDBmVnh1SUZ4MFhIUmNkR2h2ZEVOMWNuSmxiblJOYjJSMWJHVkVZWFJoVzIxdlpIVnNaVWxrWFNBOUlHUmhkR0U3WEc1Y2JpQmNkRngwWEhRdkx5QmthWE5oWW14bElHMXZaSFZzWlNBb2RHaHBjeUJrYVhOaFlteGxjeUJ5WlhGMWFYSmxjeUJtY205dElIUm9hWE1nYlc5a2RXeGxLVnh1SUZ4MFhIUmNkRzF2WkhWc1pTNW9iM1F1WVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzVjYmlCY2RGeDBYSFF2THlCeVpXMXZkbVVnYlc5a2RXeGxJR1p5YjIwZ1kyRmphR1ZjYmlCY2RGeDBYSFJrWld4bGRHVWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMDdYRzVjYmlCY2RGeDBYSFF2THlCM2FHVnVJR1JwYzNCdmMybHVaeUIwYUdWeVpTQnBjeUJ1YnlCdVpXVmtJSFJ2SUdOaGJHd2daR2x6Y0c5elpTQm9ZVzVrYkdWeVhHNGdYSFJjZEZ4MFpHVnNaWFJsSUc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWelcyMXZaSFZzWlVsa1hUdGNibHh1SUZ4MFhIUmNkQzh2SUhKbGJXOTJaU0JjSW5CaGNtVnVkSE5jSWlCeVpXWmxjbVZ1WTJWeklHWnliMjBnWVd4c0lHTm9hV3hrY21WdVhHNGdYSFJjZEZ4MFptOXlJQ2hxSUQwZ01Ec2dhaUE4SUcxdlpIVnNaUzVqYUdsc1pISmxiaTVzWlc1bmRHZzdJR29yS3lrZ2UxeHVJRngwWEhSY2RGeDBkbUZ5SUdOb2FXeGtJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVXVZMmhwYkdSeVpXNWJhbDFkTzF4dUlGeDBYSFJjZEZ4MGFXWWdLQ0ZqYUdsc1pDa2dZMjl1ZEdsdWRXVTdYRzRnWEhSY2RGeDBYSFJwWkhnZ1BTQmphR2xzWkM1d1lYSmxiblJ6TG1sdVpHVjRUMllvYlc5a2RXeGxTV1FwTzF4dUlGeDBYSFJjZEZ4MGFXWWdLR2xrZUNBK1BTQXdLU0I3WEc0Z1hIUmNkRngwWEhSY2RHTm9hV3hrTG5CaGNtVnVkSE11YzNCc2FXTmxLR2xrZUN3Z01TazdYRzRnWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwZlZ4dUlGeDBYSFI5WEc1Y2JpQmNkRngwTHk4Z2NtVnRiM1psSUc5MWRHUmhkR1ZrSUdSbGNHVnVaR1Z1WTNrZ1puSnZiU0J0YjJSMWJHVWdZMmhwYkdSeVpXNWNiaUJjZEZ4MGRtRnlJR1JsY0dWdVpHVnVZM2s3WEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1ZQZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3p0Y2JpQmNkRngwWm05eUlDaHRiMlIxYkdWSlpDQnBiaUJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3lrZ2UxeHVJRngwWEhSY2RHbG1JQ2hjYmlCY2RGeDBYSFJjZEU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGN5d2diVzlrZFd4bFNXUXBYRzRnWEhSY2RGeDBLU0I3WEc0Z1hIUmNkRngwWEhSdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFR0Y2JpQmNkRngwWEhSY2RHbG1JQ2h0YjJSMWJHVXBJSHRjYmlCY2RGeDBYSFJjZEZ4MGJXOWtkV3hsVDNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNZ1BTQnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjA3WEc0Z1hIUmNkRngwWEhSY2RHWnZjaUFvYWlBOUlEQTdJR29nUENCdGIyUjFiR1ZQZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3k1c1pXNW5kR2c3SUdvckt5a2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHUmxjR1Z1WkdWdVkza2dQU0J0YjJSMWJHVlBkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXRxWFR0Y2JpQmNkRngwWEhSY2RGeDBYSFJwWkhnZ1BTQnRiMlIxYkdVdVkyaHBiR1J5Wlc0dWFXNWtaWGhQWmloa1pYQmxibVJsYm1ONUtUdGNiaUJjZEZ4MFhIUmNkRngwWEhScFppQW9hV1I0SUQ0OUlEQXBJRzF2WkhWc1pTNWphR2xzWkhKbGJpNXpjR3hwWTJVb2FXUjRMQ0F4S1R0Y2JpQmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwZlZ4dUlGeDBYSFJjZEgxY2JpQmNkRngwZlZ4dVhHNGdYSFJjZEM4dklFNXZkeUJwYmlCY0ltRndjR3g1WENJZ2NHaGhjMlZjYmlCY2RGeDBhRzkwVTJWMFUzUmhkSFZ6S0Z3aVlYQndiSGxjSWlrN1hHNWNiaUJjZEZ4MGFHOTBRM1Z5Y21WdWRFaGhjMmdnUFNCb2IzUlZjR1JoZEdWT1pYZElZWE5vTzF4dVhHNGdYSFJjZEM4dklHbHVjMlZ5ZENCdVpYY2dZMjlrWlZ4dUlGeDBYSFJtYjNJZ0tHMXZaSFZzWlVsa0lHbHVJR0Z3Y0d4cFpXUlZjR1JoZEdVcElIdGNiaUJjZEZ4MFhIUnBaaUFvVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0dGd2NHeHBaV1JWY0dSaGRHVXNJRzF2WkhWc1pVbGtLU2tnZTF4dUlGeDBYSFJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQmhjSEJzYVdWa1ZYQmtZWFJsVzIxdlpIVnNaVWxrWFR0Y2JpQmNkRngwWEhSOVhHNGdYSFJjZEgxY2JseHVJRngwWEhRdkx5QmpZV3hzSUdGalkyVndkQ0JvWVc1a2JHVnljMXh1SUZ4MFhIUjJZWElnWlhKeWIzSWdQU0J1ZFd4c08xeHVJRngwWEhSbWIzSWdLRzF2WkhWc1pVbGtJR2x1SUc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWektTQjdYRzRnWEhSY2RGeDBhV1lnS0Z4dUlGeDBYSFJjZEZ4MFQySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpMQ0J0YjJSMWJHVkpaQ2xjYmlCY2RGeDBYSFFwSUh0Y2JpQmNkRngwWEhSY2RHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZE8xeHVJRngwWEhSY2RGeDBhV1lnS0cxdlpIVnNaU2tnZTF4dUlGeDBYSFJjZEZ4MFhIUnRiMlIxYkdWUGRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGN5QTlJRzkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6VzIxdlpIVnNaVWxrWFR0Y2JpQmNkRngwWEhSY2RGeDBkbUZ5SUdOaGJHeGlZV05yY3lBOUlGdGRPMXh1SUZ4MFhIUmNkRngwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnYlc5a2RXeGxUM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUJjZEZ4MFhIUmNkRngwWEhSa1pYQmxibVJsYm1ONUlEMGdiVzlrZFd4bFQzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTmJhVjA3WEc0Z1hIUmNkRngwWEhSY2RGeDBZMklnUFNCdGIyUjFiR1V1YUc5MExsOWhZMk5sY0hSbFpFUmxjR1Z1WkdWdVkybGxjMXRrWlhCbGJtUmxibU41WFR0Y2JpQmNkRngwWEhSY2RGeDBYSFJwWmlBb1kySXBJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkR2xtSUNoallXeHNZbUZqYTNNdWFXNWtaWGhQWmloallpa2dJVDA5SUMweEtTQmpiMjUwYVc1MVpUdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RHTmhiR3hpWVdOcmN5NXdkWE5vS0dOaUtUdGNiaUJjZEZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SUdOaGJHeGlZV05yY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHTmlJRDBnWTJGc2JHSmhZMnR6VzJsZE8xeHVJRngwWEhSY2RGeDBYSFJjZEhSeWVTQjdYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmpZaWh0YjJSMWJHVlBkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjeWs3WEc0Z1hIUmNkRngwWEhSY2RGeDBmU0JqWVhSamFDQW9aWEp5S1NCN1hHNGdYSFJjZEZ4MFhIUmNkRngwWEhScFppQW9iM0IwYVc5dWN5NXZia1Z5Y205eVpXUXBJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwYjNCMGFXOXVjeTV2YmtWeWNtOXlaV1FvZTF4dUlGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIUjVjR1U2SUZ3aVlXTmpaWEIwTFdWeWNtOXlaV1JjSWl4Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUnRiMlIxYkdWSlpEb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWkdWd1pXNWtaVzVqZVVsa09pQnRiMlIxYkdWUGRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHBYU3hjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSbGNuSnZjam9nWlhKeVhHNGdYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMHBPMXh1SUZ4MFhIUmNkRngwWEhSY2RGeDBmVnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBhV1lnS0NGdmNIUnBiMjV6TG1sbmJtOXlaVVZ5Y205eVpXUXBJSHRjYmlCY2RGeDBYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDRmxjbkp2Y2lrZ1pYSnliM0lnUFNCbGNuSTdYRzRnWEhSY2RGeDBYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJjZEZ4MGZWeHVJRngwWEhSY2RGeDBYSFI5WEc0Z1hIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MGZWeHVJRngwWEhSOVhHNWNiaUJjZEZ4MEx5OGdURzloWkNCelpXeG1JR0ZqWTJWd2RHVmtJRzF2WkhWc1pYTmNiaUJjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc5MWRHUmhkR1ZrVTJWc1prRmpZMlZ3ZEdWa1RXOWtkV3hsY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUZ4MFhIUmNkSFpoY2lCcGRHVnRJRDBnYjNWMFpHRjBaV1JUWld4bVFXTmpaWEIwWldSTmIyUjFiR1Z6VzJsZE8xeHVJRngwWEhSY2RHMXZaSFZzWlVsa0lEMGdhWFJsYlM1dGIyUjFiR1U3WEc0Z1hIUmNkRngwYUc5MFEzVnljbVZ1ZEZCaGNtVnVkSE1nUFNCYmJXOWtkV3hsU1dSZE8xeHVJRngwWEhSY2RIUnllU0I3WEc0Z1hIUmNkRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tUdGNiaUJjZEZ4MFhIUjlJR05oZEdOb0lDaGxjbklwSUh0Y2JpQmNkRngwWEhSY2RHbG1JQ2gwZVhCbGIyWWdhWFJsYlM1bGNuSnZja2hoYm1Sc1pYSWdQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpa2dlMXh1SUZ4MFhIUmNkRngwWEhSMGNua2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHbDBaVzB1WlhKeWIzSklZVzVrYkdWeUtHVnljaWs3WEc0Z1hIUmNkRngwWEhSY2RIMGdZMkYwWTJnZ0tHVnljaklwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJwWmlBb2IzQjBhVzl1Y3k1dmJrVnljbTl5WldRcElIdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RHOXdkR2x2Ym5NdWIyNUZjbkp2Y21Wa0tIdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBkSGx3WlRvZ1hDSnpaV3htTFdGalkyVndkQzFsY25KdmNpMW9ZVzVrYkdWeUxXVnljbTl5WldSY0lpeGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RGeDBiVzlrZFd4bFNXUTZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBYSFJsY25KdmNqb2daWEp5TWl4Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEZ4MGIzSnBaMmx1WVd4RmNuSnZjam9nWlhKeVhHNGdYSFJjZEZ4MFhIUmNkRngwWEhSOUtUdGNiaUJjZEZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDRnZjSFJwYjI1ekxtbG5ibTl5WlVWeWNtOXlaV1FwSUh0Y2JpQmNkRngwWEhSY2RGeDBYSFJjZEdsbUlDZ2haWEp5YjNJcElHVnljbTl5SUQwZ1pYSnlNanRjYmlCY2RGeDBYSFJjZEZ4MFhIUjlYRzRnWEhSY2RGeDBYSFJjZEZ4MGFXWWdLQ0ZsY25KdmNpa2daWEp5YjNJZ1BTQmxjbkk3WEc0Z1hIUmNkRngwWEhSY2RIMWNiaUJjZEZ4MFhIUmNkSDBnWld4elpTQjdYRzRnWEhSY2RGeDBYSFJjZEdsbUlDaHZjSFJwYjI1ekxtOXVSWEp5YjNKbFpDa2dlMXh1SUZ4MFhIUmNkRngwWEhSY2RHOXdkR2x2Ym5NdWIyNUZjbkp2Y21Wa0tIdGNiaUJjZEZ4MFhIUmNkRngwWEhSY2RIUjVjR1U2SUZ3aWMyVnNaaTFoWTJObGNIUXRaWEp5YjNKbFpGd2lMRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBiVzlrZFd4bFNXUTZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkRngwWEhSY2RGeDBaWEp5YjNJNklHVnljbHh1SUZ4MFhIUmNkRngwWEhSY2RIMHBPMXh1SUZ4MFhIUmNkRngwWEhSOVhHNGdYSFJjZEZ4MFhIUmNkR2xtSUNnaGIzQjBhVzl1Y3k1cFoyNXZjbVZGY25KdmNtVmtLU0I3WEc0Z1hIUmNkRngwWEhSY2RGeDBhV1lnS0NGbGNuSnZjaWtnWlhKeWIzSWdQU0JsY25JN1hHNGdYSFJjZEZ4MFhIUmNkSDFjYmlCY2RGeDBYSFJjZEgxY2JpQmNkRngwWEhSOVhHNGdYSFJjZEgxY2JseHVJRngwWEhRdkx5Qm9ZVzVrYkdVZ1pYSnliM0p6SUdsdUlHRmpZMlZ3ZENCb1lXNWtiR1Z5Y3lCaGJtUWdjMlZzWmlCaFkyTmxjSFJsWkNCdGIyUjFiR1VnYkc5aFpGeHVJRngwWEhScFppQW9aWEp5YjNJcElIdGNiaUJjZEZ4MFhIUm9iM1JUWlhSVGRHRjBkWE1vWENKbVlXbHNYQ0lwTzF4dUlGeDBYSFJjZEhKbGRIVnliaUJRY205dGFYTmxMbkpsYW1WamRDaGxjbkp2Y2lrN1hHNGdYSFJjZEgxY2JseHVJRngwWEhSb2IzUlRaWFJUZEdGMGRYTW9YQ0pwWkd4bFhDSXBPMXh1SUZ4MFhIUnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9ablZ1WTNScGIyNG9jbVZ6YjJ4MlpTa2dlMXh1SUZ4MFhIUmNkSEpsYzI5c2RtVW9iM1YwWkdGMFpXUk5iMlIxYkdWektUdGNiaUJjZEZ4MGZTazdYRzRnWEhSOVhHNWNiaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlMRnh1SUZ4MFhIUmNkR2h2ZERvZ2FHOTBRM0psWVhSbFRXOWtkV3hsS0cxdlpIVnNaVWxrS1N4Y2JpQmNkRngwWEhSd1lYSmxiblJ6T2lBb2FHOTBRM1Z5Y21WdWRGQmhjbVZ1ZEhOVVpXMXdJRDBnYUc5MFEzVnljbVZ1ZEZCaGNtVnVkSE1zSUdodmRFTjFjbkpsYm5SUVlYSmxiblJ6SUQwZ1cxMHNJR2h2ZEVOMWNuSmxiblJRWVhKbGJuUnpWR1Z0Y0Nrc1hHNGdYSFJjZEZ4MFkyaHBiR1J5Wlc0NklGdGRYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJR2h2ZEVOeVpXRjBaVkpsY1hWcGNtVW9iVzlrZFd4bFNXUXBLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmFHRnphRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWdnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlHaHZkRU4xY25KbGJuUklZWE5vT3lCOU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUdodmRFTnlaV0YwWlZKbGNYVnBjbVVvWENJdUwzTnlZeTlwYm1SbGVDNTBjMXdpS1NoZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0JjSWk0dmMzSmpMMmx1WkdWNExuUnpYQ0lwTzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzVsZUhCdmNuUnpMa2RNSUQwZ2UxeHVJQ0FnSUVGRFZFbFdSVjlCVkZSU1NVSlZWRVZUT2lBek5UY3lNU3hjYmlBZ0lDQkJRMVJKVmtWZlFWUlVVa2xDVlZSRlgwMUJXRjlNUlU1SFZFZzZJRE0xTnpJeUxGeHVJQ0FnSUVGRFZFbFdSVjlVUlZoVVZWSkZPaUF6TkRBeE5peGNiaUFnSUNCQlExUkpWa1ZmVlU1SlJrOVNUVk02SURNMU56RTRMRnh1SUNBZ0lFRkRWRWxXUlY5VlRrbEdUMUpOWDAxQldGOU1SVTVIVkVnNklETTFOekU1TEZ4dUlDQWdJRUZNU1VGVFJVUmZURWxPUlY5WFNVUlVTRjlTUVU1SFJUb2dNek01TURJc1hHNGdJQ0FnUVV4SlFWTkZSRjlRVDBsT1ZGOVRTVnBGWDFKQlRrZEZPaUF6TXprd01TeGNiaUFnSUNCQlRGQklRVG9nTmpRd05peGNiaUFnSUNCQlRGQklRVjlDU1ZSVE9pQXpOREV6TEZ4dUlDQWdJRUZNVjBGWlV6b2dOVEU1TEZ4dUlDQWdJRUZTVWtGWlgwSlZSa1pGVWpvZ016UTVOaklzWEc0Z0lDQWdRVkpTUVZsZlFsVkdSa1ZTWDBKSlRrUkpUa2M2SURNME9UWTBMRnh1SUNBZ0lFRlVWRUZEU0VWRVgxTklRVVJGVWxNNklETTFOekUzTEZ4dUlDQWdJRUpCUTBzNklERXdNamtzWEc0Z0lDQWdRa3hGVGtRNklETXdORElzWEc0Z0lDQWdRa3hGVGtSZlEwOU1UMUk2SURNeU56Y3pMRnh1SUNBZ0lFSk1SVTVFWDBSVFZGOUJURkJJUVRvZ016STVOekFzWEc0Z0lDQWdRa3hGVGtSZlJGTlVYMUpIUWpvZ016STVOamdzWEc0Z0lDQWdRa3hGVGtSZlJWRlZRVlJKVDA0NklETXlOemMzTEZ4dUlDQWdJRUpNUlU1RVgwVlJWVUZVU1U5T1gwRk1VRWhCT2lBek5EZzNOeXhjYmlBZ0lDQkNURVZPUkY5RlVWVkJWRWxQVGw5U1IwSTZJRE15TnpjM0xGeHVJQ0FnSUVKTVJVNUVYMU5TUTE5QlRGQklRVG9nTXpJNU56RXNYRzRnSUNBZ1FreEZUa1JmVTFKRFgxSkhRam9nTXpJNU5qa3NYRzRnSUNBZ1FreFZSVjlDU1ZSVE9pQXpOREV5TEZ4dUlDQWdJRUpQVDB3NklETTFOamN3TEZ4dUlDQWdJRUpQVDB4ZlZrVkRNam9nTXpVMk56RXNYRzRnSUNBZ1FrOVBURjlXUlVNek9pQXpOVFkzTWl4Y2JpQWdJQ0JDVDA5TVgxWkZRelE2SURNMU5qY3pMRnh1SUNBZ0lFSlNUMWRUUlZKZlJFVkdRVlZNVkY5WFJVSkhURG9nTXpjME5EUXNYRzRnSUNBZ1FsVkdSa1ZTWDFOSldrVTZJRE0wTmpZd0xGeHVJQ0FnSUVKVlJrWkZVbDlWVTBGSFJUb2dNelEyTmpFc1hHNGdJQ0FnUWxsVVJUb2dOVEV5TUN4Y2JpQWdJQ0JEUTFjNklESXpNRFVzWEc0Z0lDQWdRMHhCVFZCZlZFOWZSVVJIUlRvZ016TXdOekVzWEc0Z0lDQWdRMDlNVDFKZlFWUlVRVU5JVFVWT1ZEQTZJRE0yTURZMExGeHVJQ0FnSUVOUFRFOVNYMEpWUmtaRlVsOUNTVlE2SURFMk16ZzBMRnh1SUNBZ0lFTlBURTlTWDBOTVJVRlNYMVpCVEZWRk9pQXpNVEEyTEZ4dUlDQWdJRU5QVEU5U1gxZFNTVlJGVFVGVFN6b2dNekV3Tnl4Y2JpQWdJQ0JEVDAxUVNVeEZYMU5VUVZSVlV6b2dNelUzTVRNc1hHNGdJQ0FnUTA5TlVGSkZVMU5GUkY5VVJWaFVWVkpGWDBaUFVrMUJWRk02SURNME5EWTNMRnh1SUNBZ0lFTlBUbE5VUVU1VVgwRk1VRWhCT2lBek1qYzNNU3hjYmlBZ0lDQkRUMDVUVkVGT1ZGOURUMHhQVWpvZ016STNOamtzWEc0Z0lDQWdRMDlPVkVWWVZGOU1UMU5VWDFkRlFrZE1PaUF6TnpRME1peGNiaUFnSUNCRFZVeE1YMFpCUTBVNklESTRPRFFzWEc0Z0lDQWdRMVZNVEY5R1FVTkZYMDFQUkVVNklESTRPRFVzWEc0Z0lDQWdRMVZTVWtWT1ZGOVFVazlIVWtGTk9pQXpOVGN5TlN4Y2JpQWdJQ0JEVlZKU1JVNVVYMVpGVWxSRldGOUJWRlJTU1VJNklETTBNelF5TEZ4dUlDQWdJRU5YT2lBeU16QTBMRnh1SUNBZ0lFUkZRMUk2SURjMk9ETXNYRzRnSUNBZ1JFVkRVbDlYVWtGUU9pQXpOREExTml4Y2JpQWdJQ0JFUlV4RlZFVmZVMVJCVkZWVE9pQXpOVGN4TWl4Y2JpQWdJQ0JFUlZCVVNGOUJWRlJCUTBoTlJVNVVPaUF6TmpBNU5peGNiaUFnSUNCRVJWQlVTRjlDU1ZSVE9pQXpOREUwTEZ4dUlDQWdJRVJGVUZSSVgwSlZSa1pGVWw5Q1NWUTZJREkxTml4Y2JpQWdJQ0JFUlZCVVNGOURURVZCVWw5V1FVeFZSVG9nTWprek1TeGNiaUFnSUNCRVJWQlVTRjlEVDAxUVQwNUZUbFE2SURZME1ESXNYRzRnSUNBZ1JFVlFWRWhmUTA5TlVFOU9SVTVVTVRZNklETXpNVGc1TEZ4dUlDQWdJRVJGVUZSSVgwWlZUa002SURJNU16SXNYRzRnSUNBZ1JFVlFWRWhmVWtGT1IwVTZJREk1TWpnc1hHNGdJQ0FnUkVWUVZFaGZVMVJGVGtOSlREb2dNelF3TkRFc1hHNGdJQ0FnUkVWUVZFaGZVMVJGVGtOSlRGOUJWRlJCUTBoTlJVNVVPaUF6TXpNd05peGNiaUFnSUNCRVJWQlVTRjlVUlZOVU9pQXlPVEk1TEZ4dUlDQWdJRVJGVUZSSVgxZFNTVlJGVFVGVFN6b2dNamt6TUN4Y2JpQWdJQ0JFU1ZSSVJWSTZJRE13TWpRc1hHNGdJQ0FnUkU5T1ZGOURRVkpGT2lBME16VXlMRnh1SUNBZ0lFUlRWRjlCVEZCSVFUb2dOemN5TEZ4dUlDQWdJRVJUVkY5RFQweFBVam9nTnpjMExGeHVJQ0FnSUVSWlRrRk5TVU5mUkZKQlZ6b2dNelV3TkRnc1hHNGdJQ0FnUlV4RlRVVk9WRjlCVWxKQldWOUNWVVpHUlZJNklETTBPVFl6TEZ4dUlDQWdJRVZNUlUxRlRsUmZRVkpTUVZsZlFsVkdSa1ZTWDBKSlRrUkpUa2M2SURNME9UWTFMRnh1SUNBZ0lFVlJWVUZNT2lBMU1UUXNYRzRnSUNBZ1JrRlRWRVZUVkRvZ05ETTFNeXhjYmlBZ0lDQkdURTlCVkRvZ05URXlOaXhjYmlBZ0lDQkdURTlCVkY5TlFWUXlPaUF6TlRZM05DeGNiaUFnSUNCR1RFOUJWRjlOUVZRek9pQXpOVFkzTlN4Y2JpQWdJQ0JHVEU5QlZGOU5RVlEwT2lBek5UWTNOaXhjYmlBZ0lDQkdURTlCVkY5V1JVTXlPaUF6TlRZMk5DeGNiaUFnSUNCR1RFOUJWRjlXUlVNek9pQXpOVFkyTlN4Y2JpQWdJQ0JHVEU5QlZGOVdSVU0wT2lBek5UWTJOaXhjYmlBZ0lDQkdVa0ZIVFVWT1ZGOVRTRUZFUlZJNklETTFOak15TEZ4dUlDQWdJRVpTUVUxRlFsVkdSa1ZTT2lBek5qRTJNQ3hjYmlBZ0lDQkdVa0ZOUlVKVlJrWkZVbDlCVkZSQlEwaE5SVTVVWDA5Q1NrVkRWRjlPUVUxRk9pQXpOakEwT1N4Y2JpQWdJQ0JHVWtGTlJVSlZSa1pGVWw5QlZGUkJRMGhOUlU1VVgwOUNTa1ZEVkY5VVdWQkZPaUF6TmpBME9DeGNiaUFnSUNCR1VrRk5SVUpWUmtaRlVsOUJWRlJCUTBoTlJVNVVYMVJGV0ZSVlVrVmZRMVZDUlY5TlFWQmZSa0ZEUlRvZ016WXdOVEVzWEc0Z0lDQWdSbEpCVFVWQ1ZVWkdSVkpmUVZSVVFVTklUVVZPVkY5VVJWaFVWVkpGWDB4RlZrVk1PaUF6TmpBMU1DeGNiaUFnSUNCR1VrRk5SVUpWUmtaRlVsOUNTVTVFU1U1SE9pQXpOakF3Tml4Y2JpQWdJQ0JHVWtGTlJVSlZSa1pGVWw5RFQwMVFURVZVUlRvZ016WXdOVE1zWEc0Z0lDQWdSbEpCVFVWQ1ZVWkdSVkpmU1U1RFQwMVFURVZVUlY5QlZGUkJRMGhOUlU1VU9pQXpOakExTkN4Y2JpQWdJQ0JHVWtGTlJVSlZSa1pGVWw5SlRrTlBUVkJNUlZSRlgwUkpUVVZPVTBsUFRsTTZJRE0yTURVM0xGeHVJQ0FnSUVaU1FVMUZRbFZHUmtWU1gwbE9RMDlOVUV4RlZFVmZUVWxUVTBsT1IxOUJWRlJCUTBoTlJVNVVPaUF6TmpBMU5TeGNiaUFnSUNCR1VrRk5SVUpWUmtaRlVsOVZUbE5WVUZCUFVsUkZSRG9nTXpZd05qRXNYRzRnSUNBZ1JsSlBUbFE2SURFd01qZ3NYRzRnSUNBZ1JsSlBUbFJmUVU1RVgwSkJRMHM2SURFd016SXNYRzRnSUNBZ1JsSlBUbFJmUmtGRFJUb2dNamc0Tml4Y2JpQWdJQ0JHVlU1RFgwRkVSRG9nTXpJM056UXNYRzRnSUNBZ1JsVk9RMTlTUlZaRlVsTkZYMU5WUWxSU1FVTlVPaUF6TWpjM09TeGNiaUFnSUNCR1ZVNURYMU5WUWxSU1FVTlVPaUF6TWpjM09DeGNiaUFnSUNCSFJVNUZVa0ZVUlY5TlNWQk5RVkJmU0VsT1ZEb2dNek14TnpBc1hHNGdJQ0FnUjBWUlZVRk1PaUExTVRnc1hHNGdJQ0FnUjFKRlFWUkZVam9nTlRFMkxGeHVJQ0FnSUVkU1JVVk9YMEpKVkZNNklETTBNVEVzWEc0Z0lDQWdTRWxIU0Y5R1RFOUJWRG9nTXpZek16Z3NYRzRnSUNBZ1NFbEhTRjlKVGxRNklETTJNelF4TEZ4dUlDQWdJRWxPUTFJNklEYzJPRElzWEc0Z0lDQWdTVTVEVWw5WFVrRlFPaUF6TkRBMU5TeGNiaUFnSUNCSlRrWlBYMHhQUjE5TVJVNUhWRWc2SURNMU56RTJMRnh1SUNBZ0lFbE9WRG9nTlRFeU5DeGNiaUFnSUNCSlRsUmZWa1ZETWpvZ016VTJOamNzWEc0Z0lDQWdTVTVVWDFaRlF6TTZJRE0xTmpZNExGeHVJQ0FnSUVsT1ZGOVdSVU0wT2lBek5UWTJPU3hjYmlBZ0lDQkpUbFpCVEVsRVgwVk9WVTA2SURFeU9EQXNYRzRnSUNBZ1NVNVdRVXhKUkY5R1VrRk5SVUpWUmtaRlVsOVBVRVZTUVZSSlQwNDZJREV5T0RZc1hHNGdJQ0FnU1U1V1FVeEpSRjlQVUVWU1FWUkpUMDQ2SURFeU9ESXNYRzRnSUNBZ1NVNVdRVXhKUkY5V1FVeFZSVG9nTVRJNE1TeGNiaUFnSUNCSlRsWkZVbFE2SURVek9EWXNYRzRnSUNBZ1MwVkZVRG9nTnpZNE1DeGNiaUFnSUNCTVJWRlZRVXc2SURVeE5TeGNiaUFnSUNCTVJWTlRPaUExTVRNc1hHNGdJQ0FnVEVsT1JVRlNPaUE1TnpJNUxGeHVJQ0FnSUV4SlRrVkJVbDlOU1ZCTlFWQmZURWxPUlVGU09pQTVPVGczTEZ4dUlDQWdJRXhKVGtWQlVsOU5TVkJOUVZCZlRrVkJVa1ZUVkRvZ09UazROU3hjYmlBZ0lDQk1TVTVGVXpvZ01TeGNiaUFnSUNCTVNVNUZYMHhQVDFBNklESXNYRzRnSUNBZ1RFbE9SVjlUVkZKSlVEb2dNeXhjYmlBZ0lDQk1TVTVGWDFkSlJGUklPaUF5T0RRNUxGeHVJQ0FnSUV4SlRrdGZVMVJCVkZWVE9pQXpOVGN4TkN4Y2JpQWdJQ0JNVDFkZlJreFBRVlE2SURNMk16TTJMRnh1SUNBZ0lFeFBWMTlKVGxRNklETTJNek01TEZ4dUlDQWdJRXhWVFVsT1FVNURSVG9nTmpRd09TeGNiaUFnSUNCTVZVMUpUa0ZPUTBWZlFVeFFTRUU2SURZME1UQXNYRzRnSUNBZ1RVRllYME5QVFVKSlRrVkVYMVJGV0ZSVlVrVmZTVTFCUjBWZlZVNUpWRk02SURNMU5qWXhMRnh1SUNBZ0lFMUJXRjlEVlVKRlgwMUJVRjlVUlZoVVZWSkZYMU5KV2tVNklETTBNRGMyTEZ4dUlDQWdJRTFCV0Y5R1VrRkhUVVZPVkY5VlRrbEdUMUpOWDFaRlExUlBVbE02SURNMk16UTVMRnh1SUNBZ0lFMUJXRjlTUlU1RVJWSkNWVVpHUlZKZlUwbGFSVG9nTXpRd01qUXNYRzRnSUNBZ1RVRllYMVJGV0ZSVlVrVmZTVTFCUjBWZlZVNUpWRk02SURNME9UTXdMRnh1SUNBZ0lFMUJXRjlVUlZoVVZWSkZYMU5KV2tVNklETXpOemtzWEc0Z0lDQWdUVUZZWDFaQlVsbEpUa2RmVmtWRFZFOVNVem9nTXpZek5EZ3NYRzRnSUNBZ1RVRllYMVpGVWxSRldGOUJWRlJTU1VKVE9pQXpORGt5TVN4Y2JpQWdJQ0JOUVZoZlZrVlNWRVZZWDFSRldGUlZVa1ZmU1UxQlIwVmZWVTVKVkZNNklETTFOall3TEZ4dUlDQWdJRTFCV0Y5V1JWSlVSVmhmVlU1SlJrOVNUVjlXUlVOVVQxSlRPaUF6TmpNME55eGNiaUFnSUNCTlFWaGZWa2xGVjFCUFVsUmZSRWxOVXpvZ016TTROaXhjYmlBZ0lDQk5SVVJKVlUxZlJreFBRVlE2SURNMk16TTNMRnh1SUNBZ0lFMUZSRWxWVFY5SlRsUTZJRE0yTXpRd0xGeHVJQ0FnSUUxSlVsSlBVa1ZFWDFKRlVFVkJWRG9nTXpNMk5EZ3NYRzRnSUNBZ1RrVkJVa1ZUVkRvZ09UY3lPQ3hjYmlBZ0lDQk9SVUZTUlZOVVgwMUpVRTFCVUY5TVNVNUZRVkk2SURrNU9EWXNYRzRnSUNBZ1RrVkJVa1ZUVkY5TlNWQk5RVkJmVGtWQlVrVlRWRG9nT1RrNE5DeGNiaUFnSUNCT1JWWkZVam9nTlRFeUxGeHVJQ0FnSUU1SlEwVlRWRG9nTkRNMU5DeGNiaUFnSUNCT1QwNUZPaUF3TEZ4dUlDQWdJRTVQVkVWUlZVRk1PaUExTVRjc1hHNGdJQ0FnVGs5ZlJWSlNUMUk2SURBc1hHNGdJQ0FnVGxWTlgwTlBUVkJTUlZOVFJVUmZWRVZZVkZWU1JWOUdUMUpOUVZSVE9pQXpORFEyTml4Y2JpQWdJQ0JQVGtVNklERXNYRzRnSUNBZ1QwNUZYMDFKVGxWVFgwTlBUbE5VUVU1VVgwRk1VRWhCT2lBek1qYzNNaXhjYmlBZ0lDQlBUa1ZmVFVsT1ZWTmZRMDlPVTFSQlRsUmZRMDlNVDFJNklETXlOemN3TEZ4dUlDQWdJRTlPUlY5TlNVNVZVMTlFVTFSZlFVeFFTRUU2SURjM015eGNiaUFnSUNCUFRrVmZUVWxPVlZOZlJGTlVYME5QVEU5U09pQTNOelVzWEc0Z0lDQWdUMDVGWDAxSlRsVlRYMU5TUTE5QlRGQklRVG9nTnpjeExGeHVJQ0FnSUU5T1JWOU5TVTVWVTE5VFVrTmZRMDlNVDFJNklEYzJPU3hjYmlBZ0lDQlBWVlJmVDBaZlRVVk5UMUpaT2lBeE1qZzFMRnh1SUNBZ0lGQkJRMHRmUVV4SlIwNU5SVTVVT2lBek16TXpMRnh1SUNBZ0lGQlBTVTVVVXpvZ01DeGNiaUFnSUNCUVQweFpSMDlPWDA5R1JsTkZWRjlHUVVOVVQxSTZJRE15T0RJMExGeHVJQ0FnSUZCUFRGbEhUMDVmVDBaR1UwVlVYMFpKVEV3NklETXlPREl6TEZ4dUlDQWdJRkJQVEZsSFQwNWZUMFpHVTBWVVgxVk9TVlJUT2lBeE1EYzFNaXhjYmlBZ0lDQlNSVVJmUWtsVVV6b2dNelF4TUN4Y2JpQWdJQ0JTUlU1RVJWSkNWVVpHUlZJNklETTJNVFl4TEZ4dUlDQWdJRkpGVGtSRlVrSlZSa1pGVWw5QlRGQklRVjlUU1ZwRk9pQXpOakUzT1N4Y2JpQWdJQ0JTUlU1RVJWSkNWVVpHUlZKZlFrbE9SRWxPUnpvZ016WXdNRGNzWEc0Z0lDQWdVa1ZPUkVWU1FsVkdSa1ZTWDBKTVZVVmZVMGxhUlRvZ016WXhOemdzWEc0Z0lDQWdVa1ZPUkVWU1FsVkdSa1ZTWDBSRlVGUklYMU5KV2tVNklETTJNVGd3TEZ4dUlDQWdJRkpGVGtSRlVrSlZSa1pGVWw5SFVrVkZUbDlUU1ZwRk9pQXpOakUzTnl4Y2JpQWdJQ0JTUlU1RVJWSkNWVVpHUlZKZlNFVkpSMGhVT2lBek5qRTJNeXhjYmlBZ0lDQlNSVTVFUlZKQ1ZVWkdSVkpmU1U1VVJWSk9RVXhmUms5U1RVRlVPaUF6TmpFMk5DeGNiaUFnSUNCU1JVNUVSVkpDVlVaR1JWSmZVa1ZFWDFOSldrVTZJRE0yTVRjMkxGeHVJQ0FnSUZKRlRrUkZVa0pWUmtaRlVsOVRWRVZPUTBsTVgxTkpXa1U2SURNMk1UZ3hMRnh1SUNBZ0lGSkZUa1JGVWtKVlJrWkZVbDlYU1VSVVNEb2dNell4TmpJc1hHNGdJQ0FnVWtWT1JFVlNSVkk2SURjNU16Y3NYRzRnSUNBZ1VrVlFSVUZVT2lBeE1EUTVOeXhjYmlBZ0lDQlNSVkJNUVVORk9pQTNOamd4TEZ4dUlDQWdJRkpIUWpvZ05qUXdOeXhjYmlBZ0lDQlNSMEkxWDBFeE9pQXpNamcxTlN4Y2JpQWdJQ0JTUjBJMU5qVTZJRE0yTVRrMExGeHVJQ0FnSUZKSFFrRTZJRFkwTURnc1hHNGdJQ0FnVWtkQ1FUUTZJRE15T0RVMExGeHVJQ0FnSUZOQlRWQk1SVkpmTWtRNklETTFOamM0TEZ4dUlDQWdJRk5CVFZCTVJWSmZRMVZDUlRvZ016VTJPREFzWEc0Z0lDQWdVMEZOVUV4RlV6b2dNekk1TXpjc1hHNGdJQ0FnVTBGTlVFeEZYMEZNVUVoQlgxUlBYME5QVmtWU1FVZEZPaUF6TWpreU5peGNiaUFnSUNCVFFVMVFURVZmUWxWR1JrVlNVem9nTXpJNU16WXNYRzRnSUNBZ1UwRk5VRXhGWDBOUFZrVlNRVWRGT2lBek1qa3lPQ3hjYmlBZ0lDQlRRVTFRVEVWZlEwOVdSVkpCUjBWZlNVNVdSVkpVT2lBek1qa3pPU3hjYmlBZ0lDQlRRVTFRVEVWZlEwOVdSVkpCUjBWZlZrRk1WVVU2SURNeU9UTTRMRnh1SUNBZ0lGTkRTVk5UVDFKZlFrOVlPaUF6TURnNExGeHVJQ0FnSUZORFNWTlRUMUpmVkVWVFZEb2dNekE0T1N4Y2JpQWdJQ0JUU0VGRVJWSmZRMDlOVUVsTVJWSTZJRE0yTXpRMkxGeHVJQ0FnSUZOSVFVUkZVbDlUVDFWU1EwVmZURVZPUjFSSU9pQXpOVGN5TUN4Y2JpQWdJQ0JUU0VGRVJWSmZWRmxRUlRvZ016VTJOak1zWEc0Z0lDQWdVMGhCUkVsT1IxOU1RVTVIVlVGSFJWOVdSVkpUU1U5T09pQXpOVGN5TkN4Y2JpQWdJQ0JUU0U5U1ZEb2dOVEV5TWl4Y2JpQWdJQ0JUVWtOZlFVeFFTRUU2SURjM01DeGNiaUFnSUNCVFVrTmZRVXhRU0VGZlUwRlVWVkpCVkVVNklEYzNOaXhjYmlBZ0lDQlRVa05mUTA5TVQxSTZJRGMyT0N4Y2JpQWdJQ0JUVkVGVVNVTmZSRkpCVnpvZ016VXdORFFzWEc0Z0lDQWdVMVJGVGtOSlRGOUJWRlJCUTBoTlJVNVVPaUF6TmpFeU9DeGNiaUFnSUNCVFZFVk9RMGxNWDBKQlEwdGZSa0ZKVERvZ016UTRNVGNzWEc0Z0lDQWdVMVJGVGtOSlRGOUNRVU5MWDBaVlRrTTZJRE0wT0RFMkxGeHVJQ0FnSUZOVVJVNURTVXhmUWtGRFMxOVFRVk5UWDBSRlVGUklYMFpCU1V3NklETTBPREU0TEZ4dUlDQWdJRk5VUlU1RFNVeGZRa0ZEUzE5UVFWTlRYMFJGVUZSSVgxQkJVMU02SURNME9ERTVMRnh1SUNBZ0lGTlVSVTVEU1V4ZlFrRkRTMTlTUlVZNklETTJNREF6TEZ4dUlDQWdJRk5VUlU1RFNVeGZRa0ZEUzE5V1FVeFZSVjlOUVZOTE9pQXpOakF3TkN4Y2JpQWdJQ0JUVkVWT1EwbE1YMEpCUTB0ZlYxSkpWRVZOUVZOTE9pQXpOakF3TlN4Y2JpQWdJQ0JUVkVWT1EwbE1YMEpKVkZNNklETTBNVFVzWEc0Z0lDQWdVMVJGVGtOSlRGOUNWVVpHUlZKZlFrbFVPaUF4TURJMExGeHVJQ0FnSUZOVVJVNURTVXhmUTB4RlFWSmZWa0ZNVlVVNklESTVOakVzWEc0Z0lDQWdVMVJGVGtOSlRGOUdRVWxNT2lBeU9UWTBMRnh1SUNBZ0lGTlVSVTVEU1V4ZlJsVk9Rem9nTWprMk1peGNiaUFnSUNCVFZFVk9RMGxNWDBsT1JFVllPaUEyTkRBeExGeHVJQ0FnSUZOVVJVNURTVXhmU1U1RVJWZzRPaUF6TmpFMk9DeGNiaUFnSUNCVFZFVk9RMGxNWDFCQlUxTmZSRVZRVkVoZlJrRkpURG9nTWprMk5TeGNiaUFnSUNCVFZFVk9RMGxNWDFCQlUxTmZSRVZRVkVoZlVFRlRVem9nTWprMk5peGNiaUFnSUNCVFZFVk9RMGxNWDFKRlJqb2dNamsyTnl4Y2JpQWdJQ0JUVkVWT1EwbE1YMVJGVTFRNklESTVOakFzWEc0Z0lDQWdVMVJGVGtOSlRGOVdRVXhWUlY5TlFWTkxPaUF5T1RZekxGeHVJQ0FnSUZOVVJVNURTVXhmVjFKSlZFVk5RVk5MT2lBeU9UWTRMRnh1SUNBZ0lGTlVVa1ZCVFY5RVVrRlhPaUF6TlRBME1DeGNiaUFnSUNCVFZVSlFTVmhGVEY5Q1NWUlRPaUF6TkRBNExGeHVJQ0FnSUZSRldGUlZVa1U2SURVNE9UQXNYRzRnSUNBZ1ZFVllWRlZTUlRBNklETXpPVGcwTEZ4dUlDQWdJRlJGV0ZSVlVrVXhPaUF6TXprNE5TeGNiaUFnSUNCVVJWaFVWVkpGTWpvZ016TTVPRFlzWEc0Z0lDQWdWRVZZVkZWU1JUTTZJRE16T1RnM0xGeHVJQ0FnSUZSRldGUlZVa1UwT2lBek16azRPQ3hjYmlBZ0lDQlVSVmhVVlZKRk5Ub2dNek01T0Rrc1hHNGdJQ0FnVkVWWVZGVlNSVFk2SURNek9Ua3dMRnh1SUNBZ0lGUkZXRlJWVWtVM09pQXpNems1TVN4Y2JpQWdJQ0JVUlZoVVZWSkZPRG9nTXpNNU9USXNYRzRnSUNBZ1ZFVllWRlZTUlRrNklETXpPVGt6TEZ4dUlDQWdJRlJGV0ZSVlVrVXhNRG9nTXpNNU9UUXNYRzRnSUNBZ1ZFVllWRlZTUlRFeE9pQXpNems1TlN4Y2JpQWdJQ0JVUlZoVVZWSkZNVEk2SURNek9UazJMRnh1SUNBZ0lGUkZXRlJWVWtVeE16b2dNek01T1Rjc1hHNGdJQ0FnVkVWWVZGVlNSVEUwT2lBek16azVPQ3hjYmlBZ0lDQlVSVmhVVlZKRk1UVTZJRE16T1RrNUxGeHVJQ0FnSUZSRldGUlZVa1V4TmpvZ016UXdNREFzWEc0Z0lDQWdWRVZZVkZWU1JURTNPaUF6TkRBd01TeGNiaUFnSUNCVVJWaFVWVkpGTVRnNklETTBNREF5TEZ4dUlDQWdJRlJGV0ZSVlVrVXhPVG9nTXpRd01ETXNYRzRnSUNBZ1ZFVllWRlZTUlRJd09pQXpOREF3TkN4Y2JpQWdJQ0JVUlZoVVZWSkZNakU2SURNME1EQTFMRnh1SUNBZ0lGUkZXRlJWVWtVeU1qb2dNelF3TURZc1hHNGdJQ0FnVkVWWVZGVlNSVEl6T2lBek5EQXdOeXhjYmlBZ0lDQlVSVmhVVlZKRk1qUTZJRE0wTURBNExGeHVJQ0FnSUZSRldGUlZVa1V5TlRvZ016UXdNRGtzWEc0Z0lDQWdWRVZZVkZWU1JUSTJPaUF6TkRBeE1DeGNiaUFnSUNCVVJWaFVWVkpGTWpjNklETTBNREV4TEZ4dUlDQWdJRlJGV0ZSVlVrVXlPRG9nTXpRd01USXNYRzRnSUNBZ1ZFVllWRlZTUlRJNU9pQXpOREF4TXl4Y2JpQWdJQ0JVUlZoVVZWSkZNekE2SURNME1ERTBMRnh1SUNBZ0lGUkZXRlJWVWtVek1Ub2dNelF3TVRVc1hHNGdJQ0FnVkVWWVZGVlNSVjh5UkRvZ016VTFNeXhjYmlBZ0lDQlVSVmhVVlZKRlgwSkpUa1JKVGtkZk1rUTZJRE15T0RjekxGeHVJQ0FnSUZSRldGUlZVa1ZmUWtsT1JFbE9SMTlEVlVKRlgwMUJVRG9nTXpRd05qZ3NYRzRnSUNBZ1ZFVllWRlZTUlY5RFZVSkZYMDFCVURvZ016UXdOamNzWEc0Z0lDQWdWRVZZVkZWU1JWOURWVUpGWDAxQlVGOU9SVWRCVkVsV1JWOVlPaUF6TkRBM01DeGNiaUFnSUNCVVJWaFVWVkpGWDBOVlFrVmZUVUZRWDA1RlIwRlVTVlpGWDFrNklETTBNRGN5TEZ4dUlDQWdJRlJGV0ZSVlVrVmZRMVZDUlY5TlFWQmZUa1ZIUVZSSlZrVmZXam9nTXpRd056UXNYRzRnSUNBZ1ZFVllWRlZTUlY5RFZVSkZYMDFCVUY5UVQxTkpWRWxXUlY5WU9pQXpOREEyT1N4Y2JpQWdJQ0JVUlZoVVZWSkZYME5WUWtWZlRVRlFYMUJQVTBsVVNWWkZYMWs2SURNME1EY3hMRnh1SUNBZ0lGUkZXRlJWVWtWZlExVkNSVjlOUVZCZlVFOVRTVlJKVmtWZldqb2dNelF3TnpNc1hHNGdJQ0FnVkVWWVZGVlNSVjlOUVVkZlJrbE1WRVZTT2lBeE1ESTBNQ3hjYmlBZ0lDQlVSVmhVVlZKRlgwMUpUbDlHU1V4VVJWSTZJREV3TWpReExGeHVJQ0FnSUZSRldGUlZVa1ZmVjFKQlVGOVRPaUF4TURJME1peGNiaUFnSUNCVVJWaFVWVkpGWDFkU1FWQmZWRG9nTVRBeU5ETXNYRzRnSUNBZ1ZGSkpRVTVIVEVWVE9pQTBMRnh1SUNBZ0lGUlNTVUZPUjB4RlgwWkJUam9nTml4Y2JpQWdJQ0JVVWtsQlRrZE1SVjlUVkZKSlVEb2dOU3hjYmlBZ0lDQlZUbEJCUTB0ZlFVeEpSMDVOUlU1VU9pQXpNekUzTEZ4dUlDQWdJRlZPVUVGRFMxOURUMHhQVWxOUVFVTkZYME5QVGxaRlVsTkpUMDVmVjBWQ1IwdzZJRE0zTkRRekxGeHVJQ0FnSUZWT1VFRkRTMTlHVEVsUVgxbGZWMFZDUjB3NklETTNORFF3TEZ4dUlDQWdJRlZPVUVGRFMxOVFVa1ZOVlV4VVNWQk1XVjlCVEZCSVFWOVhSVUpIVERvZ016YzBOREVzWEc0Z0lDQWdWVTVUU1VkT1JVUmZRbGxVUlRvZ05URXlNU3hjYmlBZ0lDQlZUbE5KUjA1RlJGOUpUbFE2SURVeE1qVXNYRzRnSUNBZ1ZVNVRTVWRPUlVSZlUwaFBVbFE2SURVeE1qTXNYRzRnSUNBZ1ZVNVRTVWRPUlVSZlUwaFBVbFJmTkY4MFh6UmZORG9nTXpJNE1Ua3NYRzRnSUNBZ1ZVNVRTVWRPUlVSZlUwaFBVbFJmTlY4MVh6VmZNVG9nTXpJNE1qQXNYRzRnSUNBZ1ZVNVRTVWRPUlVSZlUwaFBVbFJmTlY4Mlh6VTZJRE16TmpNMUxGeHVJQ0FnSUZaQlRFbEVRVlJGWDFOVVFWUlZVem9nTXpVM01UVXNYRzRnSUNBZ1ZrVk9SRTlTT2lBM09UTTJMRnh1SUNBZ0lGWkZVbE5KVDA0NklEYzVNemdzWEc0Z0lDQWdWa1ZTVkVWWVgwRlVWRkpKUWw5QlVsSkJXVjlDVlVaR1JWSmZRa2xPUkVsT1J6b2dNelE1TnpVc1hHNGdJQ0FnVmtWU1ZFVllYMEZVVkZKSlFsOUJVbEpCV1Y5RlRrRkNURVZFT2lBek5ETXpPQ3hjYmlBZ0lDQldSVkpVUlZoZlFWUlVVa2xDWDBGU1VrRlpYMDVQVWsxQlRFbGFSVVE2SURNME9USXlMRnh1SUNBZ0lGWkZVbFJGV0Y5QlZGUlNTVUpmUVZKU1FWbGZVRTlKVGxSRlVqb2dNelF6TnpNc1hHNGdJQ0FnVmtWU1ZFVllYMEZVVkZKSlFsOUJVbEpCV1Y5VFNWcEZPaUF6TkRNek9TeGNiaUFnSUNCV1JWSlVSVmhmUVZSVVVrbENYMEZTVWtGWlgxTlVVa2xFUlRvZ016UXpOREFzWEc0Z0lDQWdWa1ZTVkVWWVgwRlVWRkpKUWw5QlVsSkJXVjlVV1ZCRk9pQXpORE0wTVN4Y2JpQWdJQ0JXUlZKVVJWaGZVMGhCUkVWU09pQXpOVFl6TXl4Y2JpQWdJQ0JXU1VWWFVFOVNWRG9nTWprM09DeGNiaUFnSUNCYVJWSlBPaUF3WEc1OU8xeHVJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1MllYSWdSMHhEWVhSQ2RXWm1aWEpmTVNBOUlISmxjWFZwY21Vb1hDSXVMMGRNUTJGMFFuVm1abVZ5WENJcE8xeHVkbUZ5SUVkTVEyRjBSbkpoYldWaWRXWm1aWEpmTVNBOUlISmxjWFZwY21Vb1hDSXVMMGRNUTJGMFJuSmhiV1ZpZFdabVpYSmNJaWs3WEc1MllYSWdSMHhEWVhSUWNtOW5jbUZ0WHpFZ1BTQnlaWEYxYVhKbEtGd2lMaTlIVEVOaGRGQnliMmR5WVcxY0lpazdYRzUyWVhJZ1IweERZWFJTWlc1a1pYSmlkV1ptWlhKZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDBkTVEyRjBVbVZ1WkdWeVluVm1abVZ5WENJcE8xeHVkbUZ5SUVkTVEyRjBVMmhoWkdWeVh6RWdQU0J5WlhGMWFYSmxLRndpTGk5SFRFTmhkRk5vWVdSbGNsd2lLVHRjYm5aaGNpQkhURU5oZEZSbGVIUjFjbVZmTVNBOUlISmxjWFZwY21Vb1hDSXVMMGRNUTJGMFZHVjRkSFZ5WlZ3aUtUdGNiaThxS2x4dUlDb2dWMlZpUjB3Z2QzSmhjSEJsY2lCM2FYUm9JSEJzWlc1MGVTQnZaaUJvWVdOcllXSnBiR2wwZVM1Y2JpQXFMMXh1ZG1GeUlFZE1RMkYwSUQwZ0x5b3FJRUJqYkdGemN5QXFMeUFvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTnlaV0YwWlNCaElHNWxkeUJIVEVOaGRDQnBibk4wWVc1alpTNWNiaUFnSUNBZ0tpQlhaV0pIVEZKbGJtUmxjbWx1WjBOdmJuUmxlSFFnYVhNZ2NtVnhkV2x5WldRdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWm5WdVkzUnBiMjRnUjB4RFlYUW9aMndwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWDJWNGRHVnVjMmx2YmtOaFkyaGxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5bmJDQTlJR2RzTzF4dUlDQWdJQ0FnSUNCbmJDNWxibUZpYkdVb1oyd3VSRVZRVkVoZlZFVlRWQ2s3WEc0Z0lDQWdJQ0FnSUdkc0xtUmxjSFJvUm5WdVl5aG5iQzVNUlZGVlFVd3BPMXh1SUNBZ0lDQWdJQ0JuYkM1bGJtRmliR1VvWjJ3dVFreEZUa1FwTzF4dUlDQWdJQ0FnSUNCbmJDNWliR1Z1WkVaMWJtTW9aMnd1VTFKRFgwRk1VRWhCTENCbmJDNVBUa1ZmVFVsT1ZWTmZVMUpEWDBGTVVFaEJLVHRjYmlBZ0lDQjlYRzRnSUNBZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRWRNUTJGMExuQnliM1J2ZEhsd1pTd2dYQ0p5Wlc1a1pYSnBibWREYjI1MFpYaDBYQ0lzSUh0Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUVsMGN5QnZkMjRnVjJWaVIweFNaVzVrWlhKcGJtZERiMjUwWlhoMExseHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDJkc08xeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0JqYjI1bWFXZDFjbUZpYkdVNklIUnlkV1ZjYmlBZ0lDQjlLVHRjYmlBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvUjB4RFlYUXVjSEp2ZEc5MGVYQmxMQ0JjSW1kc1hDSXNJSHRjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRWwwY3lCdmQyNGdWMlZpUjB4U1pXNWtaWEpwYm1kRGIyNTBaWGgwTGlCVGFHOXlkR1Z5SUhSb1lXNGdXMXRIVEVOaGRDNXlaVzVrWlhKcGJtZERiMjUwWlhoMFhWMWNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDE5bmJEdGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnWTI5dVptbG5kWEpoWW14bE9pQjBjblZsWEc0Z0lDQWdmU2s3WEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0VkTVEyRjBMbkJ5YjNSdmRIbHdaU3dnWENKa2RXMXRlVlJsZUhSMWNtVmNJaXdnZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nUVNCa2RXMXRlU0IwWlhoMGRYSmxMQ0F4TURBbElHOXlaMkZ1YVdNZ2NIVnlaU0FqUmtZd01FWkdJSFJsZUhSMWNtVXVYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbDlmWkhWdGJYbFVaWGgwZFhKbFEyRmphR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZYMlIxYlcxNVZHVjRkSFZ5WlVOaFkyaGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIUmxlSFIxY21VZ1BTQjBhR2x6TG1OeVpXRjBaVlJsZUhSMWNtVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWlhoMGRYSmxJRDA5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRWRNUTJGMExuVnVaWGh3WldOMFpXUk9kV3hzUkdWMFpXTjBaV1JGY25KdmNpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMGRYSmxMbk5sZEZSbGVIUjFjbVZHY205dFFYSnlZWGtvTVN3Z01Td2dibVYzSUZWcGJuUTRRWEp5WVhrb1d6STFOU3dnTUN3Z01qVTFMQ0F5TlRWZEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlmWkhWdGJYbFVaWGgwZFhKbFEyRmphR1VnUFNCMFpYaDBkWEpsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUmxlSFIxY21VN1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaVnh1SUNBZ0lIMHBPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhKcFpYWmxJR0Z1SUdWNGRHVnVjMmx2Ymk1Y2JpQWdJQ0FnS2lCSlppQjBhR1Y1SUdseklIbHZkWElnY0hKbFkybHZkWE1nYjI1bElHRnVaQ0I1YjNVZ1kyRnVibTkwSUd4cGRtVWdkMmwwYUc5MWRDQm9hVzBzSUhSMWNtNGdiMjRnWUhSb2NtOTNTV1pPYjNSR2IzVnVaR0F1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhRdWNISnZkRzkwZVhCbExtZGxkRVY0ZEdWdWMybHZiaUE5SUdaMWJtTjBhVzl1SUNodVlXMWxMQ0IwYUhKdmQwbG1UbTkwUm05MWJtUXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHZHNJRDBnZEdocGN5NWZYMmRzTzF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1ZlgyVjRkR1Z1YzJsdmJrTmhZMmhsVzI1aGJXVmRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDJWNGRHVnVjMmx2YmtOaFkyaGxXMjVoYldWZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZYMlY0ZEdWdWMybHZia05oWTJobFcyNWhiV1ZkSUQwZ1oyd3VaMlYwUlhoMFpXNXphVzl1S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgxOWxlSFJsYm5OcGIyNURZV05vWlZ0dVlXMWxYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWZaWGgwWlc1emFXOXVRMkZqYUdWYmJtRnRaVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHliM2RKWms1dmRFWnZkVzVrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25SMHhEWVhRdVoyVjBSWGgwWlc1emFXOXVPaUJVYUdVZ1pYaDBaVzV6YVc5dUlGd2lKeUFySUc1aGJXVWdLeUFuWENJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnNiRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwY21sbGRtVWdaWGgwWlc1emFXOXVjeTVjYmlBZ0lDQWdLaUJKWmlCMGFHVjVJR0Z5WlNCNWIzVnlJSEJ5WldOcGIzVnpJRzl1WlhNZ1lXNWtJSGx2ZFNCallXNXViM1FnYkdsMlpTQjNhWFJvYjNWMElIUm9aVzBzSUhSMWNtNGdiMjRnWUhSb2NtOTNTV1pPYjNSR2IzVnVaR0F1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhRdWNISnZkRzkwZVhCbExtZGxkRVY0ZEdWdWMybHZibk1nUFNCbWRXNWpkR2x2YmlBb2JtRnRaWE1zSUhSb2NtOTNTV1pPYjNSR2IzVnVaQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdYM1JvYVhNZ1BTQjBhR2x6TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1GdFpYTXViV0Z3S0daMWJtTjBhVzl1SUNodUtTQjdJSEpsZEhWeWJpQmZkR2hwY3k1blpYUkZlSFJsYm5OcGIyNG9iaXdnZEdoeWIzZEpaazV2ZEVadmRXNWtLVHNnZlNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGNtVmhkR1VnWVNCdVpYY2djMmhoWkdWeUlHOWlhbVZqZEM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRDNXdjbTkwYjNSNWNHVXVZM0psWVhSbFUyaGhaR1Z5SUQwZ1puVnVZM1JwYjI0Z0tIUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2RzSUQwZ2RHaHBjeTVmWDJkc08xeHVJQ0FnSUNBZ0lDQjJZWElnYzJoaFpHVnlJRDBnWjJ3dVkzSmxZWFJsVTJoaFpHVnlLSFI1Y0dVcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYzJoaFpHVnlJRDA5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1IweERZWFF1ZFc1bGVIQmxZM1JsWkU1MWJHeEVaWFJsWTNSbFpFVnljbTl5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRWRNUTJGMFUyaGhaR1Z5WHpFdVIweERZWFJUYUdGa1pYSW9kR2hwY3l3Z2MyaGhaR1Z5S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOeVpXRjBaU0JoSUc1bGR5QkhURU5oZENCd2NtOW5jbUZ0SUc5aWFtVmpkQzVjYmlBZ0lDQWdLaTljYmlBZ0lDQkhURU5oZEM1d2NtOTBiM1I1Y0dVdVkzSmxZWFJsVUhKdlozSmhiU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdkc0lEMGdkR2hwY3k1ZlgyZHNPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NISnZaM0poYlNBOUlHZHNMbU55WldGMFpWQnliMmR5WVcwb0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIyZHlZVzBnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaEhURU5oZEM1MWJtVjRjR1ZqZEdWa1RuVnNiRVJsZEdWamRHVmtSWEp5YjNJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnUjB4RFlYUlFjbTluY21GdFh6RXVSMHhEWVhSUWNtOW5jbUZ0S0hSb2FYTXNJSEJ5YjJkeVlXMHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRM0psWVhSbElHRWdibVYzSUVkTVEyRjBJSEJ5YjJkeVlXMGdiMkpxWldOMExDQnBiaUJzWVhwcFpYSWdkMkY1TGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMExuQnliM1J2ZEhsd1pTNXNZWHA1VUhKdlozSmhiU0E5SUdaMWJtTjBhVzl1SUNoMlpYSjBMQ0JtY21GbktTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCbmJDQTlJSFJvYVhNdVgxOW5iRHRjYmlBZ0lDQWdJQ0FnTHk4Z1BUMGdkbVZ5ZENBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSjBaWGhUYUdGa1pYSWdQU0IwYUdsekxtTnlaV0YwWlZOb1lXUmxjaWhuYkM1V1JWSlVSVmhmVTBoQlJFVlNLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmxjblJsZUZOb1lXUmxjaUE5UFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtFZE1RMkYwTG5WdVpYaHdaV04wWldST2RXeHNSR1YwWldOMFpXUkZjbkp2Y2lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25SbGVGTm9ZV1JsY2k1amIyMXdhV3hsS0habGNuUXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWlhKMFpYaFRhR0ZrWlhJdVpHbHpjRzl6WlNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2daVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBdkx5QTlQU0JtY21GbklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmlBZ0lDQWdJQ0FnZG1GeUlHWnlZV2R0Wlc1MFUyaGhaR1Z5SUQwZ2RHaHBjeTVqY21WaGRHVlRhR0ZrWlhJb1oyd3VSbEpCUjAxRlRsUmZVMGhCUkVWU0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0daeVlXZHRaVzUwVTJoaFpHVnlJRDA5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJaWEowWlhoVGFHRmtaWEl1WkdsemNHOXpaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtFZE1RMkYwTG5WdVpYaHdaV04wWldST2RXeHNSR1YwWldOMFpXUkZjbkp2Y2lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5WVdkdFpXNTBVMmhoWkdWeUxtTnZiWEJwYkdVb1puSmhaeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhabGNuUmxlRk5vWVdSbGNpNWthWE53YjNObEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtRm5iV1Z1ZEZOb1lXUmxjaTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQzh2SUQwOUlIQnliMmR5WVcwZ1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVJQ0FnSUNBZ0lDQjJZWElnY0hKdlozSmhiU0E5SUhSb2FYTXVZM0psWVhSbFVISnZaM0poYlNncE8xeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdlozSmhiU0E5UFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbVZ5ZEdWNFUyaGhaR1Z5TG1ScGMzQnZjMlVvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5WVdkdFpXNTBVMmhoWkdWeUxtUnBjM0J2YzJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhIVEVOaGRDNTFibVY0Y0dWamRHVmtUblZzYkVSbGRHVmpkR1ZrUlhKeWIzSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtOW5jbUZ0TG14cGJtc29kbVZ5ZEdWNFUyaGhaR1Z5TENCbWNtRm5iV1Z1ZEZOb1lXUmxjaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhabGNuUmxlRk5vWVdSbGNpNWthWE53YjNObEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtRm5iV1Z1ZEZOb1lXUmxjaTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTluY21GdExtUnBjM0J2YzJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJR1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCeWIyZHlZVzA3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEY21WaGRHVWdZU0J1WlhjZ1IweERZWFFnY0hKdlozSmhiU0J2WW1wbFkzUXNJR2x1SUd4aGVtbGxjaUIzWVhrdVhHNGdJQ0FnSUNvZ1NYUW5jeUJuYjI1dVlTQmlaU0JoYzNsdVkyaHliMjV2ZFhNZ2FXWWdlVzkxSUdoaGRtVWdkR2hsSUV0SVVsOXdZWEpoYkd4bGJGOXphR0ZrWlhKZlkyOXRjR2xzWlNCbGVIUmxibk5wYjI0Z2MzVndjRzl5ZEM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRDNXdjbTkwYjNSNWNHVXViR0Y2ZVZCeWIyZHlZVzFCYzNsdVl5QTlJR1oxYm1OMGFXOXVJQ2gyWlhKMExDQm1jbUZuS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJEdGNiaUFnSUNBZ0lDQWdMeThnUFQwZ2RtVnlkQ0E5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNGdJQ0FnSUNBZ0lIWmhjaUIyWlhKMFpYaFRhR0ZrWlhJZ1BTQjBhR2x6TG1OeVpXRjBaVk5vWVdSbGNpaG5iQzVXUlZKVVJWaGZVMGhCUkVWU0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0habGNuUmxlRk5vWVdSbGNpQTlQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZCeWIyMXBjMlV1Y21WcVpXTjBLRzVsZHlCRmNuSnZjaWhIVEVOaGRDNTFibVY0Y0dWamRHVmtUblZzYkVSbGRHVmpkR1ZrUlhKeWIzSXBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtVnlkR1Y0VTJoaFpHVnlMbU52YlhCcGJHVW9kbVZ5ZENrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmxjblJsZUZOb1lXUmxjaTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1VISnZiV2x6WlM1eVpXcGxZM1FvWlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdMeThnUFQwZ1puSmhaeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNGdJQ0FnSUNBZ0lIWmhjaUJtY21GbmJXVnVkRk5vWVdSbGNpQTlJSFJvYVhNdVkzSmxZWFJsVTJoaFpHVnlLR2RzTGtaU1FVZE5SVTVVWDFOSVFVUkZVaWs3WEc0Z0lDQWdJQ0FnSUdsbUlDaG1jbUZuYldWdWRGTm9ZV1JsY2lBOVBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1WeWRHVjRVMmhoWkdWeUxtUnBjM0J2YzJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbkpsYW1WamRDaHVaWGNnUlhKeWIzSW9SMHhEWVhRdWRXNWxlSEJsWTNSbFpFNTFiR3hFWlhSbFkzUmxaRVZ5Y205eUtTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeVlXZHRaVzUwVTJoaFpHVnlMbU52YlhCcGJHVW9abkpoWnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmxjblJsZUZOb1lXUmxjaTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1jbUZuYldWdWRGTm9ZV1JsY2k1a2FYTndiM05sS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdVSEp2YldselpTNXlaV3BsWTNRb1pTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnTHk4Z1BUMGdjSEp2WjNKaGJTQTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzRnSUNBZ0lDQWdJSFpoY2lCd2NtOW5jbUZ0SUQwZ2RHaHBjeTVqY21WaGRHVlFjbTluY21GdEtDazdYRzRnSUNBZ0lDQWdJR2xtSUNod2NtOW5jbUZ0SUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWlhKMFpYaFRhR0ZrWlhJdVpHbHpjRzl6WlNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KaFoyMWxiblJUYUdGa1pYSXVaR2x6Y0c5elpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZCeWIyMXBjMlV1Y21WcVpXTjBLRzVsZHlCRmNuSnZjaWhIVEVOaGRDNTFibVY0Y0dWamRHVmtUblZzYkVSbGRHVmpkR1ZrUlhKeWIzSXBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0hKdlozSmhiUzVzYVc1clFYTjVibU1vZG1WeWRHVjRVMmhoWkdWeUxDQm1jbUZuYldWdWRGTm9ZV1JsY2lrdWRHaGxiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjSEp2WjNKaGJUdGNiaUFnSUNBZ0lDQWdmU2t1WTJGMFkyZ29ablZ1WTNScGIyNGdLR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25SbGVGTm9ZV1JsY2k1a2FYTndiM05sS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtY21GbmJXVnVkRk5vWVdSbGNpNWthWE53YjNObEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtOW5jbUZ0TG1ScGMzQnZjMlVvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHVTdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVTNCbFkybG1lU0JoSUhCeWIyZHlZVzBnZEc4Z2RYTmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFZE1RMkYwTG5CeWIzUnZkSGx3WlM1MWMyVlFjbTluY21GdElEMGdablZ1WTNScGIyNGdLSEJ5YjJkeVlXMHBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlGOWhPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnc3WEc0Z0lDQWdJQ0FnSUdkc0xuVnpaVkJ5YjJkeVlXMG9LQ2hmWVNBOUlIQnliMmR5WVcwcElEMDlQU0J1ZFd4c0lIeDhJRjloSUQwOVBTQjJiMmxrSURBZ1B5QjJiMmxrSURBZ09pQmZZUzV5WVhjcElIeDhJRzUxYkd3cE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EzSmxZWFJsSUdFZ2JtVjNJSFpsY25SbGVDQmlkV1ptWlhJdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUXVjSEp2ZEc5MGVYQmxMbU55WldGMFpVSjFabVpsY2lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHZHNJRDBnZEdocGN5NWZYMmRzTzF4dUlDQWdJQ0FnSUNCMllYSWdZblZtWm1WeUlEMGdaMnd1WTNKbFlYUmxRblZtWm1WeUtDazdYRzRnSUNBZ0lDQWdJR2xtSUNoaWRXWm1aWElnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaEhURU5oZEM1MWJtVjRjR1ZqZEdWa1RuVnNiRVJsZEdWamRHVmtSWEp5YjNJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnUjB4RFlYUkNkV1ptWlhKZk1TNUhURU5oZEVKMVptWmxjaWgwYUdsekxDQmlkV1ptWlhJcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EzSmxZWFJsSUdFZ2JtVjNJSFJsZUhSMWNtVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1IweERZWFF1Y0hKdmRHOTBlWEJsTG1OeVpXRjBaVlJsZUhSMWNtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJEdGNiaUFnSUNBZ0lDQWdkbUZ5SUhSbGVIUjFjbVVnUFNCbmJDNWpjbVZoZEdWVVpYaDBkWEpsS0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwWlhoMGRYSmxJRDA5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1IweERZWFF1ZFc1bGVIQmxZM1JsWkU1MWJHeEVaWFJsWTNSbFpFVnljbTl5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRWRNUTJGMFZHVjRkSFZ5WlY4eExrZE1RMkYwVkdWNGRIVnlaU2gwYUdsekxDQjBaWGgwZFhKbEtUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTnlaV0YwWlNCaElHNWxkeUJ5Wlc1a1pYSmlkV1ptWlhJdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUXVjSEp2ZEc5MGVYQmxMbU55WldGMFpWSmxibVJsY21KMVptWmxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdkc0lEMGdkR2hwY3k1ZlgyZHNPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NtVnVaR1Z5WW5WbVptVnlJRDBnWjJ3dVkzSmxZWFJsVW1WdVpHVnlZblZtWm1WeUtDazdYRzRnSUNBZ0lDQWdJR2xtSUNoeVpXNWtaWEppZFdabVpYSWdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loSFRFTmhkQzUxYm1WNGNHVmpkR1ZrVG5Wc2JFUmxkR1ZqZEdWa1JYSnliM0lwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dSMHhEWVhSU1pXNWtaWEppZFdabVpYSmZNUzVIVEVOaGRGSmxibVJsY21KMVptWmxjaWgwYUdsekxDQnlaVzVrWlhKaWRXWm1aWElwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTNKbFlYUmxJR0VnYm1WM0lHWnlZVzFsWW5WbVptVnlMbHh1SUNBZ0lDQXFJRlJQUkU4NklFUnlZWGRDZFdabVpYSnpYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1IweERZWFF1Y0hKdmRHOTBlWEJsTG1OeVpXRjBaVVp5WVcxbFluVm1abVZ5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnc3WEc0Z0lDQWdJQ0FnSUhaaGNpQm1jbUZ0WldKMVptWmxjaUE5SUdkc0xtTnlaV0YwWlVaeVlXMWxZblZtWm1WeUtDazdYRzRnSUNBZ0lDQWdJR2xtSUNobWNtRnRaV0oxWm1abGNpQTlQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0VkTVEyRjBMblZ1Wlhod1pXTjBaV1JPZFd4c1JHVjBaV04wWldSRmNuSnZjaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QkhURU5oZEVaeVlXMWxZblZtWm1WeVh6RXVSMHhEWVhSR2NtRnRaV0oxWm1abGNpaDBhR2x6TENCbWNtRnRaV0oxWm1abGNpazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRjbVZoZEdVZ1lTQnVaWGNnWm5KaGJXVmlkV1psY2l3Z2FXNGdiR0Y2YVdWeUlIZGhlUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQkhURU5oZEM1d2NtOTBiM1I1Y0dVdWJHRjZlVVp5WVcxbFluVm1abVZ5SUQwZ1puVnVZM1JwYjI0Z0tIZHBaSFJvTENCb1pXbG5hSFFzSUdselJteHZZWFFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x6Um14dllYUWdQVDA5SUhadmFXUWdNQ2tnZXlCcGMwWnNiMkYwSUQwZ1ptRnNjMlU3SUgxY2JpQWdJQ0FnSUNBZ2RtRnlJR1p5WVcxbFluVm1abVZ5SUQwZ2RHaHBjeTVqY21WaGRHVkdjbUZ0WldKMVptWmxjaWdwTzF4dUlDQWdJQ0FnSUNCcFppQW9abkpoYldWaWRXWm1aWElnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaEhURU5oZEM1MWJtVjRjR1ZqZEdWa1RuVnNiRVJsZEdWamRHVmtSWEp5YjNJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFpoY2lCeVpXNWtaWEppZFdabVpYSWdQU0IwYUdsekxtTnlaV0YwWlZKbGJtUmxjbUoxWm1abGNpZ3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb2NtVnVaR1Z5WW5WbVptVnlJRDA5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1jbUZ0WldKMVptWmxjaTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1IweERZWFF1ZFc1bGVIQmxZM1JsWkU1MWJHeEVaWFJsWTNSbFpFVnljbTl5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaVzVrWlhKaWRXWm1aWEl1YVc1cGRDaDNhV1IwYUN3Z2FHVnBaMmgwS1R0Y2JpQWdJQ0FnSUNBZ1puSmhiV1ZpZFdabVpYSXVZWFIwWVdOb1VtVnVaR1Z5WW5WbVptVnlLSEpsYm1SbGNtSjFabVpsY2lrN1hHNGdJQ0FnSUNBZ0lIWmhjaUIwWlhoMGRYSmxJRDBnZEdocGN5NWpjbVZoZEdWVVpYaDBkWEpsS0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwWlhoMGRYSmxJRDA5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1jbUZ0WldKMVptWmxjaTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaVzVrWlhKaWRXWm1aWEl1WkdsemNHOXpaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtFZE1RMkYwTG5WdVpYaHdaV04wWldST2RXeHNSR1YwWldOMFpXUkZjbkp2Y2lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0dselJteHZZWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJsZUhSMWNtVXVjMlYwVkdWNGRIVnlaVVp5YjIxR2JHOWhkRUZ5Y21GNUtIZHBaSFJvTENCb1pXbG5hSFFzSUc1MWJHd3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkSFZ5WlM1elpYUlVaWGgwZFhKbFJuSnZiVUZ5Y21GNUtIZHBaSFJvTENCb1pXbG5hSFFzSUc1MWJHd3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdaeVlXMWxZblZtWm1WeUxtRjBkR0ZqYUZSbGVIUjFjbVVvZEdWNGRIVnlaU2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtY21GdFpXSjFabVpsY2p0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOeVpXRjBaU0JoSUc1bGR5QmtjbUYzSUdKMVptWmxjbk1zSUdsdUlHeGhlbWxsY2lCM1lYa3VYRzRnSUNBZ0lDb2dTV1lnZVc5MUlHTmhiaWQwSUdkeVlXSWdZRmRGUWtkTVgyUnlZWGRmWW5WbVptVnljMkFnWlhoMFpXNXphVzl1TENCNWIzVW5iR3dnWkdsbElHbHVjM1JoYm5Sc2VTQmhkQ0IwYUdseklIQnZhVzUwTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMExuQnliM1J2ZEhsd1pTNXNZWHA1UkhKaGQySjFabVpsY25NZ1BTQm1kVzVqZEdsdmJpQW9kMmxrZEdnc0lHaGxhV2RvZEN3Z2JuVnRRblZtWm1WeWN5d2dhWE5HYkc5aGRDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FYTkdiRzloZENBOVBUMGdkbTlwWkNBd0tTQjdJR2x6Um14dllYUWdQU0JtWVd4elpUc2dmVnh1SUNBZ0lDQWdJQ0IyWVhJZ1pYaDBJRDBnZEdocGN5NW5aWFJGZUhSbGJuTnBiMjRvSjFkRlFrZE1YMlJ5WVhkZlluVm1abVZ5Y3ljc0lIUnlkV1VwTzF4dUlDQWdJQ0FnSUNCcFppQW9aWGgwTGsxQldGOUVVa0ZYWDBKVlJrWkZVbE5mVjBWQ1Iwd2dQQ0J1ZFcxQ2RXWm1aWEp6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnblIweERZWFE2SUUxaGVHbHRkVzBnWkhKaGR5QmlkV1ptWlhKeklHTnZkVzUwSUdWNFkyVmxaR1ZrSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkbUZ5SUdaeVlXMWxZblZtWm1WeUlEMGdkR2hwY3k1amNtVmhkR1ZHY21GdFpXSjFabVpsY2lncE8xeHVJQ0FnSUNBZ0lDQnBaaUFvWm5KaGJXVmlkV1ptWlhJZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhIVEVOaGRDNTFibVY0Y0dWamRHVmtUblZzYkVSbGRHVmpkR1ZrUlhKeWIzSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaVzVrWlhKaWRXWm1aWElnUFNCMGFHbHpMbU55WldGMFpWSmxibVJsY21KMVptWmxjaWdwTzF4dUlDQWdJQ0FnSUNCcFppQW9jbVZ1WkdWeVluVm1abVZ5SUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtY21GdFpXSjFabVpsY2k1a2FYTndiM05sS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9SMHhEWVhRdWRXNWxlSEJsWTNSbFpFNTFiR3hFWlhSbFkzUmxaRVZ5Y205eUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSmlkV1ptWlhJdWFXNXBkQ2gzYVdSMGFDd2dhR1ZwWjJoMEtUdGNiaUFnSUNBZ0lDQWdabkpoYldWaWRXWm1aWEl1WVhSMFlXTm9VbVZ1WkdWeVluVm1abVZ5S0hKbGJtUmxjbUoxWm1abGNpazdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYm5WdFFuVm1abVZ5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEdWNGRIVnlaU0E5SUhSb2FYTXVZM0psWVhSbFZHVjRkSFZ5WlNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUmxlSFIxY21VZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1jbUZ0WldKMVptWmxjaTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WdVpHVnlZblZtWm1WeUxtUnBjM0J2YzJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1IweERZWFF1ZFc1bGVIQmxZM1JsWkU1MWJHeEVaWFJsWTNSbFpFVnljbTl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hwYzBac2IyRjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRIVnlaUzV6WlhSVVpYaDBkWEpsUm5KdmJVWnNiMkYwUVhKeVlYa29kMmxrZEdnc0lHaGxhV2RvZEN3Z2JuVnNiQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMGRYSmxMbk5sZEZSbGVIUjFjbVZHY205dFFYSnlZWGtvZDJsa2RHZ3NJR2hsYVdkb2RDd2diblZzYkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1jbUZ0WldKMVptWmxjaTVoZEhSaFkyaFVaWGgwZFhKbEtIUmxlSFIxY21Vc0lHVjRkQzVEVDB4UFVsOUJWRlJCUTBoTlJVNVVNRjlYUlVKSFRDQXJJR2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbWNtRnRaV0oxWm1abGNqdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTmhiR3dnZEdocGN5QmlaV1p2Y21VZ2VXOTFKM0psSUdkdmJtNWhJSFZ6WlNCa2NtRjNJR0oxWm1abGNuTXVYRzRnSUNBZ0lDb2dTV1lnZVc5MUlHTmhiaWQwSUdkeVlXSWdZRmRGUWtkTVgyUnlZWGRmWW5WbVptVnljMkFnWlhoMFpXNXphVzl1TENCNWIzVW5iR3dnWkdsbElHbHVjM1JoYm5Sc2VTQmhkQ0IwYUdseklIQnZhVzUwTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMExuQnliM1J2ZEhsd1pTNWtjbUYzUW5WbVptVnljeUE5SUdaMWJtTjBhVzl1SUNodWRXMUNkV1ptWlhKektTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCbGVIUWdQU0IwYUdsekxtZGxkRVY0ZEdWdWMybHZiaWduVjBWQ1IweGZaSEpoZDE5aWRXWm1aWEp6Snl3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaEJjbkpoZVM1cGMwRnljbUY1S0c1MWJVSjFabVpsY25NcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGVIUXVaSEpoZDBKMVptWmxjbk5YUlVKSFRDaHVkVzFDZFdabVpYSnpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJoY25KaGVTQTlJRnRkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J1ZFcxQ2RXWm1aWEp6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoY25KaGVWdHBYU0E5SUdWNGRDNURUMHhQVWw5QlZGUkJRMGhOUlU1VU1GOVhSVUpIVENBcklHazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsZUhRdVpISmhkMEoxWm1abGNuTlhSVUpIVENoaGNuSmhlU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOc1pXRnlJSFJvWlNCamRYSnlaVzUwSUdaeVlXMWxZblZtWm1WeUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUVkTVEyRjBMbkJ5YjNSdmRIbHdaUzVqYkdWaGNpQTlJR1oxYm1OMGFXOXVJQ2h5WldRc0lHZHlaV1Z1TENCaWJIVmxMQ0JoYkhCb1lTd2daR1Z3ZEdncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbFpDQTlQVDBnZG05cFpDQXdLU0I3SUhKbFpDQTlJREF1TURzZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvWjNKbFpXNGdQVDA5SUhadmFXUWdNQ2tnZXlCbmNtVmxiaUE5SURBdU1Ec2dmVnh1SUNBZ0lDQWdJQ0JwWmlBb1lteDFaU0E5UFQwZ2RtOXBaQ0F3S1NCN0lHSnNkV1VnUFNBd0xqQTdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tHRnNjR2hoSUQwOVBTQjJiMmxrSURBcElIc2dZV3h3YUdFZ1BTQXhMakE3SUgxY2JpQWdJQ0FnSUNBZ2FXWWdLR1JsY0hSb0lEMDlQU0IyYjJsa0lEQXBJSHNnWkdWd2RHZ2dQU0F4TGpBN0lIMWNiaUFnSUNBZ0lDQWdkbUZ5SUdkc0lEMGdkR2hwY3k1ZlgyZHNPMXh1SUNBZ0lDQWdJQ0JuYkM1amJHVmhja052Ykc5eUtISmxaQ3dnWjNKbFpXNHNJR0pzZFdVc0lHRnNjR2hoS1R0Y2JpQWdJQ0FnSUNBZ1oyd3VZMnhsWVhKRVpYQjBhQ2hrWlhCMGFDazdYRzRnSUNBZ0lDQWdJR2RzTG1Oc1pXRnlLR2RzTGtOUFRFOVNYMEpWUmtaRlVsOUNTVlFnZkNCbmJDNUVSVkJVU0Y5Q1ZVWkdSVkpmUWtsVUtUdGNiaUFnSUNCOU8xeHVJQ0FnSUVkTVEyRjBMblZ1Wlhod1pXTjBaV1JPZFd4c1JHVjBaV04wWldSRmNuSnZjaUE5SUNkSFRFTmhkRG9nVlc1bGVIQmxZM1JsWkNCdWRXeHNJR1JsZEdWamRHVmtKenRjYmlBZ0lDQnlaWFIxY200Z1IweERZWFE3WEc1OUtDa3BPMXh1Wlhod2IzSjBjeTVIVEVOaGRDQTlJRWRNUTJGME8xeHVJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1MllYSWdSMHhmTVNBOUlISmxjWFZwY21Vb1hDSXVMMGRNWENJcE8xeHVMeW9xWEc0Z0tpQkpkQ2R6SUdFZ1YyVmlSMHhDZFdabVpYSXVYRzRnS2k5Y2JuWmhjaUJIVEVOaGRFSjFabVpsY2lBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRjbVZoZEdVZ1lTQnVaWGNnUjB4RFlYUkNkV1ptWlhJZ2FXNXpkR0Z1WTJVdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWm5WdVkzUnBiMjRnUjB4RFlYUkNkV1ptWlhJb1oyeERZWFFzSUdKMVptWmxjaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlmWjJ4RFlYUWdQU0JuYkVOaGREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlgySjFabVpsY2lBOUlHSjFabVpsY2p0Y2JpQWdJQ0I5WEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0VkTVEyRjBRblZtWm1WeUxuQnliM1J2ZEhsd1pTd2dYQ0ppZFdabVpYSmNJaXdnZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nU1hSeklHOTNiaUJpZFdabVpYSXVYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZlluVm1abVZ5TzF4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQmpiMjVtYVdkMWNtRmliR1U2SUhSeWRXVmNiaUFnSUNCOUtUdGNiaUFnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29SMHhEWVhSQ2RXWm1aWEl1Y0hKdmRHOTBlWEJsTENCY0luSmhkMXdpTENCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCSmRITWdiM2R1SUdKMVptWmxjaTRnVTJodmNuUmxjaUIwYUdGdUlGdGJSMHhEWVhSQ2RXWm1aWEl1WW5WbVptVnlYVjB1WEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWZZblZtWm1WeU8xeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0JqYjI1bWFXZDFjbUZpYkdVNklIUnlkV1ZjYmlBZ0lDQjlLVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJFYVhOd2IzTmxJSFJvWlNCaWRXWm1aWEl1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhSQ2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG1ScGMzQnZjMlVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgxOW5iRU5oZEM1bmJDNWtaV3hsZEdWQ2RXWm1aWElvZEdocGN5NWZYMkoxWm1abGNpazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFFnYm1WM0lHUmhkR0VnYVc1MGJ5QjBhR2x6SUdKMVptWmxjaTVjYmlBZ0lDQWdLaTljYmlBZ0lDQkhURU5oZEVKMVptWmxjaTV3Y205MGIzUjVjR1V1YzJWMFZtVnlkR1Y0WW5WbVptVnlJRDBnWm5WdVkzUnBiMjRnS0hOdmRYSmpaU3dnZFhOaFoyVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIVnpZV2RsSUQwOVBTQjJiMmxrSURBcElIc2dkWE5oWjJVZ1BTQkhURjh4TGtkTUxsTlVRVlJKUTE5RVVrRlhPeUI5WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnWjJ3dVltbHVaRUoxWm1abGNpaG5iQzVCVWxKQldWOUNWVVpHUlZJc0lIUm9hWE11WDE5aWRXWm1aWElwTzF4dUlDQWdJQ0FnSUNCbmJDNWlkV1ptWlhKRVlYUmhLR2RzTGtGU1VrRlpYMEpWUmtaRlVpd2djMjkxY21ObExDQjFjMkZuWlNrN1hHNGdJQ0FnSUNBZ0lHZHNMbUpwYm1SQ2RXWm1aWElvWjJ3dVFWSlNRVmxmUWxWR1JrVlNMQ0J1ZFd4c0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkQ0J1WlhjZ2FXNWtaWGdnWkdGMFlTQnBiblJ2SUhSb2FYTWdZblZtWm1WeUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUVkTVEyRjBRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXpaWFJKYm1SbGVHSjFabVpsY2lBOUlHWjFibU4wYVc5dUlDaHpiM1Z5WTJVc0lIVnpZV2RsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gxYzJGblpTQTlQVDBnZG05cFpDQXdLU0I3SUhWellXZGxJRDBnUjB4Zk1TNUhUQzVUVkVGVVNVTmZSRkpCVnpzZ2ZWeHVJQ0FnSUNBZ0lDQjJZWElnWjJ3Z1BTQjBhR2x6TGw5ZloyeERZWFF1WjJ3N1hHNGdJQ0FnSUNBZ0lHZHNMbUpwYm1SQ2RXWm1aWElvWjJ3dVJVeEZUVVZPVkY5QlVsSkJXVjlDVlVaR1JWSXNJSFJvYVhNdVgxOWlkV1ptWlhJcE8xeHVJQ0FnSUNBZ0lDQm5iQzVpZFdabVpYSkVZWFJoS0dkc0xrVk1SVTFGVGxSZlFWSlNRVmxmUWxWR1JrVlNMQ0J6YjNWeVkyVXNJSFZ6WVdkbEtUdGNiaUFnSUNBZ0lDQWdaMnd1WW1sdVpFSjFabVpsY2lobmJDNUZURVZOUlU1VVgwRlNVa0ZaWDBKVlJrWkZVaXdnYm5Wc2JDazdYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnUjB4RFlYUkNkV1ptWlhJN1hHNTlLQ2twTzF4dVpYaHdiM0owY3k1SFRFTmhkRUoxWm1abGNpQTlJRWRNUTJGMFFuVm1abVZ5TzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzUyWVhJZ1IweGZNU0E5SUhKbGNYVnBjbVVvWENJdUwwZE1YQ0lwTzF4dUx5b3FYRzRnS2lCSmRDZHpJR0VnVjJWaVIweEdjbUZ0WldKMVptWmxjaTVjYmlBcUwxeHVkbUZ5SUVkTVEyRjBSbkpoYldWaWRXWm1aWElnUFNBdktpb2dRR05zWVhOeklDb3ZJQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EzSmxZWFJsSUdFZ2JtVjNJRWRNUTJGMFJuSmhiV1ZpZFdabVpYSWdhVzV6ZEdGdVkyVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1puVnVZM1JwYjI0Z1IweERZWFJHY21GdFpXSjFabVpsY2lobmJFTmhkQ3dnWm5KaGJXVmlkV1ptWlhJcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlgzSmxibVJsY21KMVptWmxjaUE5SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgxOTBaWGgwZFhKbFRXRndJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5bmJFTmhkQ0E5SUdkc1EyRjBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWZabkpoYldWaWRXWm1aWElnUFNCbWNtRnRaV0oxWm1abGNqdGNiaUFnSUNCOVhHNGdJQ0FnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtFZE1RMkYwUm5KaGJXVmlkV1ptWlhJdWNISnZkRzkwZVhCbExDQmNJbVp5WVcxbFluVm1abVZ5WENJc0lIdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFbDBjeUJ2ZDI0Z1puSmhiV1ZpZFdabVpYSXVYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZlpuSmhiV1ZpZFdabVpYSTdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlZ4dUlDQWdJSDBwTzF4dUlDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoSFRFTmhkRVp5WVcxbFluVm1abVZ5TG5CeWIzUnZkSGx3WlN3Z1hDSnlZWGRjSWl3Z2UxeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1NYUnpJRzkzYmlCbWNtRnRaV0oxWm1abGNpNGdVMmh2Y25SbGNpQjBhR0Z1SUZ0YlIweERZWFJHY21GdFpXSjFabVpsY2k1bWNtRnRaV0oxWm1abGNsMWRYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZlpuSmhiV1ZpZFdabVpYSTdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlZ4dUlDQWdJSDBwTzF4dUlDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoSFRFTmhkRVp5WVcxbFluVm1abVZ5TG5CeWIzUnZkSGx3WlN3Z1hDSnlaVzVrWlhKaWRXWm1aWEpjSWl3Z2UxeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1NYUnpJR0YwZEdGamFHVmtJSEpsYm1SbGNtSjFabVpsY2k1Y2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMTl5Wlc1a1pYSmlkV1ptWlhJN1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaVnh1SUNBZ0lIMHBPMXh1SUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hIVEVOaGRFWnlZVzFsWW5WbVptVnlMbkJ5YjNSdmRIbHdaU3dnWENKMFpYaDBkWEpsWENJc0lIdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFbDBjeUJoZEhSaFkyaGxaQ0IwWlhoMGRYSmxMbHh1SUNBZ0lDQWdJQ0FnS2lCSlppQjViM1VnZDJGdWRDQjBieUJ5WlhSeWFXVjJaU0J2ZEdobGNpQjBhR0Z1SUdCRFQweFBVbDlCVkZSQlEwaE5SVTVVTUdBc0lIUnllU0JiVzBkTVEyRjBSbkpoYldWaWRXWm1aWEl1WjJWMFZHVjRkSFZ5WlYxZElHbHVjM1JsWVdRdVhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmZEdWNGRIVnlaVTFoY0Z0SFRGOHhMa2RNTGtOUFRFOVNYMEZVVkVGRFNFMUZUbFF3WFR0Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdaVzUxYldWeVlXSnNaVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxYRzRnSUNBZ2ZTazdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSR2x6Y0c5elpTQjBhR1VnWm5KaGJXVmlkV1ptWlhJdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUkdjbUZ0WldKMVptWmxjaTV3Y205MGIzUjVjR1V1WkdsemNHOXpaU0E5SUdaMWJtTjBhVzl1SUNoaGJITnZRWFIwWVdOb1pXUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHRnNjMjlCZEhSaFkyaGxaQ0E5UFQwZ2RtOXBaQ0F3S1NCN0lHRnNjMjlCZEhSaFkyaGxaQ0E5SUdaaGJITmxPeUI5WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnWjJ3dVpHVnNaWFJsUm5KaGJXVmlkV1ptWlhJb2RHaHBjeTVmWDJaeVlXMWxZblZtWm1WeUtUdGNiaUFnSUNBZ0lDQWdhV1lnS0dGc2MyOUJkSFJoWTJobFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgxOXlaVzVrWlhKaWRXWm1aWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbmJDNWtaV3hsZEdWU1pXNWtaWEppZFdabVpYSW9kR2hwY3k1ZlgzSmxibVJsY21KMVptWmxjaTV5WVhjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdUMkpxWldOMExuWmhiSFZsY3loMGFHbHpMbDlmZEdWNGRIVnlaVTFoY0NrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2RHVjRkSFZ5WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZHNMbVJsYkdWMFpWUmxlSFIxY21Vb2RHVjRkSFZ5WlM1eVlYY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhKcFpYWmxJR2wwY3lCaGRIUmhZMmhsWkNCMFpYaDBkWEpsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFJuSmhiV1ZpZFdabVpYSXVjSEp2ZEc5MGVYQmxMbWRsZEZSbGVIUjFjbVVnUFNCbWRXNWpkR2x2YmlBb1lYUjBZV05vYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lYUjBZV05vYldWdWRDQTlQVDBnZG05cFpDQXdLU0I3SUdGMGRHRmphRzFsYm5RZ1BTQkhURjh4TGtkTUxrTlBURTlTWDBGVVZFRkRTRTFGVGxRd095QjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZmRHVjRkSFZ5WlUxaGNGdGhkSFJoWTJodFpXNTBYVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUYwZEdGamFDQmhJSEpsYm1SbGNtSjFabVpsY2lCMGJ5QjBhR2x6SUdaeVlXMWxZblZtWm1WeUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUVkTVEyRjBSbkpoYldWaWRXWm1aWEl1Y0hKdmRHOTBlWEJsTG1GMGRHRmphRkpsYm1SbGNtSjFabVpsY2lBOUlHWjFibU4wYVc5dUlDaHlaVzVrWlhKaWRXWm1aWElzSUdGMGRHRmphRzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dGMGRHRmphRzFsYm5RZ1BUMDlJSFp2YVdRZ01Da2dleUJoZEhSaFkyaHRaVzUwSUQwZ1IweGZNUzVIVEM1RVJWQlVTRjlCVkZSQlEwaE5SVTVVT3lCOVhHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJFTmhkQzVuYkR0Y2JpQWdJQ0FnSUNBZ1oyd3VZbWx1WkVaeVlXMWxZblZtWm1WeUtHZHNMa1pTUVUxRlFsVkdSa1ZTTENCMGFHbHpMbDlmWm5KaGJXVmlkV1ptWlhJcE8xeHVJQ0FnSUNBZ0lDQm5iQzVtY21GdFpXSjFabVpsY2xKbGJtUmxjbUoxWm1abGNpaG5iQzVHVWtGTlJVSlZSa1pGVWl3Z1lYUjBZV05vYldWdWRDd2daMnd1VWtWT1JFVlNRbFZHUmtWU0xDQnlaVzVrWlhKaWRXWm1aWEl1Y21GM0tUdGNiaUFnSUNBZ0lDQWdaMnd1WW1sdVpFWnlZVzFsWW5WbVptVnlLR2RzTGtaU1FVMUZRbFZHUmtWU0xDQnVkV3hzS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWDNKbGJtUmxjbUoxWm1abGNpQTlJSEpsYm1SbGNtSjFabVpsY2p0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoSUhSbGVIUjFjbVVnZEc4Z2RHaHBjeUJtY21GdFpXSjFabVpsY2k1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRFWnlZVzFsWW5WbVptVnlMbkJ5YjNSdmRIbHdaUzVoZEhSaFkyaFVaWGgwZFhKbElEMGdablZ1WTNScGIyNGdLSFJsZUhSMWNtVXNJR0YwZEdGamFHMWxiblFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR0YwZEdGamFHMWxiblFnUFQwOUlIWnZhV1FnTUNrZ2V5QmhkSFJoWTJodFpXNTBJRDBnUjB4Zk1TNUhUQzVEVDB4UFVsOUJWRlJCUTBoTlJVNVVNRHNnZlZ4dUlDQWdJQ0FnSUNCMllYSWdaMndnUFNCMGFHbHpMbDlmWjJ4RFlYUXVaMnc3WEc0Z0lDQWdJQ0FnSUdkc0xtSnBibVJHY21GdFpXSjFabVpsY2lobmJDNUdVa0ZOUlVKVlJrWkZVaXdnZEdocGN5NWZYMlp5WVcxbFluVm1abVZ5S1R0Y2JpQWdJQ0FnSUNBZ1oyd3VabkpoYldWaWRXWm1aWEpVWlhoMGRYSmxNa1FvWjJ3dVJsSkJUVVZDVlVaR1JWSXNJR0YwZEdGamFHMWxiblFzSUdkc0xsUkZXRlJWVWtWZk1rUXNJSFJsZUhSMWNtVXVjbUYzTENBd0tUdGNiaUFnSUNBZ0lDQWdaMnd1WW1sdVpFWnlZVzFsWW5WbVptVnlLR2RzTGtaU1FVMUZRbFZHUmtWU0xDQnVkV3hzS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWDNSbGVIUjFjbVZOWVhCYllYUjBZV05vYldWdWRGMGdQU0IwWlhoMGRYSmxPMXh1SUNBZ0lIMDdYRzRnSUNBZ2NtVjBkWEp1SUVkTVEyRjBSbkpoYldWaWRXWm1aWEk3WEc1OUtDa3BPMXh1Wlhod2IzSjBjeTVIVEVOaGRFWnlZVzFsWW5WbVptVnlJRDBnUjB4RFlYUkdjbUZ0WldKMVptWmxjanRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dWRtRnlJRjlmYzNCeVpXRmtRWEp5WVhseklEMGdLSFJvYVhNZ0ppWWdkR2hwY3k1ZlgzTndjbVZoWkVGeWNtRjVjeWtnZkh3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWnZjaUFvZG1GeUlITWdQU0F3TENCcElEMGdNQ3dnYVd3Z1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb095QnBJRHdnYVd3N0lHa3JLeWtnY3lBclBTQmhjbWQxYldWdWRITmJhVjB1YkdWdVozUm9PMXh1SUNBZ0lHWnZjaUFvZG1GeUlISWdQU0JCY25KaGVTaHpLU3dnYXlBOUlEQXNJR2tnUFNBd095QnBJRHdnYVd3N0lHa3JLeWxjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnWVNBOUlHRnlaM1Z0Wlc1MGMxdHBYU3dnYWlBOUlEQXNJR3BzSUQwZ1lTNXNaVzVuZEdnN0lHb2dQQ0JxYkRzZ2Fpc3JMQ0JyS3lzcFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5VzJ0ZElEMGdZVnRxWFR0Y2JpQWdJQ0J5WlhSMWNtNGdjanRjYm4wN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzUyWVhJZ1IweGZNU0E5SUhKbGNYVnBjbVVvWENJdUwwZE1YQ0lwTzF4dUx5b3FYRzRnS2lCSmRDZHpJR0VnVjJWaVIweFFjbTluY21GdExDQmlkWFFnYUdGeklHTmhZMmhsSUc5bUlIWmhjbWxoWW14bElHeHZZMkYwYVc5dWN5NWNiaUFxTDF4dWRtRnlJRWRNUTJGMFVISnZaM0poYlNBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRjbVZoZEdVZ1lTQnVaWGNnUjB4RFlYUlFjbTluY21GdElHbHVjM1JoYm1ObExseHVJQ0FnSUNBcUwxeHVJQ0FnSUdaMWJtTjBhVzl1SUVkTVEyRjBVSEp2WjNKaGJTaG5iRU5oZEN3Z2NISnZaM0poYlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5ZmMyaGhaR1Z5Y3lBOUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMTloZEhSeWFXSk1iMk5oZEdsdmJrTmhZMmhsSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgxOTFibWxtYjNKdFRHOWpZWFJwYjI1RFlXTm9aU0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5ZmRXNXBabTl5YlZSbGVIUjFjbVZWYm1sMFRXRndJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5MWJtbG1iM0p0ZEdWNGRIVnlaVlZ1YVhSSmJtUmxlQ0E5SURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5c2FXNXJaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZYMmRzUTJGMElEMGdaMnhEWVhRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5d2NtOW5jbUZ0SUQwZ2NISnZaM0poYlR0Y2JpQWdJQ0I5WEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0VkTVEyRjBVSEp2WjNKaGJTNXdjbTkwYjNSNWNHVXNJRndpY0hKdlozSmhiVndpTENCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCSmRITWdiM2R1SUhCeWIyZHlZVzB1WEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWZjSEp2WjNKaGJUdGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnWTI5dVptbG5kWEpoWW14bE9pQjBjblZsWEc0Z0lDQWdmU2s3WEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0VkTVEyRjBVSEp2WjNKaGJTNXdjbTkwYjNSNWNHVXNJRndpY21GM1hDSXNJSHRjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRWwwY3lCdmQyNGdjSEp2WjNKaGJTNGdVMmh2Y25SbGNpQjBhR0Z1SUZ0YlIweERZWFJRY205bmNtRnRMbkJ5YjJkeVlXMWRYUzVjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgxOXdjbTluY21GdE8xeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0JqYjI1bWFXZDFjbUZpYkdVNklIUnlkV1ZjYmlBZ0lDQjlLVHRjYmlBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvUjB4RFlYUlFjbTluY21GdExuQnliM1J2ZEhsd1pTd2dYQ0p6YUdGa1pYSnpYQ0lzSUh0Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUVsMGN5QnphR0ZrWlhKekxseHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDNOb1lXUmxjbk1nUHlCMGFHbHpMbDlmYzJoaFpHVnljeTVqYjI1allYUW9LU0E2SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlZ4dUlDQWdJSDBwTzF4dUlDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoSFRFTmhkRkJ5YjJkeVlXMHVjSEp2ZEc5MGVYQmxMQ0JjSW1selRHbHVhMlZrWENJc0lIdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlGZG9aWFJvWlhJZ2RHaGxJR3hoYzNRZ2JHbHVheUJ2Y0dWeVlYUnBiMjRnZDJGeklITjFZMk5sYzNObWRXd2diM0lnYm05MExseHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDJ4cGJtdGxaRHRjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUIwY25WbFhHNGdJQ0FnZlNrN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1JHbHpjRzl6WlNCMGFHVWdjSEp2WjNKaGJTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCSFRFTmhkRkJ5YjJkeVlXMHVjSEp2ZEc5MGVYQmxMbVJwYzNCdmMyVWdQU0JtZFc1amRHbHZiaUFvWVd4emIwRjBkR0ZqYUdWa0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoaGJITnZRWFIwWVdOb1pXUWdQVDA5SUhadmFXUWdNQ2tnZXlCaGJITnZRWFIwWVdOb1pXUWdQU0JtWVd4elpUc2dmVnh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnhEWVhRdVoydzdYRzRnSUNBZ0lDQWdJR2RzTG1SbGJHVjBaVkJ5YjJkeVlXMG9kR2hwY3k1ZlgzQnliMmR5WVcwcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvWVd4emIwRjBkR0ZqYUdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjMmhoWkdWeWN5QTlJSFJvYVhNdWMyaGhaR1Z5Y3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemFHRmtaWEp6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyaGhaR1Z5Y3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoemFHRmtaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMmhoWkdWeUxtUnBjM0J2YzJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRWFIwWVdOb0lITm9ZV1JsY25NZ1lXNWtJR3hwYm1zZ2RHaHBjeUJ3Y205bmNtRnRMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFZE1RMkYwVUhKdlozSmhiUzV3Y205MGIzUjVjR1V1YkdsdWF5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRjkwYUdseklEMGdkR2hwY3p0Y2JpQWdJQ0FnSUNBZ2RtRnlJSE5vWVdSbGNuTWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gya2dQU0F3T3lCZmFTQThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJRjlwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOb1lXUmxjbk5iWDJsZElEMGdZWEpuZFcxbGJuUnpXMTlwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjJZWElnWjJ3Z1BTQjBhR2x6TGw5ZloyeERZWFF1WjJ3N1hHNGdJQ0FnSUNBZ0lITm9ZV1JsY25NdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2MyaGhaR1Z5S1NCN0lISmxkSFZ5YmlCbmJDNWhkSFJoWTJoVGFHRmtaWElvWDNSb2FYTXVYMTl3Y205bmNtRnRMQ0J6YUdGa1pYSXVjbUYzS1RzZ2ZTazdYRzRnSUNBZ0lDQWdJR2RzTG14cGJtdFFjbTluY21GdEtIUm9hWE11WDE5d2NtOW5jbUZ0S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWDJ4cGJtdGxaQ0E5SUdkc0xtZGxkRkJ5YjJkeVlXMVFZWEpoYldWMFpYSW9kR2hwY3k1ZlgzQnliMmR5WVcwc0lHZHNMa3hKVGt0ZlUxUkJWRlZUS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxsOWZiR2x1YTJWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWjJ3dVoyVjBVSEp2WjNKaGJVbHVabTlNYjJjb2RHaHBjeTVmWDNCeWIyZHlZVzBwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5ZmMyaGhaR1Z5Y3lBOUlITm9ZV1JsY25NdVkyOXVZMkYwS0NrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQmRIUmhZMmdnYzJoaFpHVnljeUJoYm1RZ2JHbHVheUIwYUdseklIQnliMmR5WVcwdVhHNGdJQ0FnSUNvZ1NYUW5jeUJuYjI1dVlTQmlaU0JoYzNsdVkyaHliMjV2ZFhNZ2FXWWdlVzkxSUdoaGRtVWdkR2hsSUV0SVVsOXdZWEpoYkd4bGJGOXphR0ZrWlhKZlkyOXRjR2xzWlNCbGVIUmxibk5wYjI0Z2MzVndjRzl5ZEM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRGQnliMmR5WVcwdWNISnZkRzkwZVhCbExteHBibXRCYzNsdVl5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRjkwYUdseklEMGdkR2hwY3p0Y2JpQWdJQ0FnSUNBZ2RtRnlJSE5vWVdSbGNuTWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gya2dQU0F3T3lCZmFTQThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJRjlwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOb1lXUmxjbk5iWDJsZElEMGdZWEpuZFcxbGJuUnpXMTlwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjJZWElnWjJ4RFlYUWdQU0IwYUdsekxsOWZaMnhEWVhRN1hHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJFTmhkQzVuYkR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1Y0ZEZCaGNtRnNiR1ZzSUQwZ1oyeERZWFF1WjJWMFJYaDBaVzV6YVc5dUtDZExTRkpmY0dGeVlXeHNaV3hmYzJoaFpHVnlYMk52YlhCcGJHVW5LVHRjYmlBZ0lDQWdJQ0FnYzJoaFpHVnljeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h6YUdGa1pYSXBJSHNnY21WMGRYSnVJR2RzTG1GMGRHRmphRk5vWVdSbGNpaGZkR2hwY3k1ZlgzQnliMmR5WVcwc0lITm9ZV1JsY2k1eVlYY3BPeUI5S1R0Y2JpQWdJQ0FnSUNBZ1oyd3ViR2x1YTFCeWIyZHlZVzBvZEdocGN5NWZYM0J5YjJkeVlXMHBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRnS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhWd1pHRjBaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdWNGRGQmhjbUZzYkdWc0lIeDhYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkc0xtZGxkRkJ5YjJkeVlXMVFZWEpoYldWMFpYSW9YM1JvYVhNdVgxOXdjbTluY21GdExDQmxlSFJRWVhKaGJHeGxiQzVEVDAxUVRFVlVTVTlPWDFOVVFWUlZVMTlMU0ZJcElEMDlQU0IwY25WbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUY5MGFHbHpMbDlmYkdsdWEyVmtJRDBnWjJ3dVoyVjBVSEp2WjNKaGJWQmhjbUZ0WlhSbGNpaGZkR2hwY3k1ZlgzQnliMmR5WVcwc0lHZHNMa3hKVGt0ZlUxUkJWRlZUS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGZmRHaHBjeTVmWDJ4cGJtdGxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WcVpXTjBLR2RzTG1kbGRGQnliMmR5WVcxSmJtWnZURzluS0Y5MGFHbHpMbDlmY0hKdlozSmhiU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjkwYUdsekxsOWZjMmhoWkdWeWN5QTlJSE5vWVdSbGNuTXVZMjl1WTJGMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvZFhCa1lYUmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1VvS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJkSFJoWTJnZ1lXNGdZWFIwY21saWRYUmxJSFpoY21saFlteGxMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnVZVzFsSUU1aGJXVWdiMllnZEdobElHRjBkSEpwWW5WMFpTQjJZWEpwWVdKc1pWeHVJQ0FnSUNBcUlFQndZWEpoYlNCaWRXWm1aWElnVm1WeWRHVjRJR0oxWm1abGNpNGdRMkZ1SUdKbElHNTFiR3dzSUhSdklHUnBjMkZpYkdVZ1lYUjBjbWxpZFhSbElHRnljbUY1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSE5wZW1VZ1RuVnRZbVZ5SUc5bUlHTnZiWEJ2Ym1WdWRITWdjR1Z5SUhabGNuUmxlQzRnVFhWemRDQmlaU0F4TENBeUxDQXpJRzl5SURSY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRGQnliMmR5WVcwdWNISnZkRzkwZVhCbExtRjBkSEpwWW5WMFpTQTlJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQmlkV1ptWlhJc0lITnBlbVVzSUdScGRtbHpiM0lzSUhSNWNHVXNJSE4wY21sa1pTd2diMlptYzJWMEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoemFYcGxJRDA5UFNCMmIybGtJREFwSUhzZ2MybDZaU0E5SURFN0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0dScGRtbHpiM0lnUFQwOUlIWnZhV1FnTUNrZ2V5QmthWFpwYzI5eUlEMGdNRHNnZlZ4dUlDQWdJQ0FnSUNCcFppQW9kSGx3WlNBOVBUMGdkbTlwWkNBd0tTQjdJSFI1Y0dVZ1BTQkhURjh4TGtkTUxrWk1UMEZVT3lCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEhKcFpHVWdQVDA5SUhadmFXUWdNQ2tnZXlCemRISnBaR1VnUFNBd095QjlYRzRnSUNBZ0lDQWdJR2xtSUNodlptWnpaWFFnUFQwOUlIWnZhV1FnTUNrZ2V5QnZabVp6WlhRZ1BTQXdPeUI5WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnZG1GeUlHeHZZMkYwYVc5dUlEMGdkR2hwY3k1blpYUkJkSFJ5YVdKTWIyTmhkR2x2YmlodVlXMWxLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHeHZZMkYwYVc5dUlEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaGlkV1ptWlhJZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkc0xtUnBjMkZpYkdWV1pYSjBaWGhCZEhSeWFXSkJjbkpoZVNoc2IyTmhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWjJ3dVltbHVaRUoxWm1abGNpaG5iQzVCVWxKQldWOUNWVVpHUlZJc0lHSjFabVpsY2k1eVlYY3BPMXh1SUNBZ0lDQWdJQ0JuYkM1bGJtRmliR1ZXWlhKMFpYaEJkSFJ5YVdKQmNuSmhlU2hzYjJOaGRHbHZiaWs3WEc0Z0lDQWdJQ0FnSUdkc0xuWmxjblJsZUVGMGRISnBZbEJ2YVc1MFpYSW9iRzlqWVhScGIyNHNJSE5wZW1Vc0lIUjVjR1VzSUdaaGJITmxMQ0J6ZEhKcFpHVXNJRzltWm5ObGRDazdYRzRnSUNBZ0lDQWdJSFpoY2lCbGVIUWdQU0IwYUdsekxsOWZaMnhEWVhRdVoyVjBSWGgwWlc1emFXOXVLQ2RCVGtkTVJWOXBibk4wWVc1alpXUmZZWEp5WVhsekp5azdYRzRnSUNBZ0lDQWdJR2xtSUNobGVIUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjRkQzUyWlhKMFpYaEJkSFJ5YVdKRWFYWnBjMjl5UVU1SFRFVW9iRzlqWVhScGIyNHNJR1JwZG1semIzSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdkc0xtSnBibVJDZFdabVpYSW9aMnd1UVZKU1FWbGZRbFZHUmtWU0xDQnVkV3hzS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoYmlCMWJtbG1iM0p0SUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxSUZObFpTQmhiSE52T2lCYlcwZE1RMkYwVUhKdlozSmhiUzUxYm1sbWIzSnRWbVZqZEc5eVhWMWNiaUFnSUNBZ0tpOWNiaUFnSUNCSFRFTmhkRkJ5YjJkeVlXMHVjSEp2ZEc5MGVYQmxMblZ1YVdadmNtMGdQU0JtZFc1amRHbHZiaUFvYm1GdFpTd2dkSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZG1Gc2RXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gya2dQU0F5T3lCZmFTQThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJRjlwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxXMTlwSUMwZ01sMGdQU0JoY21kMWJXVnVkSE5iWDJsZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFpoY2lCbWRXNWpJRDBnZEdocGMxc25kVzVwWm05eWJTY2dLeUIwZVhCbFhUdGNiaUFnSUNBZ0lDQWdablZ1WXk1allXeHNMbUZ3Y0d4NUtHWjFibU1zSUY5ZmMzQnlaV0ZrUVhKeVlYbHpLRnQwYUdsekxDQnVZVzFsWFN3Z2RtRnNkV1VwS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoYmlCMWJtbG1iM0p0SUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxSUZObFpTQmhiSE52T2lCYlcwZE1RMkYwVUhKdlozSmhiUzUxYm1sbWIzSnRYVjFjYmlBZ0lDQWdLaTljYmlBZ0lDQkhURU5oZEZCeWIyZHlZVzB1Y0hKdmRHOTBlWEJsTG5WdWFXWnZjbTFXWldOMGIzSWdQU0JtZFc1amRHbHZiaUFvYm1GdFpTd2dkSGx3WlN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1oxYm1NZ1BTQjBhR2x6V3lkMWJtbG1iM0p0SnlBcklIUjVjR1ZkTzF4dUlDQWdJQ0FnSUNCbWRXNWpMbU5oYkd3b2RHaHBjeXdnYm1GdFpTd2dkbUZzZFdVcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FYUjBZV05vSUdGdUlIVnVhV1p2Y20weGFTQjJZWEpwWVdKc1pTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCSFRFTmhkRkJ5YjJkeVlXMHVjSEp2ZEc5MGVYQmxMblZ1YVdadmNtMHhhU0E5SUdaMWJtTjBhVzl1SUNodVlXMWxMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnhEWVhRdVoydzdYRzRnSUNBZ0lDQWdJSFpoY2lCc2IyTmhkR2x2YmlBOUlIUm9hWE11WjJWMFZXNXBabTl5YlV4dlkyRjBhVzl1S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0JuYkM1MWJtbG1iM0p0TVdrb2JHOWpZWFJwYjI0c0lIWmhiSFZsS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoYmlCMWJtbG1iM0p0TW1rZ2RtRnlhV0ZpYkdVdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUlFjbTluY21GdExuQnliM1J2ZEhsd1pTNTFibWxtYjNKdE1ta2dQU0JtZFc1amRHbHZiaUFvYm1GdFpTd2dlQ3dnZVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWjJ3Z1BTQjBhR2x6TGw5ZloyeERZWFF1WjJ3N1hHNGdJQ0FnSUNBZ0lIWmhjaUJzYjJOaGRHbHZiaUE5SUhSb2FYTXVaMlYwVlc1cFptOXliVXh2WTJGMGFXOXVLRzVoYldVcE8xeHVJQ0FnSUNBZ0lDQm5iQzUxYm1sbWIzSnRNbWtvYkc5allYUnBiMjRzSUhnc0lIa3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRWFIwWVdOb0lHRnVJSFZ1YVdadmNtMHphU0IyWVhKcFlXSnNaUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQkhURU5oZEZCeWIyZHlZVzB1Y0hKdmRHOTBlWEJsTG5WdWFXWnZjbTB6YVNBOUlHWjFibU4wYVc5dUlDaHVZVzFsTENCNExDQjVMQ0I2S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJFTmhkQzVuYkR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3h2WTJGMGFXOXVJRDBnZEdocGN5NW5aWFJWYm1sbWIzSnRURzlqWVhScGIyNG9ibUZ0WlNrN1hHNGdJQ0FnSUNBZ0lHZHNMblZ1YVdadmNtMHphU2hzYjJOaGRHbHZiaXdnZUN3Z2VTd2dlaWs3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCZEhSaFkyZ2dZVzRnZFc1cFptOXliVFJwSUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFVISnZaM0poYlM1d2NtOTBiM1I1Y0dVdWRXNXBabTl5YlRScElEMGdablZ1WTNScGIyNGdLRzVoYldVc0lIZ3NJSGtzSUhvc0lIY3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHZHNJRDBnZEdocGN5NWZYMmRzUTJGMExtZHNPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JHOWpZWFJwYjI0Z1BTQjBhR2x6TG1kbGRGVnVhV1p2Y20xTWIyTmhkR2x2YmlodVlXMWxLVHRjYmlBZ0lDQWdJQ0FnWjJ3dWRXNXBabTl5YlRScEtHeHZZMkYwYVc5dUxDQjRMQ0I1TENCNkxDQjNLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUYwZEdGamFDQmhiaUIxYm1sbWIzSnRNV2wySUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFVISnZaM0poYlM1d2NtOTBiM1I1Y0dVdWRXNXBabTl5YlRGcGRpQTlJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQmhjbkpoZVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWjJ3Z1BTQjBhR2x6TGw5ZloyeERZWFF1WjJ3N1hHNGdJQ0FnSUNBZ0lIWmhjaUJzYjJOaGRHbHZiaUE5SUhSb2FYTXVaMlYwVlc1cFptOXliVXh2WTJGMGFXOXVLRzVoYldVcE8xeHVJQ0FnSUNBZ0lDQm5iQzUxYm1sbWIzSnRNV2wyS0d4dlkyRjBhVzl1TENCaGNuSmhlU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCZEhSaFkyZ2dZVzRnZFc1cFptOXliVEpwZGlCMllYSnBZV0pzWlM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRGQnliMmR5WVcwdWNISnZkRzkwZVhCbExuVnVhV1p2Y20weWFYWWdQU0JtZFc1amRHbHZiaUFvYm1GdFpTd2dZWEp5WVhrcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdkc0lEMGdkR2hwY3k1ZlgyZHNRMkYwTG1kc08xeHVJQ0FnSUNBZ0lDQjJZWElnYkc5allYUnBiMjRnUFNCMGFHbHpMbWRsZEZWdWFXWnZjbTFNYjJOaGRHbHZiaWh1WVcxbEtUdGNiaUFnSUNBZ0lDQWdaMnd1ZFc1cFptOXliVEpwZGloc2IyTmhkR2x2Yml3Z1lYSnlZWGtwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUVhSMFlXTm9JR0Z1SUhWdWFXWnZjbTB6YVhZZ2RtRnlhV0ZpYkdVdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUlFjbTluY21GdExuQnliM1J2ZEhsd1pTNTFibWxtYjNKdE0ybDJJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXNJR0Z5Y21GNUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCbmJDQTlJSFJvYVhNdVgxOW5iRU5oZEM1bmJEdGNiaUFnSUNBZ0lDQWdkbUZ5SUd4dlkyRjBhVzl1SUQwZ2RHaHBjeTVuWlhSVmJtbG1iM0p0VEc5allYUnBiMjRvYm1GdFpTazdYRzRnSUNBZ0lDQWdJR2RzTG5WdWFXWnZjbTB6YVhZb2JHOWpZWFJwYjI0c0lHRnljbUY1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoYmlCMWJtbG1iM0p0TkdsMklIWmhjbWxoWW14bExseHVJQ0FnSUNBcUwxeHVJQ0FnSUVkTVEyRjBVSEp2WjNKaGJTNXdjbTkwYjNSNWNHVXVkVzVwWm05eWJUUnBkaUE5SUdaMWJtTjBhVzl1SUNodVlXMWxMQ0JoY25KaGVTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnhEWVhRdVoydzdYRzRnSUNBZ0lDQWdJSFpoY2lCc2IyTmhkR2x2YmlBOUlIUm9hWE11WjJWMFZXNXBabTl5YlV4dlkyRjBhVzl1S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0JuYkM1MWJtbG1iM0p0TkdsMktHeHZZMkYwYVc5dUxDQmhjbkpoZVNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQmRIUmhZMmdnWVc0Z2RXNXBabTl5YlRGbUlIWmhjbWxoWW14bExseHVJQ0FnSUNBcUwxeHVJQ0FnSUVkTVEyRjBVSEp2WjNKaGJTNXdjbTkwYjNSNWNHVXVkVzVwWm05eWJURm1JRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXNJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCbmJDQTlJSFJvYVhNdVgxOW5iRU5oZEM1bmJEdGNiaUFnSUNBZ0lDQWdkbUZ5SUd4dlkyRjBhVzl1SUQwZ2RHaHBjeTVuWlhSVmJtbG1iM0p0VEc5allYUnBiMjRvYm1GdFpTazdYRzRnSUNBZ0lDQWdJR2RzTG5WdWFXWnZjbTB4Wmloc2IyTmhkR2x2Yml3Z2RtRnNkV1VwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUVhSMFlXTm9JR0Z1SUhWdWFXWnZjbTB5WmlCMllYSnBZV0pzWlM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRGQnliMmR5WVcwdWNISnZkRzkwZVhCbExuVnVhV1p2Y20weVppQTlJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQjRMQ0I1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJFTmhkQzVuYkR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3h2WTJGMGFXOXVJRDBnZEdocGN5NW5aWFJWYm1sbWIzSnRURzlqWVhScGIyNG9ibUZ0WlNrN1hHNGdJQ0FnSUNBZ0lHZHNMblZ1YVdadmNtMHlaaWhzYjJOaGRHbHZiaXdnZUN3Z2VTazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJkSFJoWTJnZ1lXNGdkVzVwWm05eWJUTm1JSFpoY21saFlteGxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFZE1RMkYwVUhKdlozSmhiUzV3Y205MGIzUjVjR1V1ZFc1cFptOXliVE5tSUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VzSUhnc0lIa3NJSG9wSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2RzSUQwZ2RHaHBjeTVmWDJkc1EyRjBMbWRzTzF4dUlDQWdJQ0FnSUNCMllYSWdiRzlqWVhScGIyNGdQU0IwYUdsekxtZGxkRlZ1YVdadmNtMU1iMk5oZEdsdmJpaHVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ1oyd3VkVzVwWm05eWJUTm1LR3h2WTJGMGFXOXVMQ0I0TENCNUxDQjZLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUYwZEdGamFDQmhiaUIxYm1sbWIzSnROR1lnZG1GeWFXRmliR1V1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhSUWNtOW5jbUZ0TG5CeWIzUnZkSGx3WlM1MWJtbG1iM0p0TkdZZ1BTQm1kVzVqZEdsdmJpQW9ibUZ0WlN3Z2VDd2dlU3dnZWl3Z2R5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnhEWVhRdVoydzdYRzRnSUNBZ0lDQWdJSFpoY2lCc2IyTmhkR2x2YmlBOUlIUm9hWE11WjJWMFZXNXBabTl5YlV4dlkyRjBhVzl1S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0JuYkM1MWJtbG1iM0p0TkdZb2JHOWpZWFJwYjI0c0lIZ3NJSGtzSUhvc0lIY3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRWFIwWVdOb0lHRnVJSFZ1YVdadmNtMHhabllnZG1GeWFXRmliR1V1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhSUWNtOW5jbUZ0TG5CeWIzUnZkSGx3WlM1MWJtbG1iM0p0TVdaMklEMGdablZ1WTNScGIyNGdLRzVoYldVc0lHRnljbUY1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJFTmhkQzVuYkR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3h2WTJGMGFXOXVJRDBnZEdocGN5NW5aWFJWYm1sbWIzSnRURzlqWVhScGIyNG9ibUZ0WlNrN1hHNGdJQ0FnSUNBZ0lHZHNMblZ1YVdadmNtMHhabllvYkc5allYUnBiMjRzSUdGeWNtRjVLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUYwZEdGamFDQmhiaUIxYm1sbWIzSnRNbVoySUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFVISnZaM0poYlM1d2NtOTBiM1I1Y0dVdWRXNXBabTl5YlRKbWRpQTlJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQmhjbkpoZVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWjJ3Z1BTQjBhR2x6TGw5ZloyeERZWFF1WjJ3N1hHNGdJQ0FnSUNBZ0lIWmhjaUJzYjJOaGRHbHZiaUE5SUhSb2FYTXVaMlYwVlc1cFptOXliVXh2WTJGMGFXOXVLRzVoYldVcE8xeHVJQ0FnSUNBZ0lDQm5iQzUxYm1sbWIzSnRNbVoyS0d4dlkyRjBhVzl1TENCaGNuSmhlU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCZEhSaFkyZ2dZVzRnZFc1cFptOXliVE5tZGlCMllYSnBZV0pzWlM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRGQnliMmR5WVcwdWNISnZkRzkwZVhCbExuVnVhV1p2Y20welpuWWdQU0JtZFc1amRHbHZiaUFvYm1GdFpTd2dZWEp5WVhrcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdkc0lEMGdkR2hwY3k1ZlgyZHNRMkYwTG1kc08xeHVJQ0FnSUNBZ0lDQjJZWElnYkc5allYUnBiMjRnUFNCMGFHbHpMbWRsZEZWdWFXWnZjbTFNYjJOaGRHbHZiaWh1WVcxbEtUdGNiaUFnSUNBZ0lDQWdaMnd1ZFc1cFptOXliVE5tZGloc2IyTmhkR2x2Yml3Z1lYSnlZWGtwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUVhSMFlXTm9JR0Z1SUhWdWFXWnZjbTAwWm5ZZ2RtRnlhV0ZpYkdVdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUlFjbTluY21GdExuQnliM1J2ZEhsd1pTNTFibWxtYjNKdE5HWjJJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXNJR0Z5Y21GNUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCbmJDQTlJSFJvYVhNdVgxOW5iRU5oZEM1bmJEdGNiaUFnSUNBZ0lDQWdkbUZ5SUd4dlkyRjBhVzl1SUQwZ2RHaHBjeTVuWlhSVmJtbG1iM0p0VEc5allYUnBiMjRvYm1GdFpTazdYRzRnSUNBZ0lDQWdJR2RzTG5WdWFXWnZjbTAwWm5Zb2JHOWpZWFJwYjI0c0lHRnljbUY1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoYmlCMWJtbG1iM0p0VFdGMGNtbDRNbVoySUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFVISnZaM0poYlM1d2NtOTBiM1I1Y0dVdWRXNXBabTl5YlUxaGRISnBlREptZGlBOUlHWjFibU4wYVc5dUlDaHVZVzFsTENCaGNuSmhlU3dnZEhKaGJuTndiM05sS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMzQnZjMlVnUFQwOUlIWnZhV1FnTUNrZ2V5QjBjbUZ1YzNCdmMyVWdQU0JtWVd4elpUc2dmVnh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnhEWVhRdVoydzdYRzRnSUNBZ0lDQWdJSFpoY2lCc2IyTmhkR2x2YmlBOUlIUm9hWE11WjJWMFZXNXBabTl5YlV4dlkyRjBhVzl1S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0JuYkM1MWJtbG1iM0p0VFdGMGNtbDRNbVoyS0d4dlkyRjBhVzl1TENCMGNtRnVjM0J2YzJVc0lHRnljbUY1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoYmlCMWJtbG1iM0p0VFdGMGNtbDRNMloySUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFVISnZaM0poYlM1d2NtOTBiM1I1Y0dVdWRXNXBabTl5YlUxaGRISnBlRE5tZGlBOUlHWjFibU4wYVc5dUlDaHVZVzFsTENCaGNuSmhlU3dnZEhKaGJuTndiM05sS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMzQnZjMlVnUFQwOUlIWnZhV1FnTUNrZ2V5QjBjbUZ1YzNCdmMyVWdQU0JtWVd4elpUc2dmVnh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnhEWVhRdVoydzdYRzRnSUNBZ0lDQWdJSFpoY2lCc2IyTmhkR2x2YmlBOUlIUm9hWE11WjJWMFZXNXBabTl5YlV4dlkyRjBhVzl1S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0JuYkM1MWJtbG1iM0p0VFdGMGNtbDRNMloyS0d4dlkyRjBhVzl1TENCMGNtRnVjM0J2YzJVc0lHRnljbUY1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoYmlCMWJtbG1iM0p0VFdGMGNtbDROR1oySUhaaGNtbGhZbXhsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFVISnZaM0poYlM1d2NtOTBiM1I1Y0dVdWRXNXBabTl5YlUxaGRISnBlRFJtZGlBOUlHWjFibU4wYVc5dUlDaHVZVzFsTENCaGNuSmhlU3dnZEhKaGJuTndiM05sS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMzQnZjMlVnUFQwOUlIWnZhV1FnTUNrZ2V5QjBjbUZ1YzNCdmMyVWdQU0JtWVd4elpUc2dmVnh1SUNBZ0lDQWdJQ0IyWVhJZ1oyd2dQU0IwYUdsekxsOWZaMnhEWVhRdVoydzdYRzRnSUNBZ0lDQWdJSFpoY2lCc2IyTmhkR2x2YmlBOUlIUm9hWE11WjJWMFZXNXBabTl5YlV4dlkyRjBhVzl1S0c1aGJXVXBPMXh1SUNBZ0lDQWdJQ0JuYkM1MWJtbG1iM0p0VFdGMGNtbDROR1oyS0d4dlkyRjBhVzl1TENCMGNtRnVjM0J2YzJVc0lHRnljbUY1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGMGRHRmphQ0JoSUdCellXMXdiR1Z5TWtSZ0lIUjVjR1VnZFc1cFptOXliU0IwWlhoMGRYSmxMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnVZVzFsSUU1aGJXVWdiMllnZEdobElIVnVhV1p2Y20wZ2RHVjRkSFZ5WlZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0IwWlhoMGRYSmxJRlJsZUhSMWNtVWdiMkpxWldOMFhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUlFjbTluY21GdExuQnliM1J2ZEhsd1pTNTFibWxtYjNKdFZHVjRkSFZ5WlNBOUlHWjFibU4wYVc5dUlDaHVZVzFsTENCMFpYaDBkWEpsS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJmWVR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2RzSUQwZ2RHaHBjeTVmWDJkc1EyRjBMbWRzTzF4dUlDQWdJQ0FnSUNCMllYSWdiRzlqWVhScGIyNGdQU0IwYUdsekxtZGxkRlZ1YVdadmNtMU1iMk5oZEdsdmJpaHVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFZ1YVhRZ1BTQjBhR2x6TG1kbGRGVnVhV1p2Y20xVVpYaDBkWEpsVlc1cGRDaHVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ1oyd3VZV04wYVhabFZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRk1DQXJJSFZ1YVhRcE8xeHVJQ0FnSUNBZ0lDQm5iQzVpYVc1a1ZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRlh6SkVMQ0FvS0Y5aElEMGdkR1Y0ZEhWeVpTa2dQVDA5SUc1MWJHd2dmSHdnWDJFZ1BUMDlJSFp2YVdRZ01DQS9JSFp2YVdRZ01DQTZJRjloTG5KaGR5a2dmSHdnYm5Wc2JDazdYRzRnSUNBZ0lDQWdJR2RzTG5WdWFXWnZjbTB4YVNoc2IyTmhkR2x2Yml3Z2RXNXBkQ2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCZEhSaFkyZ2dZU0JnYzJGdGNHeGxja04xWW1WZ0lIUjVjR1VnZFc1cFptOXliU0IwWlhoMGRYSmxMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnVZVzFsSUU1aGJXVWdiMllnZEdobElIVnVhV1p2Y20wZ2RHVjRkSFZ5WlZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0IwWlhoMGRYSmxJRlJsZUhSMWNtVWdiMkpxWldOMFhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUlFjbTluY21GdExuQnliM1J2ZEhsd1pTNTFibWxtYjNKdFEzVmlaVzFoY0NBOUlHWjFibU4wYVc5dUlDaHVZVzFsTENCMFpYaDBkWEpsS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJmWVR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2RzSUQwZ2RHaHBjeTVmWDJkc1EyRjBMbWRzTzF4dUlDQWdJQ0FnSUNCMllYSWdiRzlqWVhScGIyNGdQU0IwYUdsekxtZGxkRlZ1YVdadmNtMU1iMk5oZEdsdmJpaHVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFZ1YVhRZ1BTQjBhR2x6TG1kbGRGVnVhV1p2Y20xVVpYaDBkWEpsVlc1cGRDaHVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ1oyd3VZV04wYVhabFZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRk1DQXJJSFZ1YVhRcE8xeHVJQ0FnSUNBZ0lDQm5iQzVpYVc1a1ZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRlgwTlZRa1ZmVFVGUUxDQW9LRjloSUQwZ2RHVjRkSFZ5WlNrZ1BUMDlJRzUxYkd3Z2ZId2dYMkVnUFQwOUlIWnZhV1FnTUNBL0lIWnZhV1FnTUNBNklGOWhMbkpoZHlrZ2ZId2diblZzYkNrN1hHNGdJQ0FnSUNBZ0lHZHNMblZ1YVdadmNtMHhhU2hzYjJOaGRHbHZiaXdnZFc1cGRDazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFJ5YVdWMlpTQmhkSFJ5YVdKMWRHVWdiRzlqWVhScGIyNHVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1IweERZWFJRY205bmNtRnRMbkJ5YjNSdmRIbHdaUzVuWlhSQmRIUnlhV0pNYjJOaGRHbHZiaUE5SUdaMWJtTjBhVzl1SUNodVlXMWxLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WDE5aGRIUnlhV0pNYjJOaGRHbHZia05oWTJobFcyNWhiV1ZkSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWVhSMGNtbGlURzlqWVhScGIyNURZV05vWlZ0dVlXMWxYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJzYjJOaGRHbHZiaUE5SUdkc0xtZGxkRUYwZEhKcFlreHZZMkYwYVc5dUtIUm9hWE11WDE5d2NtOW5jbUZ0TENCdVlXMWxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR2xtSUNnZ2JHOWpZWFJwYjI0Z1BUMDlJQzB4SUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z0lDQjBhR2x6TG1kc1EyRjBMbk53YVhRb0lDZEhURU5oZEZCeWIyZHlZVzB1WjJWMFFYUjBjbWxpVEc5allYUnBiMjQ2SUVOdmRXeGtJRzV2ZENCeVpYUnlhV1YyWlNCaGRIUnlhV0oxZEdVZ2JHOWpZWFJwYjI0bklDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QWdJSEpsZEhWeWJpQXRNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDE5aGRIUnlhV0pNYjJOaGRHbHZia05oWTJobFcyNWhiV1ZkSUQwZ2JHOWpZWFJwYjI0N1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiRzlqWVhScGIyNDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhKcFpYWmxJSFZ1YVdadmNtMGdiRzlqWVhScGIyNHVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1IweERZWFJRY205bmNtRnRMbkJ5YjNSdmRIbHdaUzVuWlhSVmJtbG1iM0p0VEc5allYUnBiMjRnUFNCbWRXNWpkR2x2YmlBb2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdaMndnUFNCMGFHbHpMbDlmWjJ4RFlYUXVaMnc3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5ZmRXNXBabTl5YlV4dlkyRjBhVzl1UTJGamFHVmJibUZ0WlYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDE5MWJtbG1iM0p0VEc5allYUnBiMjVEWVdOb1pWdHVZVzFsWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCc2IyTmhkR2x2YmlBOUlHZHNMbWRsZEZWdWFXWnZjbTFNYjJOaGRHbHZiaWgwYUdsekxsOWZjSEp2WjNKaGJTd2dibUZ0WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCcFppQW9JR3h2WTJGMGFXOXVJRDA5UFNCdWRXeHNJQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnSUNCMGFHbHpMbWRzUTJGMExuTndhWFFvSUNkSFRFTmhkRkJ5YjJkeVlXMHVaMlYwVlc1cFptOXliVXh2WTJGMGFXOXVPaUJEYjNWc1pDQnViM1FnY21WMGNtbGxkbVVnZFc1cFptOXliU0JzYjJOaGRHbHZiaWNnS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUNBZ2NtVjBkWEp1SUd4dlkyRjBhVzl1TzF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZlgzVnVhV1p2Y20xTWIyTmhkR2x2YmtOaFkyaGxXMjVoYldWZElEMGdiRzlqWVhScGIyNDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYkc5allYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRISnBaWFpsSUc5eUlHTnlaV0YwWlNCaElIUmxlSFIxY21VZ2RXNXBkQ0IwYUdGMElHTnZjbkpsYzNCdmJtUnpJSFJ2SUdkcGRtVnVJRzVoYldVdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUlFjbTluY21GdExuQnliM1J2ZEhsd1pTNW5aWFJWYm1sbWIzSnRWR1Y0ZEhWeVpWVnVhWFFnUFNCbWRXNWpkR2x2YmlBb2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1ZlgzVnVhV1p2Y20xVVpYaDBkWEpsVlc1cGRFMWhjRnR1WVcxbFhTQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOWZkVzVwWm05eWJWUmxlSFIxY21WVmJtbDBUV0Z3VzI1aGJXVmRJRDBnZEdocGN5NWZYM1Z1YVdadmNtMTBaWGgwZFhKbFZXNXBkRWx1WkdWNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZYM1Z1YVdadmNtMTBaWGgwZFhKbFZXNXBkRWx1WkdWNEt5czdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgxOTFibWxtYjNKdFZHVjRkSFZ5WlZWdWFYUk5ZWEJiYm1GdFpWMDdYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnUjB4RFlYUlFjbTluY21GdE8xeHVmU2dwS1R0Y2JtVjRjRzl5ZEhNdVIweERZWFJRY205bmNtRnRJRDBnUjB4RFlYUlFjbTluY21GdE8xeHVJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1MllYSWdSMHhmTVNBOUlISmxjWFZwY21Vb1hDSXVMMGRNWENJcE8xeHVMeW9xWEc0Z0tpQkpkQ2R6SUdFZ1YyVmlSMHhTWlc1a1pYSmlkV1ptWlhJdVhHNGdLaTljYm5aaGNpQkhURU5oZEZKbGJtUmxjbUoxWm1abGNpQTlJQzhxS2lCQVkyeGhjM01nS2k4Z0tHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEY21WaGRHVWdZU0J1WlhjZ1IweERZWFJVWlhoMGRYSmxJR2x1YzNSaGJtTmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lHWjFibU4wYVc5dUlFZE1RMkYwVW1WdVpHVnlZblZtWm1WeUtHZHNRMkYwTENCeVpXNWtaWEppZFdabVpYSXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZYM2RwWkhSb0lEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZYMmhsYVdkb2RDQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMTluYkVOaGRDQTlJR2RzUTJGME8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5ZmNtVnVaR1Z5WW5WbVptVnlJRDBnY21WdVpHVnlZblZtWm1WeU8xeHVJQ0FnSUgxY2JpQWdJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1IweERZWFJTWlc1a1pYSmlkV1ptWlhJdWNISnZkRzkwZVhCbExDQmNJbkpsYm1SbGNtSjFabVpsY2x3aUxDQjdYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQkpkSE1nYjNkdUlISmxibVJsY21KMVptWmxjaTVjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgxOXlaVzVrWlhKaWRXWm1aWEk3WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lHTnZibVpwWjNWeVlXSnNaVG9nZEhKMVpWeHVJQ0FnSUgwcE8xeHVJQ0FnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaEhURU5oZEZKbGJtUmxjbUoxWm1abGNpNXdjbTkwYjNSNWNHVXNJRndpY21GM1hDSXNJSHRjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRWwwY3lCdmQyNGdjbVZ1WkdWeVluVm1abVZ5TGlCVGFHOXlkR1Z5SUhSb1lXNGdXMXRIVEVOaGRGSmxibVJsY2tKMVptWmxjaTV5Wlc1a1pYSmlkV1ptWlhKZFhTNWNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDE5eVpXNWtaWEppZFdabVpYSTdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlZ4dUlDQWdJSDBwTzF4dUlDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoSFRFTmhkRkpsYm1SbGNtSjFabVpsY2k1d2NtOTBiM1I1Y0dVc0lGd2lkMmxrZEdoY0lpd2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dTWFJ6SUhkcFpIUm9MbHh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZlgzZHBaSFJvTzF4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQmpiMjVtYVdkMWNtRmliR1U2SUhSeWRXVmNiaUFnSUNCOUtUdGNiaUFnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29SMHhEWVhSU1pXNWtaWEppZFdabVpYSXVjSEp2ZEc5MGVYQmxMQ0JjSW1obGFXZG9kRndpTENCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCSmRITWdhR1ZwWjJoMExseHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDJobGFXZG9kRHRjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUIwY25WbFhHNGdJQ0FnZlNrN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1JHbHpjRzl6WlNCMGFHVWdjbVZ1WkdWeVluVm1abVZ5TGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFVtVnVaR1Z5WW5WbVptVnlMbkJ5YjNSdmRIbHdaUzVrYVhOd2IzTmxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5ZloyeERZWFF1WjJ3dVpHVnNaWFJsVW1WdVpHVnlZblZtWm1WeUtIUm9hWE11WDE5eVpXNWtaWEppZFdabVpYSXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTVzVwZEdsaGJHbDZaU0IwYUdseklISmxibVJsY21KMVptWmxjaTVjYmlBZ0lDQWdLaUJKWmlCZ1ptOXliV0YwWUNCcGN5QnViM1FnWjJsMlpXNHNJR2wwSUhkcGJHd2dZbVVnYVc1cGRHbGhiR2w2WldRZ1lYTWdZRVJGVUZSSVgwTlBUVkJQVGtWT1ZERTJZQ0F1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhSU1pXNWtaWEppZFdabVpYSXVjSEp2ZEc5MGVYQmxMbWx1YVhRZ1BTQm1kVzVqZEdsdmJpQW9kMmxrZEdnc0lHaGxhV2RvZEN3Z1ptOXliV0YwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2htYjNKdFlYUWdQVDA5SUhadmFXUWdNQ2tnZXlCbWIzSnRZWFFnUFNCSFRGOHhMa2RNTGtSRlVGUklYME5QVFZCUFRrVk9WREUyT3lCOVhHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJFTmhkQzVuYkR0Y2JpQWdJQ0FnSUNBZ1oyd3VZbWx1WkZKbGJtUmxjbUoxWm1abGNpaG5iQzVTUlU1RVJWSkNWVVpHUlZJc0lIUm9hWE11WDE5eVpXNWtaWEppZFdabVpYSXBPMXh1SUNBZ0lDQWdJQ0JuYkM1eVpXNWtaWEppZFdabVpYSlRkRzl5WVdkbEtHZHNMbEpGVGtSRlVrSlZSa1pGVWl3Z1ptOXliV0YwTENCM2FXUjBhQ3dnYUdWcFoyaDBLVHRjYmlBZ0lDQWdJQ0FnWjJ3dVltbHVaRkpsYm1SbGNtSjFabVpsY2lobmJDNVNSVTVFUlZKQ1ZVWkdSVklzSUc1MWJHd3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWZkMmxrZEdnZ1BTQjNhV1IwYUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWDJobGFXZG9kQ0E5SUdobGFXZG9kRHRjYmlBZ0lDQjlPMXh1SUNBZ0lISmxkSFZ5YmlCSFRFTmhkRkpsYm1SbGNtSjFabVpsY2p0Y2JuMG9LU2s3WEc1bGVIQnZjblJ6TGtkTVEyRjBVbVZ1WkdWeVluVm1abVZ5SUQwZ1IweERZWFJTWlc1a1pYSmlkV1ptWlhJN1hHNGlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCY0lsOWZaWE5OYjJSMWJHVmNJaXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmk4cUtseHVJQ29nU1hRbmN5QmhJRmRsWWtkTVUyaGhaR1Z5TGx4dUlDb3ZYRzUyWVhJZ1IweERZWFJUYUdGa1pYSWdQU0F2S2lvZ1FHTnNZWE56SUNvdklDaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTNKbFlYUmxJR0VnYm1WM0lFZE1RMkYwVTJoaFpHVnlJR2x1YzNSaGJtTmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lHWjFibU4wYVc5dUlFZE1RMkYwVTJoaFpHVnlLR2RzUTJGMExDQnphR0ZrWlhJcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlgyTnZiWEJwYkdWa0lEMGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5bmJFTmhkQ0E5SUdkc1EyRjBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWZjMmhoWkdWeUlEMGdjMmhoWkdWeU8xeHVJQ0FnSUgxY2JpQWdJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1IweERZWFJUYUdGa1pYSXVjSEp2ZEc5MGVYQmxMQ0JjSW5Ob1lXUmxjbHdpTENCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCSmRITWdiM2R1SUhOb1lXUmxjaTVjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgxOXphR0ZrWlhJN1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaVnh1SUNBZ0lIMHBPMXh1SUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hIVEVOaGRGTm9ZV1JsY2k1d2NtOTBiM1I1Y0dVc0lGd2ljbUYzWENJc0lIdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFbDBjeUJ2ZDI0Z2MyaGhaR1Z5TGlCVGFHOXlkR1Z5SUhSb1lXNGdXMXRIVEVOaGRGTm9ZV1JsY2k1emFHRmtaWEpkWFM1Y2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMTl6YUdGa1pYSTdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlZ4dUlDQWdJSDBwTzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVScGMzQnZjMlVnZEdobElITm9ZV1JsY2k1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRGTm9ZV1JsY2k1d2NtOTBiM1I1Y0dVdVpHbHpjRzl6WlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZYMmRzUTJGMExtZHNMbVJsYkdWMFpWTm9ZV1JsY2loMGFHbHpMbDlmYzJoaFpHVnlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJpQjNhR1YwYUdWeUlIUm9aU0JzWVhOMElHTnZiWEJwYkdGMGFXOXVJSGRoY3lCemRXTmpaWE56Wm5Wc0lHOXlJRzV2ZEM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JIVEVOaGRGTm9ZV1JsY2k1d2NtOTBiM1I1Y0dVdWFYTkRiMjF3YVd4bFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMTlqYjIxd2FXeGxaRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU52YlhCcGJHVWdkR2hsSUhOb1lXUmxjaTVjYmlBZ0lDQWdLaTljYmlBZ0lDQkhURU5oZEZOb1lXUmxjaTV3Y205MGIzUjVjR1V1WTI5dGNHbHNaU0E5SUdaMWJtTjBhVzl1SUNoamIyUmxLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnWjJ3dWMyaGhaR1Z5VTI5MWNtTmxLSFJvYVhNdVgxOXphR0ZrWlhJc0lHTnZaR1VwTzF4dUlDQWdJQ0FnSUNCbmJDNWpiMjF3YVd4bFUyaGhaR1Z5S0hSb2FYTXVYMTl6YUdGa1pYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWZZMjl0Y0dsc1pXUWdQU0JuYkM1blpYUlRhR0ZrWlhKUVlYSmhiV1YwWlhJb2RHaHBjeTVmWDNOb1lXUmxjaXdnWjJ3dVEwOU5VRWxNUlY5VFZFRlVWVk1wTzF4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdVgxOWpiMjF3YVd4bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dkc0xtZGxkRk5vWVdSbGNrbHVabTlNYjJjb2RHaHBjeTVmWDNOb1lXUmxjaWtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdJQ0J5WlhSMWNtNGdSMHhEWVhSVGFHRmtaWEk3WEc1OUtDa3BPMXh1Wlhod2IzSjBjeTVIVEVOaGRGTm9ZV1JsY2lBOUlFZE1RMkYwVTJoaFpHVnlPMXh1SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnUjB4Zk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDBkTVhDSXBPMXh1ZG1GeUlIcGxjbTlVWlhoMGRYSmxRWEp5WVhrZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNoYk1Dd2dNQ3dnTUN3Z01GMHBPMXh1THlvcVhHNGdLaUJKZENkeklHRWdWMlZpUjB4VVpYaDBkWEpsTGx4dUlDb3ZYRzUyWVhJZ1IweERZWFJVWlhoMGRYSmxJRDBnTHlvcUlFQmpiR0Z6Y3lBcUx5QW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOeVpXRjBaU0JoSUc1bGR5QkhURU5oZEZSbGVIUjFjbVVnYVc1emRHRnVZMlV1WEc0Z0lDQWdJQ292WEc0Z0lDQWdablZ1WTNScGIyNGdSMHhEWVhSVVpYaDBkWEpsS0dkc1EyRjBMQ0IwWlhoMGRYSmxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMTkzYVdSMGFDQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMTlvWldsbmFIUWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlmWjJ4RFlYUWdQU0JuYkVOaGREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlgzUmxlSFIxY21VZ1BTQjBaWGgwZFhKbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SbGVIUjFjbVZHYVd4MFpYSW9SMHhmTVM1SFRDNU1TVTVGUVZJcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SbGVIUjFjbVZYY21Gd0tFZE1YekV1UjB3dVEweEJUVkJmVkU5ZlJVUkhSU2s3WEc0Z0lDQWdmVnh1SUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hIVEVOaGRGUmxlSFIxY21VdWNISnZkRzkwZVhCbExDQmNJblJsZUhSMWNtVmNJaXdnZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nU1hSeklHOTNiaUIwWlhoMGRYSmxMbHh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZlgzUmxlSFIxY21VN1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaVnh1SUNBZ0lIMHBPMXh1SUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hIVEVOaGRGUmxlSFIxY21VdWNISnZkRzkwZVhCbExDQmNJbkpoZDF3aUxDQjdYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQkpkSE1nYjNkdUlIUmxlSFIxY21VdUlGTm9iM0owWlhJZ2RHaGhiaUJiVzBkTVEyRjBWR1Y0ZEhWeVpTNTBaWGgwZFhKbFpGMWRYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZmRHVjRkSFZ5WlR0Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdaVzUxYldWeVlXSnNaVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxYRzRnSUNBZ2ZTazdYRzRnSUNBZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRWRNUTJGMFZHVjRkSFZ5WlM1d2NtOTBiM1I1Y0dVc0lGd2lkMmxrZEdoY0lpd2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dTWFJ6SUhkcFpIUm9MbHh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZlgzZHBaSFJvTzF4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQmpiMjVtYVdkMWNtRmliR1U2SUhSeWRXVmNiaUFnSUNCOUtUdGNiaUFnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29SMHhEWVhSVVpYaDBkWEpsTG5CeWIzUnZkSGx3WlN3Z1hDSm9aV2xuYUhSY0lpd2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dTWFJ6SUdobGFXZG9kQzVjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgxOW9aV2xuYUhRN1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaVnh1SUNBZ0lIMHBPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVJwYzNCdmMyVWdkR2hsSUhSbGVIUjFjbVV1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhSVVpYaDBkWEpsTG5CeWIzUnZkSGx3WlM1a2FYTndiM05sSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWZaMnhEWVhRdVoyd3VaR1ZzWlhSbFZHVjRkSFZ5WlNoMGFHbHpMbDlmZEdWNGRIVnlaU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQkhURU5oZEZSbGVIUjFjbVV1Y0hKdmRHOTBlWEJsTG5SbGVIUjFjbVZHYVd4MFpYSWdQU0JtZFc1amRHbHZiaUFvWm1sc2RHVnlUV0ZuTENCbWFXeDBaWEpOYVc0cElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dacGJIUmxjazFoWnlBOVBUMGdkbTlwWkNBd0tTQjdJR1pwYkhSbGNrMWhaeUE5SUVkTVh6RXVSMHd1VGtWQlVrVlRWRHNnZlZ4dUlDQWdJQ0FnSUNCcFppQW9abWxzZEdWeVRXbHVJRDA5UFNCMmIybGtJREFwSUhzZ1ptbHNkR1Z5VFdsdUlEMGdabWxzZEdWeVRXRm5PeUI5WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnWjJ3dVltbHVaRlJsZUhSMWNtVW9aMnd1VkVWWVZGVlNSVjh5UkN3Z2RHaHBjeTVmWDNSbGVIUjFjbVVwTzF4dUlDQWdJQ0FnSUNCbmJDNTBaWGhRWVhKaGJXVjBaWEpwS0dkc0xsUkZXRlJWVWtWZk1rUXNJR2RzTGxSRldGUlZVa1ZmVFVGSFgwWkpURlJGVWl3Z1ptbHNkR1Z5VFdGbktUdGNiaUFnSUNBZ0lDQWdaMnd1ZEdWNFVHRnlZVzFsZEdWeWFTaG5iQzVVUlZoVVZWSkZYekpFTENCbmJDNVVSVmhVVlZKRlgwMUpUbDlHU1V4VVJWSXNJR1pwYkhSbGNrMXBiaWs3WEc0Z0lDQWdJQ0FnSUdkc0xtSnBibVJVWlhoMGRYSmxLR2RzTGxSRldGUlZVa1ZmTWtRc0lHNTFiR3dwTzF4dUlDQWdJSDA3WEc0Z0lDQWdSMHhEWVhSVVpYaDBkWEpsTG5CeWIzUnZkSGx3WlM1MFpYaDBkWEpsVjNKaGNDQTlJR1oxYm1OMGFXOXVJQ2gzY21Gd1V5d2dkM0poY0ZRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hkeVlYQlRJRDA5UFNCMmIybGtJREFwSUhzZ2QzSmhjRk1nUFNCSFRGOHhMa2RNTGtOTVFVMVFYMVJQWDBWRVIwVTdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tIZHlZWEJVSUQwOVBTQjJiMmxrSURBcElIc2dkM0poY0ZRZ1BTQjNjbUZ3VXpzZ2ZWeHVJQ0FnSUNBZ0lDQjJZWElnWjJ3Z1BTQjBhR2x6TGw5ZloyeERZWFF1WjJ3N1hHNGdJQ0FnSUNBZ0lHZHNMbUpwYm1SVVpYaDBkWEpsS0dkc0xsUkZXRlJWVWtWZk1rUXNJSFJvYVhNdVgxOTBaWGgwZFhKbEtUdGNiaUFnSUNBZ0lDQWdaMnd1ZEdWNFVHRnlZVzFsZEdWeWFTaG5iQzVVUlZoVVZWSkZYekpFTENCbmJDNVVSVmhVVlZKRlgxZFNRVkJmVXl3Z2QzSmhjRk1wTzF4dUlDQWdJQ0FnSUNCbmJDNTBaWGhRWVhKaGJXVjBaWEpwS0dkc0xsUkZXRlJWVWtWZk1rUXNJR2RzTGxSRldGUlZVa1ZmVjFKQlVGOVVMQ0IzY21Gd1ZDazdYRzRnSUNBZ0lDQWdJR2RzTG1KcGJtUlVaWGgwZFhKbEtHZHNMbFJGV0ZSVlVrVmZNa1FzSUc1MWJHd3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdUlHRWdkbUZzZFdVZ1ptOXlJSFJvWlNCd1lYTnpaV1FnY0dGeVlXMWxkR1Z5SUc1aGJXVXVYRzRnSUNBZ0lDb2dVMlZsT2lCb2RIUndjem92TDJSbGRtVnNiM0JsY2k1dGIzcHBiR3hoTG05eVp5OWxiaTFWVXk5a2IyTnpMMWRsWWk5QlVFa3ZWMlZpUjB4U1pXNWtaWEpwYm1kRGIyNTBaWGgwTDJkbGRGQmhjbUZ0WlhSbGNseHVJQ0FnSUNBcUwxeHVJQ0FnSUVkTVEyRjBWR1Y0ZEhWeVpTNXdjbTkwYjNSNWNHVXVaMlYwVUdGeVlXMWxkR1Z5SUQwZ1puVnVZM1JwYjI0Z0tIQnVZVzFsS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJuYkNBOUlIUm9hWE11WDE5bmJFTmhkQzVuYkR0Y2JpQWdJQ0FnSUNBZ1oyd3VZbWx1WkZSbGVIUjFjbVVvWjJ3dVZFVllWRlZTUlY4eVJDd2dkR2hwY3k1ZlgzUmxlSFIxY21VcE8xeHVJQ0FnSUNBZ0lDQm5iQzVuWlhSUVlYSmhiV1YwWlhJb2NHNWhiV1VwTzF4dUlDQWdJQ0FnSUNCbmJDNWlhVzVrVkdWNGRIVnlaU2huYkM1VVJWaFVWVkpGWHpKRUxDQnVkV3hzS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZOd1pXTnBabmtnZEdobElIQnBlR1ZzSUhOMGIzSmhaMlVnYlc5a1pYTXVYRzRnSUNBZ0lDb2dVMlZsT2lCb2RIUndjem92TDJSbGRtVnNiM0JsY2k1dGIzcHBiR3hoTG05eVp5OWxiaTFWVXk5a2IyTnpMMWRsWWk5QlVFa3ZWMlZpUjB4U1pXNWtaWEpwYm1kRGIyNTBaWGgwTDNCcGVHVnNVM1J2Y21WcFhHNGdJQ0FnSUNvdlhHNGdJQ0FnUjB4RFlYUlVaWGgwZFhKbExuQnliM1J2ZEhsd1pTNXdhWGhsYkZOMGIzSmxhU0E5SUdaMWJtTjBhVzl1SUNod2JtRnRaU3dnY0dGeVlXMHBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHZHNJRDBnZEdocGN5NWZYMmRzUTJGMExtZHNPMXh1SUNBZ0lDQWdJQ0JuYkM1aWFXNWtWR1Y0ZEhWeVpTaG5iQzVVUlZoVVZWSkZYekpFTENCMGFHbHpMbDlmZEdWNGRIVnlaU2s3WEc0Z0lDQWdJQ0FnSUdkc0xuQnBlR1ZzVTNSdmNtVnBLSEJ1WVcxbExDQndZWEpoYlNrN1hHNGdJQ0FnSUNBZ0lHZHNMbUpwYm1SVVpYaDBkWEpsS0dkc0xsUkZXRlJWVWtWZk1rUXNJRzUxYkd3cE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1UyVjBJRzVsZHlCa1lYUmhJR2x1ZEc4Z2RHaHBjeUIwWlhoMGRYSmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFZE1RMkYwVkdWNGRIVnlaUzV3Y205MGIzUjVjR1V1YzJWMFZHVjRkSFZ5WlNBOUlHWjFibU4wYVc5dUlDaHpiM1Z5WTJVcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdkc0lEMGdkR2hwY3k1ZlgyZHNRMkYwTG1kc08xeHVJQ0FnSUNBZ0lDQm5iQzVpYVc1a1ZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRlh6SkVMQ0IwYUdsekxsOWZkR1Y0ZEhWeVpTazdYRzRnSUNBZ0lDQWdJR2RzTG5SbGVFbHRZV2RsTWtRb1oyd3VWRVZZVkZWU1JWOHlSQ3dnTUN3Z1oyd3VVa2RDUVN3Z1oyd3VVa2RDUVN3Z1oyd3VWVTVUU1VkT1JVUmZRbGxVUlN3Z2MyOTFjbU5sS1R0Y2JpQWdJQ0FnSUNBZ1oyd3VZbWx1WkZSbGVIUjFjbVVvWjJ3dVZFVllWRlZTUlY4eVJDd2diblZzYkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5M2FXUjBhQ0E5SUhOdmRYSmpaUzUzYVdSMGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlgyaGxhV2RvZENBOUlITnZkWEpqWlM1b1pXbG5hSFE3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUWlhRZ2JtVjNJR1JoZEdFZ2FXNTBieUIwYUdseklIUmxlSFIxY21VdVhHNGdJQ0FnSUNvZ1ZHaHBjeUJtZFc1amRHbHZiaUIxYzJWeklHQlZhVzUwT0VGeWNtRjVZQzRnU1dZZ2VXOTFJSGRoYm5RZ2RHOGdjMjkxY21ObElHbHRZV2RsSUdSaGRHRXNJSFZ6WlNCZ1IweERZWFF1YzJWMFZHVjRkSFZ5WlNncFlDQnBibk4wWldGa0xseHVJQ0FnSUNBcUlFOXlJSGx2ZFNCM1lXNTBJSFJ2SUhWelpTQm1iRzloZENCMFpYaDBkWEpsUHlCVWNua2dkR2hwY3pvZ1lFZE1RMkYwTG5ObGRGUmxlSFIxY21WR2NtOXRSbXh2WVhSQmNuSmhlU2dwWUZ4dUlDQWdJQ0FxTDF4dUlDQWdJRWRNUTJGMFZHVjRkSFZ5WlM1d2NtOTBiM1I1Y0dVdWMyVjBWR1Y0ZEhWeVpVWnliMjFCY25KaGVTQTlJR1oxYm1OMGFXOXVJQ2gzYVdSMGFDd2dhR1ZwWjJoMExDQnpiM1Z5WTJVc0lHWnZjbTFoZENrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWm05eWJXRjBJRDA5UFNCMmIybGtJREFwSUhzZ1ptOXliV0YwSUQwZ1IweGZNUzVIVEM1U1IwSkJPeUI5WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnWjJ3dVltbHVaRlJsZUhSMWNtVW9aMnd1VkVWWVZGVlNSVjh5UkN3Z2RHaHBjeTVmWDNSbGVIUjFjbVVwTzF4dUlDQWdJQ0FnSUNCbmJDNTBaWGhKYldGblpUSkVLR2RzTGxSRldGUlZVa1ZmTWtRc0lEQXNJR1p2Y20xaGRDd2dkMmxrZEdnc0lHaGxhV2RvZEN3Z01Dd2dabTl5YldGMExDQm5iQzVWVGxOSlIwNUZSRjlDV1ZSRkxDQnpiM1Z5WTJVcE8xeHVJQ0FnSUNBZ0lDQm5iQzVpYVc1a1ZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRlh6SkVMQ0J1ZFd4c0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlgzZHBaSFJvSUQwZ2QybGtkR2c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMTlvWldsbmFIUWdQU0JvWldsbmFIUTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFFnYm1WM0lHUmhkR0VnYVc1MGJ5QjBhR2x6SUhSbGVIUjFjbVV1WEc0Z0lDQWdJQ29nVkdocGN5Qm1kVzVqZEdsdmJpQjFjMlZ6SUdCR2JHOWhkRE15UVhKeVlYbGdMbHh1SUNBZ0lDQXFJRWxtSUhsdmRTQmpZVzRuZENCbmNtRmlJR0JQUlZOZmRHVjRkSFZ5WlY5bWJHOWhkR0FnWlhoMFpXNXphVzl1SUdobGNtVXNJSGx2ZFNCM2FXeHNJR1JwWlNCaGRDQjBhR2x6SUhCdmFXNTBMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFZE1RMkYwVkdWNGRIVnlaUzV3Y205MGIzUjVjR1V1YzJWMFZHVjRkSFZ5WlVaeWIyMUdiRzloZEVGeWNtRjVJRDBnWm5WdVkzUnBiMjRnS0hkcFpIUm9MQ0JvWldsbmFIUXNJSE52ZFhKalpTd2dabTl5YldGMEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNobWIzSnRZWFFnUFQwOUlIWnZhV1FnTUNrZ2V5Qm1iM0p0WVhRZ1BTQkhURjh4TGtkTUxsSkhRa0U3SUgxY2JpQWdJQ0FnSUNBZ2RtRnlJR2RzSUQwZ2RHaHBjeTVmWDJkc1EyRjBMbWRzTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlmWjJ4RFlYUXVaMlYwUlhoMFpXNXphVzl1S0NkUFJWTmZkR1Y0ZEhWeVpWOW1iRzloZENjc0lIUnlkV1VwTzF4dUlDQWdJQ0FnSUNCbmJDNWlhVzVrVkdWNGRIVnlaU2huYkM1VVJWaFVWVkpGWHpKRUxDQjBhR2x6TGw5ZmRHVjRkSFZ5WlNrN1hHNGdJQ0FnSUNBZ0lHZHNMblJsZUVsdFlXZGxNa1FvWjJ3dVZFVllWRlZTUlY4eVJDd2dNQ3dnWm05eWJXRjBMQ0IzYVdSMGFDd2dhR1ZwWjJoMExDQXdMQ0JtYjNKdFlYUXNJR2RzTGtaTVQwRlVMQ0J6YjNWeVkyVXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmWDJkc1EyRjBMbWRsZEVWNGRHVnVjMmx2YmlnblQwVlRYM1JsZUhSMWNtVmZabXh2WVhSZmJHbHVaV0Z5SnlrZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkR1Y0ZEhWeVpVWnBiSFJsY2lobmJDNU9SVUZTUlZOVUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JuYkM1aWFXNWtWR1Y0ZEhWeVpTaG5iQzVVUlZoVVZWSkZYekpFTENCdWRXeHNLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZYM2RwWkhSb0lEMGdkMmxrZEdnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDE5b1pXbG5hSFFnUFNCb1pXbG5hSFE3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYjNCNUlIQnBlR1ZzY3lCbWNtOXRJR04xY25KbGJuUWdabkpoYldWaWRXWm1aWElnZEc4Z1oybDJaVzRnZEdWNGRIVnlaUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQkhURU5oZEZSbGVIUjFjbVV1Y0hKdmRHOTBlWEJsTG1OdmNIbFVaWGgwZFhKbElEMGdablZ1WTNScGIyNGdLSGRwWkhSb0xDQm9aV2xuYUhRcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdkc0lEMGdkR2hwY3k1ZlgyZHNRMkYwTG1kc08xeHVJQ0FnSUNBZ0lDQm5iQzVpYVc1a1ZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRlh6SkVMQ0IwYUdsekxsOWZkR1Y0ZEhWeVpTazdYRzRnSUNBZ0lDQWdJR2RzTG1OdmNIbFVaWGhKYldGblpUSkVLR2RzTGxSRldGUlZVa1ZmTWtRc0lEQXNJR2RzTGxKSFFrRXNJREFzSURBc0lIZHBaSFJvTENCb1pXbG5hSFFzSURBcE8xeHVJQ0FnSUNBZ0lDQm5iQzVpYVc1a1ZHVjRkSFZ5WlNobmJDNVVSVmhVVlZKRlh6SkVMQ0J1ZFd4c0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlgzZHBaSFJvSUQwZ2QybGtkR2c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMTlvWldsbmFIUWdQU0JvWldsbmFIUTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFFnYm1WM0lHTjFZbVZ0WVhBZ1pHRjBZU0JwYm5SdklIUm9hWE1nZEdWNGRIVnlaUzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdkR1Y0ZEhWeVpYTWdRWEp5WVhrZ2IyWWdhV0Z0WjJWekxpQlBjbVJsY2pvZ1lGZ3JZQ3dnWUZndFlDd2dZRmtyWUN3Z1lGa3RZQ3dnWUZvcllDd2dZRm90WUZ4dUlDQWdJQ0FxSUVCMGIyUnZJR1IxWlNCMGJ5QmpiMjF3WVhScFltbHNhWFI1SUc5bUlHbDBjeUJnZDJsa2RHaGdJR0Z1WkNCZ2FHVnBaMmgwWUNCcGRDQnphRzkxYkdRZ2JtOTBJR0psSUhWelpXUWdlV1YwWEc0Z0lDQWdJQ292WEc0Z0lDQWdSMHhEWVhSVVpYaDBkWEpsTG5CeWIzUnZkSGx3WlM1elpYUkRkV0psYldGd0lEMGdablZ1WTNScGIyNGdLSFJsZUhSMWNtVnpLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQm5iQ0E5SUhSb2FYTXVYMTluYkVOaGRDNW5iRHRjYmlBZ0lDQWdJQ0FnWjJ3dVltbHVaRlJsZUhSMWNtVW9aMnd1VkVWWVZGVlNSVjlEVlVKRlgwMUJVQ3dnZEdocGN5NWZYM1JsZUhSMWNtVXBPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SURZN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMnd1ZEdWNFNXMWhaMlV5UkNobmJDNVVSVmhVVlZKRlgwTlZRa1ZmVFVGUVgxQlBVMGxVU1ZaRlgxZ2dLeUJwTENBd0xDQm5iQzVTUjBKQkxDQm5iQzVTUjBKQkxDQm5iQzVWVGxOSlIwNUZSRjlDV1ZSRkxDQjBaWGgwZFhKbGMxdHBYU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1oyd3VkR1Y0VUdGeVlXMWxkR1Z5YVNobmJDNVVSVmhVVlZKRlgwTlZRa1ZmVFVGUUxDQm5iQzVVUlZoVVZWSkZYMDFKVGw5R1NVeFVSVklzSUdkc0xreEpUa1ZCVWlrN1hHNGdJQ0FnSUNBZ0lHZHNMblJsZUZCaGNtRnRaWFJsY21rb1oyd3VWRVZZVkZWU1JWOURWVUpGWDAxQlVDd2daMnd1VkVWWVZGVlNSVjlOUVVkZlJrbE1WRVZTTENCbmJDNU1TVTVGUVZJcE8xeHVJQ0FnSUNBZ0lDQm5iQzUwWlhoUVlYSmhiV1YwWlhKcEtHZHNMbFJGV0ZSVlVrVmZRMVZDUlY5TlFWQXNJR2RzTGxSRldGUlZVa1ZmVjFKQlVGOVRMQ0JuYkM1RFRFRk5VRjlVVDE5RlJFZEZLVHRjYmlBZ0lDQWdJQ0FnWjJ3dWRHVjRVR0Z5WVcxbGRHVnlhU2huYkM1VVJWaFVWVkpGWDBOVlFrVmZUVUZRTENCbmJDNVVSVmhVVlZKRlgxZFNRVkJmVkN3Z1oyd3VRMHhCVFZCZlZFOWZSVVJIUlNrN1hHNGdJQ0FnSUNBZ0lHZHNMbUpwYm1SVVpYaDBkWEpsS0dkc0xsUkZXRlJWVWtWZlExVkNSVjlOUVZBc0lHNTFiR3dwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVTJWMElGc2dNQ3dnTUN3Z01Dd2dNQ0JkSUhSdklIUm9hWE1nZEdWNGRIVnlaUzVjYmlBZ0lDQWdLaUJWYzJWbWRXd2dabTl5SUhSbGJYQnZjbUZ5ZVNCMWMyVXVMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFZE1RMkYwVkdWNGRIVnlaUzV3Y205MGIzUjVjR1V1YzJWMFdtVnliMVJsZUhSMWNtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZHVjRkSFZ5WlVaeWIyMUJjbkpoZVNneExDQXhMQ0I2WlhKdlZHVjRkSFZ5WlVGeWNtRjVLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lISmxkSFZ5YmlCSFRFTmhkRlJsZUhSMWNtVTdYRzU5S0NrcE8xeHVaWGh3YjNKMGN5NUhURU5oZEZSbGVIUjFjbVVnUFNCSFRFTmhkRlJsZUhSMWNtVTdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYm1aMWJtTjBhVzl1SUY5ZlpYaHdiM0owS0cwcElIdGNiaUFnSUNCbWIzSWdLSFpoY2lCd0lHbHVJRzBwSUdsbUlDZ2haWGh3YjNKMGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNod0tTa2daWGh3YjNKMGMxdHdYU0E5SUcxYmNGMDdYRzU5WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNWZYMlY0Y0c5eWRDaHlaWEYxYVhKbEtGd2lMaTlIVEZ3aUtTazdYRzVmWDJWNGNHOXlkQ2h5WlhGMWFYSmxLRndpTGk5SFRFTmhkRndpS1NrN1hHNWZYMlY0Y0c5eWRDaHlaWEYxYVhKbEtGd2lMaTlIVEVOaGRFSjFabVpsY2x3aUtTazdYRzVmWDJWNGNHOXlkQ2h5WlhGMWFYSmxLRndpTGk5SFRFTmhkRVp5WVcxbFluVm1abVZ5WENJcEtUdGNibDlmWlhod2IzSjBLSEpsY1hWcGNtVW9YQ0l1TDBkTVEyRjBVSEp2WjNKaGJWd2lLU2s3WEc1ZlgyVjRjRzl5ZENoeVpYRjFhWEpsS0Z3aUxpOUhURU5oZEZKbGJtUmxjbUoxWm1abGNsd2lLU2s3WEc1ZlgyVjRjRzl5ZENoeVpYRjFhWEpsS0Z3aUxpOUhURU5oZEZOb1lXUmxjbHdpS1NrN1hHNWZYMlY0Y0c5eWRDaHlaWEYxYVhKbEtGd2lMaTlIVEVOaGRGUmxlSFIxY21WY0lpa3BPMXh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsImltcG9ydCB7IEV2ZW50RW1pdHRhYmxlIH0gZnJvbSAnLi91dGlscy9FdmVudEVtaXR0YWJsZSc7XG5pbXBvcnQgeyBhcHBseU1peGlucyB9IGZyb20gJy4vdXRpbHMvYXBwbHlNaXhpbnMnO1xuaW1wb3J0IHsgbW9kIH0gZnJvbSAnLi91dGlscy9tb2QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQge1xuICB0aW1lOiBudW1iZXI7XG4gIGRlbHRhVGltZTogbnVtYmVyO1xuICBicG06IG51bWJlcjtcbiAgYmVhdDogbnVtYmVyO1xuICBiYXI6IG51bWJlcjtcbiAgc2l4dGVlbkJhcjogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQmVhdE1hbmFnZXIge1xuICBwdWJsaWMgX19icG06IG51bWJlciA9IDE0MC4wO1xuICBwdWJsaWMgZ2V0IGJwbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9fYnBtO1xuICB9XG4gIHB1YmxpYyBzZXQgYnBtKCB2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX19icG0gPSB2YWx1ZTtcbiAgICB0aGlzLl9fZW1pdCggJ2NoYW5nZUJQTScsIHsgYnBtOiB2YWx1ZSB9ICk7XG4gIH1cblxuICBwcml2YXRlIF9fdGltZSA9IDAuMDtcbiAgcHJpdmF0ZSBfX2JlYXQgPSAwLjA7XG4gIHByaXZhdGUgX19iYXIgPSAwLjA7XG4gIHByaXZhdGUgX19zaXh0ZWVuQmFyID0gMC4wO1xuXG4gIHB1YmxpYyBzdGF0aWMgQ2FsY0JlYXRTZWNvbmRzKCBicG06IG51bWJlciApOiBudW1iZXIge1xuICAgIHJldHVybiA2MC4wIC8gYnBtO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBDYWxjQmFyU2Vjb25kcyggYnBtOiBudW1iZXIgKTogbnVtYmVyIHtcbiAgICAvLyByZXR1cm4gdGhpcy5iZWF0TGVuZ3RoICogNC4wO1xuICAgIHJldHVybiAyNDAuMCAvIGJwbTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgQ2FsY1NpeHRlZW5CYXJTZWNvbmRzKCBicG06IG51bWJlciApOiBudW1iZXIge1xuICAgIC8vIHJldHVybiB0aGlzLmJhckxlbmd0aCAqIDE2LjA7XG4gICAgcmV0dXJuIDM4NDAuMCAvIGJwbTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9fdGltZSA9IDAuMDtcbiAgICB0aGlzLl9fYmVhdCA9IDAuMDtcbiAgICB0aGlzLl9fYmFyID0gMC4wO1xuICAgIHRoaXMuX19zaXh0ZWVuQmFyID0gMC4wO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSggdGltZTogbnVtYmVyICk6IEJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQge1xuICAgIGNvbnN0IGJlYXRTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY0JlYXRTZWNvbmRzKCB0aGlzLl9fYnBtICk7XG4gICAgY29uc3QgYmFyU2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNCYXJTZWNvbmRzKCB0aGlzLl9fYnBtICk7XG4gICAgY29uc3Qgc2l4dGVlbkJhclNlY29uZHMgPSBCZWF0TWFuYWdlci5DYWxjU2l4dGVlbkJhclNlY29uZHMoIHRoaXMuX19icG0gKTtcblxuICAgIGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSB0aGlzLl9fdGltZTtcblxuICAgIHRoaXMuX19iZWF0ID0gbW9kKCB0aGlzLl9fYmVhdCArIGRlbHRhVGltZSAvIGJlYXRTZWNvbmRzLCAxLjAgKTtcbiAgICB0aGlzLl9fYmFyID0gbW9kKCB0aGlzLl9fYmFyICsgZGVsdGFUaW1lIC8gYmFyU2Vjb25kcywgMS4wICk7XG4gICAgdGhpcy5fX3NpeHRlZW5CYXIgPSBtb2QoIHRoaXMuX19zaXh0ZWVuQmFyICsgZGVsdGFUaW1lIC8gc2l4dGVlbkJhclNlY29uZHMsIDEuMCApO1xuXG4gICAgdGhpcy5fX3RpbWUgPSB0aW1lO1xuXG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0aW1lLFxuICAgICAgZGVsdGFUaW1lLFxuICAgICAgYnBtOiB0aGlzLl9fYnBtLFxuICAgICAgYmVhdDogdGhpcy5fX2JlYXQsXG4gICAgICBiYXI6IHRoaXMuX19iYXIsXG4gICAgICBzaXh0ZWVuQmFyOiB0aGlzLl9fc2l4dGVlbkJhclxuICAgIH07XG5cbiAgICB0aGlzLl9fZW1pdCggJ3VwZGF0ZScsIGV2ZW50ICk7XG5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCZWF0TWFuYWdlciBleHRlbmRzIEV2ZW50RW1pdHRhYmxlPHtcbiAgdXBkYXRlOiBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50O1xuICBjaGFuZ2VCUE06IHsgYnBtOiBudW1iZXIgfTtcbn0+IHt9XG5hcHBseU1peGlucyggQmVhdE1hbmFnZXIsIFsgRXZlbnRFbWl0dGFibGUgXSApO1xuIiwiaW1wb3J0IHsgQmVhdE1hbmFnZXIsIEJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQgfSBmcm9tICcuL0JlYXRNYW5hZ2VyJztcbmltcG9ydCB7IEdMLCBHTENhdCwgR0xDYXRCdWZmZXIsIEdMQ2F0RnJhbWVidWZmZXIsIEdMQ2F0UHJvZ3JhbSwgR0xDYXRUZXh0dXJlIH0gZnJvbSAnQGZtcy1jYXQvZ2xjYXQtdHMnO1xuaW1wb3J0IHsgc2hhZGVyY2h1bmtQb3N0LCBzaGFkZXJjaHVua1ByZSwgc2hhZGVyY2h1bmtQcmVMaW5lcyB9IGZyb20gJy4vc2hhZGVyY2h1bmtzJztcbmltcG9ydCB7IEV2ZW50RW1pdHRhYmxlIH0gZnJvbSAnLi91dGlscy9FdmVudEVtaXR0YWJsZSc7XG5pbXBvcnQgeyBhcHBseU1peGlucyB9IGZyb20gJy4vdXRpbHMvYXBwbHlNaXhpbnMnO1xuXG5pbnRlcmZhY2UgV2F2ZW5lcmREZWNrUHJvZ3JhbSB7XG4gIHByb2dyYW06IEdMQ2F0UHJvZ3JhbTtcbiAgY29kZTogc3RyaW5nO1xuICByZXF1aXJlZFNhbXBsZXM6IFNldDxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgV2F2ZW5lcmREZWNrU2FtcGxlRW50cnkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRleHR1cmU6IEdMQ2F0VGV4dHVyZTtcbiAgc2FtcGxlUmF0ZTogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5jb25zdCB2ZXJ0UXVhZCA9IGBhdHRyaWJ1dGUgdmVjMiBwO1xudm9pZCBtYWluKCkge1xuICBnbF9Qb3NpdGlvbiA9IHZlYzQoIHAsIDAuMCwgMS4wICk7XG59XG5gO1xuXG5leHBvcnQgY2xhc3MgV2F2ZW5lcmREZWNrIHtcbiAgLyoqXG4gICAqIFRocmVzaG9sZCBvZiB0aW1lIGVycm9yLCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgcHVibGljIHRpbWVFcnJvclRocmVzaG9sZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJdHMgaG9zdCBkZWNrLlxuICAgKiBJdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0byBjb25uZWN0IHRoZSBub2RlIG9mIHRoZSBob3N0IGRlY2sgaW50byB0aGUgbm9kZSBvZiB0aGlzIGRlY2ssIHRvIGVuc3VyZSB0aGUgdGltaW5nIGNvbnNpc3RlbmN5LlxuICAgKi9cbiAgcHVibGljIGhvc3REZWNrPzogV2F2ZW5lcmREZWNrO1xuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBjdWUgc3RhdHVzLlxuICAgKiBgJ25vbmUnYDogVGhlcmUgaXMgbm90aGluZyBpbiBpdHMgY3VycmVudCBjdWUuXG4gICAqIGAncmVhZHknYDogVGhlcmUgaXMgYSBjdWUgc2hhZGVyIGFuZCBpcyByZWFkeSB0byBiZSBhcHBsaWVkLlxuICAgKiBgJ2FwcGx5aW5nJ2A6IFRoZXJlIGlzIGEgY3VlIHNoYWRlciBhbmQgaXMgZ29pbmcgdG8gYmUgYXBwbGllZCBpbiB0aGUgbmV4dCBiYXIuXG4gICAqL1xuICBwcml2YXRlIF9fY3VlU3RhdHVzOiAnbm9uZScgfCAncmVhZHknIHwgJ2FwcGx5aW5nJyA9ICdub25lJztcbiAgcHVibGljIGdldCBjdWVTdGF0dXMoKTogJ25vbmUnIHwgJ3JlYWR5JyB8ICdhcHBseWluZycge1xuICAgIHJldHVybiB0aGlzLl9fY3VlU3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBidWZmZXIgc2l6ZS5cbiAgICovXG4gIHByaXZhdGUgX19idWZmZXJTaXplOiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgYnVmZmVyU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9fYnVmZmVyU2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgY2h1bmsgc2l6ZS5cbiAgICovXG4gIHByaXZhdGUgX19jaHVua1NpemU6IG51bWJlcjtcbiAgcHVibGljIGdldCBjaHVua1NpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fX2NodW5rU2l6ZTtcbiAgfVxuXG4gIHByaXZhdGUgX19jaHVua0hlYWQgPSAwO1xuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBicG0uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGJwbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmJlYXRNYW5hZ2VyLmJwbTtcbiAgfVxuICBwdWJsaWMgc2V0IGJwbSggdmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLmJlYXRNYW5hZ2VyLmJwbSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IHRpbWUuXG4gICAqL1xuICBwcml2YXRlIF9fdGltZSA9IDA7XG4gIHB1YmxpYyBnZXQgdGltZSgpOiBudW1iZXIge1xuICAgIGlmICggdGhpcy5ob3N0RGVjayApIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3REZWNrLnRpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX190aW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBib3VuZCBgR0xDYXRgLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2dsQ2F0OiBHTENhdDtcbiAgcHVibGljIGdldCBnbENhdCgpOiBHTENhdCB7XG4gICAgcmV0dXJuIHRoaXMuX19nbENhdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgbGFzdCBjb21waWxlIGVycm9yIGhhcHBlbmVkIGluIFtbV2F2ZW5lcmREZWNrLmNvbXBpbGVdXS5cbiAgICovXG4gIHByaXZhdGUgX19sYXN0RXJyb3I6IGFueTtcbiAgcHVibGljIGdldCBsYXN0RXJyb3IoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fX2xhc3RFcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgYmluZGVkIGBBdWRpb0NvbnRleHRgLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2F1ZGlvOiBBdWRpb0NvbnRleHQ7XG4gIHB1YmxpYyBnZXQgYXVkaW8oKTogQXVkaW9Db250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fX2F1ZGlvO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBub2RlIG9mIHRoZSBBdWRpb0NvbnRleHQuXG4gICAqL1xuICBwcml2YXRlIF9fbm9kZTogU2NyaXB0UHJvY2Vzc29yTm9kZTtcbiAgcHVibGljIGdldCBub2RlKCk6IFNjcmlwdFByb2Nlc3Nvck5vZGUge1xuICAgIHJldHVybiB0aGlzLl9fbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBmb3IgdGhlIGBhdWRpby5zYW1wbGVSYXRlYCAuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNhbXBsZVJhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fX2F1ZGlvLnNhbXBsZVJhdGU7XG4gIH1cblxuICBwcml2YXRlIF9fYmVhdE1hbmFnZXI6IEJlYXRNYW5hZ2VyO1xuICBwdWJsaWMgZ2V0IGJlYXRNYW5hZ2VyKCk6IEJlYXRNYW5hZ2VyIHtcbiAgICBjb25zdCBob3N0RGVja0JlYXRNYW5hZ2VyID0gdGhpcy5ob3N0RGVjaz8uYmVhdE1hbmFnZXI7XG4gICAgaWYgKCBob3N0RGVja0JlYXRNYW5hZ2VyICkge1xuICAgICAgcmV0dXJuIGhvc3REZWNrQmVhdE1hbmFnZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19iZWF0TWFuYWdlcjtcbiAgfVxuXG4gIHByaXZhdGUgX19idWZmZXJRdWFkOiBHTENhdEJ1ZmZlcjtcbiAgcHJpdmF0ZSBfX2ZyYW1lYnVmZmVyVGV4dHVyZTogR0xDYXRUZXh0dXJlO1xuICBwcml2YXRlIF9fZnJhbWVidWZmZXI6IEdMQ2F0RnJhbWVidWZmZXI7XG4gIHByaXZhdGUgX19wcm9ncmFtOiBXYXZlbmVyZERlY2tQcm9ncmFtIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX19wcm9ncmFtQ3VlOiBXYXZlbmVyZERlY2tQcm9ncmFtIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX19waXhlbEJ1ZmZlcjogRmxvYXQzMkFycmF5O1xuXG4gIHByaXZhdGUgX19zYW1wbGVzID0gbmV3IE1hcDxzdHJpbmcsIFdhdmVuZXJkRGVja1NhbXBsZUVudHJ5PigpO1xuICBwcml2YXRlIGdldCBzYW1wbGVzKCk6IE1hcDxzdHJpbmcsIFdhdmVuZXJkRGVja1NhbXBsZUVudHJ5PiB7XG4gICAgaWYgKCB0aGlzLmhvc3REZWNrICkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdERlY2suc2FtcGxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX3NhbXBsZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igb2YgdGhlIFdhdmVuZXJkRGVjay5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcigge1xuICAgIGdsQ2F0LFxuICAgIGF1ZGlvLFxuICAgIGhvc3REZWNrLFxuICAgIGJ1ZmZlclNpemUsXG4gICAgY2h1bmtTaXplLFxuICAgIGJwbSxcbiAgICB0aW1lRXJyb3JUaHJlc2hvbGRcbiAgfToge1xuICAgIGdsQ2F0OiBHTENhdDtcbiAgICBhdWRpbzogQXVkaW9Db250ZXh0O1xuICAgIGhvc3REZWNrPzogV2F2ZW5lcmREZWNrO1xuICAgIGJ1ZmZlclNpemU/OiBudW1iZXI7XG4gICAgY2h1bmtTaXplPzogbnVtYmVyO1xuICAgIGJwbT86IG51bWJlcjtcbiAgICB0aW1lRXJyb3JUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIH0gKSB7XG4gICAgdGhpcy50aW1lRXJyb3JUaHJlc2hvbGQgPSB0aW1lRXJyb3JUaHJlc2hvbGQgPz8gMC4wMTtcbiAgICB0aGlzLl9fYnVmZmVyU2l6ZSA9IGJ1ZmZlclNpemUgPz8gMjA0ODtcbiAgICB0aGlzLl9fY2h1bmtTaXplID0gY2h1bmtTaXplID8/IDY0O1xuXG4gICAgLy8gLS0gaG9zdCBkZWNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKCBob3N0RGVjayApIHtcbiAgICAgIHRoaXMuaG9zdERlY2sgPSBob3N0RGVjaztcbiAgICB9XG5cbiAgICAvLyAtLSBiZWF0IG1hbmFnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLl9fYmVhdE1hbmFnZXIgPSBuZXcgQmVhdE1hbmFnZXIoKTtcbiAgICB0aGlzLl9fYmVhdE1hbmFnZXIuYnBtID0gYnBtID8/IDE0MDtcbiAgICB0aGlzLl9fYmVhdE1hbmFnZXIub24oICdjaGFuZ2VCUE0nLCAoIHsgYnBtIH0gKSA9PiB7XG4gICAgICB0aGlzLl9fY2h1bmtIZWFkID0gMDtcbiAgICAgIHRoaXMuX19lbWl0KCAnY2hhbmdlQlBNJywgeyBicG0gfSApO1xuICAgIH0gKTtcblxuICAgIC8vIC0tIGdsQ2F0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuX19nbENhdCA9IGdsQ2F0O1xuICAgIHRoaXMuX19idWZmZXJRdWFkID0gdGhpcy5fX2dsQ2F0LmNyZWF0ZUJ1ZmZlcigpITtcbiAgICB0aGlzLl9fYnVmZmVyUXVhZC5zZXRWZXJ0ZXhidWZmZXIoIG5ldyBGbG9hdDMyQXJyYXkoIFsgLTEsIC0xLCAxLCAtMSwgLTEsIDEsIDEsIDEgXSApICk7XG4gICAgdGhpcy5fX2ZyYW1lYnVmZmVyVGV4dHVyZSA9IHRoaXMuX19nbENhdC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMuX19mcmFtZWJ1ZmZlclRleHR1cmUuc2V0VGV4dHVyZUZyb21GbG9hdEFycmF5KFxuICAgICAgdGhpcy5fX2J1ZmZlclNpemUgLyAyLFxuICAgICAgdGhpcy5fX2NodW5rU2l6ZSxcbiAgICAgIG51bGwsXG4gICAgICBHTC5SR0JBXG4gICAgKTtcbiAgICB0aGlzLl9fZnJhbWVidWZmZXIgPSB0aGlzLl9fZ2xDYXQuY3JlYXRlRnJhbWVidWZmZXIoKSE7XG4gICAgdGhpcy5fX2ZyYW1lYnVmZmVyLmF0dGFjaFRleHR1cmUoIHRoaXMuX19mcmFtZWJ1ZmZlclRleHR1cmUgKTtcbiAgICB0aGlzLl9fcGl4ZWxCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KCB0aGlzLl9fYnVmZmVyU2l6ZSAqIDIgKiB0aGlzLl9fY2h1bmtTaXplICk7XG5cbiAgICAvLyAtLSBhdWRpbyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLl9fYXVkaW8gPSBhdWRpbztcbiAgICB0aGlzLl9fbm9kZSA9IGF1ZGlvLmNyZWF0ZVNjcmlwdFByb2Nlc3NvciggdGhpcy5fX2J1ZmZlclNpemUsIDIsIDIgKTtcbiAgICB0aGlzLl9fbm9kZS5vbmF1ZGlvcHJvY2VzcyA9ICggZXZlbnQgKSA9PiB0aGlzLl9faGFuZGxlUHJvY2VzcyggZXZlbnQgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIHRoaXMgV2F2ZW5lcmREZWNrLlxuICAgKi9cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fX3NldEN1ZVN0YXR1cyggJ25vbmUnICk7XG4gICAgdGhpcy5fX2J1ZmZlclF1YWQuZGlzcG9zZSgpO1xuICAgIGlmICggdGhpcy5fX3Byb2dyYW0gKSB7XG4gICAgICB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLmRpc3Bvc2UoIHRydWUgKTtcbiAgICB9XG4gICAgaWYgKCB0aGlzLl9fcHJvZ3JhbUN1ZSApIHtcbiAgICAgIHRoaXMuX19wcm9ncmFtQ3VlLnByb2dyYW0uZGlzcG9zZSggdHJ1ZSApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb21waWxlIGdpdmVuIHNoYWRlciBjb2RlIGFuZCBjdWUgdGhlIHNoYWRlci5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBjb21waWxlKCBjb2RlOiBzdHJpbmcgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGF3YWl0IHRoaXMuX19nbENhdC5sYXp5UHJvZ3JhbUFzeW5jKFxuICAgICAgdmVydFF1YWQsXG4gICAgICBzaGFkZXJjaHVua1ByZSArIGNvZGUgKyBzaGFkZXJjaHVua1Bvc3RcbiAgICApLmNhdGNoKCAoIGUgKSA9PiB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuX19wcm9jZXNzRXJyb3JNZXNzYWdlKCBlICk7XG4gICAgICB0aGlzLl9fbGFzdEVycm9yID0gZXJyb3I7XG4gICAgICB0aGlzLl9fcHJvZ3JhbUN1ZSA9IG51bGw7XG4gICAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnbm9uZScgKTtcbiAgICAgIHRoaXMuX19lbWl0KCAnZXJyb3InLCB7IGVycm9yIH0gKTtcbiAgICAgIHRocm93IG5ldyBFcnJvciggZXJyb3IgPz8gdW5kZWZpbmVkICk7XG4gICAgfSApO1xuXG4gICAgY29uc3QgcmVxdWlyZWRTYW1wbGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yICggY29uc3QgbmFtZSBvZiB0aGlzLnNhbXBsZXMua2V5cygpICkge1xuICAgICAgaWYgKCBjb2RlLnNlYXJjaCggJ3NhbXBsZV8nICsgbmFtZSApICE9PSAtMSApIHtcbiAgICAgICAgcmVxdWlyZWRTYW1wbGVzLmFkZCggbmFtZSApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19wcm9ncmFtQ3VlID0ge1xuICAgICAgcHJvZ3JhbSxcbiAgICAgIGNvZGUsXG4gICAgICByZXF1aXJlZFNhbXBsZXNcbiAgICB9O1xuICAgIHRoaXMuX19zZXRDdWVTdGF0dXMoICdyZWFkeScgKTtcbiAgICB0aGlzLl9fZW1pdCggJ2Vycm9yJywgeyBlcnJvcjogbnVsbCB9ICk7XG4gICAgdGhpcy5fX2xhc3RFcnJvciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGN1ZSBzaGFkZXIgYWZ0ZXIgdGhlIGJhciBlbmRzLlxuICAgKi9cbiAgcHVibGljIGFwcGx5Q3VlKCk6IHZvaWQge1xuICAgIGlmICggdGhpcy5fX2N1ZVN0YXR1cyA9PT0gJ3JlYWR5JyApIHtcbiAgICAgIHRoaXMuX19zZXRDdWVTdGF0dXMoICdhcHBseWluZycgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhIHNhbXBsZSBhbmQgc3RvcmUgYXMgYSB1bmlmb3JtIHRleHR1cmUuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9hZFNhbXBsZSggbmFtZTogc3RyaW5nLCBidWZmZXI6IEFycmF5QnVmZmVyICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX19hdWRpby5kZWNvZGVBdWRpb0RhdGEoIGJ1ZmZlciApXG4gICAgLnRoZW4oICggYXVkaW9CdWZmZXIgKSA9PiB7XG4gICAgICBjb25zdCB7IHNhbXBsZVJhdGUsIGR1cmF0aW9uIH0gPSBhdWRpb0J1ZmZlcjtcbiAgICAgIGNvbnN0IGZyYW1lcyA9IGF1ZGlvQnVmZmVyLmxlbmd0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gMjA0ODtcbiAgICAgIGNvbnN0IGxlbmd0aENlaWxlZCA9IE1hdGguY2VpbCggZnJhbWVzIC8gMjA0OC4wICk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBsZW5ndGhDZWlsZWQ7XG5cbiAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoIHdpZHRoICogaGVpZ2h0ICogNCApO1xuICAgICAgY29uc3QgY2hhbm5lbHMgPSBhdWRpb0J1ZmZlci5udW1iZXJPZkNoYW5uZWxzO1xuXG4gICAgICBjb25zdCBkYXRhTCA9IGF1ZGlvQnVmZmVyLmdldENoYW5uZWxEYXRhKCAwICk7XG4gICAgICBjb25zdCBkYXRhUiA9IGF1ZGlvQnVmZmVyLmdldENoYW5uZWxEYXRhKCBjaGFubmVscyA9PT0gMSA/IDAgOiAxICk7XG5cbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZyYW1lczsgaSArKyApIHtcbiAgICAgICAgYnVmZmVyWyBpICogNCArIDAgXSA9IGRhdGFMWyBpIF07XG4gICAgICAgIGJ1ZmZlclsgaSAqIDQgKyAxIF0gPSBkYXRhUlsgaSBdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5fX2dsQ2F0LmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgICB0ZXh0dXJlLnNldFRleHR1cmVGcm9tRmxvYXRBcnJheSggd2lkdGgsIGhlaWdodCwgYnVmZmVyLCBHTC5SR0JBICk7XG4gICAgICB0ZXh0dXJlLnRleHR1cmVGaWx0ZXIoIEdMLk5FQVJFU1QgKTtcblxuICAgICAgdGhpcy5fX3NhbXBsZXMuc2V0KFxuICAgICAgICBuYW1lLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICB0ZXh0dXJlLFxuICAgICAgICAgIHNhbXBsZVJhdGUsXG4gICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCB0aGlzLl9fcHJvZ3JhbSAmJiB0aGlzLl9fcHJvZ3JhbS5jb2RlLnNlYXJjaCggJ3NhbXBsZV8nICsgbmFtZSApICkge1xuICAgICAgICB0aGlzLl9fcHJvZ3JhbS5yZXF1aXJlZFNhbXBsZXMuYWRkKCBuYW1lICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggdGhpcy5fX3Byb2dyYW1DdWUgJiYgdGhpcy5fX3Byb2dyYW1DdWUuY29kZS5zZWFyY2goICdzYW1wbGVfJyArIG5hbWUgKSApIHtcbiAgICAgICAgdGhpcy5fX3Byb2dyYW1DdWUucmVxdWlyZWRTYW1wbGVzLmFkZCggbmFtZSApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fZW1pdCggJ2xvYWRTYW1wbGUnLCB7IG5hbWUsIGR1cmF0aW9uLCBzYW1wbGVSYXRlIH0gKTtcbiAgICB9ICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc2FtcGxlLlxuICAgKi9cbiAgcHVibGljIGRlbGV0ZVNhbXBsZSggbmFtZTogc3RyaW5nICk6IHZvaWQge1xuICAgIGlmICggdGhpcy5fX3NhbXBsZXMuaGFzKCBuYW1lICkgKSB7XG4gICAgICB0aGlzLl9fc2FtcGxlcy5kZWxldGUoIG5hbWUgKTtcbiAgICAgIHRoaXMuX19lbWl0KCAnZGVsZXRlU2FtcGxlJywgeyBuYW1lIH0gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9faGFuZGxlUHJvY2VzcyggZXZlbnQ6IEF1ZGlvUHJvY2Vzc2luZ0V2ZW50ICk6IHZvaWQge1xuICAgIGxldCB0aW1lID0gdGhpcy50aW1lO1xuICAgIGlmICggIXRoaXMuaG9zdERlY2sgKSB7XG4gICAgICB0aW1lICs9IHRoaXMuX19idWZmZXJTaXplIC8gdGhpcy5fX2F1ZGlvLnNhbXBsZVJhdGU7XG4gICAgICBpZiAoIHRoaXMudGltZUVycm9yVGhyZXNob2xkIDwgTWF0aC5hYnMoIHRpbWUgLSBldmVudC5wbGF5YmFja1RpbWUgKSApIHtcbiAgICAgICAgdGltZSA9IGV2ZW50LnBsYXliYWNrVGltZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX3RpbWUgPSB0aW1lO1xuXG4gICAgY29uc3QgYmVhdE1hbmFnZXJVcGRhdGVFdmVudCA9IHRoaXMuYmVhdE1hbmFnZXIudXBkYXRlKCB0aW1lICk7XG5cbiAgICBjb25zdCB7IGJhciB9ID0gYmVhdE1hbmFnZXJVcGRhdGVFdmVudDtcblxuICAgIGNvbnN0IG91dEwgPSBldmVudC5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoIDAgKTtcbiAgICBjb25zdCBvdXRSID0gZXZlbnQub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKCAxICk7XG5cbiAgICAvLyBzaG91bGQgSSBwcm9jZXNzIHRoZSBuZXh0IHByb2dyYW0/XG4gICAgY29uc3QgeyBzYW1wbGVSYXRlLCBfX2J1ZmZlclNpemU6IGJ1ZmZlclNpemUgfSA9IHRoaXM7XG4gICAgY29uc3QgYmVnaW5OZXh0ID0gdGhpcy5fX2N1ZVN0YXR1cyA9PT0gJ2FwcGx5aW5nJ1xuICAgICAgPyBNYXRoLm1pbiggYnVmZmVyU2l6ZSwgTWF0aC5mbG9vciggKCAxLjAgLSBiYXIgKSAqIHNhbXBsZVJhdGUgKSApXG4gICAgICA6IGJ1ZmZlclNpemU7XG5cbiAgICBpZiAoIHRoaXMuX19jaHVua0hlYWQgPT09IDAgKSB7XG4gICAgICB0aGlzLl9fcHJlcGFyZUJ1ZmZlciggYmVhdE1hbmFnZXJVcGRhdGVFdmVudCApO1xuICAgIH1cblxuICAgIC8vIGluc2VydCBpbnRvIGl0cyBhdWRpbyBidWZmZXJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBiZWdpbk5leHQ7IGkgKysgKSB7XG4gICAgICBjb25zdCBjaHVua0luZGV4ID0gdGhpcy5fX2NodW5rSGVhZCAqIHRoaXMuX19idWZmZXJTaXplICogMjtcblxuICAgICAgb3V0TFsgaSBdID0gdGhpcy5fX3BpeGVsQnVmZmVyWyBjaHVua0luZGV4ICsgaSAqIDIgKyAwIF07XG4gICAgICBvdXRSWyBpIF0gPSB0aGlzLl9fcGl4ZWxCdWZmZXJbIGNodW5rSW5kZXggKyBpICogMiArIDEgXTtcbiAgICB9XG5cbiAgICAvLyBwcm9jZXNzIHRoZSBuZXh0IHByb2dyYW0/P1xuICAgIGlmICggYmVnaW5OZXh0ICE9PSBidWZmZXJTaXplICkge1xuICAgICAgdGhpcy5fX3NldEN1ZVN0YXR1cyggJ25vbmUnICk7XG5cbiAgICAgIGlmICggdGhpcy5fX3Byb2dyYW1DdWUgKSB7XG4gICAgICAgIGNvbnN0IHByZXZQcm9ncmFtID0gdGhpcy5fX3Byb2dyYW07XG4gICAgICAgIHRoaXMuX19wcm9ncmFtID0gdGhpcy5fX3Byb2dyYW1DdWU7XG5cbiAgICAgICAgaWYgKCBwcmV2UHJvZ3JhbSApIHtcbiAgICAgICAgICBwcmV2UHJvZ3JhbS5wcm9ncmFtLmRpc3Bvc2UoIHRydWUgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcHJvZ3JhbUN1ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIHRoaXMuX19wcmVwYXJlQnVmZmVyKCBiZWF0TWFuYWdlclVwZGF0ZUV2ZW50ICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19jaHVua0hlYWQgPSAwO1xuXG4gICAgICAvLyBpbnNlcnQgaW50byBpdHMgYXVkaW8gYnVmZmVyXG4gICAgICBmb3IgKCBsZXQgaSA9IGJlZ2luTmV4dDsgaSA8IGJ1ZmZlclNpemU7IGkgKysgKSB7XG4gICAgICAgIG91dExbIGkgXSA9IHRoaXMuX19waXhlbEJ1ZmZlclsgaSAqIDIgKyAwIF07XG4gICAgICAgIG91dFJbIGkgXSA9IHRoaXMuX19waXhlbEJ1ZmZlclsgaSAqIDIgKyAxIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NodW5rSGVhZCA9ICggdGhpcy5fX2NodW5rSGVhZCArIDEgKSAlIHRoaXMuX19jaHVua1NpemU7XG5cbiAgICAvLyBlbWl0IGFuIGV2ZW50XG4gICAgdGhpcy5fX2VtaXQoICdwcm9jZXNzJyApO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3ByZXBhcmVCdWZmZXIoIGV2ZW50OiBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50ICk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWUsXG4gICAgICBiZWF0LFxuICAgICAgYmFyLFxuICAgICAgc2l4dGVlbkJhcixcbiAgICAgIGJwbVxuICAgIH0gPSBldmVudDtcbiAgICBjb25zdCBiZWF0U2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNCZWF0U2Vjb25kcyggYnBtICk7XG4gICAgY29uc3QgYmFyU2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNCYXJTZWNvbmRzKCBicG0gKTtcbiAgICBjb25zdCBzaXh0ZWVuQmFyU2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNTaXh0ZWVuQmFyU2Vjb25kcyggYnBtICk7XG4gICAgY29uc3QgeyBzYW1wbGVSYXRlLCBfX2J1ZmZlclNpemU6IGJ1ZmZlclNpemUsIF9fY2h1bmtTaXplOiBjaHVua1NpemUgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5fX2dsQ2F0O1xuXG4gICAgLy8gcmVuZGVyXG4gICAgaWYgKCB0aGlzLl9fcHJvZ3JhbSApIHtcbiAgICAgIHRoaXMuX19nbENhdC51c2VQcm9ncmFtKCB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtICk7XG4gICAgICBnbC52aWV3cG9ydCggMCwgMCwgdGhpcy5fX2J1ZmZlclNpemUgLyAyLCB0aGlzLl9fY2h1bmtTaXplICk7XG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoIGdsLkZSQU1FQlVGRkVSLCB0aGlzLl9fZnJhbWVidWZmZXIucmF3ICk7XG4gICAgICBnbC5ibGVuZEZ1bmMoIEdMLk9ORSwgR0wuWkVSTyApO1xuXG4gICAgICB0aGlzLnNhbXBsZXMuZm9yRWFjaCggKCBzYW1wbGUgKSA9PiB7XG4gICAgICAgIHRoaXMuX19wcm9ncmFtIS5wcm9ncmFtLnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlXycgKyBzYW1wbGUubmFtZSwgc2FtcGxlLnRleHR1cmUgKTtcbiAgICAgICAgdGhpcy5fX3Byb2dyYW0hLnByb2dyYW0udW5pZm9ybTRmKFxuICAgICAgICAgICdzYW1wbGVfJyArIHNhbXBsZS5uYW1lICsgJ19tZXRhJyxcbiAgICAgICAgICBzYW1wbGUudGV4dHVyZS53aWR0aCxcbiAgICAgICAgICBzYW1wbGUudGV4dHVyZS5oZWlnaHQsXG4gICAgICAgICAgc2FtcGxlLnNhbXBsZVJhdGUsXG4gICAgICAgICAgc2FtcGxlLmR1cmF0aW9uXG4gICAgICAgICk7XG4gICAgICB9ICk7XG5cbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0uYXR0cmlidXRlKCAncCcsIHRoaXMuX19idWZmZXJRdWFkLCAyICk7XG4gICAgICB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm0xZiggJ2JwbScsIHRoaXMuYnBtICk7XG4gICAgICB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm0xZiggJ19kZWx0YVNhbXBsZScsIDEuMCAvIHNhbXBsZVJhdGUgKTtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0udW5pZm9ybTFmKCAnX2RlbHRhQ2h1bmsnLCB0aGlzLl9fYnVmZmVyU2l6ZSAvIHNhbXBsZVJhdGUgKTtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0udW5pZm9ybTRmKFxuICAgICAgICAndGltZUxlbmd0aCcsXG4gICAgICAgIGJlYXRTZWNvbmRzLFxuICAgICAgICBiYXJTZWNvbmRzLFxuICAgICAgICBzaXh0ZWVuQmFyU2Vjb25kcyxcbiAgICAgICAgMUUxNlxuICAgICAgKTtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0udW5pZm9ybTRmKFxuICAgICAgICAnX3RpbWVIZWFkJyxcbiAgICAgICAgYmVhdCAqIGJlYXRTZWNvbmRzLFxuICAgICAgICBiYXIgKiBiYXJTZWNvbmRzLFxuICAgICAgICBzaXh0ZWVuQmFyICogc2l4dGVlbkJhclNlY29uZHMsXG4gICAgICAgIHRpbWVcbiAgICAgICk7XG5cbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG5cbiAgICAgIC8vIHJlYWQgcGl4ZWxzXG4gICAgICBnbC5mbHVzaCgpO1xuICAgICAgZ2wucmVhZFBpeGVscyhcbiAgICAgICAgMCwgLy8geFxuICAgICAgICAwLCAvLyB5XG4gICAgICAgIGJ1ZmZlclNpemUgLyAyLCAvLyB3aWR0aFxuICAgICAgICBjaHVua1NpemUsIC8vIGhlaWdodFxuICAgICAgICBHTC5SR0JBLCAvLyBmb3JtYXRcbiAgICAgICAgR0wuRkxPQVQsIC8vIHR5cGVcbiAgICAgICAgdGhpcy5fX3BpeGVsQnVmZmVyIC8vIGRzdFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9fc2V0Q3VlU3RhdHVzKCBjdWVTdGF0dXM6ICdub25lJyB8ICdyZWFkeScgfCAnYXBwbHlpbmcnICk6IHZvaWQge1xuICAgIHRoaXMuX19jdWVTdGF0dXMgPSBjdWVTdGF0dXM7XG4gICAgdGhpcy5fX2VtaXQoICdjaGFuZ2VDdWVTdGF0dXMnLCB7IGN1ZVN0YXR1cyB9ICk7XG4gIH1cblxuICBwcml2YXRlIF9fcHJvY2Vzc0Vycm9yTWVzc2FnZSggZXJyb3I6IGFueSApOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBzdHI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGVycm9yPy5tZXNzYWdlO1xuICAgIGlmICggIXN0ciApIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggL0VSUk9SOiAoXFxkKyk6KFxcZCspL2csICggbWF0Y2gsIC4uLmFyZ3MgKSA9PiB7XG4gICAgICBjb25zdCBsaW5lID0gcGFyc2VJbnQoIGFyZ3NbIDEgXSApIC0gc2hhZGVyY2h1bmtQcmVMaW5lcyArIDE7XG4gICAgICByZXR1cm4gYEVSUk9SOiAkeyBhcmdzWyAwIF0gfTokeyBsaW5lIH1gO1xuICAgIH0gKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhdmVuZXJkRGVjayBleHRlbmRzIEV2ZW50RW1pdHRhYmxlPHtcbiAgcHJvY2Vzczogdm9pZDtcbiAgY2hhbmdlQ3VlU3RhdHVzOiB7IGN1ZVN0YXR1czogJ25vbmUnIHwgJ3JlYWR5JyB8ICdhcHBseWluZycgfTtcbiAgbG9hZFNhbXBsZTogeyBuYW1lOiBzdHJpbmc7IHNhbXBsZVJhdGU6IG51bWJlcjsgZHVyYXRpb246IG51bWJlciB9XG4gIGRlbGV0ZVNhbXBsZTogeyBuYW1lOiBzdHJpbmcgfTtcbiAgY2hhbmdlQlBNOiB7IGJwbTogbnVtYmVyIH07XG4gIGVycm9yOiB7IGVycm9yOiBzdHJpbmcgfCBudWxsIH07XG59PiB7fVxuYXBwbHlNaXhpbnMoIFdhdmVuZXJkRGVjaywgWyBFdmVudEVtaXR0YWJsZSBdICk7XG4iLCJleHBvcnQgeyBXYXZlbmVyZERlY2sgfSBmcm9tICcuL1dhdmVuZXJkRGVjayc7XG5cbmltcG9ydCB7IFdhdmVuZXJkRGVjayB9IGZyb20gJy4vV2F2ZW5lcmREZWNrJztcbmV4cG9ydCBkZWZhdWx0IFdhdmVuZXJkRGVjaztcbiIsImV4cG9ydCBjb25zdCBzaGFkZXJjaHVua1ByZSA9IGBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiNkZWZpbmUgX1BJIDMuMTQxNTkyNjUzNTlcblxudW5pZm9ybSBmbG9hdCBicG07XG51bmlmb3JtIHZlYzQgdGltZUxlbmd0aDtcbnVuaWZvcm0gZmxvYXQgc2FtcGxlUmF0ZTtcbnVuaWZvcm0gZmxvYXQgX2RlbHRhU2FtcGxlO1xudW5pZm9ybSBmbG9hdCBfZGVsdGFDaHVuaztcbnVuaWZvcm0gdmVjNCBfdGltZUhlYWQ7XG5cbnZlYzIgc2FtcGxlTmVhcmVzdCggc2FtcGxlcjJEIHMsIHZlYzQgbWV0YSwgZmxvYXQgdGltZSApIHtcbiAgaWYgKCBtZXRhLncgPCB0aW1lICkgeyByZXR1cm4gdmVjMiggMC4wICk7IH1cbiAgZmxvYXQgeCA9IHRpbWUgLyBtZXRhLnggKiBtZXRhLno7XG4gIHZlYzIgdXYgPSBmcmFjdCggdmVjMihcbiAgICB4LFxuICAgIGZsb29yKCB4ICkgLyBtZXRhLnlcbiAgKSApICsgMC41IC8gbWV0YS54eTtcbiAgcmV0dXJuIHRleHR1cmUyRCggcywgdXYgKS54eTtcbn1cblxuLy8gSSBoYXZlIDAlIGNvbmZpZGVuY2UgdGhhdCB0aGUgYWxnb3JpdGhtIGlzIHBlcmZlY3RcbnZlYzIgc2FtcGxlKCBzYW1wbGVyMkQgcywgdmVjNCBtZXRhLCBmbG9hdCB0aW1lICkge1xuICBpZiAoIG1ldGEudyA8IHRpbWUgKSB7IHJldHVybiB2ZWMyKCAwLjAgKTsgfVxuICB2ZWMyIHN1bSA9IHZlYzIoIDAuMCApO1xuICBmbG9hdCBkZWYgPSAwLjUgLSBmcmFjdCggdGltZSAqIG1ldGEueiApO1xuICBmb3IgKCBpbnQgaSA9IC01OyBpIDw9IDU7IGkgKysgKSB7XG4gICAgZmxvYXQgeCA9IGZsb29yKCB0aW1lICogbWV0YS56ICsgZmxvYXQoIGkgKSApIC8gbWV0YS54O1xuICAgIGZsb2F0IGRlZnQgPSBkZWYgKyBmbG9hdCggaSApO1xuICAgIHZlYzIgdXYgPSBmcmFjdCggdmVjMihcbiAgICAgIHgsXG4gICAgICBmbG9vciggeCApIC8gbWV0YS55XG4gICAgKSApICsgMC41IC8gbWV0YS54eTtcbiAgICBzdW0gKz0gdGV4dHVyZTJEKCBzLCB1diApLnh5ICogbWluKCBzaW4oIGRlZnQgKiBfUEkgKSAvIGRlZnQgLyBfUEksIDEuMCApO1xuICB9XG4gIHJldHVybiBzdW07XG59XG5gO1xuXG5leHBvcnQgY29uc3Qgc2hhZGVyY2h1bmtQcmVMaW5lcyA9IHNoYWRlcmNodW5rUHJlLnNwbGl0KCAnXFxuJyApLmxlbmd0aDtcblxuZXhwb3J0IGNvbnN0IHNoYWRlcmNodW5rUG9zdCA9IGB2b2lkIG1haW4oKSB7XG4gIGZsb2F0IG9mZiA9IGZsb29yKCBnbF9GcmFnQ29vcmQueCApICogMi4wO1xuICB2ZWM0IGhlYWQgPSBfdGltZUhlYWQgKyBfZGVsdGFDaHVuayAqIGZsb29yKCBnbF9GcmFnQ29vcmQueSApO1xuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KFxuICAgIG1haW5BdWRpbyggbW9kKCBoZWFkICsgKCBvZmYgKSAqIF9kZWx0YVNhbXBsZSwgdGltZUxlbmd0aCApICksXG4gICAgbWFpbkF1ZGlvKCBtb2QoIGhlYWQgKyAoIG9mZiArIDEuMCApICogX2RlbHRhU2FtcGxlLCB0aW1lTGVuZ3RoICkgKVxuICApO1xufWA7XG4iLCIvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5d2VyL3R5cGVkLWVtaXR0ZXIvYmxvYi9tYXN0ZXIvaW5kZXguZC50c1xuXG5leHBvcnQgdHlwZSBFdmVudExpc3RlbmVyPFQ+ID0gKCBldmVudDogVCApID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0YWJsZTxURXZlbnRzIGV4dGVuZHMgeyBbIHR5cGU6IHN0cmluZyBdOiBhbnkgfT4ge1xuICBwcm90ZWN0ZWQgX19ldmVudExpc3RlbmVycz86IE1hcDxrZXlvZiBURXZlbnRzLCBFdmVudExpc3RlbmVyPGFueT5bXT47XG5cbiAgcHVibGljIG9uPFRUeXBlIGV4dGVuZHMga2V5b2YgVEV2ZW50cyAmIHN0cmluZz4oXG4gICAgdHlwZTogVFR5cGUsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8VEV2ZW50c1sgVFR5cGUgXT5cbiAgKTogRXZlbnRMaXN0ZW5lcjxURXZlbnRzWyBUVHlwZSBdPiB7XG4gICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzID0gdGhpcy5fX2V2ZW50TGlzdGVuZXJzIHx8IG5ldyBNYXAoKTtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMuZ2V0KCB0eXBlICk7XG4gICAgaWYgKCAhYXJyYXkgKSB7XG4gICAgICBhcnJheSA9IFtdO1xuICAgICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzLnNldCggdHlwZSwgYXJyYXkgKTtcbiAgICB9XG5cbiAgICBhcnJheS5wdXNoKCBsaXN0ZW5lciApO1xuXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9XG5cbiAgcHVibGljIG9mZjxUVHlwZSBleHRlbmRzIGtleW9mIFRFdmVudHMgJiBzdHJpbmc+KFxuICAgIHR5cGU6IFRUeXBlLFxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyPFRFdmVudHNbIFRUeXBlIF0+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX19ldmVudExpc3RlbmVycyA9IHRoaXMuX19ldmVudExpc3RlbmVycyB8fCBuZXcgTWFwKCk7XG4gICAgbGV0IGFycmF5ID0gdGhpcy5fX2V2ZW50TGlzdGVuZXJzLmdldCggdHlwZSApO1xuICAgIGlmICggIWFycmF5ICkge1xuICAgICAgYXJyYXkgPSBbXTtcbiAgICAgIHRoaXMuX19ldmVudExpc3RlbmVycy5zZXQoIHR5cGUsIGFycmF5ICk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKCBsaXN0ZW5lciApO1xuICAgIGlmICggaW5kZXggIT09IC0xICkge1xuICAgICAgYXJyYXkuc3BsaWNlKCBpbmRleCwgMSApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfX2VtaXQ8VFR5cGUgZXh0ZW5kcyBrZXlvZiBURXZlbnRzPihcbiAgICAuLi5bIHR5cGUsIGV2ZW50IF06IFRFdmVudHNbIFRUeXBlIF0gZXh0ZW5kcyB2b2lkID8gWyBUVHlwZSBdIDogWyBUVHlwZSwgVEV2ZW50c1sgVFR5cGUgXSBdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuX19ldmVudExpc3RlbmVycyA9IHRoaXMuX19ldmVudExpc3RlbmVycyB8fCBuZXcgTWFwKCk7XG4gICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzLmdldCggdHlwZSApPy5mb3JFYWNoKCAoIGxpc3RlbmVyICkgPT4gbGlzdGVuZXIoIGV2ZW50ICkgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWl4aW5zKCBkZXJpdmVkQ3RvcjogYW55LCBiYXNlQ3RvcnM6IGFueVtdICk6IHZvaWQge1xuICBiYXNlQ3RvcnMuZm9yRWFjaCggKCBiYXNlQ3RvciApID0+IHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggYmFzZUN0b3IucHJvdG90eXBlICkuZm9yRWFjaCggKCBuYW1lICkgPT4ge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICBkZXJpdmVkQ3Rvci5wcm90b3R5cGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIGJhc2VDdG9yLnByb3RvdHlwZSwgbmFtZSApIVxuICAgICAgKTtcbiAgICB9ICk7XG4gIH0gKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtb2QoIHZhbHVlOiBudW1iZXIsIGRpdmlzb3I6IG51bWJlciApOiBudW1iZXIge1xuICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKCB2YWx1ZSAvIGRpdmlzb3IgKSAqIGRpdmlzb3I7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9