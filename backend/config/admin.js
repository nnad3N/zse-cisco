module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff2150356e0050a38475f00cc488416e'),
  },
});
