import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { HaBalloonsService } from "./ha-balloons.service";

@Controller('haballoons')
export class HaBalloonsController {
    constructor(private readonly haBalloonsService: HaBalloonsService){}

    @Post()
    addHaBalloon(
        @Body('label') label: string, 
        @Body('size') size: number, 
        @Body('passengersNumber') passengersNumber: number,
        @Body('color') color: string
        ) {
            const generatedId = this.haBalloonsService.addHaBalloon(label, size, passengersNumber, color);
            return { id: generatedId };
        }

    
    @Get()
    getAllHaBalloons(){
       return this.haBalloonsService.getHaBalloons();
    }


    @Get(':id')
    getHaBalloonById(@Param('id') haBalloonId: number){
        return this.haBalloonsService.getHaBalloonById(haBalloonId);
    }
    

    @Patch(':id')
    updateHaBalloon(@Param('id') haBalloonId: number, 
                    @Body('label') label: string, 
                    @Body('size') size: number, 
                    @Body('passengersNumber') passengersNumber: number, 
                    @Body('color') color: string){

        return this.haBalloonsService.updateHaBalloon(haBalloonId, label,size, passengersNumber, color);                       

    }


    @Delete(':id')
    removeHaBalloon(@Param('id')haBalloonId: number){
        this.haBalloonsService.deleteHaBalloon(haBalloonId);
        return true;
    }
}