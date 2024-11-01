const TripService = {

    isTripChosen: () => {    
        const savedTrip = localStorage.getItem("tripSelectedId")
        return savedTrip !== null && savedTrip !== undefined && savedTrip !== "";
    },

    getTrips: async () => {
        const response = await fetch('http://localhost:3001/api/trips');
        const trips = await response.json();
        return trips;
    }
};

export default TripService;