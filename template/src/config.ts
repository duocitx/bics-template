export const auth_config = {
  authority: 'https://localhost:44348/account/signin',
  clientId: 'bics_cms',
  clientSecret: 'HJGOO#UHUBGDHG',
  scope: 'openid profile',
  responseType: 'id_token token',
  redirectUri: 'https://localhost:44348/oidc-callback',
  silentRedirectUri: 'https://localhost:44348/oidc-silent-renew',
  popupRedirectUri: ''
};
