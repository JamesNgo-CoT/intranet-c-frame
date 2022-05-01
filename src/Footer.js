import React from 'react';

import './styles/footer.scss';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className='intranet-c-frame-footer py-4'>
				<div className='container text-end'>
					<p>&copy;  City of Toronto 1998 &ndash; 2020</p>
				</div>
			</footer>
		);
	}
}
