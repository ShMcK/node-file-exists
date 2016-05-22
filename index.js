"use strict";
var fs_1 = require('fs');
function fileExists(path, silent) {
    if (silent === void 0) { silent = true; }
    try {
        fs_1.accessSync(path, fs_1.F_OK);
    }
    catch (e) {
        if (e) {
            if (!silent) {
                console.log(e);
            }
            return false;
        }
    }
    return true;
}
exports.__esModule = true;
exports["default"] = fileExists;
