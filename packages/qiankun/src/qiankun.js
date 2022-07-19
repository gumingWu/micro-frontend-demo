import { registerMicroApps, start } from 'qiankun';

export function useQiankun() {
  registerMicroApps([
    {
      name: 'app1',
      entry: '//localhost:3333',
      container: '#container',
      activeRule: '/app1'
    },
    {
      name: 'app2',
      entry: '//localhost:4444',
      container: '#container',
      activeRule: '/app2'
    },
  ])
  
  start()
}