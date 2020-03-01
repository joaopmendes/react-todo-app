import React from 'react';
import { CreateTodoWrapper } from '../styled-components/CreateTodo';
import { MDBInput } from 'mdbreact';

export default function CreateTodo() {
  return (
    <CreateTodoWrapper>
        <MDBInput label={"What todo?"}/>
    </CreateTodoWrapper>
  );
}
