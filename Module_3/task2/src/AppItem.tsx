interface IAppItem {
  name: string,
  description: string,
  Image: string
}

function AppItem({name, description, Image}: IAppItem) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '100vw', alignItems: 'center'}}>
      <h1>{name}</h1>
      <img src={Image} alt="image" style={{width: '200px'}}/>
      <p>{description}</p>
    </div>
  );
}

export default AppItem