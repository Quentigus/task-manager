// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  services: {
    users: `https://api.backendless.com/94A856A0-1E32-CE0D-FFFC-0D7EC278E500/79D7E6EC-8D40-9517-FF1C-7D7E55445200/services/users/`,
    tasks: `https://api.backendless.com/94A856A0-1E32-CE0D-FFFC-0D7EC278E500/79D7E6EC-8D40-9517-FF1C-7D7E55445200/services/tasks/`,
    lists: `https://api.backendless.com/94A856A0-1E32-CE0D-FFFC-0D7EC278E500/79D7E6EC-8D40-9517-FF1C-7D7E55445200/services/lists/`
  }
};
