import React from 'react';
import Editor from '../Components/Editor';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String!) {
    createNote(title: $title, content: $content) @client {
      id
    }
  }
`;

export default ({ history: { push } }) => {
  const [createNoteMutation] = useMutation(ADD_NOTE);

  const _onSave = async (title, content) => {
    if (title !== '' && content !== '') {
      await createNoteMutation({ variables: { title, content } });
      push('/');
    }
  };

  return <Editor onSave={_onSave} />;
};
