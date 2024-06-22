import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import UserAvator from "../assets/Images/userav.png";
import { LogoutUser } from "../../redux/user/userFunction";

const ProfileBox = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  const handelLogout = () => {
    try {
      const res= dispatch(LogoutUser())
      console.log(res)
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="p-6 bg-white flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="flex-shrink-0 mb-4">
          <img src={UserAvator} alt="image" className=" h-40 " />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
            {user.username || "John Doe"}
          </h2>
          <p className="text-gray-600">{user.email || "JohnDoe@gmail.com"}</p>
        </div>
      </div>
      <ul className="grid gap-4">
        <li className="flex items-center">
          <FaYoutube className="text-red-500 mr-2" />
          <p className="text-blue-500 hover:underline">
            {user.youtube_api ? "YouTube Channel" : "Add your YouTube API"}
          </p>
        </li>
        <li className="flex items-center">
          <FaTwitter className="text-blue-500 mr-2" />
          <p className="text-blue-500 hover:underline">
            {user.twitter_api ? "Twitter Profile" : "Add your Twitter API"}
          </p>
        </li>
        <li className="flex items-center">
          <FaFacebook className="text-blue-600 mr-2" />
          <p className="text-blue-500 hover:underline">
            {user.facebook_api ? "Facebook Page" : "Add your Facebook API"}
          </p>
        </li>
      </ul>
      <div className="w-full pt-5 flex justify-evenly items-center">
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Go Live
        </button>
        <button
          type="button"
          onClick={handelLogout}
          className=" text-red-500 border-2 border-red-500 hover:bg-red-100 py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileBox;
