import Image from "next/image";
import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <Image
        width={64}
        height={64}
        src="/icons/profile.png"
        alt="Jim Doe"
        className="w-16 h-16 rounded-full mr-4"
      />{" "}
      <div>
        <h3 className="text-lg font-bold">Jim Doe</h3>
        <p className="text-sm text-gray-600">Project Manager</p>
      </div>
    </div>
  );
};

export default ProfileCard;
