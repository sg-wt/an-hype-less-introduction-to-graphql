import { graphql, buildSchema, GraphQLSchema } from 'graphql';

type Human = {
  id: number;
  firstName: string;
  lastName: string;
};

const fakeHumans: Human[] = [
  {
    id: 1,
    firstName: 'Alexis',
    lastName: 'Slawny',
  },
  {
    id: 2,
    firstName: 'Antoine',
    lastName: 'Mille',
  },
];

const schema: GraphQLSchema = buildSchema(`
  type Query {
    human(id: Int!): Human
    humans: [Human]
  }

  type Human {
    id: Int!
    firstName: String!
    lastName: String!
  }
`);

const loadHumanById = (id: number): Human =>
  fakeHumans.find(fakeHuman => fakeHuman.id === id);

const root = {
  human: args => loadHumanById(args.id),
  humans: () => fakeHumans,
};

const query: string = `
  {
    humans {
      firstName
    }
    human(id: 2) {
      firstName
      lastName
    }
  }
`;

graphql(schema, query, root).then(response => {
  console.log(response);
});
