import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { getOrElse } from 'fp-ts/lib/Either';

export const decodeData = <A, O, I>(data: any, codec: t.Type<A, O, I>): A => {
  const result = codec.decode(data);
  return getOrElse<t.Errors, A>(() => {
    throw new Error(PathReporter.report(result).join('\n'));
  })(result);
};
