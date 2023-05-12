import React, { useCallback, useRef, useState } from "react";
import { classNames } from "@/utils/utils";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import mock from "@/mock/navigation.json";

interface INavbarProps {
  className?: string;
}
interface MenuItem {
  name: string;
  analyticsAttributes?: { name: string }[];
}

interface MenuHeights {
  [key: string]: number;
}

const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [outerDivHeight, setOuterDivHeight] = useState<number>(0);
  const [openMobelMenu, setopenMobelMenu] = useState(false);
  const menuHeightsRef = useRef<MenuHeights>({});
  // debounce
  const handleMenuToggle = (name: string) => {
    setActiveMenu(name);
    const menuHeight = menuHeightsRef.current[name];
    if (menuHeight) {
      setOuterDivHeight(menuHeight);
    }
  };

  const handleMenuMount = (name: string, node: HTMLElement | null): void => {
    menuHeightsRef.current[name] = node ? node.clientHeight : 0;
  };
  // backdrop-filter backdrop-blur-lg bg-opacity-75
  return (
    <div className={className} onMouseLeave={() => setActiveMenu("")}>
      <Disclosure
        onMouseLeave={() => setActiveMenu("")}
        as="nav"
        style={{ height: activeMenu ? `${outerDivHeight}px` : "44px" }}
        className={classNames(
          " bg-white dark:bg-zinc-900 transition-all border-b dark:border-zinc-900 duration-700  ease-in-out relative sm:overflow-hidden"
        )}
      >
        <div className="relative ">
          <div className="h-11">
            <div className="hidden sm:block max-w-2xl h-full mx-auto">
              <ul className="flex items-center justify-between h-full">
                {mock.map((item: MenuItem, index: number) => {
                  const isActive = activeMenu === item.name;

                  return (
                    <li
                      className="h-full flex items-center px-2 group"
                      key={index}
                    >
                      <span
                        className={classNames(
                          isActive
                            ? "dark:text-white text-black "
                            : "text-gray-400",
                          "font-normal text-xs cursor-pointer z-10  transition ease-out duration-700"
                        )}
                        onMouseEnter={() => handleMenuToggle(item.name)}
                      >
                        {item.name}
                      </span>
                      <div
                        className={classNames(
                          isActive
                            ? "visible opacity-100"
                            : "invisible opacity-0",
                          "absolute top-0 inset-x-0 -mt-11  overflow-hidden transition-all duration-700 ease-in-out"
                        )}
                        ref={(node) => handleMenuMount(item.name, node)}
                        style={{ maxHeight: "calc(100vh - 44px)" }}
                      >
                        <div className="mt-11 overflow-y-auto">
                          <div className="max-w-3xl pt-[40px] pb-[84px] mx-auto text-black dark:text-white my-10 grid grid-rows-3 grid-cols-3 gap-4">
                            {item.analyticsAttributes?.map(({ name }) => (
                              <div
                                className=" text-lg font-semibold cursor-pointer "
                                key={name}
                              >
                                {name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
                <li className="font-normal text-xs cursor-pointer text-gray-400 ">
                  <UserCircleIcon className="w-5 h-5" />
                </li>
                <li className="font-normal text-xs cursor-pointer text-gray-400 ">
                  <BellIcon className="w-5 h-5 " />
                </li>
              </ul>
            </div>
            <div className=" sm:hidden px-2 flex items-center justify-between">
              <div className="text-black dark:text-white">logo</div>
              <Disclosure.Button
                onClick={() => setopenMobelMenu(!openMobelMenu)}
                className="inline-flex items-center justify-center rounded-md p-2 z-10 text-gray-400  "
              >
                <span className="sr-only">Open main menu</span>
                {openMobelMenu ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            openMobelMenu ? "h-screen visible" : "h-0 invisible",
            "sm:hidden bg-zinc-900 overflow-hidden absolute w-full top-0 transition-all duration-300 ease-in-out"
          )}
        >
          <div className="space-y-1 px- pb-3 pt-2 mt-11">
            {mock.map(({ name }) => (
              <Disclosure.Button
                key={name}
                as="button"
                className="block rounded-md px-3 py-2 text-base font-medium text-white"
              >
                <span className="text-lg font-semibold">{name}</span>
              </Disclosure.Button>
            ))}
          </div>
        </div>
      </Disclosure>
      <div
        className={classNames(
          activeMenu !== "" ? " opacity-100 visible" : "opacity-0 invisible",
          " fixed inset-x-0 top-0  h-screen backdrop-filter backdrop-blur-lg -z-10 transition-all duration-300 ease-in-out "
        )}
      ></div>
    </div>
  );
};

export default Navbar;
