import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { watch } from 'vite-plugin-watch'

export default defineConfig({
  plugins: [
    autoImport({
      vueTemplate: true,
      dts: 'resources/scripts/types/auto-imports.d.ts',
      imports: [
        'vue',
        {
          '@inertiajs/vue3': ['router', 'useForm', 'usePage', 'useRemember'],
        },
        {
          'momentum-trail': ['route', 'current'],
        },
      ],
    }),
    components({
      dts: 'resources/scripts/types/components.d.ts',
      dirs: [
        'resources/views/components',
        'resources/views/layouts',
      ],
      resolvers: [
        (name) => {
          const components = ['Head', 'Link']
          if (components.includes(name))
            return { name, from: '@inertiajs/vue3' }
        },
      ],
    }),
    watch({
      pattern: 'routes/*.php',
      command: 'php artisan trail:generate',
    }),
    laravel({
      input: 'resources/scripts/app.ts',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
})
