import { NOTE_FRAGMENT } from './fragments';
import { GET_NOTES } from './queries';

export const defaults = {
  notes: [
    {
      __typename: 'Note',
      id: 1,
      title: 'First',
      content: 'Second'
    }
  ]
};

export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    notes: [Note]!
    note(id: Int!) : Note
  }
  type Mutation {
    createNote(title: String!, content:String!):Note
    editNote(id:Int!, title:String!, content: String!):Note
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
  `
];

export const resolvers = {
  Query: {
    note: (_, { id }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: 'Note',
        id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: noteId });
      return note;
    }
  },
  Mutation: {
    createNote: (_, { title, content }, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const newNote = {
        __typename: 'Note',
        title,
        content,
        id: notes.length + 1
      };
      cache.writeData({
        data: {
          notes: [...notes, newNote]
        }
      });
      return newNote;
    },
    editNote: (_, { id, title, content }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: 'Note',
        id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: noteId });
      const updatedNote = {
        ...note,
        title,
        content
      };
      cache.writeFragment({
        id: noteId,
        fragment: NOTE_FRAGMENT,
        data: updatedNote
      });
      return updatedNote;
    }
  }
};
