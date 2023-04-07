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
      dts: 'resources/js/types/auto-imports.d.ts',
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
      dirs: [
        'resources/js/Components',
        'resources/js/Layouts',
      ],
      dts: 'resources/js/types/components.d.ts',
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
      input: 'resources/js/app.ts',
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
