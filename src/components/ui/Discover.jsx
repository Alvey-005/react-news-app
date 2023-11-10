import { Link } from 'react-router-dom';
import Heading from './Heading';
const Discover = ({title,discover}) => {
    return(
        <>
        <section className='discover'>
        <div className='container'>
          <Heading>{title}</Heading>
          <div className='content'>
            {discover.map((val,idx) => {
              return (
                <Link style={{
                  textDecoration:'none',
                  color:'unset'
                }}to={`/ny-times/${val.title}`}
                key={idx}>
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <h1 className='title'>{val.title}</h1>
                </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
        </>
    )
}
export default Discover;