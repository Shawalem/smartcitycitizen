import './ad.scss'
import useFetch from '../../hooks/useFetch'

const Ad = ({adpanels}) => {

  const adImg = adpanels?.attributes?.img?.data?.attributes?.url;
  console.log(adImg)
  
  return (
    <div className='container'>
        <div className="ad">
          {adImg && <img src={adImg} alt="ad" />}
        </div>
    </div>
  )
}

export default Ad