import {  FungibleTokenWrapper } from '../../generated/templates'
import {DataSourceContext} from "@graphprotocol/graph-ts";

export function handleNewExchange(event:FungibleTokenWrapper ): void {
  let context = new DataSourceContext()
  context.setString('tradingPair', event.params.tradingPair)
  FungibleTokenWrapper.createWithContext(event.params.exchange, context)
}
