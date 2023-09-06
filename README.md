# Boilerplate and Starter for Next JS 13+, Tailwind CSS 3.3 and TypeScript

![nextjs-typescript-boilerplate](https://socialify.git.ci/Bereyziat-Development/nextjs-typescript-boilerplate/image?language=1&name=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Dark)


`nextjs-typescript-boilerplate` is a pre-configured starter kit for internal developers at Bereyziat Development organization who want to build Next.js applications with TypeScript. It provides a clean project structure with all the necessary dependencies and configurations, so you can start developing your app right away without worrying about the initial setup.

The boilerplate includes pages, components, styles, and assets that follow best practices and internal guidelines. It also comes with helpful scripts and tools for developing, testing, and deploying your app, so you can focus on building high-quality features and delivering value to users.

Whether you're new to Next.js or an experienced developer, `nextjs-typescript-boilerplate` can help you get started quickly and efficiently, and provide a solid foundation for your next project.


### Features

🎯 Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Cypress
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual testing with Percy (Optional)
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Notable Features

- All the Next.js app pages are server side by default. We use pageComponents folder to connect client and server components. This allows us to use react code with custom metdata.
- Nothing is hidden from you, you have all the freedom to make the necessary adjustments to fit your needs and preferences.
- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 16+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/Bereyziat-Development/nextjs-typescript-boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
├── README.md              # README file
├── public                 # Public assets folder
├── src
│   ├── app                # Next.js app folder with sever side pages
│   ├── components         # Reusable components: Shared components.
│   ├── pageComponents     # Client side page components
│   ├── context            # Global context providers
│   ├── shared             # Utility functions and constants
│   ├── assets             # Global styles and images used in the project
│   └── models             # Type definitions and interfaces
├── __mocks__              # Mocks function for testing purposes
├── .github                # GitHub folder for Continuous Integration and Continuous Deployment
├── .husky                 # Husky configuration
├── .vscode                # VSCode configuration
├── next.config.js         # Next.js configuration
├── package.json           # Node.js package manager file
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `app/apple-touch-icon.png`, `public/favicon.ico`, `app/icon1.png` and `app/icon2.png`: your next website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/app-config.ts`: configuration file
- `src/app/layout.tsx`: default theme
- `next-sitemap.config.js`: sitemap configuration

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The universe is the limit my friend 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also remove unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your project is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FBereyziat-Development%2Fnextjs-typescript-boilerplate)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro-tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---
