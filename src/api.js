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
exports.__esModule = true;
exports.deleteDocument = exports.addDocument = exports.getDocument = exports.getCollection = exports.getCollectionSnapshot = exports.firestore = exports.firebaseConfig = void 0;
var app_1 = require("firebase/app");
var lite_1 = require("firebase/firestore/lite");
//const analytics = getAnalytics(firebaseApp);
//import { getAnalytics } from "firebase/analytics";
exports.firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
var firebaseApp = (0, app_1.initializeApp)(exports.firebaseConfig);
exports.firestore = (0, lite_1.getFirestore)(firebaseApp);
var getCollectionSnapshot = function (collectionName, documentName) { return __awaiter(void 0, void 0, void 0, function () {
    var document, snapshot;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                document = (0, lite_1.doc)(exports.firestore, collectionName, documentName);
                return [4 /*yield*/, (0, lite_1.getDoc)(document)];
            case 1:
                snapshot = _a.sent();
                if (snapshot.exists()) {
                    return [2 /*return*/, snapshot.data()];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getCollectionSnapshot = getCollectionSnapshot;
var getCollection = function (collectionName) { return __awaiter(void 0, void 0, void 0, function () {
    var storeCollection, snapshots, list_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                storeCollection = (0, lite_1.collection)(exports.firestore, collectionName);
                return [4 /*yield*/, (0, lite_1.getDocs)(storeCollection)];
            case 1:
                snapshots = _b.sent();
                list_1 = Array();
                snapshots.forEach(function (e) { return list_1.push(e.id); });
                return [2 /*return*/, list_1];
            case 2:
                _a = _b.sent();
                return [2 /*return*/, Array()];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCollection = getCollection;
var getDocument = function (collectionName, documentName) { return __awaiter(void 0, void 0, void 0, function () {
    var documentData, result, _i, _a, key, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, exports.getCollectionSnapshot)(collectionName, documentName)];
            case 1:
                documentData = _b.sent();
                if (documentData) {
                    result = {};
                    for (_i = 0, _a = Object.keys(documentData); _i < _a.length; _i++) {
                        key = _a[_i];
                        result[key] = documentData[key];
                    }
                    return [2 /*return*/, result];
                }
                return [3 /*break*/, 3];
            case 2:
                e_1 = _b.sent();
                console.log("firebase", e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getDocument = getDocument;
var addDocument = function (collectionName, documentName, values) { return __awaiter(void 0, void 0, void 0, function () {
    var document_1, documentData, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                document_1 = (0, lite_1.doc)(exports.firestore, collectionName, documentName);
                documentData = Object.keys(values).reduce(function (result, key) {
                    result[key] = values[key];
                    return result;
                }, {});
                return [4 /*yield*/, (0, lite_1.setDoc)(document_1, documentData)];
            case 1:
                _a.sent();
                return [2 /*return*/, true];
            case 2:
                e_2 = _a.sent();
                console.log("firebase", e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, false];
        }
    });
}); };
exports.addDocument = addDocument;
var deleteDocument = function (collectionName, documentName) { return __awaiter(void 0, void 0, void 0, function () {
    var document_2, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                document_2 = (0, lite_1.doc)(exports.firestore, collectionName, documentName);
                return [4 /*yield*/, (0, lite_1.deleteDoc)(document_2)];
            case 1:
                _a.sent();
                return [2 /*return*/, true];
            case 2:
                e_3 = _a.sent();
                console.log("firebase", e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, false];
        }
    });
}); };
exports.deleteDocument = deleteDocument;
exports["default"] = exports.firestore;
