import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrgService } from './org.service';
import { Organisation } from '@prisma/client';

@Controller('org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  @Get(':id')
  async getAllOrgs(@Param('id') id: string): Promise<Organisation[]> {
    return await this.orgService.getAllOrgs(id);
  }

  @Post()
  async createOrg(@Body() org: Organisation) {
    return await this.orgService.createOrg(org);
  }
}
