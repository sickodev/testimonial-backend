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
        include: {
          testimonials: true,
        },
      },
    );

    return orgs;
  }

  async getOrg(id: number) {}

  async createOrg(org: Organisation) {
    const newOrg = await this.prismaService.organisation.create({
      data: {
        name: org.name,
        slug: org.slug,
        pictureURL: org.pictureURL,
        website: org.website,
        owner: {
          connect: {
            id: org.ownerId,
          },
        },
        testimonials: {
          create: [],
        },
      },
      include: {
        testimonials: true,
      },
    });

    return newOrg;
  }
}
