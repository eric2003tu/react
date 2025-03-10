import React from 'react';
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
  }
  function Prop(){
  return(
    <center>
    <div id='prop'>
    <Welcome name="eric"/>
    <Welcome name = "Jean Claude"/>
  </div>
  </center>)
  }
  export default Prop;
  