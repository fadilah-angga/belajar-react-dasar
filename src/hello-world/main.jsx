import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';
import Container from './Container';
import TodoList from '../todolist/TodoList';
import Table from '../table/Table';
import AlertButton from '../button/AlertButton';
import MyButton from '../button/MyButton';

createRoot(document.getElementById('root'))
.render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <TodoList/>
            <Table/>

            <AlertButton text="Click Me!" message="You Click Me"/>

            <MyButton text="Smash Me!" onSmash={() => alert('You Smash Me')} />
            <MyButton text="Hit Me!" onSmash={() => alert('You Hit Me')} />
        </Container>
    </StrictMode>
)