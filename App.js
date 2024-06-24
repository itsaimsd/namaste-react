/*
<div id= "parent">
    <div id = "child">
        <h1>I'm an h1 tag</>
        <h2>I'm an h2 tag</>
    </div>   
    <div id = "child">
        <h1>I'm an h1 tag</>
        <h2>I'm an h2 tag</>
    </div>
</div>

ReactElement(object) =>HTML(Browser Understands)

*/

// What type of tag is this
// attribiues and these are Objects
// Third one is children . if more than 1 then convert into array

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I  'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I  'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root2"));

root.render(parent);
