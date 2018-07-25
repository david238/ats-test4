import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Citizen.css';
import ReactTable from 'react-table';

class Citizen extends Component {

    state = {
        filtered_ar : null
    }

    componentDidUpdate() {
        // console.log("filter_ar", this.state.filtered_ar);
        // console.log("citizen_ar", this.props.citizen_ar);
        if (!this.state.filtered_ar)
        {
            // console.log("this.props.citizen_ar", this.props.citizen_ar);
            var result = this.props.citizen_ar.reduce( (groups, currentarray) => (groups[currentarray[10]] = (groups[currentarray[10]] || 0) + 1, groups), {} );
            // console.log("results: ", result);
    
            var arr = [];
            for (var key in result) {
                // console.log(key);
                arr.push({ 'country': key, 'total': result[key]});
            }
            // console.log("arr: ", arr);
            this.setState({filtered_ar: arr})
    
        }
    }

    render () {

        let displayReactTable = null;
        if (this.state.filtered_ar)
        {
           const columns = [{
                Header: 'Country',
                accessor: 'country' // String-based value accessors!
              }, {
                Header: 'No of Pax',
                accessor: 'total',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
              }];

            const data = this.state.filtered_ar;
              
            displayReactTable = <ReactTable
                data={data}
                columns={columns}
                />;
        }
       
        return (
            <div className={classes.Citizen}>
                <h3>No of Person per Country</h3>
                {displayReactTable}
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        citizen_ar: state.csvarray
    };
};


export default connect(mapStateToProps, null)(Citizen);