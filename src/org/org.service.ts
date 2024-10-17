import { Injectable } from '@nestjs/common';
import { Organisation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrgService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllOrgs(id: string): Promise<Organisation[]> {
    const orgs: Organisation[] = await this.prismaService.organisation.findMany(
      {
        where: {
          ownerId: id,
        },
      },
    );

    return orgs;
  }
}
