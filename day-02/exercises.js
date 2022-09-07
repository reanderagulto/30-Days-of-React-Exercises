/* Exercise: What is React? */

/* 
What is React? 
    - JS Library created by Facebook. 
What is a library? 
    - series of reusable code. 
What is a single page application? 
    - an application with one HTML file.
What is a component ? 
    - elements of an application: button, textfield, selector, dropdown, list, etc
What is the latest version of React? 
    - 18?
What is DOM? 
    - Document Object Model
What is React Virtual DOM? 
    - it is used by react to manipulate the DOM of the website/webpages.
What does a web application or a website(composed of) have? 
    - it composed of elements, components, objects as well as functions
*/

/* Exercise: Why React? */

/*
Why did you chose to use react?
    1. Popularity
    2. Job Opportunity
What measures do you use to know popularity ?
    - Number of stars, forks and contribution of the repository
    - Another measurement is the community. How big is the community.
What is more popular, React or Vue ?
    - React
*/

/* Exercises: JSX */

/* 
What is an HTML element? 
    - It is the HTML tags that's used in building webpages.
How to write a self closing HTML element? 
    - <self-closing />  usually HTMl elements without the closing tag. 
What is an HTML attribute? Write some of them 
    - sort of an option in the element. 
    - <input type="text" class="someClass" placeholder="somePlaceholder" />
What is JSX?
    - JavaScript XML
What is babel?
    - a transpiler
What is a transpiler?
    - it is a converter of JSX or like to pure javascript so that the browser can read and compile it.
*/

/* 
Exercises: JSX Elements
What is a JSX element?
    - It is an HTML Element inside the JavaScript (React)
*/

/* Write your name in a JSX element and store it in a name variable */ 
    const myName = (<h3>I\'m Reander S. Agulto</h3>);
/*
Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
*/
const myInfo = {
    fullName:   "Reander Agulto", 
    country:    "Philippines", 
    title:      "Web Developer", 
    gender:     "Male", 
    email:      "reanderagulto29@gmail.com",
    phone:      "09366968097"
}

const jsxInfo = (
    <div>
        <h1>{ myInfo.fullName }</h1>
        <p>{ myInfo.country }</p>
        <p>{ myInfo.title }</p>
        <p>{ myInfo.gender }</p>
        <p>{ myInfo.email }</p>
        <p>{ myInfo.phone }</p>
    </div>
);
/* Write a footer JSX element */

const footer = (
    <footer>
        <div className="footer">
            This is a footer JSX element
        </div>
    </footer>
);

/*  Exercises: Inline Style */

/* Create a style object for the main JSX */
const main = (
    <section>
        <div>This is the main section</div>
    </section>
)

/* Create a style object for the footer and app JSX  */

const footerStyle = {
    backgroundColor: "#CCC", 
    fontWeight: 500,
    paddingTop: "40px", 
    paddingBottom: "50px",
}

const appStyle = {
    backgroundColor: "#FFF", 
    margin: 0,
    padding: 0,
}

/* Add more styles to the JSX elements  */
const mainStyle = {
    lineHeight: "1.5em",
    transition: "all 0.6 ease-out",
}
