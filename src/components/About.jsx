import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
    // ComponentDidMount is used to call Api
  }

  render() {
    console.log("Parent render");
    return (
      <div className="about-container p-8">
        <h3 className="text-3xl font-bold mb-4">About</h3>
        <h3 className="text-xl text-gray-700 mb-8">
          This is Namaste React Webseries
        </h3>
        <div className="user-info">
          <UserClass name={"First"} location={"Chapra"} />
        </div>
      </div>
    );
  }
}

export default About;

// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);

//     console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     console.log("parent Component Did Mount");
//     // ComponentDidMount is used to call Api
//   }

//   render() {
//     console.log("Parent render");
//     return (
//       <div>
//         <h3>About</h3>
//         <h3>This is Namaste React Webseries</h3>
//         <UserClass name={"First "} location={"Chapra"} />
//       </div>
//     );
//   }
// }

// export default About;
