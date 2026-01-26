import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoanModule } from './loan/loan.module';
import { LoanDetailModule } from './loandetail/loan-detail.module';
import { AuthModule } from './auth/auth.module';
import { ReturnModule } from './return/return.module';

@Module({
  imports: [
    PrismaModule,
    BooksModule,
    MembersModule,
    LoanModule,
    LoanDetailModule,
    AuthModule,
    ReturnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
