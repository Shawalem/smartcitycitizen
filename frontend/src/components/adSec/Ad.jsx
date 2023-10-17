import './ad.scss'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom';

const Ad = () => {

  const { data: adpanels } = useFetch("/adpanels?populate=*")

  if (!adpanels) {
    return null; // or you can return a placeholder component or message
  }

  const adImg = adpanels?.[0]?.attributes?.img?.data?.attributes?.url;
  const adLinks = adpanels?.[0]?.attributes?.adlink;
  
  return (
    <div className='container'>
        <div className="ad">
          <div className="ad_img">
            <Link to={`${adLinks}`} target='_blank'><img src={`${adImg}`} alt="ad" /></Link>
            
          </div>
        </div>
    </div>
  )
}

export default Ad