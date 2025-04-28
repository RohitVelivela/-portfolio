import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/logo-dark.svg"
        alt="Logo"
        width={40}
        height={40}
        className="dark:invert"
      />
    </Link>
  );
};

export default Logo;