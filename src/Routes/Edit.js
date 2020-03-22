import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_NOTE, EDIT_NOTE } from '../queries';
import Editor from '../Components/Editor';

export default ({
  match: {
    params: { id }
  },
  history: { push }
}) => {
  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });
  const [editNote] = useMutation(EDIT_NOTE);

  const _onSave = async (title, content, id) => {
    if (title !== '' || content !== '' || id) {
      await editNote({ variables: { id, title, content } });
      push(`/`);
    }
  };
  if (loading) return 'Loading...';
  if (error) return 'Error!!';

  const { note } = data;
  return <Editor {...note} onSave={_onSave} />;
};
