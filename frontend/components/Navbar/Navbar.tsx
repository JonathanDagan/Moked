import React, { Component } from 'react'
import Nav from '@bit/react-bootstrap.react-bootstrap.nav'
import Button from '@bit/react-bootstrap.react-bootstrap.button'
import Form from '@bit/react-bootstrap.react-bootstrap.form'
import FormControl from '@bit/react-bootstrap.react-bootstrap.form-control'
import BitNavbar from '@bit/react-bootstrap.react-bootstrap.navbar'
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

class MokedNavbar extends Component {
	render() {
		return (
			<>
				<BitNavbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
					<BitNavbar.Brand href="#home">HaMoked</BitNavbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</BitNavbar>
			</>
		)
	}
}

export interface NavbarProps {
	
}
 
const Navbar: React.FunctionComponent<NavbarProps> = () => {
	return ( 
		<div>
			<ReactBootstrapStyle /><MokedNavbar />
		</div>
	 );
}
 
export default Navbar;