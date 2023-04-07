import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    autoImport({
      imports: [
        'vue',
        {
          '@inertiajs/vue3': ['router', 'useForm', 'usePage', 'useRemember'],
        },
      ],
      dts: 'resources/js/types/auto-imports.d.ts',
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
