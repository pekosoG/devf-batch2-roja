import React from 'react';
import axios from 'axios';
import { setTimeout } from 'timers';

import logo from '../logo.svg';

class Book extends React.Component {

    state = {
        info: '',
    }

    componentWillMount() {
        setTimeout(() => {
            axios.get('http://localhost:3000/book/' + this.props.match.params.bookId)
            .then(res => {
                this.setState({ info: res.data });
            }).catch(err => {
                console.log(err);
            })
        }, 5000)
    }

    emptyState(info) {
        if(info === '') {
            return (<img src={logo} className="App-logo" />);
        } else {
            return (<div>
                <h4>{info.title}</h4>
                <p>{info.desc}</p>
            </div>);
        }
    }

    render() {
        const { info } = this.state;

        return(
            <div>
                {this.emptyState(info)}
            </div>
        );
    }
}

export default Book;