import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: true,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: [],
      saludoResponse: {}
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/api/todos/');
        const todoList = await res.json();

        this.setState({
          todoList
        });
      } catch (e) {
        console.log(e);
      }

      try {
        const res = await fetch('http://localhost:8000/api/saludo');
        const saludoResponse = await res.json();
        console.log('saludoResponse', saludoResponse)
        this.setState({
          saludoResponse
        });
      } catch (e) {
        console.log(e);
      }
    }

    renderItems = () => {
      const { viewCompleted, todoList,  } = this.state;

      const newItems = todoList.filter(
        item => item.completed === viewCompleted
      );
      const nameclass = viewCompleted ? "completed-todo" : ""

      console.log('newItems', newItems)
      return newItems.map(item => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
              <h1> {item.title}</h1>
              <span className={`todo-title mr-2 ${nameclass}`}>
                {item.description}
              </span>

        </li>
      ));
    };

    render() {
      const { saludoResponse } = this.state;
      console.log('aca estoy yo', saludoResponse);
      let mensaje = 'no cambia';
      if (Object.keys(saludoResponse).length){
        mensaje = 'cambio';
      }

      return (
        <main className="content">
        <div className="row">
          <div>
            <p> Este mensaje no necesita de backend</p>
          </div>
          <div>
            <p> Este mensaje si necesita de backend</p>
            {mensaje}
          </div>
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }

export default App;