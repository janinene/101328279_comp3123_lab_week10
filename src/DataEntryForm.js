import React, { Component } from "react";
import './DataEntryForm.css';

const INITIAL_VALUE = {
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: ""
}

export default class DataEntryForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {...INITIAL_VALUE}
        this.provinces = ["Choose...","Alberta", "British Columbia", "Manitoba", 
                        "New Brunswick", "Newfounland and Labrador", "Nova Scotia",
                         "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]
        this.state.province = this.provinces            //to get the value of provinces^
    }

    onSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.setState({                     //to show the content after clicking the submit button
            showName: true
        })
    }

    onValueChanged = (event) => {
        this.setState({[event.target.name] : event.target.value})
        
    }

    render = () => {
        return(                     
            <>
                <h1>Data Entry Form</h1>
                <form className='inside'> 
                    <div className="center-form"> 
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email" placeholder="Enter email"  onChange={event => this.onValueChanged(event)} value={this.state.username} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control" id="inputName" name="fullName" placeholder="Full Name" onChange={event => this.onValueChanged(event)} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" name="address1" placeholder="1234 Main St" onChange={event => this.onValueChanged(event)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" name="address2" placeholder="Apartment, studio, or floor"  onChange={event => this.onValueChanged(event)}/>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" name="city" onChange={event => this.onValueChanged(event)} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputProvince">Province</label>
                                <select id="inputProvince" className="form-control"  name="province" onChange={this.onValueChanged} value={this.province}>       {/*Value is used to output the chosen province later */}
                                    {
                                        this.provinces.map(prov => (
                                            <option key={prov} value={prov}>{prov}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputPostalCode">Postal Code</label>
                                <input type="text" className="form-control" name="postalCode" id="inputPostalCode" onChange={event => this.onValueChanged(event)} />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="agreement" />
                                <label className="form-check-label" htmlFor="agreement">Agree Terms and Condition</label>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Submit</button>     

                    </div>                   
                </form>

                {this.state.showName && 
                    <form className="inside"> 
                        <table id="information">
                            <tbody>
                                <tr>
                                    <td>Email: </td>
                                    <td>{this.state.showName && this.state.email} </td>
                                </tr>
                                <tr>
                                    <td>Full Name: </td>
                                    <td>{this.state.showName && this.state.fullName} </td>
                                </tr>
                                <tr>
                                    <td>Address: </td>
                                    <td>{this.state.showName && this.state.address2} {this.state.showName && this.state.address1} </td>
                                </tr>
                                <tr>
                                    <td>City: </td>
                                    <td>{this.state.showName && this.state.city} </td>
                                </tr>
                                <tr>
                                    <td>Province: </td>
                                    <td>{this.state.showName && this.state.province} </td>
                                </tr>
                                <tr>
                                    <td>Postal Code: </td>
                                    <td>{this.state.showName && this.state.postalCode} </td>
                                </tr>
                            </tbody>                     

                        </table>
                    </form>
                 }
             
            </>
        )
    }

}