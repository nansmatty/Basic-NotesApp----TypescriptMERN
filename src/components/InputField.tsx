import { useRef } from 'react';
import './styles.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			className='input'
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}>
			<input
				type='text'
				ref={inputRef}
				value={todo}
				placeholder='Enter a task'
				className='input__box'
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className='input_submit' type='submit'>
				GO
			</button>
		</form>
	);
};

export default InputField;
