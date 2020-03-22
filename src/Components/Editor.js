import React from 'react';
import styled from 'styled-components';
import MarkdownRenderer from 'react-markdown-renderer';
import TextareaAutosize from 'react-textarea-autosize';
import useInput from '../Hooks/useInput';

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

export default ({ id, title, content, onSave }) => {
  const noteTitle = useInput(title || '');
  const noteContent = useInput(content || '');
  const noteId = useInput(id || null);
  return (
    <>
      <TitleContainer>
        <TitleInput
          placeholder={'Untitled....'}
          name={'title'}
          {...noteTitle}
        />
        <Button
          onClick={() =>
            onSave(noteTitle.value, noteContent.value, noteId.value)
          }>
          Save
        </Button>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          placeholder={'# This supports markdown!'}
          name={'content'}
          {...noteContent}
        />
        <MarkdownRenderer markdown={noteContent.value} className={'markdown'} />
      </ContentPreview>
    </>
  );
};
