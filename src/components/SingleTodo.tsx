import React from 'react';
import { Todo } from '../models/model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {
	return (
		<form className='todos__single'>
			<span className='todos__single--text'>{todo.todo}</span>
			<div>
				<span className='icon'>
					<AiFillEdit />
				</span>
				<span className='icon'>
					<AiFillDelete />
				</span>
				<span className='icon'>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
