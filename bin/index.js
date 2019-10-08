"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var so_1 = require("./so");
var ssdDisk_1 = require("./ssdDisk");
var drive = new ssdDisk_1.SsdDisk();
var so = new so_1.SO(drive);
so.writeDisc();
so.readDisc();
so.deleteDisc();
