import './ad.scss'
import useFetch from '../../hooks/useFetch'

const Ad = () => {

  const { data: adpanels } = useFetch("/adpanels?populate=*")
  console.log(adpanels);

  if (!adpanels) {
    return null; // or you can return a placeholder component or message
  }

  const adImg = adpanels?.[0]?.attributes?.img?.data?.attributes?.url;
  console.log(adImg)
  
  return (
    <div className='container'>
        <div className="ad">
          <div className="ad_img">
          <img src={`${adImg}`} alt="ad" />
          </div>
        </div>
    </div>
  )
}

export default Ad