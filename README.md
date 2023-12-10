# Notes

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
