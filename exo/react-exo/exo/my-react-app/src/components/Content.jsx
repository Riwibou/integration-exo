const Content = () => {
  const firstWord = props.lolo.split(" ")[0];
  return (
  <div className='gray-box'>
    <h1> {firstWord} </h1>
  </div>
  )
}

export default Content;
