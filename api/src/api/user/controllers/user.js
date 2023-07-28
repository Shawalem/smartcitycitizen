const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

module.exports = {
  async register(ctx) {
    // Define the registration schema
    const registrationSchema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      jobTitle: Joi.string(),
      company: Joi.string(),
      industry: Joi.string(),
      country: Joi.string(),
      city: Joi.string(),
      number: Joi.number(),
      involved: Joi.string(),
      jobFunction: Joi.string(),
      seniority: Joi.string()
    });

    // Validate the user input
    const { error, value } = registrationSchema.validate(ctx.request.body);

    if (error) {
      ctx.throw(400, error.details[0].message);
    }

    const { firstName, lastName, email, password, jobTitle, company, industry, country, city, number, involved, jobFunction, seniority } = value;

    try {
      // Check if the email is already registered
      const existingUser = await strapi.query('user', 'users-permissions').findOne({ email });

      if (existingUser) {
        ctx.throw(400, 'Email already registered');
      }

      // Create a new user record
      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
      const newUser = await strapi.query('user', 'users-permissions').create({
        username: email,
        email,
        password: hashedPassword,
        confirmed: true, // Assuming the user is automatically confirmed upon registration
        blocked: false, // Assuming the user is not blocked upon registration
        firstName,
        lastName,
        jobTitle,
        company,
        industry,
        country,
        city,
        number,
        involved,
        jobFunction,
        seniority,
        uuid: uuidv4(), // Generate a UUID for the user
      });

      // Return the registered user data in the response
      ctx.send({ user: newUser });
    } catch (error) {
      ctx.throw(500, 'Failed to register user');
    }
  },
};

module.exports = {
    // ... other controller functions
  
    async login(ctx) {
      const { email, password } = ctx.request.body;
  
      try {
        // Find the user with the provided email
        const user = await strapi.plugins['users-permissions'].services.user.fetch({ email });
  
        if (!user) {
          ctx.throw(400, 'Invalid credentials');
        }
  
        // Validate the password
        const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(password, user.password);
  
        if (!validPassword) {
          ctx.throw(400, 'Invalid credentials');
        }
  
        // Generate a token or session information (e.g., using JWT)
        const token = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });
  
        // Return the token or session information in the response
        ctx.send({ token });
      } catch (error) {
        ctx.throw(500, 'Failed to login');
      }
    },
  };
  
