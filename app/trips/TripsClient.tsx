'use client';
import React, { useCallback, useState } from 'react';
import { SafeReservation, safeUser } from '../types';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser: safeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  currentUser,
  reservations,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');
  const onCansel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Reservation cancelled');
          router.refresh();
        })
        .catch((error) => {
          toast.error('somthing worng about canceling');
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you have been and where you have going"
      />
      <div
        className=" mt-10
         grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      >
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCansel}
            disabled={deletingId === reservation.id}
            actionLabel="Cansel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
