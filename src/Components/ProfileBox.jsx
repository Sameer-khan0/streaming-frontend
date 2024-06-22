import { FaUserCircle, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const ProfileBox = ({ user }) => {
  return (
    <div className="p-6 bg-white">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="flex-shrink-0 mb-4">
          <FaUserCircle className="text-6xl text-gray-400" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <ul className="grid gap-4">
        <li className="flex items-center">
          <FaYoutube className="text-red-500 mr-2" />
          <a href={user.youtubeApi} className="text-blue-500 hover:underline">
            YouTube Channel
          </a>
        </li>
        <li className="flex items-center">
          <FaTwitter className="text-blue-500 mr-2" />
          <a href={user.twitterApi} className="text-blue-500 hover:underline">
            Twitter Profile
          </a>
        </li>
        <li className="flex items-center">
          <FaFacebook className="text-blue-600 mr-2" />
          <a href={user.facebookApi} className="text-blue-500 hover:underline">
            Facebook Page
          </a>
        </li>
      </ul>
      <div className="w-full pt-5 flex justify-center items-center">
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Go Live
        </button>
      </div>
    </div>
  );
};

export default ProfileBox;
