import ReactDOM from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrow-function/AppArrowFunction";
import Table from "./ex4-table/Table";
import StyleExample from "./ex5-css/StyleExample";
//import bootstrap css resource
import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex6-var-function/NameList";
import Menu from "./ex7-props/Menu";
import App from "./ex7-props/App";
import Car from "./ex8-state/Car";
import ProductList from "./ex8-state/ProductList";
import Counter from "./ex9-events/Counter";
import Person from "./ex9-events/Person";

const greetingMessage = <div>Hello React</div>;
const menu = <ul>
    <li>Home</li>
    <li>Login</li>
    <li>Contact us</li>
</ul>
console.log(">>>hello React!");
// ReactDOM.render(greetingMessage, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(menu);
//root.render(<StyleExample />);
const names = ["Mehrdad Javan", "Simon Elbrink"];
root.render(<Person />);