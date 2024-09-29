"use client";
import { Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <>

            <Nav defaultActiveKey="/main/dashboard" activeKey={pathname} className="flex-column">
                <Nav.Link href="/main/dashboard" eventKey="/main/dashboard">Home</Nav.Link>
                <Nav.Link href="/main/flights" eventKey="/main/flights">Flights</Nav.Link>
                <Nav.Link href="/main/accommodations" eventKey="/main/accommodations">Accommodations</Nav.Link>
                <Nav.Link href="/main/car-rentals" eventKey="/main/car-rentals">Car rentals</Nav.Link>
                <Nav.Link href="/main/activities" eventKey="/main/activities">Activities</Nav.Link>
                <Nav.Link href="/main/restaurants" eventKey="/main/restaurants">Restaurants</Nav.Link>
            </Nav>

        </>
    );

}

export default Sidebar;