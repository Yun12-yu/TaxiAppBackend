import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.driver.findMany();
  }
}
