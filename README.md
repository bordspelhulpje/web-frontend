# Bordspelhulpje - web frontend

[![CI](https://github.com/bordspelhulpje/web-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/bordspelhulpje/web-frontend/actions/workflows/ci.yml)

Frontend voor bordspelhulpje.app, geschreven in React.

## Commando's

### `npm start`

Start de applicatie op in development modus.

### `npm test`

Start de test-runner op in interactieve modus.

#### `npm run test:ci`

Start de test-runner op in CI-modus.
Gaat ervan uit dat de `CI` environment-variabele op `true` staat.

### `npm run build`

Produceert een productie-build van de front-end.

### `npm run lint`

Controleert of de code conformeert aan de ingestelde codestijl.

#### `npm run lint:fix`

Probeert automatisch problemen met codestijl op te lossen.

#### `npm run lint:staged`

Controleert alleen code die gestaged is met git.
