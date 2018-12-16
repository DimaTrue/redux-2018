import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ListItem from '../containers/ListItem';

export default class List extends PureComponent {
	static propTypes = {
		items: arrayOf(shape({
			id: string,
			title: string,
			url: string,
			tags: string,
		})),
	};

	static defaultProps = {
		items: [],
	};

	render() {
		const { items, totalCount, filteredCount, } = this.props;
		const list = items.map(item => <ListItem key={item.id} {...item} />);
		return (
			<div className="list">
				<ul class="list-video">
					Count: {totalCount} / Founded by search: {filteredCount}
					{list}
				</ul>
			</div>
		);
	}
}