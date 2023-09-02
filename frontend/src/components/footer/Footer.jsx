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
              <a href="/details/cityresources/80">Atal Nagar Smart City</a>
              <a href="/details/cityresources/81">Aurangabad Smart City</a>
              <a href="/details/cityresources/82">Bareilly Smart City</a>
              <a href="/details/cityresources/83">Belagavi Smart City</a>
              <a href="/details/cityresources/84">Bengaluru Smart City</a>
              <a href="/details/cityresources/85">Bhopal Smart City</a>
              <a href="/details/cityresources/86">Bhubaneswar Smart City</a>
              <a href="/details/cityresources/87">Bilaspur Smart City</a>
              <a href="/details/cityresources/88">Chandigarh Smart City</a>
              <a href="/details/cityresources/89">Chennai Smart City</a>
              <a href="/details/cityresources/90">Coimbatore Smart City</a>


              
              
              
              {/* <a href="/smart-city-projects">Smart City Project Reports</a> */}
            </div>
            <div>
              {/* <a href="/parners">Partners</a> */}
              <a href="/details/cityresources/91">Dahod Smart City</a>
              <a href="/details/cityresources/92">Davanagere Smart City</a>
              <a href="/details/cityresources/93">Dehradun Smart City</a>
              <a href="/details/cityresources/94">Dharamshala Smart City</a>
              <a href="/details/cityresources/95">Diu Smart City</a>
              <a href="/details/cityresources/96">Erode Smart City</a>
              <a href="/details/cityresources/97">Faridabad Smart City</a>
              <a href="/details/cityresources/98">Diu Smart City</a>
              <a href="/details/cityresources/99">Erode Smart City</a>
              <a href="/details/cityresources/100">Faridabad Smart City</a>
              <a href="/details/cityresources/101">Gandhinagar Smart City</a>
              <a href="/details/cityresources/102">Gangtok Smart City</a>
              <a href="/details/cityresources/103">Greater Warangal Smart City</a>
              <a href="/details/cityresources/104">Guwahati Smart City</a>
              <a href="/details/cityresources/105">Gwalior Smart City</a>
              <a href="/details/cityresources/106">Hubballi-dharwad Smart City</a>
              <a href="/details/cityresources/107">Imphal Smart City</a>
              <a href="/details/cityresources/108">Indore Smart City</a>
              <a href="/details/cityresources/109">Itanagar Smart City</a>
              <a href="/details/cityresources/110">Jabalpur Smart City</a>
              <a href="/details/cityresources/111">Jaipur Smart City</a>
              <a href="/details/cityresources/112">Jalandhar Smart City</a>
              <a href="/details/cityresources/113">Jammu Smart City</a>
              <a href="/details/cityresources/114">Jhansi Smart City</a>
              <a href="/details/cityresources/115">Kakinada Smart City</a>
              <a href="/details/cityresources/116">Kalyan-dombivali Smart City</a>
              <a href="/details/cityresources/117">Kanpur Smart City</a>
              
              
              
            </div>
            <div>
              {/* <a href="/city-profile">City Profile</a> */}
              {/* <a href="/city-lights">City lights</a> */}
              {/* <a href="/blogs">Blog</a> */}
              {/* <a href="/opinions">Opinions</a> */}
              <a href="/details/cityresources/118">Karimnagar Smart City</a>
              <a href="/details/cityresources/119">Karnal Smart City</a>
              <a href="/details/cityresources/120">Kavaratti Smart City</a>
              <a href="/details/cityresources/121">Kochi Smart City</a>
              <a href="/details/cityresources/122">Kohima Smart City</a>
              <a href="/details/cityresources/123">Kota Smart City</a>
              <a href="/details/cityresources/124">Lucknow Smart City</a>
              <a href="/details/cityresources/125">Ludhiana Smart City</a>
              <a href="/details/cityresources/126">Madurai Smart City</a>
              <a href="/details/cityresources/127">Mangaluru Smart City</a>
              <a href="/details/cityresources/128">Moradabad Smart City</a>
              <a href="/details/cityresources/129">Muzaffarpur Smart City</a>
              <a href="/details/cityresources/130">Nagpur Smart City</a>
              <a href="/details/cityresources/131">Namchi Smart City</a>
              <a href="/details/cityresources/132">Nashik Smart City</a>
              <a href="/details/cityresources/133">New Delhi Smart City</a>
              <a href="/details/cityresources/134">New Town Kolkata Smart City</a>
              <a href="/details/cityresources/135">Panaji Smart City</a>
              <a href="/details/cityresources/136">Pasighat Smart City</a>
              <a href="/details/cityresources/137">Port Blair Smart City</a>
              <a href="/details/cityresources/138">Prayagraj Smart City</a>
              <a href="/details/cityresources/139">Puducherry Smart City</a>
              <a href="/details/cityresources/140">Pune Smart City</a>
              <a href="/details/cityresources/141">Raipur Smart City</a>
              <a href="/details/cityresources/142">Rajkot Smart City</a>
              <a href="/details/cityresources/143">Ranchi Smart City</a>
              <a href="/details/cityresources/144">Rourkela Smart City</a>
              <a href="/details/cityresources/145">Sagar Smart City</a>
              
              
              
            </div>
            <div>
              <a href="/details/cityresources/146">Saharanpur Smart City</a>
              <a href="/details/cityresources/147">Satna Smart City</a>
              <a href="/details/cityresources/148">Shillong Smart City</a>
              <a href="/details/cityresources/149">Shimla Smart City</a>
              <a href="/details/cityresources/150">Shivamogga Smart City</a>
              <a href="/details/cityresources/151">Silvassa Smart City</a>
              <a href="/details/cityresources/152">Solapur Smart City</a>
              <a href="/details/cityresources/153">Srinagar Smart City</a>
              <a href="/details/cityresources/154">Surat Smart City</a>
              <a href="/details/cityresources/155">Thane Smart City</a>
              <a href="/details/cityresources/156">Thanjavur Smart City</a>
              <a href="/details/cityresources/157">Thoothukudi Smart City</a>
              <a href="/details/cityresources/158">Tiruchirappalli Smart City</a>
              <a href="/details/cityresources/159">Tirunelveli Smart City</a>
              <a href="/details/cityresources/160">Tirupati Smart City</a>
              <a href="/details/cityresources/161">Tiruppur Smart City</a>
              <a href="/details/cityresources/162">Tumakuru Smart City</a>
              <a href="/details/cityresources/163">Udaipur Smart City</a>
              <a href="/details/cityresources/164">Ujjain Smart City</a>
              <a href="/details/cityresources/165">Vadodara Smart City</a>
              <a href="/details/cityresources/166">Varanasi Smart City</a>
              <a href="/details/cityresources/167">Varanasi Smart City</a>
              <a href="/details/cityresources/168">Vellore Smart City</a>
              <a href="/details/cityresources/169">Visakhapatnam Smart City</a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
