import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Created by Manuel with Next.JS</p>
        <p className="text-sm">Hello Arjun, Convinced? </p>
        <p className="text-sm">Please Hop on a call with me, so we talk abt how to best fix your website.</p>
        <p className="text-sm">Please HIRE ME.</p>
        <p className="text-sm">or do <a href="mailto:manueldiamondlistowell@gmail.com" className="underline hover:text-blue-400">email</a></p>
      </div>
    </footer>
  );
}

export default Footer;