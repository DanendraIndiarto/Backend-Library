import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoanModule } from './loan/loan.module';
import { LoanDetailModule } from './loandetail/loan-detail.module';

@Module({
  imports: [
    PrismaModule,
    BooksModule,
    MembersModule,
    LoanModule,
    LoanDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
