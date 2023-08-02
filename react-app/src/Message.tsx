// use PascalCasing when creating a function-based component
function Message() {
    // This is JSX (JavaScript XML): return <h1>Hello world</h1>;
    // it gets converted to something like React.createElement("h1", null, "Hello World");
    // We can combine it with normal JS using {}

    const name = 'Eli';

    // This will show either "Hello [name]"
    // or "Hello World" if name = ''
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello world</h1>;
}

export default Message;