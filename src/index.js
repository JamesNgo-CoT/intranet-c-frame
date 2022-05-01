import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

export default class IntranetCFrame extends React.Component {
	render() {
		const { breadcrumb, children } = this.props;
		return (
			<>
				<Header breadcrumb={breadcrumb} />
				<main className='py-4'>
					<div className='container'>
						{children}
					</div>
				</main>
				<Footer />
			</>
		);
	}

	static propTypes = {
		breadcrumb: Header.propTypes.breadcrumb,
		children: PropTypes.node
	};
}
