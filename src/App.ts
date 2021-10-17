import { hbs } from '@glimmerx/component';
import Component from '@glimmer/component';
import setupApolloClient from './config/apollo';
import { useQuery, gql } from 'glimmer-apollo';

export type RepoNode = {
    description: string;
    id: string;
    name: string;
};

type IListOfRepositoriesQuery = {
    repositoryOwner: {
        login: string;
        repositories: {
            nodes: RepoNode[]
        }
    }
};


const ListOfRepositoriesQuery = gql`
    query ListOfRepositories($login: String!) {
        repositoryOwner(login: $login) {
            login
            repositories(last: 20) {
            nodes {
                description
                id
                name
            }
            }
        }
    }
`;



export default class App extends Component<{}> {
  constructor(owner: any, args: Record<string, unknown>) {
    // @ts-ignore
    super(owner, args);
    setupApolloClient(this);
  }

    query = useQuery<IListOfRepositoriesQuery>(this, () => [
        ListOfRepositoriesQuery,
        {
            variables: { login: "wycats" },
            onComplete: (): void => {
                // on complete
            }
        }
    ]);

    get isLoading() {
        return this.query.loading;
    }

    get isError() {
        return this.query.error;
    }

    get repos() {
        return this.query.data?.repositoryOwner.repositories.nodes ?? [];
    }

  
  static template = hbs`
    {{#if this.isLoading}}
        Loading
    {{else if this.isError}}
        Error
    {{/if}}

    Repos: {{this.repos.length}}
  `
}
