export const oktaConfig = {
    clientId: '0oabg52vxmltivr2c5d7',
    issuer: 'https://dev-14309690.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}

// Rename