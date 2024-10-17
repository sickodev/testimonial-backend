import { Controller, Get, Param } from '@nestjs/common';
import { OrgService } from './org.service';
import { Organisation } from '@prisma/client';

@Controller('org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  @Get()
  async getAllOrgs(@Param('id') id: string): Promise<Organisation[]> {
    return this.orgService.getAllOrgs(id);
  }
}
