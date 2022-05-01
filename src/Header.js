import React from 'react';

import './styles/header.scss';
import logo from './images/citylogo.svg?url';

import Breadcrumb from './Breadcrumb';

export default class Header extends React.Component {
	render() {
		const { breadcrumb = [] } = this.props;
		return (
			<header className='intranet-c-frame-header pt-3'>
				<div className='container-fluid px-4'>
					<h1 className='mb-3'>
						<a href="https://insideto.toronto.ca">
							<img src={logo} height="70" width="225" alt="City of Toronto Intranet" />
						</a>
					</h1>

				</div>

				<Breadcrumb crumbs={breadcrumb} />
			</header>
		);
	}

	static propTypes = {
		breadcrumb: Breadcrumb.propTypes.crumbs
	};
}
