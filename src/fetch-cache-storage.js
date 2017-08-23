
import Basil from 'basil.js';

export default function fetchCache(namespace) {
  if(!namespace) {
    throw new Error('namespace is required');
  }
  return new Basil({
    namespace: namespace,
    storages: ['local', 'session', 'memory'],
    expireDays: 31,
    keyDelimiter: '.'
  });
}
