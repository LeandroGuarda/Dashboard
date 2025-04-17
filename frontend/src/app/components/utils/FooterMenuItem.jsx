
import Link from "next/link";

const FooterMenuItem = ({ href, item }) => {

  return (
    <li>
        <Link href={href} className="text-sm text-primary hover:text-white">
            {item}
        </Link>
    </li>
  );
};

export default FooterMenuItem;
