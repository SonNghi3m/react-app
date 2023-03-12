import ReactDOM from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrow-function/AppArrowFunction";

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
root.render(<AppArrowFunction />);