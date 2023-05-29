import {Query, Resolver} from '@nestjs/graphql';
import {DayDataService} from "./day-data.service";

@Resolver('VAnchorDayData')
export class DayDataResolve {


  constructor(private readonly dayDataService:DayDataService) {
  }

  @Query('dayData')
  public queryDayData(){
    return this.dayDataService.bridgeDayData()
  }
}

