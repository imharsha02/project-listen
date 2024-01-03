import Link from "next/link"
import { babes } from "../../fonts/fonts"

const Logo = () => {
  return (
    <Link href="/" className={`${babes.className} tracking-normal text-3xl py-[18px] pl-4 pr-[14px]`}>
      Listen
    </Link>
  )
}

export default Logo
