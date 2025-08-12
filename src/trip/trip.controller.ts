import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TripService } from './trip.service';

@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  findAll() {
    return this.tripService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripService.findOne(+id);
  }

  @Post()
  create(@Body() data: any) {
    return this.tripService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.tripService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tripService.delete(+id);
  }
}
