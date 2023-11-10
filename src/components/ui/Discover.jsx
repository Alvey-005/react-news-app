import Heading from './Heading';
const Discover = ({title,discover}) => {
    return(
        <>
        <section className='discover'>
        <div className='container'>
          <Heading>{title}</Heading>
          <div className='content'>
            {discover.map((val) => {
              return (
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <h1 className='title'>{val.title}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </section>
        </>
    )
}
export default Discover;