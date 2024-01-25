import Image from "next/image";
import tempLogo from "@/assets/svg/static/temp-logo.svg";
import Link from "next/link";

export default function HomeButtonTypeLogo() {
  return (
    <Link href={"/"} className={"flex text-black"}>
      <Image src={tempLogo} alt={"img"} className={"h-[30px] w-[120px]"} />
    </Link>
  );
}
