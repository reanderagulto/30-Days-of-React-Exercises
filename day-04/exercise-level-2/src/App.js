import './App.css';
import asabenehImage from './images/asabeneh.jpg'
import htmlImage from './images/html_logo.png'
import css3Image from './images/css_logo.png'
import reactImage from './images/react_logo.png'


const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const position = "Senior Developer"
const country = "Finland"
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'


const headerStyle = {
  backgroundColor: "#61DBFB", 
  padding: "35px", 
  lineHeight: 1.5,
}

const mainStyles = {
  backgroundColor: "#F3F0F5",
}

const footerStyles = {
  backgroundColor: "#61DBFB",
}

function App() {

  const Header = () =>(
    <header style={headerStyle}>
      <div className='header-wrapper'>
        <h1>{ welcome }</h1>
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>
          Instructor: { author.firstName } { author.lastName }
        </p>
        <small>Date: { date }</small>
      </div>
    </header>
  );

  const numOne = 3; 
  const numTwo = 2;

  const Result = () => (
    <p>
      {numOne} + {numTwo} = { numOne + numTwo }
    </p>
  );

  const yearBorn = 1993;
  const currrentYear = new Date().getFullYear();
  const age = currrentYear - yearBorn;
  const PersonAge = () => (
    <p>
      {' '}
      { author.firstName } { author.lastName } is { age } years old
    </p>
  );

  const techs = ['HTML', 'CSS', 'JavaScript'];
  const TechFormatted = () => {techs.map((tech) => <li>{tech}</li>)};
  const skills = ['HTML', 'CSS', 'SASS', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analytics', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']

  const skillsFormatted = (
    skills.map((skill) => (
      <li className='skills-container'>{skill}</li>
    ))
  )

  const User = () => (
    <div className="author-wrapper">
      <div className='author-info'>
        <img src={asabenehImage} alt='Asabeneh Profile' className='profile-img' />
        <h4>{author.firstName} {author.lastName}</h4>
        <p>{position}, {country}</p>
        <ul className='skills'>{skillsFormatted}</ul>
      </div>
    </div>
  );

  
  const FrontendTechs = () => (
    <section>
      <div className='section-wrapper'>
        <h3>FrontEnd Technologies</h3>
        <div className='frontend-tech'>
          <img src={htmlImage} alt='HTML5' />
          <img src={css3Image} alt='CSS3' />
          <img src={reactImage} alt='ReactJS' />
        </div>        
      </div>
    </section>
  );

  const Newsletter = () => (
    <section>
      <div className='section-wrapper'>
        <h3 className="align-center uppercase">Subscribe</h3>
        <p className='align-center'>Sign up with your email address to receive news and updates</p>
        <div className='form-control-group'>
          <input type="text" placeholder="First Name" class="form-control" />
          <input type="text" placeholder="Last Name" class="form-control" />
          <input type="text" placeholder="Email" class="form-control" />
        </div>
        <div className='form-control-group'>
          <button type="submit" class="btn btn-error">Subscribe</button>
        </div>
      </div>
    </section>
  );

  
  const colors = ["#518cef", "#3b10c4", "#9aede6", "#8ee763", "#a30dd0"];

  const colorContainer = (
    colors.map((color) => {
      const divStyle = {
        backgroundColor: color
      }
      return (<div className='color-container' style={divStyle}>{color}</div>)
    })
  )

  const ColorWheel = () => (
    <div className='color-wheel-container'>
      { colorContainer }
    </div>
  )


  const Main = () => (
    <main style={mainStyles}>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started {' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>
          <TechFormatted />
        </ul>
        <Result />
        <PersonAge />
        <User />
        <FrontendTechs />
        <Newsletter />
        <ColorWheel />
      </div>
    </main>
  )

  const copyRight = "Copyright " + currrentYear;

  const Footer = () => (
    <footer style={footerStyles}>
      <div className='footer-wrapper'>
        <p>{ copyRight }</p>
      </div>
    </footer>
  );

  return (
    <div className="App">
      <Header />  
      <Main />      
      <Footer />
    </div>
  );
}

export default App;
