import { Readable } from 'readable-stream';
import { stringify } from '../lib';

it('stringify should work', () => {
  const ee = Readable.from(['a', 'b', 'c']);
  return expect(stringify(ee)).resolves.toBe('abc');
});
