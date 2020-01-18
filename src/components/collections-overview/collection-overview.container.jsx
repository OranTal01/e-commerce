import { connect } from 'react-redux';
import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const mapStateToProps = state => ({
    isLoading: selectCollectionFetching(state)
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;