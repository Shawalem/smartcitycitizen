import React, { useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  useEffect(() => {
    const partnerLink = document.querySelector(
      '.footer_nav a[href="/partner-withus"]'
    );

    if (partnerLink) {
      partnerLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/contact-us";
      });
    }
  }, []);

  return (
    <>
      <div className="container Footer">
        <div className="footer_wrapper">
          <div className="footer_info">
            <img src="./images/logoW.png" alt="" />
            <p>© 2023 Smartcitycitizen </p>
            <p>
              Smart City Citizen, Bconz International Pvt. Ltd, Bangalore, India
            </p>
            <div>
              <a href="/about-us">About Us</a>
              <a href="/partner-withus">Advertise with us</a>
              <a href="/contact-us">Contact us</a>
              <a href="/careers">Jobs</a>
              <a href="/contact-us">Support</a>
              {/* <a href="/smart-city-projects">Smart City Project Reports</a> */}
            </div>
          </div>
          <div className="footer_nav">
            <div>
              <a href="/details/cityresources/69">Agartala Smart City</a>
              <a href="/details/cityresources/70">Agra Smart City</a>
              <a href="/details/cityresources/71">Ahmedabad Smart City</a>
              <a href="/details/cityresources/72">Aizawl Smart City</a>
              <a href="/details/cityresources/73">Ajmer Smart City</a>
              <a href="/details/cityresources/74">Aligarh Smart City</a>
              <a href="/details/cityresources/75">Amaravati Smart City</a>
              <a href="/details/cityresources/76">Amritsar Smart City</a>
              <a href="/details/cityresources/77">Atal Nagar Smart City</a>
              <a href="/details/cityresources/78">Aurangabad Smart City</a>
              <a href="/details/cityresources/79">Bareilly Smart City</a>
              <a href="/details/cityresources/80">Belagavi Smart City</a>
              <a href="/details/cityresources/81">Bengaluru Smart City</a>
              <a href="/details/cityresources/82">Bhopal Smart City</a>
              <a href="/details/cityresources/83">Bhubaneswar Smart City</a>
              <a href="/details/cityresources/84">Biharsharif Smart City</a>
              <a href="/details/cityresources/85">Bilaspur Smart City</a>
              <a href="/details/cityresources/86">Chandigarh Smart City</a>
              <a href="/details/cityresources/87">Chennai Smart City</a>
              <a href="/details/cityresources/88">Coimbatore Smart City</a>


              
              
              
              {/* <a href="/smart-city-projects">Smart City Project Reports</a> */}
            </div>
            <div>
              {/* <a href="/parners">Partners</a> */}
              <a href="/details/cityresources/89">Dahod Smart City</a>
              <a href="/details/cityresources/90">Davanagere Smart City</a>
              <a href="/details/cityresources/91">Dehradun Smart City</a>
              <a href="/details/cityresources/92">Dharamshala Smart City</a>
              <a href="/details/cityresources/93">Diu Smart City</a>
              <a href="/details/cityresources/94">Erode Smart City</a>
              <a href="/details/cityresources/95">Faridabad Smart City</a>
              <a href="/details/cityresources/96">Gandhinagar Smart City</a>
              <a href="/details/cityresources/97">Gangtok Smart City</a>
              <a href="/details/cityresources/98">Greater Warangal Smart City</a>
              <a href="/details/cityresources/99">Guwahati Smart City</a>
              <a href="/details/cityresources/100">Gwalior Smart City</a>
              <a href="/details/cityresources/101">Hubballi-dharwad Smart City</a>
              <a href="/details/cityresources/102">Imphal Smart City</a>
              <a href="/details/cityresources/103">Indore Smart City</a>
              <a href="/details/cityresources/104">Itanagar Smart City</a>
              <a href="/details/cityresources/105">Jabalpur Smart City</a>
              <a href="/details/cityresources/106">Jaipur Smart City</a>
              <a href="/details/cityresources/107">Jalandhar Smart City</a>
              <a href="/details/cityresources/108">Jammu Smart City</a>
              <a href="/details/cityresources/109">Jhansi Smart City</a>
              <a href="/details/cityresources/110">Kakinada Smart City</a>
              <a href="/details/cityresources/111">Kalyan-dombivali Smart City</a>
              <a href="/details/cityresources/112">Kanpur Smart City</a>
              
              
              
            </div>
            <div>
              {/* <a href="/city-profile">City Profile</a> */}
              {/* <a href="/city-lights">City lights</a> */}
              {/* <a href="/blogs">Blog</a> */}
              {/* <a href="/opinions">Opinions</a> */}
              <a href="/details/cityresources/113">Karimnagar Smart City</a>
              <a href="/details/cityresources/114">Karnal Smart City</a>
              <a href="/details/cityresources/115">Kavaratti Smart City</a>
              <a href="/details/cityresources/116">Kochi Smart City</a>
              <a href="/details/cityresources/117">Kohima Smart City</a>
              <a href="/details/cityresources/118">Kota Smart City</a>
              <a href="/details/cityresources/119">Lucknow Smart City</a>
              <a href="/details/cityresources/120">Ludhiana Smart City</a>
              <a href="/details/cityresources/121">Madurai Smart City</a>
              <a href="/details/cityresources/122">Mangaluru Smart City</a>
              <a href="/details/cityresources/123">Moradabad Smart City</a>
              <a href="/details/cityresources/124">Muzaffarpur Smart City</a>
              <a href="/details/cityresources/125">Nagpur Smart City</a>
              <a href="/details/cityresources/126">Namchi Smart City</a>
              <a href="/details/cityresources/127">Nashik Smart City</a>
              <a href="/details/cityresources/128">New Delhi Smart City</a>
              <a href="/details/cityresources/129">New Town Kolkata Smart City</a>
              <a href="/details/cityresources/130">Panaji Smart City</a>
              <a href="/details/cityresources/131">Pasighat Smart City</a>
              <a href="/details/cityresources/132">Port Blair Smart City</a>
              <a href="/details/cityresources/133">Prayagraj Smart City</a>
              <a href="/details/cityresources/134">Puducherry Smart City</a>
              <a href="/details/cityresources/135">Pune Smart City</a>
              <a href="/details/cityresources/136">Raipur Smart City</a>
              <a href="/details/cityresources/137">Rajkot Smart City</a>
              <a href="/details/cityresources/138">Ranchi Smart City</a>
              <a href="/details/cityresources/139">Rourkela Smart City</a>
              <a href="/details/cityresources/140">Sagar Smart City</a>
              
              
              
            </div>
            <div>
              <a href="/details/cityresources/141">Saharanpur Smart City</a>
              <a href="/details/cityresources/142">Satna Smart City</a>
              <a href="/details/cityresources/143">Shillong Smart City</a>
              <a href="/details/cityresources/144">Shimla Smart City</a>
              <a href="/details/cityresources/145">Shivamogga Smart City</a>
              <a href="/details/cityresources/146">Silvassa Smart City</a>
              <a href="/details/cityresources/147">Solapur Smart City</a>
              <a href="/details/cityresources/148">Srinagar Smart City</a>
              <a href="/details/cityresources/149">Surat Smart City</a>
              <a href="/details/cityresources/150">Thane Smart City</a>
              <a href="/details/cityresources/151">Thanjavur Smart City</a>
              <a href="/details/cityresources/152">Thoothukudi Smart City</a>
              <a href="/details/cityresources/153">Tiruchirappalli Smart City</a>
              <a href="/details/cityresources/154">Tirunelveli Smart City</a>
              <a href="/details/cityresources/155">Tirupati Smart City</a>
              <a href="/details/cityresources/156">Tiruppur Smart City</a>
              <a href="/details/cityresources/157">Tumakuru Smart City</a>
              <a href="/details/cityresources/158">Udaipur Smart City</a>
              <a href="/details/cityresources/159">Ujjain Smart City</a>
              <a href="/details/cityresources/160">Vadodara Smart City</a>
              <a href="/details/cityresources/161">Varanasi Smart City</a>
              <a href="/details/cityresources/162">Vellore Smart City</a>
              <a href="/details/cityresources/163">Visakhapatnam Smart City</a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
