/*  
*  Exercise Level 1: 
    What is the difference between a regular function and an arrow function?
        - arrow function uses Arrow => instead of function keyword to declare a function.
    What is a React Component?
        - Small, reusable code which is responsible to the one part of the application UI.
    How do you make a React functional component?
        - Just like writing a function, you can use an arrow function or normal function declaration.
         e.g.: const data = () => (<h1>Hello, World</h1>);
    What is the difference between a pure JavaScript function and a functional component?
        - JS Function returns a value or datatype. functional components can return JSX Elements. 
    How small is a React component?
        - As small as printing an <p> tag
    Can we make a button or input field component?
        - Yes
    Make a reusable Button component. */
    const Button = (type, text, name) => (
        <button type={type} name={name}>{text}</button>
    )
/*
    Make a reusable InputField component.
*/
    const InputField = (name, placeholder, defaultData = "") => (
        <input type="text" name={name} placeholder={placeholder} value={defaultData} />
    )

/*
    Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
*/

    const AlertBox = (message, messageType = "success") => (
        <div className='box-wrapper' class={messageType}>
            <p>{message}</p>
        </div>
    )