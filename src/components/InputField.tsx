import './styles.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
	return (
		<form className='input'>
			<input
				type='text'
				value={todo}
				placeholder='Enter a task'
				className='input__box'
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className='input__submit' type='submit'>
				GO
			</button>
		</form>
	);
};

export default InputField;
