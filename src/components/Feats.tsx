import { SlDiamond } from "react-icons/sl";
import { BsStars } from "react-icons/bs";
import { LiaTrophySolid } from "react-icons/lia";
import { FaDraftingCompass } from "react-icons/fa";

export function Feats() {
  return (
    <div className="bg-[#086ad7] bg-[url('/funfact-line.png')] bg-cover mx-4 mb-40 lg:my-10 lg:mx-56 py-10 rounded-md">
      <div className="text-white flex flex-col gap-16 lg:flex-row items-center justify-center lg:space-x-20">
        <div className="flex flex-col items-center gap-4">
          <SlDiamond size={40} />
          <span className="text-6xl font-bold">368</span>
          <p className="font-semibold">Project Completed</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <FaDraftingCompass size={40} />
          <span className="text-6xl font-bold">785</span>
          <p className="font-semibold">Expert Consultants</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <BsStars size={40} />
          <span className="text-6xl font-bold">896</span>
          <p className="font-semibold">5 Stars Rating</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <LiaTrophySolid size={44} />
          <span className="text-6xl font-bold">125</span>
          <p className="font-semibold">Awards Winning</p>
        </div>
      </div>
    </div>
  )
}