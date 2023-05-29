import {Query, Resolver} from '@nestjs/graphql';

@Resolver('VAnchorDayData')
export class DayDataResolve {


  @Query('daydata')
  public queryDayData(){}
}

