# _glimmerx-apollo-ssr-issue
SSR issue reproduction for glimmerx-apollo


## how to check?

```
yarn
```


1.) Start common app

`yarn dev`;

check `http://localhost:3000/`, template content should exits

2.) Start ssr mode

`yarn ssr`;

See terminal or browser errors;

``Cannot read property 'getCapabilities' of undefined``

3.) open src\entry-server.ts

Uncomment:
```js
// import App from './AppNoApollo';
```
Comment:
```js
import App from './App';
```

to ensure that SSR working without glimmer-apollo