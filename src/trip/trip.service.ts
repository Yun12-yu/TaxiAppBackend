import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TripService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.trip.findMany();
  }

  findOne(id: number) {
    return this.prisma.trip.findUnique({ where: { id } });
  }

  create(data: any) {
    return this.prisma.trip.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.trip.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.trip.delete({ where: { id } });
  }
}
