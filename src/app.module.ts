import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { DbModule } from './modules/db/db.module';

@Module({
  imports: [CompanyModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
