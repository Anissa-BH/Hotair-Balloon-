import { Injectable, NotFoundException } from "@nestjs/common";
import { stringify } from "querystring";
import { HaBalloon } from "./ha-balloon.model";

@Injectable()
export class HaBalloonsService {
    private haBalloons: HaBalloon[] = [];

    addHaBalloon(label: string, size: number,  passengersNumber: number,  color: string){
        const haBalloonId = Date.now();
        const newHaBalloon = new HaBalloon(haBalloonId, label, size, passengersNumber, color);
        this.haBalloons.push(newHaBalloon);
        return haBalloonId;
    }

    getHaBalloons(){
        return [...this.haBalloons];
    }

    getHaBalloonById(haBalloonId: number){
        const haBalloon = this.findHaBalloon(haBalloonId)[0];
        return {...haBalloon};        
    }

    updateHaBalloon(haBalloonId: number, 
                    label: string, 
                    size: number, 
                    passengersNumber: number, 
                    color: string){
        const [haBalloon, index] = this.findHaBalloon(haBalloonId); 
        let updatedHaBalloon = {...haBalloon};        
        if(label){
            updatedHaBalloon.label = label;
        } 
        if(size){
            updatedHaBalloon.size = size;
        }
        if(passengersNumber){
            updatedHaBalloon.passengersNumber = passengersNumber;
        }
        if(color){
            updatedHaBalloon.color = color;
        }  
         this.haBalloons[index] = updatedHaBalloon;
       
        return updatedHaBalloon;
    }


    deleteHaBalloon(haBalloonId: number){
        const index = this.findHaBalloon(haBalloonId)[1]; 
        this.haBalloons.splice(index, 1);
    }


    private findHaBalloon(id: number): [HaBalloon, number]{
        const haBalloonIndex = this.haBalloons.findIndex(hab => hab.id === id); 
        const haBalloon = this.haBalloons[haBalloonIndex];
        if(!haBalloon){
            new NotFoundException('Could not found haBalloon');
        }
        return [haBalloon, haBalloonIndex];
    }

}