export class HaBalloon {

    id: number;
    label: string;
    size: number;
    passengersNumber: number;
    color: string;

    constructor(id: number, label: string, size: number,  passengersNumber: number,  color: string){
        this.id = id;
        this.label = label;
        this.size = size;
        this.passengersNumber = passengersNumber;
        this.color = color;
    }

}