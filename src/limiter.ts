import rateLimit from 'express-rate-limit';
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 1 requests per windowMs
});
export { limiter };
