import * as React from 'react';
import './App.css';


// import logo from './logo.svg';

class App extends React.Component {

  private userId = 'ADDC403C803F4FA0BB4ECD8778CF16FF';
  // private password: any = '74129DF';
  private url = "http://challenge.schema.rocks/swagger/docs/v1";

  constructor(props: any) {
    super(props);
    this.state = {
      employees: [],
      error: null,
      isLoaded: false      
    }
  }

  public componentDidMount() {
    fetch(this.url + '?userId=' + this.userId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result.employees,
            isLoaded: true            
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error,
            isLoaded: true           
          });
        }
      )
  }

  public render() {


    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <section>
          <div className="row">
            <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {employees.map((employees) => {
                      // tslint:disable-next-line:no-unused-expression
                      <td scope="row">{employee.Id}</td>
                      <td>{employee.Name}</td>
                      <td>{employee.Surname}</td>
                  })}                  
                </tr>
              </tbody>
            </table>
            </div>
          </div>
       </section>
       </div>
    );
  }
}

export default App;
