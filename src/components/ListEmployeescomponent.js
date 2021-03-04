import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeescomponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      employees : []
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.employeeDelete = this.employeeDelete.bind(this);
  }

  componentDidMount(){
    EmployeeService.geteployees().then(
      (res) => {
        this.setState({employees : res.data});
      }
    );
  }

  addEmployee(){
    this.props.history.push('/employee');
  }

  employeeUpdate(id){
    this.props.history.push(`/employee/${id}`);
  }

  employeeDelete(id){
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
  }

  employeeView(id){
    this.props.history.push(`/view-employee/${id}`);
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
                          <button onClick={()=> this.employeeDelete(employee.id)} className="btn btn-danger" style={{marginLeft : "20px"}}>Delete</button>
                          <button onClick={()=> this.employeeView(employee.id)} className="btn btn-info" style={{marginLeft : "20px"}}>View</button>
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