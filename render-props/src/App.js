import React from 'react';
import './App.css';

const RenderAll = (props) => {
  debugger
  return (
    <React.Fragment>
      {props.children(props)}
    </React.Fragment>
  )
}

const RenderChild = (props) => {
  return (
    <React.Fragment>
      <h2>Title</h2>
      <div className={'bk', props.color ? 'bk-' + props.color : 'bk'}></div>
    </React.Fragment>
  )
}

function App() {
  return (
    <React.Fragment>
      <RenderAll color={"red"}>
        {RenderChild}
      </RenderAll>
    </React.Fragment>
  );
}

export default App;
