export const environment = {
  production: true,
  backend: {
    api: '79D7E6EC-8D40-9517-FF1C-7D7E55445200',
    app: '94A856A0-1E32-CE0D-FFFC-0D7EC278E500'
  },
  services: {
    users: `https://api.backendless.com/${this.backend.app}/${this.backend.api}/services/users/`,
    tasks: `https://api.backendless.com/${this.backend.app}/${this.backend.api}/services/tasks/`,
    lists: `https://api.backendless.com/${this.backend.app}/${this.backend.api}/services/lists/`
  }
};
