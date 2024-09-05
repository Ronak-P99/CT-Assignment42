
import MoviesList from "./MoviesList";
import UserProfile from "./user_profile"


// JSX
// It allows us to write JS in our HTML


// Components:

// 1.) Functional => Functional programming paradigm.
// multiple functions where each one serves one purpose.
// Recipe to make soup. Have a function to chop the carrot. The function would not change the original carrot. It would make a copy then chop the copied carrot

// 2.) Class => Object Oriented Programming paradigm.
// Encapsulation, Inheritance. Like a house


function App() {

// Prop Drilling example:
  const customMessage = "Welcome to my React app!"

// Rendering List example:
const customUserMessage = "Here are our users:";

  return (
    <div>
      < UserProfile />

      <h1>Welcome to the Movies List</h1>
      <MoviesList />
      {/* <h1>Hello World!</h1>
      {/* prop drilling example (works in class too!): */}
      {/* <Greeting customMessage={customMessage} customUserMessage={customUserMessage}/> */}
      {/* prop example (same for above but deleted to show default props): */}
      {/* <ClassGreeting initialName="Johnn Doe" /> */} 
    </div>
  );
}

export default App
