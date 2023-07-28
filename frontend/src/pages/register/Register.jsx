import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import "./register.scss";
import useFetch from "../../hooks/useFetch";

const Register = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { registerUser } = useFetch(); // Use the sendData function from the useFetch hook

  const onSubmit = async (data) => {
    try {
      // Call the sendData function with the request configuration
      await registerUser({
        url: "/users/register",
        method: "post",
        data: data
      });
      alert('Registration successful!');
    } catch (error) {
      console.log('Error during registration', error);
    }
  };


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
                It takes just 30 seconds to register for SmartCitiesWorld, which
                brings together news, resources and information for people who
                want to share ideas to solve urban challenges.....Plus it's
                free!
              </p>
              <p>
                By registering you will be able view unlimited news items,
                download white papers, podcasts and city profiles along with
                registering for our weekly newsletter which delivers relevant
                news direct to your inbox based on your interests and profile.
                We will also send invitations to our events and webinars.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_input">
                <span>First Name</span>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <p>First Name is Required</p>}
              </div>

              <div className="form_input">
                <span>Last Name</span>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <p>Last Name is Required</p>}
              </div>

              <div className="form_input">
                <span>Job Title</span>
                <input type="text" {...register("jobTitle")} />
              </div>

              <div className="form_input">
                <span>Company</span>
                <input type="text" {...register("company")} />
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
                <span>Industry Sector</span>
                <select
                  type="text"
                  {...register("industry", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="Educational/Non Profit">
                    Educational/Non Profit
                  </option>
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
                  {...register("involved", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="University">
                    University
                  </option>
                  <option value="Research Institute">Research Institute</option>
                  <option value="Non-Profit">Non-Profit</option>
                  <option value="Traning">Traning</option>
                  <option value="School">School</option>
                  <option value="Charity">Charity</option>
                </select>
                {errors.involved && <p>involved is Required</p>}
              </div>

              <div className="form_input">
                <span>What is your Job Function?</span>
                <select
                  type="text"
                  {...register("jobFunction", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="Lecturer/Teacher/Trainer">
                    Lecturer/Teacher/Trainer
                  </option>
                  <option value="Management">Management</option>
                  <option value="Professor">Professor</option>
                  <option value="Traning">Traning</option>
                  <option value="Research">Research</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
                {errors.jobFunction && <p>jobFunction is Required</p>}
              </div>

              <div className="form_input">
                <span>What is your level of seniority?</span>
                <select
                  type="text"
                  {...register("seniority", { required: true })}
                >
                  <option value="" defaultValue=""></option>
                  <option value="Owner/Partner">
                    Owner/Partner
                  </option>
                  <option value="C-Suite">C-Suite</option>
                  <option value="Professor">Professor</option>
                  <option value="Director">Director</option>
                  <option value="Manager">Manager</option>
                  <option value="Junior">Junior</option>
                  <option value="Training/Student/Intern">Training/Student/Intern</option>
                  <option value="Other role">Other role</option>
                </select>
                {errors.seniority && <p>seniority is Required</p>}
              </div>

              <div className="form_input check">
                <span>
                  By completing this form, you will receive SmartCitiesWorld
                  regular newsletter, as well as updates regarding our research,
                  events, webinars and more. You can update your preferences any
                  time from the bottom of any email you receive from
                  SmartCitiesWorld. Your information will be handled in
                  accordance with the GDPR 2018, and the PECR. We are committed
                  to respecting and protecting your privacy. SmartCitiesWorld
                  Ltd. is a B2B publishing organisation, and will always
                  communicate with its users accordingly. If you have any
                  queries you can contact one of our team at
                  scw-dp@smartcitiesworld.net. Yes, I agree with the privacy
                  policy and terms and conditions.
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
