import React, { useState } from 'react';

//* Styled compoents 
import { FullBackground } from '../../styled-components/FullBackground';
import { NanoFlex } from '../../styled-components/helpers';
//* Helpers import
import uuid from "uuid/v1";
//* MDBReact imports
import {MDBCard, MDBCardHeader, MDBCardBody} from "mdbreact"

//* Component imports
import CreateTodo from '../../components/CreateTodo';

//* types imports
import { Todo } from '../../types/todo';

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>();
  const addTodo = (text: string) => {
    if(todos?.find(todo => todo.text === text)) {
        return;
    }
    const todo: Todo = {
        done: false,
        edit: false,
        id: uuid()
    }
  }
  return (
    <FullBackground>
        <NanoFlex>
            <MDBCard>
                <MDBCardHeader>
                    <CreateTodo /> 
                </MDBCardHeader>
                <MDBCardBody>
                </MDBCardBody>
            </MDBCard>
        </NanoFlex>
    </FullBackground>
  );
}

