import React from 'react'
import './SubmitBtn.scss'


type BtnProps = React.ComponentProps<'button'>;

type AdvancedBtnProps = BtnProps;

const SubmitBtn = ({ children }: AdvancedBtnProps) => {
	return (
		<button className='submit-btn'>{children}</button>
	)
}

export default SubmitBtn