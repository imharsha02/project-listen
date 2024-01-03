import { IoPause } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { FaVolumeOff } from "react-icons/fa";

const MainScreen = () => {
  return (
    <div className="flex h-screen mx-[90px]">
      <div className="w-full flex flex-col justify-between h-3/4 border rounded-lg">
        <div className="bg-black w-full rounded-t-lg h-14"></div>

        {/* content to show */}
        <div className="flex items-center justify-center">
          hi this is the place where the animation for the songs will play
        </div>

        <div className="bg-black w-full items-center flex gap-3 rounded-b-lg h-14">
          <BiSkipPrevious className="text-white w-10 h-10"/>
          <IoPause className="text-white w-10 h-10"/>
          <BiSkipNext className="text-white w-10 h-10"/>
          <FaVolumeOff className="text-white w-10 h-10"/>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
