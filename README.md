## Personal Laravel Development Environment

This repository contains my personal default Laravel development environment, based on a `laravel new` installation and Laravel Breeze for setting up Inertia.js, Vue.js, TypeScript, and Tailwind CSS. Additionally, it includes some extra configurations and tools. 
Please note: **This default Laravel development environment is based on my personal preferences and is not intended to be a universal setup**.

## Main Features

- [Laravel framework](https://laravel.com/) (version 10.x)
- [Laravel Breeze](https://laravel.com/docs/breeze) (providing [Inertia.js](https://inertiajs.com/), [Vue.js](https://vuejs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/))
- [Laravel Sail](https://laravel.com/docs/sail) (lightweight command-line interface for running Laravel in Docker containers, with [MariaDB](https://mariadb.org/) and [Redis](https://redis.io/))
- [ESLint](https://eslint.org/) (JavaScript code linting and formatting) with [antfu/eslint-config](https://github.com/antfu/eslint-config) (Anthony's ESLint config presets for easy setup)
- [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper) (assisting IDEs in understanding Laravel code structure)
- [Lint-staged](https://github.com/okonet/lint-staged) (code linting before commits)
- [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) (Git hooks to automatically run lint-staged before commits)
- [Vite](https://vitejs.dev/) (next-generation frontend development and build tool)
- Using [pnpm](https://pnpm.io/) instead of npm (faster and more efficient package manager)

## How to Use

1. Clone this repository to your local machine:

```bash
git clone https://github.com/kevin82222/kevin-laravel-starter.git
```

2. Navigate into the project directory:

```bash
cd kevin-laravel-starter
```

3. Set up a Bash alias for Laravel Sail (optional, but recommended). Add the following line to your `~/.bashrc`, `~/.bash_profile`, or `~/.zshrc` file:

```bash
alias sail='sh vendor/bin/sail'
```

Save the file and restart your terminal. You can now use the `sail` command instead of `./vendor/bin/sail`. For more information, please refer to the [official Laravel Sail documentation](https://laravel.com/docs/sail#configuring-a-shell-alias).

4. Start Laravel Sail:

```bash
sail up -d
```

5. Install dependencies:

```bash
sail composer install
pnpm install # because Sail not yet supported pnpm
```

6. Copy the `.env.example` file and rename it to `.env`:

```bash
cp .env.example .env
```

7. Generate an application key:

```bash
sail artisan key:generate
```

8. Run the development environment with Laravel Sail:

```bash
pnpm dev # ...
```

Now you can start developing with this personal default Laravel development environment!

## Contributing

As this is a personal preference project, we might not accept contributions from others. However, feel free to fork this repository and modify it according to your needs.

## License

This repository is released under the [MIT License](LICENSE).
