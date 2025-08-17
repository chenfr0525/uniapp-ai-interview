import App from './App'
import pinia from './store/index.js'

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app
  }
}