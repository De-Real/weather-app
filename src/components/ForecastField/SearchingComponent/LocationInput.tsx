import React, {
	useRef,
	useContext
} from 'react'
import { useNavigate } from 'react-router-dom';
import searchContext from '../../../context/search-ctx';
import { addDash } from '../../../util/dashChanger';
import Input from '../../UI/Input'
import SubmitBtn from '../../UI/SubmitBtn'

const LocationInput = () => {

	const inputRef = useRef<HTMLInputElement>(null);

	const ctx = useContext(searchContext);

	const navigate = useNavigate();

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (inputRef.current?.value) {
			ctx.changeValue(inputRef.current.value)
			navigate(`/home/${addDash(inputRef.current.value.toLowerCase())}`);
		}
	}

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<Input ref={inputRef} labelPosition='top' id='search-city-input' labelText='Enter the name of population point, country or region' placeholder='Enter city...' />
				<SubmitBtn> See forecast </SubmitBtn>
			</form>
		</div>
	)
}

export default LocationInput