import { Query, Resolver, Args } from '@nestjs/graphql';
import { DayDataService } from './day-data.service';
import { BridgesDayDataInput, DayData } from '../../gql/graphql';

@Resolver('VAnchorDayData')
export class DayDataResolve {
  constructor(private readonly dayDataService: DayDataService) {}

  @Query('bridgesDayData')
  public bridgesDayData(
    @Args('filter') filterInput?: BridgesDayDataInput,
  ): Promise<DayData[]> {
    return this.dayDataService.bridgesDayData(filterInput);
  }

  @Query('bridgeDayData')
  public bridgeDayData(@Args('bridgeId') bridgeId: string): Promise<DayData> {
    return this.dayDataService.bridgeDayData(bridgeId);
  }

  @Query('bridgeSideDayData')
  public bridgeSideDayData(
    @Args('bridgeId') bridgeId: string,
    @Args('network') network: string,
  ): Promise<DayData> {
    return this.dayDataService.bridgeSideDayDataByNetworkName(
      bridgeId,
      network,
    );
  }
}
