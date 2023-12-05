interface IAppWrapper {
  title: string,
  children: JSX.Element
}

function AppWrapper({title, children}: IAppWrapper) {
  return (
    <div className='wrapper'>
      <h1 style={{textAlign: 'center', backgroundColor: 'lightgreen', padding: '30px'}}>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default AppWrapper