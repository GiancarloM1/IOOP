import { Drive } from "./drive";

export class SsdDisk implements Drive{

    public write() : void{
        console.log("Classe SsdDisk método write")
    }

    public read() : void{
        console.log("Classe SsdDisk método read")
    }

    public delete() : void{
        console.log("Classe SsdDisk método delete")
    }
}