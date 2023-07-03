//import { Component } from "react";
//const {Component} = require("react");
import React, { Component } from 'react';

const TableBody = (props)=>{
  const {charData} = props
  const rows = charData.map((character)=>{
    return(<tr><td>{character.first_name}</td><td>{character.last_name}</td><td>{character.mobile}</td><td>{character.email}</td><td>{character.location_type}</td><td>{character.location_string}</td></tr>)
  })
  return(
    <tbody>
      {rows}
      </tbody>
  )
}

class LeadsTable extends Component{
  render(){
    const {charData} = this.props
    return (
    <table className="leads_table">
      <thead class = "thead-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Location Type</th>
          <th>Location String</th>
        </tr>
      </thead>
      <TableBody charData = {charData}/>
    </table>
  );
}
}
export default LeadsTable;