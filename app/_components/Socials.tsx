import { FaTiktok, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { IconType } from "react-icons"
import AppLink from "./Links"

function SocialLink({ href, Icon }: { href: string; Icon: IconType }) {
  return (
    <AppLink href={href} target={"_blank"}>
      <Icon size={20} />
    </AppLink>
  )
}

export default function Socials({ className }: { className?: string }) {
  return (
    <ul className={`${className} flex gap-[1.5rem]`}>
      <li>
        <SocialLink href="/" Icon={FaInstagram} />
      </li>
      <li>
        <SocialLink href="/" Icon={FaTiktok} />
      </li>
      <li>
        <SocialLink href="/" Icon={FaTwitter} />
      </li>
      <li>
        <SocialLink href="/" Icon={FaFacebook} />
      </li>
    </ul>
  )
}
