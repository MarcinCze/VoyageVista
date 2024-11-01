import TripService from '@/services/Trip.service';
import { useEffect, useState } from 'react';
import { NavDropdown, Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useGlobalState } from '@/context/GlobalStateProvider';

interface Trip {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  isHistorical: boolean;
}

const MainNavbar = () => {

  const [tripItems, setTripItems] = useState<JSX.Element[]>([]);
  const [tripSelected, setTripSelected] = useState<Trip | null>(null);
  const { tripSelectedId, setTripSelectedId } = useGlobalState();

  let trips : any = [];

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        trips = await TripService.getTrips();
        console.log(trips);

        const tripElements = trips.map((trip: any) => (
          <NavDropdown.Item key={trip.id} onClick={() => changeSelectedTrip(trip.id)}>{trip.name}</NavDropdown.Item>
        ));
        setTripItems(tripElements);

        let selected: Trip | null = null;

        if (!isNullOrEmpty(tripSelectedId)) {
          selected = trips.find((trip: any) => trip.id == tripSelectedId);
        } 
        else {
          selected = trips.find((trip: any) => !trip.isHistorical);
          if (selected) {
            setTripSelectedId(selected.id.toString());
          }
        }

        console.log('selected:', selected);
        setTripSelected(selected);

      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  function changeSelectedTrip(id: string) {
    const newTrip = trips.find((trip: any) => trip.id == id);
    setTripSelected(newTrip);
    setTripSelectedId(id);
  }

  const isNullOrEmpty = (str: string | null | undefined): boolean => {
    console.log('isNullOrEmpty:', str);
    let state : boolean = str === null || str === undefined || str.trim() === '';
    console.log('isNullOrEmpty:', state);
    return state;
  };

  const renderTripPart = (): JSX.Element => {
    if (tripItems.length === 0) {
      return (
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </>
      );
    } else {
      return (
        <>
          <NavDropdown title={tripSelected?.name} id="basic-nav-dropdown">
            {tripItems}
          </NavDropdown>
        </>
      );
    }
  }

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://via.placeholder.com/100x100"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Voyage Vista
          </Navbar.Brand>

          {renderTripPart()}

        </Container>
      </Navbar>
    </>
  );

}

export default MainNavbar;