import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_NOTE } from '../queries';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const TitleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button``;

export default ({
  match: {
    params: { id }
  }
}) => {
  const { data, loading } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <>loading...</>;

  const { note } = data;

  return (
    <>
      <TitleComponent>
        <Title>{note.title}</Title>
        <Link to={`/edit/${note.id}`}>
          <Button>Edit</Button>
        </Link>
      </TitleComponent>
      <ReactMarkdown source={note.content} />
    </>
  );
};
