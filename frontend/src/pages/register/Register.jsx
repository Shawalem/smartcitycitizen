import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import axios from 'axios'
import "./register.scss";


const Register = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = (data)=>{
    const link = `https://backend-app-lft6m.ondigitalocean.app/api/auth/local/register`;
    // axios.post(`https://backend-app-lft6m.ondigitalocean.app/api/auth/local/register`,data)
    fetch(link,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })
    .catch(e=>{
      console.log(e.message);
    })


  }

  return (
    <>
      <Helmet>
        <title>Smart City Citizen - Registration</title>
        <meta name="description" content="User Registration Page" />
      </Helmet>
      <section>
        <div className="container">
          <div className="register_wrapper">
            <div className="registration_para">
              <h1>Registration</h1>
              <p>
               Register as Smart City Citizen  or as our Corporate Memeber to access
                all resources and information of SmartCityCitizen.com and to share ideas to solve Smart City Development challenges.....it's
                free for Smart City Citizens!
              </p>
              <p>
                By registering you will be able participate in Citizen Engagement projects / surveys in addition to access to news items,
                podcasts and city profiles along with registering to newsletters to your email based on your interests and profile.
                We will also send invitations to citizen engagement events / surveys in your city.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_input">
                <span>First Name</span>
                <input
                  type="text"
                  {...register("first_name", { required: true })}
                />
                {errors.firstName && <p>First Name is Required</p>}
              </div>

              <div className="form_input">
                <span>Last Name</span>
                <input
                  type="text"
                  {...register("last_name", { required: true })}
                />
                {errors.lastName && <p>Last Name is Required</p>}
              </div>

              <div className="form_input">
                <span>Job Title</span>
                <input type="text" {...register("job_title")} />
              </div>

              <div className="form_input">
                <span>Company</span>
                <input type="text" {...register("company_name")} />
              </div>

              <div className="form_input">
                <span>
                  Email (business or organization email - you can add personal
                  email on next page if preferred)
                </span>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Email is Required</p>}
              </div>

              <div className="form_input">
                <span>Password</span>
                <input
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Password is Required</p>}
              </div>

              
              <div className="form_input">
                <span>Your Role As</span>
                <select
                  type="text"
                  {...register("your_role_as", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="SmartCity Citizen">SmartCity Citizen</option>
                  <option value="Society">Society</option>
                  <option value="Educational/Non Profit">Educational/Non Profit</option>
                  <option value="Private Sector">Private Sector</option>
                  <option value="Public Sector">Public Sector</option>
                </select>
                {errors.industry && <p>Industry is Required</p>}
              </div>

              <div className="form_input">
                <span>Country</span>
                <select
                  type="text"
                  {...register("country", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="	Algeria">	Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Angola">Angola</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Canada">Canada</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cameroon</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                  <option value="Comoros">Comoros</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Germany">Germany</option>
                </select>
                {errors.country && <p>Country is Required</p>}
              </div>

              <div className="form_input">
                <span>City</span>
                <input type="text" {...register("city")} />
              </div>

              <div className="form_input">
                <span>Number</span>
                <input type="number" {...register("number")} />
              </div>

              <div className="form_input">
                <span>What sector are you involved with?</span>
                <select
                  type="text"
                  {...register("what_sector_are_you_involved", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="SmartCity Authority">
                    Smartcity Authority
                  </option>
                  <option value="University / Institute">Research Institute</option>
                  <option value="Non-Profit">Non-Profit</option>
                  <option value="Government">Government</option>
                  <option value="corporate Company">Corporate Company</option>
                  <option value="Urban Palnning">Urban Palnning</option>
                </select>
                {errors.involved && <p>involved is Required</p>}
              </div>

              <div className="form_input">
                <span>What is your Job Function?</span>
                <select
                  type="text"
                  {...register("what_is_your_job_function", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="Professor/Teacher/Trainer">
                    Professor/Teacher/Trainer
                  </option>
                  <option value="Architect/ Town Planner">Architect / Town Planner</option>
                  <option value="Engineer / Designer">Engineer / Designer</option>
                  <option value="Society Member">Society Member</option>
                  <option value="Enforcement Authority">Enforcement Authority</option>
                  <option value="Volunteer">Student / Volunteer</option>
                  <option value="Other">Other</option>
                </select>
                {errors.jobFunction && <p>jobFunction is Required</p>}
              </div>

              <div className="form_input">
                <span>What is your level of seniority?</span>
                <select
                  type="text"
                  {...register("what_is_your_level_of_seniority", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="Owner/Partner">
                    Owner/Partner
                  </option>
                  <option value="C-Suite">C-Suite</option>
                  <option value="Professor">Professor</option>
                  <option value="Director">Director</option>
                  <option value="Senior Manager ">Senior Manager</option>
                  <option value="Staff / Executive">Staff / Executive</option>
                  <option value="Trainee/Student/Intern">Trainee/Student/Intern</option>
                  <option value="Other role">Other role</option>
                </select>
                {errors.seniority && <p>seniority is Required</p>}
              </div>

              <div className="form_input check">
                <span>
                  By completing this form, you will receive Invitation for smartcity Citizen Engagement events/ surveys/ opinion polls in addition to 
                  regular newsletter, as well as updates regarding our research,
                  events, webinars and more. You can update your preferences any
                  time from the bottom of any email you receive from
                  SmartCityCitizen.com.  We are committed
                  to respecting and protecting your privacy. SmartCitycitizen is a B2B & B2C publishing organisation, and will always
                  communicate with its users accordingly. If you have any
                  queries you can contact one of our team at
                  hello@smartcitycitizens.com. 
                  Yes, I agree with the privacy policy and terms and conditions.
                </span>
                <input
                  type="checkbox"
                  {...register("check", { required: true })}
                />
                {errors.check && <p>You have to agree with our condition</p>}
              </div>
              <button type="submit">Register for free Membership</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
