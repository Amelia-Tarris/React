// Change code below this line

class MyComponent extends React.Component {
    constructor(props) {
       super(props); // This ensures React.Component is properly initialized
     }
     render (){
       return (
         <div>
         <h1>My First React Component!</h1>
         </div> 
       )
     }
   }
   
   let targetNode = document.getElementById("challenge-node")
   ReactDOM.render(<MyComponent />, targetNode);
