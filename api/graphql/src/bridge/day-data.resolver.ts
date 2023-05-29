import { Query, Resolver, Args } from '@nestjs/graphql';
import { DayDataService } from './day-data.service';
import { DayData } from '../../gql/graphql';

@Resolver('VAnchorDayData')
export class DayDataResolve {
  constructor(private readonly dayDataService: DayDataService) {}

  @Query('bridgesDayData')
  public bridgesDayData(): Promise<DayData[]> {
    return this.dayDataService.bridgesDayData();
  }

  @Query('bridgeDayData')
  public bridgeDayData(@Args('bridgeId') bridgeId: string): Promise<DayData> {
    return this.dayDataService.bridgeSideDayData(bridgeId);
  }
}
