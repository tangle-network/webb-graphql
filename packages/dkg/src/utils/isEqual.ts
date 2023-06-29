export interface MetricArgs {
  current?: number | string[];
  pending?: number;
  next?: number | string[];
}

/**
 *
 * @param current represent current value to compare
 * @param last represent last value to compare
 * @returns `true` if 2 values are the same otherwise `false`
 */
export const isEqual = (current: MetricArgs, last: MetricArgs) => {
  if (assertMetricArr(current) && assertMetricArr(last)) {
    return isEqualArray(current, last);
  }

  const validValues = [current.current, current.pending, current.next, last.current, last.pending, last.next].every(
    (v) => v !== null && v !== undefined
  );

  const isCurrentEqual = current.current === last.current;
  const isNextEqual = current.next === last.next;
  const isPendingEqual = current.pending === last.pending;

  if (validValues && isCurrentEqual && isNextEqual && isPendingEqual) {
    return true;
  }

  return false;
};

interface MetricArrArgs {
  current: string[];
  next: string[];
}

/**
 *
 * @param val Represent value to assert type to `MetricArrArgs`
 * @returns `boolean` checks whether the `value` is `MetricArrArgs` type or not
 */
function assertMetricArr(val: MetricArgs): val is MetricArrArgs {
  return (
    Array.isArray(val.current) &&
    typeof val.current !== 'number' &&
    Array.isArray(val.next) &&
    typeof val.next !== 'number'
  );
}

/**
 * Compare function if 2 params is `MetricArrArgs` types
 */
function isEqualArray(current: MetricArrArgs, last: MetricArrArgs) {
  const isCurrentEqual =
    current.current.length === last.current.length &&
    current.current.every((v, idx) => v.toString() === last.current[idx].toString());

  const isNextEqual =
    current.next.length === last.next.length &&
    current.next.every((v, idx) => v.toString() === last.next[idx].toString());

  return isCurrentEqual && isNextEqual;
}
