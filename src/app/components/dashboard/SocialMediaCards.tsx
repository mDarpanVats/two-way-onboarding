import Image from "next/image";
import React from "react";

const SocialMediaCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="bg-blue-700 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <Image
          src="/icons/facebook.png"
          width={48}
          height={48}
          alt="Facebook"
          className="w-12 h-12 mb-2"
        />{" "}
        <p className="text-lg font-bold">Facebook</p>
        <p className="text-sm">40 k FRIENDS 450 FEEDS</p>
      </div>
      <div className="bg-blue-300 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <Image
          src="/icons/twitter.png"
          width={48}
          height={48}
          alt="Twitter"
          className="w-12 h-12 mb-2"
        />{" "}
        <p className="text-lg font-bold">Twitter</p>
        <p className="text-sm">30 k FRIENDS 450 TWEETS</p>
      </div>
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <Image
          src="/icons/linkedin.png"
          width={48}
          height={48}
          alt="LinkedIn"
          className="w-12 h-12 mb-2"
        />{" "}
        <p className="text-lg font-bold">LinkedIn</p>
        <p className="text-sm">40+ CONTACTS 250 FEEDS</p>
      </div>
      <div className="bg-red-600 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <Image
          src="/icons/google.png"
          width={48}
          height={48}
          alt="Google+"
          className="w-12 h-12 mb-2"
        />{" "}
        <p className="text-lg font-bold">Google+</p>
        <p className="text-sm">94 k FOLLOWERS 92 CIRCLES</p>
      </div>
    </div>
  );
};

export default SocialMediaCards;
