import gql from 'graphql-tag';
import { NOTE_FRAGMENT } from './fragments';

export const GET_NOTES = gql`
  {
    notes @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;

export const GET_NOTE = gql`
  query getNote($id: Int!) {
    note(id: $id) @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;

export const EDIT_NOTE = gql`
  mutation editNote($id: Int!, $title: String!, $content: String!) {
    editNote(id: $id, title: $title, content: $content) @client {
      id
    }
  }
`;
