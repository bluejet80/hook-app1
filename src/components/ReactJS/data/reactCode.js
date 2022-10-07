export const fetchCodeCC = `
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((responce) => responce.json())
        .then((users) =>
            this.setState(
            () => {
                return { monsters: users };
            },
            () => {
                console.log(this.state);
            }
            )
        );
    }

`;

export const reduxCode1 = `
function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0)
  
    // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }
  
    // View: the UI definition
    return (
      <div>
        Value: {counter} <button onClick={increment}>Increment</button>
      </div>
    )
  }
`;
