/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process")

const nextConfig = {} // Your current Next Config object

module.exports = withNextVideo(nextConfig, {
  provider: "amazon-s3",
  providerConfig: {
    "amazon-s3": {
      bucket: "truex-videos",
      region: "us-east-2",
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  },
})
