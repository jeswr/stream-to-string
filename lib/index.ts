import { promisifyEventEmitter } from 'event-emitter-promisify';

export default async function stringify(ee: Parameters<typeof promisifyEventEmitter>[0]) {
  let str = '';
  ee.on('data', (chunk: string) => {
    str += chunk;
  });
  await promisifyEventEmitter(ee);
  return str;
}
