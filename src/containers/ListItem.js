import { connect } from 'react-redux';
import { removeVideo } from '../reducers/videos';

import ListItem from '../components/ListItem';

const mapDispatchToProps = dispatch => {
  return {
      delete: (data) => dispatch(removeVideo(data)),
  
  }
}
export default connect(null, mapDispatchToProps)(ListItem);