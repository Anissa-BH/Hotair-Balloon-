import { Module } from "@nestjs/common";
import { HaBalloonsController } from "./ha-balloons.controller";
import { HaBalloonsService } from "./ha-balloons.service";

@Module({
    controllers: [HaBalloonsController],
    providers: [HaBalloonsService]
})

export class HaBalloonsModule {}