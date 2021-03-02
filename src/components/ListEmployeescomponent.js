import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeescomponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      employees : []
    }
    this.addEmployee = this.addEmployee.bind(this);
  }

  componentDidMount(){
    EmployeeService.geteployees().then(
      (res) => {
        this.setState({employees : res.data});
      }
    );
  }

  addEmployee(){
    this.props.history.push('/add-employee');
  }

  employeeUpdate(id){
    this.props.history.push(`/update-employee/${id}`);
  }

  render() {
    return (
      <div>
          <h2 className="text-center">Employees List</h2>
          <div className="row">
            <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
          </div>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Employees first name</th>
                  <th>Employees last name</th>
                  <th>Employees email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.employees.map(
                    employee => (
                      <tr key={employee.id}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                          <button onClick={()=> this.employeeUpdate(employee.id)} className="btn btn-info">Update</button>
                        </td>
                      </tr>
                    )
                  )
                }
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default ListEmployeescomponent;