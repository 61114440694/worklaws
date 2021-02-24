import React from "react";
import { Link } from 'react-router-dom'
import "../App.css";


function main(){
    const x = {
    weight: 150,
    height: 150,
  };
  function sayHello() {
    alert("google youtube");
  }
  return (
    <center>
      <div>
        <div>
          <h1>Menu Food</h1>
        </div>

        <div>
          <div>
            <Link to="/p1">
              <img
                style={x}
                src="https://images.unsplash.com/photo-1589627461407-6257b1acf0fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlf
                    %3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
        
            </Link>
            <p>
              <b>"Pan-Cake"</b>
            </p>

            <Link to="/p2">
              <img
                style={x}
                src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=MXwxMjA3fDB8MHxzZWFyY
                    2h8OTV8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </Link>
            <p>
              <b>" Pop-Corn "</b>
            </p>

            <Link to="/p3">
              <img
                style={x}
                src="https://images.unsplash.com/photo-1605888969139-42cca4308aa2?ixid=MXwxMjA3fDB8MHxzZWFyY
                    2h8NDR8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </Link>
            <p>
              <b>" spaghetti Tomato Sauce "</b>
            </p>
          </div>
        </div>
      </div>
    </center>
  );
  }



export default main;


