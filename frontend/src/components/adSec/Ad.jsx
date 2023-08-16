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
          <img src={`${adImg}`} alt="ad" />
        </div>
    </div>
  )
}

export default Ad