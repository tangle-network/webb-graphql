import {ConsoleLogger, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BridgeModule } from './bridge/bridge.module';
import { PricingModule } from './pricing/pricing.module';
import {SubgraphModule} from "./subgraph/subgraph.module";
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'gql/graphql.ts'),

      },
    }),
    BridgeModule,
    PricingModule,
    SubgraphModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
