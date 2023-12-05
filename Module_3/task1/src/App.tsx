function App() {

  const formatUserName = (firstName: string, secondName: string) => {
    return `Welcome to website, ${firstName} ${secondName}`
  }

  return (
    <div>
      <h1 style={{fontSize: '50px'}}>This test text for homework page</h1>
      <br></br>
      <h2>{formatUserName('Sara', 'Connor')}</h2>
      <br></br>
      <p>Here we have the list:</p>
      <ul>
        <li tab-index="_1">
          Just text here
        </li>
        <li>
          <span>Here we have text and link!</span>
          <a href="https://uk.reactjs.org/docs" target="_blank">It is link to our docs</a>
        </li>
        <li>
          <span>And the picture!!!</span>
          <img
            src="https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg"
            alt="Fox" width="300"></img>
        </li>
      </ul>
    </div>
  )
}

export default App
