import { IoSearchOutline } from "react-icons/io5";
const Searchbar = () => {
  return (
    <div className="rounded-full w-1/3 mx-6 p-2 border flex items-center">
      <input type="text" className="w-full rounded-full px-1" placeholder="Search..."/>
      <div className=" px-1 py-0 h-full">
        <IoSearchOutline className="w-5 h-5"/>
      </div>
    </div>
  )
}

export default Searchbar
