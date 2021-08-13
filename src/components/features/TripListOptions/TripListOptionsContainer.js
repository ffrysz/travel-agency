import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeSearchDuration, addSearchTags, removeSearchTags } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeSearchDuration: (payload) => dispatch(changeSearchDuration(payload)),
  addSearchTags: tags => dispatch(addSearchTags(tags)),
  removeSearchTags: tags => dispatch(removeSearchTags(tags)),
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
