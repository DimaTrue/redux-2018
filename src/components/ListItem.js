import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { func } from 'prop-types';


const getVideoId = (url) => url.split('/')[3];
const createVideoUrl = (id) => `https://www.youtube.com/embed/${id}`;


const VIEW_MODE = 'VIEW_MODE';
const EDIT_MODE = 'EDIT_MODE';


export default class ListItem extends PureComponent {
	static propTypes = {
		id: string.isRequired,
		title: string.isRequired,
		url: string.isRequired,
		tags: string.isRequired,
		edit: func.isRequired,
	};

	state = {
		id: this.props.id,
		title: this.props.title,
		tags: this.props.tags,
		mode: VIEW_MODE
	};


	switchMode = () => {
		const updatedMode = this.state.mode === VIEW_MODE ? EDIT_MODE : VIEW_MODE;

		this.setState({ mode: updatedMode });
	};

	delete = () => {
		this.props.delete(this.props.id);
	};

	onChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value })
	};

	edit = () => {
		this.props.edit(this.state);
		this.switchMode();
	}

	render() {
		const { title, url, tags } = this.props;
		const videoId = getVideoId(url);
		const videoUrl = createVideoUrl(videoId);
		const tagsArr = tags.split(", ").map(i => {
			return <div key={Math.random()}><a href="http://localhost:3000/">#{i} </a></div>;
		});

		return (
			this.state.mode === VIEW_MODE ?
			<div className="item-wrap">
				<li className="list-item">
						<h2 className="video-title">{title}</h2>
					<div>
					<div onClick={this.delete} className="video-delete">&#x2612;</div>
					</div>
					
					<iframe src={videoUrl} title={title} className="video-block"/>
					<div className="video-tags">{tagsArr}</div>
					<div class="edit-block"><div>View mode</div>
					<div onClick={this.switchMode} className="video-edit">&#9998;</div>
					</div>
				</li> 
				</div>
				:

				<div className="item-wrap">
				<li>
					<div onClick={this.delete} className="video-delete">&#x2612;</div>
						<iframe src={videoUrl} title={title} className="video-block" />
						<div class="edit-block"><div>Edit mode</div>
					<div onClick={this.switchMode} className="video-edit">&#9998;</div>
					</div>
					<div> Edit title:
                <input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
				
					<div>
						Edit tags:
                <input
							type="text"
							name="tags"
							value={this.state.tags}
							onChange={this.onChange}
						/>
					</div>
				

					<button onClick={this.edit} className="video-save">Save Changes</button>
					
				</li>
				</div>
		);
	}
}