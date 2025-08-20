import clsx from "clsx";
import Link from "next/link";

export type NavItemProps =
  | { type: "link"; label: string; path: string }
  | { type: "button"; label: string; onClick: () => void };

const NavItem = ({
  item,
  nav,
  activePath,
  setActivePath,
}: {
  item: NavItemProps;
  nav: any;
  activePath: string;
  setActivePath: (p: string) => void;
}) => {
  const isActive = item.type === "link" && activePath === item.path;

  if (item.type === "button") {
    return (
      <button
        className="text-gray-200 cursor-pointer px-4 py-1 rounded-sm border-2 hover:shadow-md duration-200"
        onClick={() =>
          item.label === "Admin" ? nav.push("/admin") : item.onClick()
        }
      >
        {item.label}
      </button>
    );
  }

  return (
    <Link
      className="text-white group"
      href={item.path}
      onClick={() => setActivePath(item.path)}
    >
      <div>
        {item.label}
        <span
          className={clsx(
            "block h-[2px] duration-200 w-0 group-hover:w-full",
            isActive ? "w-full bg-teal-500" : "bg-white"
          )}
        ></span>
      </div>
    </Link>
  );
};

export default NavItem;
