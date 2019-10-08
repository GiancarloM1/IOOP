import { Drive } from "./drive";

export class HardDisk implements Drive {
        
    public write() : void{
        console.log("Classe HardDisk método write")
    }

    public read() : void{
        console.log("Classe HardDisk método read")
    }

    public delete() : void{
        console.log("Classe HardDisk método delete")
    }
}