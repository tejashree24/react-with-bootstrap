import React from 'react';


class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        { imgsrc: require('./images/b1.jpg'), imgCaption:"Facebook" ,author: "Mark"},
        { imgsrc: require('./images/b2.jpg'), imgCaption:"Instagram" ,author: "Kevin"},
      ],

      namelist: [
        { name: "teju", city:"pune" ,age:20 },
        { name: "kavi", city:"mumbai" ,age:30 },
        { name: "payal", city:"banglore" ,age:25 }
      ],

      items: [
        { text: "Learn JavaScript", done: false },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <h3>Image list</h3>
          <ol>
            {this.state.images.map(image =>(
              <li key={image.id}>
                <img src={image.imgsrc} alt="no image" height={40} width={40}/>
                <h5>{image.imgCaption}</h5>
              </li>
              ))}
          </ol>
        <h3>Name List</h3>
        <ol>
          {this.state.namelist.map(names =>(
            <li key={names.id}>
              <h4>Name:{names.name} ,  City:{names.city}  ,  Age:{names.age}</h4>
            </li>
            ))}
        </ol>
        <h2>Todos:</h2>
        <ol>
        {this.state.items.map(item => (
          <li key={item.id}>
            <label>
              <input type="checkbox" disabled readOnly checked={item.done} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}


export default TodoApp;