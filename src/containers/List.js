import { connect } from 'react-redux';
import List from '../components/List';
import { filteredVideos } from '../selectors';


const mapStateToProps = state => ({
	items: filteredVideos(state),
	totalCount: state.videos.length,
	filteredCount: filteredVideos(state).length
});

export default connect(mapStateToProps)(List);