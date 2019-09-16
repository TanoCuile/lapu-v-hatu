import { Module } from '@nestjs/common';
import { CompanyService } from './services/company/company.service';

@Module({
  providers: [CompanyService]
})
export class CompanyModule {}
