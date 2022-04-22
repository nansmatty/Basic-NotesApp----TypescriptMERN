import './styles.css';

const InputField: React.FC = () => {
	return (
		<form className='input'>
			<input type='text' placeholder='Enter a task' className='input__box' />
			<button className='input__submit' type='submit'>
				GO
			</button>
		</form>
	);
};

export default InputField;
