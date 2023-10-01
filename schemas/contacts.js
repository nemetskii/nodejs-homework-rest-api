import JOI from 'joi';

const contactSchema = JOI.object({
  name: JOI.string().required(),
  email: JOI.string().required(),
  phone: JOI.string().required(),
});

export default contactSchema;
