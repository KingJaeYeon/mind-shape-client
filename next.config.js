/** @type {import('next').NextConfig} */
const nextConfig = {
  head: {
    meta: [
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit: cover",
      },
    ],
  },
};

module.exports = nextConfig;
