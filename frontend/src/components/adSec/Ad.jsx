import './ad.scss'
import useFetch from '../../hooks/useFetch'

const Ad = ({adpanels}) => {

  if (!allnews) {
    return null; // or you can return a placeholder component or message
  }

  const adImg = adpanels?.attributes?.img?.data?.attributes?.url;
  console.log(adImg)
  
  return (
    <div className='container'>
        <div className="ad">
          <img src={`${adImg}`} alt="ad" />
        </div>
    </div>
  )
}

export default Ad