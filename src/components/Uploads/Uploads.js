import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import csv from 'csv';
import classes from './Uploads.css';
import { connect } from 'react-redux';

class uploads extends Component {
    
    constructor(props) {
        super(props);
        this.handleFiles = this.handleFiles.bind(this)
        this.state = { statecsvToarray: [] };
    }


    handleFiles = files => {
        // console.log(files);
        var reader = new FileReader();
        reader.onload = () => 
        {
            // Use reader.result
            // console.log(reader.result)
            
            csv.parse(reader.result, (err, data) => {
                    // this.setState({
                    //     csvToarray: data
                    // });
                    console.log('1 data: ', data);
                    data = data.filter((n) => n[10] !== 'Country'); 
                    this.setState({
                        statecsvToarray: data
                    }) 
                    console.log('2 data: ', data);
                    this.props.display(data);
            });
        }
        reader.readAsText(files[0]);
    }    

    render() {
        return ( 
                <div className={classes.Uploads}>
                    <div className={classes.logo}>
                        <h1>ATS</h1>
                    </div>
                    <div>
                    <ReactFileReader fileTypes={".csv"} handleFiles={this.handleFiles}>
                        <button className='btn'>Select CSV</button>
                    </ReactFileReader>
                    </div>
                </div>
            );
    }
} 


const mapDispatchToProps = dispatch => {
    return {
        display: (csvToarray) => dispatch({type: 'displayfirstline', value: csvToarray})
    };
};

export default connect(null, mapDispatchToProps)(uploads);