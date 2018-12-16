import { connect } from 'react-redux';
import { removeVideo } from '../reducers/videos';
import { editVideo } from '../reducers/videos';
import ListItem from '../components/ListItem';


const mapDispatchToProps = dispatch => {
  return {
    delete: (data) => dispatch(removeVideo(data)),
    edit: (id, title, tags) => dispatch(editVideo(id, title, tags)),

  }
}

export default connect(null, mapDispatchToProps)(ListItem);