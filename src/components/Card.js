import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-light-pink dib br3 pad3 ma2 grow bw-2 shadow-6'>
			<img alt='' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		)
}

export default Card;