import { hbs } from '@glimmerx/component';
import Component from '@glimmer/component';

export default class App extends Component<{}> {
    get repos() {
        return [];
    }

  
  static template = hbs`
    Repos: {{this.repos.length}}
  `
}
