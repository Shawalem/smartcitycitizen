import './ad.scss'
import useFetch from '../../hooks/useFetch'

const Ad = () => {

  const { data: adpanels } = useFetch("/adpanels?populate=*")

  if (!adpanels) {
    return null; // or you can return a placeholder component or message
  }

  const adImg = adpanels?.img?.data?.attributes?.url;
  console.log(adImg)
  
  return (
    <div className='container'>
        <div className="ad">
          <div className="ad_img">
          {/* <img src={`https://backend-app-lft6m.ondigitalocean.app${adImg}`} alt="ad" /> */}
          <img src={`./images/headerAd.gif`} alt="ad" />
          </div>
        </div>
    </div>
  )
}

export default Ad