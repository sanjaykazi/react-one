import './App.css'

function App() {
  function handleMouseOver() {
    alert("Para ke upar mouse le ke aaye ho!")
  }
  function handleClick() {
    alert("I am clicked");
  }
  function handleInputChange(e) {
    console.log("Value till now:", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // i am writing my custom behaviour
    alert("ye form submit kr du kya");
  }
  return (

    <div>
      <button onClick={() => alert("Button click hua hai")}> 
      {/* //immediate invocation rather use function reference
      learned bubble propagation 
       */}
        Click Me
      </button>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
      <br />
      <p onMouseOver={handleMouseOver} style={{ color: "red", border: "1px solid black" }}>
        I am a para
      </p>
      <br />
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
