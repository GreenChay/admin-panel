import React, { Component } from 'react';
import './BarAdd.css';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import { addBar } from '../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BarAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    addBar() {
        this.props.addBar(this.state.title);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="bar-add">
                <h1 className="display-4">Новый бар</h1>

                <Form>
                    <FormGroup row>
                        <Label for="title" sm={2}>
                            Title
                        </Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Set bar title"
                                onChange={event => {
                                    this.setState({
                                        title: event.target.value
                                    });
                                }}
                            />
                        </Col>
                    </FormGroup>
                    <Button onClick={() => this.addBar()}>Add</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bars: state.bars
});

const mapDispatchToProps = dispatch => ({
    addBar: title => dispatch(addBar(title))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarAdd));
