import React, {Component} from 'react'
import './pagetwo.css'
import {connect} from 'react-redux'


const PageTwo = props =>{
        return (
           <div className="page" id="page-two-wrapper">
            <p>Your Information: </p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <p>Phone Number: {props.phoneNumber}</p>
            <button>Confirm</button>
           </div>
        )
    }
    function mapStateToProps(state){
        return{
            name: state.name,
            age: state.email,
            email: state.email,
            phoneNumber: state.phoneNumber
        }
    }

    export default connect(mapStateToProps)(PageTwo);