import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import getReservations from '../actions/getReservations';
import getFavoriteListing from '../actions/getFavoriteListings';
import FavoritesClient from './FavoritesClient';

type Props = {};

const ListingPage = async (props: Props) => {
  const listings = await getFavoriteListing();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
