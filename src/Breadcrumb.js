import React from 'react';
import PropTypes from 'prop-types';

import './styles/breadcrumb.scss';

import Home from './images/house-door-fill.svg';

class Crumb extends React.Component {
	render() {
		const { text, link, islast } = this.props;

		if (islast) {
			return (<li className="breadcrumb-item active" aria-current="page">{text}</li>);
		}

		if (!link) {
			return (<li className="breadcrumb-item">{text}</li>);
		}

		return (<li className="breadcrumb-item"><a href={link}>{text}</a></li>);
	}

	static propTypes = {
		text: PropTypes.string.isRequired,
		link: PropTypes.string,
		islast: PropTypes.bool
	};
}

export default class Breadcrumb extends React.Component {
	render() {
		const { crumbs = [] } = this.props;
		return (
			<div className="intranet-c-frame-breadcrumb container-fluid py-3 px-4">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb mb-0">
						<li className="breadcrumb-item">
							<a href="https://insideto.toronto.ca">
								<Home className="me-1" />
								InsideTO
							</a>
						</li>
						{crumbs.map(({ text, link }, index, array) => (
							<Crumb
								text={text}
								link={link}
								islast={index === array.length - 1}
								key={`${text}-${link || 'nolink'}`}
							/>
						))}
					</ol>
				</nav>
			</div>
		);
	}

	static propTypes = {
		crumbs: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
				link: PropTypes.string
			})
		)
	};
}
