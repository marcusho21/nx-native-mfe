# Notes

## Conclusion:

After our experiment, it appears that the Nx framework and the Native Federation Vite plugin do not integrate well, consistently encountering issues when generating the crucial 'remoteEntry.json' file required for using Native Federation. Additionally, Nx seems to depend on commonJS (cjs), and it's uncertain when it will transition from cjs to ECMAScript modules (esm) to fully support Vite. Interestingly, Angular is the only framework that seamlessly utilizes Native Federation with Vite and esbuild, thanks to a dedicated package.

Conversely, without Nx, we successfully implemented Vite and Native Federation in an independent Vue micro-frontend project using 'customElement.' We encapsulated the entire Vue application within web components to simplify the integration of various frameworks.

Here are a few options we're considering:

Abandon esbuild and Native Federation in favor of Webpack and Module Federation, which contradicts our goal of avoiding outdated build tools.
Explore alternatives to Nx for monorepo management; currently, 'pnpm workspace' is our top candidate.
Adopt a polyrepo architecture to establish standardized workflows and processes for managing shared dependencies across all projects.
Option 2 seems most promising, and we plan to conduct a proof of concept (POC) to further explore the capabilities of 'pnpm workspace.'

## Reference

- to run `ng` just replace it with `nx`
  - eg. `ng g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote` -> `nx g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote`

- Native Federation, @angular/elements and routing setup:
  - <https://www.npmjs.com/package/@angular-architects/native-federation>
  - <https://www.angulararchitects.io/en/blog/micro-frontends-with-modern-angular-part-1-standalone-and-esbuild/>
  - <https://www.angulararchitects.io/en/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components/>

- to run the projects:
  1. Run `nx run mfe-app:serve`
  2. Open a separate terminal
  3. Run `nx run shell:serve`

- To add application DO NOT use any of the module federation nx generator, only use the regular Angular ones, like `application`
- SSR is a bit wonky and this isn't the first priority of this POC so adding it to backlog.
