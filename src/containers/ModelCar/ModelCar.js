import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import classes from './ModelCar.css';

class ModelCar extends Component {

    render () {
        console.log("this.props.modelCar", this.props.modelCar_ar);
        var result = this.props.modelCar_ar.reduce((groups, currentarray) => (groups[currentarray[11]] = (groups[currentarray[11]] || 0) + 1, groups), {} );
        console.log("results: ", result);

        var arr = [];
        for (var key in result) {
            // console.log(key);
            arr.push({ 'x': key, 'y': result[key]});
        }
        arr.sort((a, b) => parseFloat(b.total) - parseFloat(a.total));
        const arr1 = arr.slice(0,5);
        console.log("arr1: ", arr1);
        return (
            <div className={classes.ModelCar}>
                <h3>Top 5 Model Car Trend</h3>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 10 }}
                    >
                    <VictoryBar
                        barRatio={0.8}
                        style={{
                        data: { fill: "#c43a31" }
                        }}
                        data={arr1}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 2000 }
                          }}
                        />
                    </VictoryChart>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        modelCar_ar: state.csvarray
    };
};


export default connect(mapStateToProps, null)(ModelCar);