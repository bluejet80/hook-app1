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
