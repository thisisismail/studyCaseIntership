/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
    databaseURL: process.env.DATABASEURL,
    searchAccKey: process.env.SEARCHACCKEY,
    imageApiProvider: process.env.IMAGEAPIPROVIDER,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
