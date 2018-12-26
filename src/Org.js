import React, { Component } from 'react';
import orgData from './organization.json';


class Org extends Component {
  render() {
    return (
      <div>
        <li>
         {orgData.Organization.Name}
           <ul>
            {orgData.Organization.Schools.map((schoolDetail) => {
              return <div>
                       <li>
                         {schoolDetail.Name}
                           <ul>
                            {schoolDetail.Classrooms.map((roomDetail) => {
                              return <li>{roomDetail.Name}</li>
                            })}
                           </ul>
                       </li>
                    </div>
            })}
           </ul>
        </li>
      </div>
    );
  }
}

export default Org;