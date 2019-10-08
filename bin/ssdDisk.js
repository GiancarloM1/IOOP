"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SsdDisk = /** @class */ (function () {
    function SsdDisk() {
    }
    SsdDisk.prototype.write = function () {
        console.log("Classe SsdDisk método write");
    };
    SsdDisk.prototype.read = function () {
        console.log("Classe SsdDisk método read");
    };
    SsdDisk.prototype.delete = function () {
        console.log("Classe SsdDisk método delete");
    };
    return SsdDisk;
}());
exports.SsdDisk = SsdDisk;
