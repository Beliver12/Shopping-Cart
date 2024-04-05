import { Button } from "./Button";

const App = () => {
  return (
    <div>
      <Button primary>Im a button</Button>
      <Button >Im a button</Button>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <a href="profile">Profile page</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
