import React, { forwardRef } from 'react'

import './Input.scss'

type InputLabelProps = React.ComponentProps<'input'> & React.ComponentProps<'label'>;

interface AdvancedInputProps extends InputLabelProps { labelPosition?: 'top' | 'bottom', labelText?: string, };

const Input = forwardRef((props: AdvancedInputProps, ref: React.Ref<HTMLInputElement>) => {

	const label = <label htmlFor={props.id}>{props.labelText}</label>

	return (
		<div className='input'>
			{props.labelPosition === 'top' ? label : null}
			<input ref={ref} type={props.type ? props.type : 'text'} id={props.id} placeholder={props.placeholder} />
			{props.labelPosition === 'bottom' ? label : null}
		</div>
	)
})

export default Input