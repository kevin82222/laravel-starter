import './bootstrap'
import '../css/app.css'

import type { DefineComponent } from 'vue'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { trail } from 'momentum-trail'
import routes from './routes.json'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

/* eslint-disable-next-line @typescript-eslint/no-floating-promises */
createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`../views/pages/${name}.vue`, import.meta.glob<DefineComponent>('../views/pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(trail, { routes })
      .mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})
