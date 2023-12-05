// const heading = React.createElement(
//   "h1",
//   { id: "heading-1" },
//   "Hi I done it again"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement("h1", { id: "heading" }, "This is my Heading1 1"),
    React.createElement("h2", { id: "heading1" }, "This is my heading1 2"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", { id: "heading" }, "This is my Heading2 1"),
    React.createElement("h2", { id: "heading1" }, "This is my heading2 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
