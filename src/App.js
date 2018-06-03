import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BarList from './BarList/BarList';
import BarAdd from './BarAdd/BarAdd';
import BarInfo from './BarInfo/BarInfo';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="app">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link to="/">Bars</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/add-bar">Add bar</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container className="content">
                    <Row>
                        <Col>
                            <Route exact path="/" component={BarList} />
                            <Route path="/add-bar" component={BarAdd} />
                            <Route path="/bar/:id" component={BarInfo} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
