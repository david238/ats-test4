import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryPie } from 'victory';
import classes from './Gender.css';

class Gender extends Component {

    render () {
        console.log("this.props.gender_ar", this.props.gender_ar);
        var result = this.props.gender_ar.reduce((groups, currentarray) => (groups[currentarray[5]] = (groups[currentarray[5]] || 0) + 1 , groups), {} );
        console.log("results gender: ", result);
        var arr = [];
        for (var key in result) {
            // console.log(key);
            arr.push({ 'x': key, 'y': result[key]});
        }

        return (
            <div className={classes.Gender}>
                <h3>Gender</h3>
                <VictoryPie
                    colorScale={["red", "navy" ]}
                    data={arr}
                    animate={{
                        duration: 2000
                      }}
                    />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        gender_ar: state.csvarray
    };
};


export default connect(mapStateToProps, null)(Gender);