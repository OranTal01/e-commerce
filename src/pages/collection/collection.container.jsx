import { connect } from 'react-redux';
import { selectCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = state => ({
    isLoading: !selectCollectionLoaded(state)
});

const CollectionContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionContainer;
