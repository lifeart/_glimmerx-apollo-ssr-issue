import { renderToString } from '@glimmerx/ssr';

import App from './App';
// import App from './AppNoApollo';


export function  render() {
    return renderToString(App, {
        rehydrate: false,
    });
}

