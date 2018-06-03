import React, { Component } from 'react';
import './BarInfo.css';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import { addBar } from '../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BarInfo extends Component {
    constructor(props) {
        super(props);

        let barId = props.match.params.id;

        this.state = {
            bar: props.bars.find(bar => {
                return bar.id == barId;
            })
        }
    }

    addBar() {
        this.props.addBar(this.state.title);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="bar-add">
                <h1 className="display-4">{this.state.bar.title}</h1>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    bars: state.bars
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarInfo));
