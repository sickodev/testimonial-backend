import { Controller } from '@nestjs/common';
import { OrgService } from './org.service';

@Controller('org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  
}
