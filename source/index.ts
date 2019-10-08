import { SO } from "./so";
import { HardDisk } from "./harddisk";
import { SsdDisk } from "./ssdDisk";

let drive = new SsdDisk();
let so = new SO(drive);

so.writeDisc();
so.readDisc();
so.deleteDisc();