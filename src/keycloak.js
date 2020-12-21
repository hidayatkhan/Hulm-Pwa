import keycloak from "keycloak-js"
const keycloakConfig={
    url:'http://localhost:8180/auth',
    realm:'Demo',
    clientId:'React-app'
    
}
const Keycloak = new keycloak(keycloakConfing)
export default keycloak;