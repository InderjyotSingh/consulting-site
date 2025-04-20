module.exports = {
  async redirects() {
    return [
      {
        source: '/case-studies/periop-scheduling-workflow',
        destination: '/case-studies/periop',
        permanent: true,
      },
    ];
  },
};