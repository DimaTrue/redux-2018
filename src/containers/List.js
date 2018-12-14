import { connect } from 'react-redux';
import List from '../components/List';
import { filteredVideos } from '../selectors';
import { removeVideo } from '../reducers/videos';

const mapStateToProps = state => ({
    items: filteredVideos(state),
});
const mapDispatchToProps = dispatch => {
    return {
        delete: (props) => dispatch(removeVideo(props)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);