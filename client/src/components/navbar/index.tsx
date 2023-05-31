import React, { Fragment, useCallback, useRef, useState } from "react";
import { classNames } from "@/utils/utils";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import navigation from "@/mock/navigation.json";
import Image from "next/image";

interface INavbarProps {
  className?: string;
}
interface MenuHeights {
  [key: string]: number;
}

const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [outerDivHeight, setOuterDivHeight] = useState<number>(0);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const menuHeightsRef = useRef<MenuHeights>({});

  const handleMenuToggle = useCallback(
    (name: string) => {
      setActiveMenu(name);
      const menuHeight = menuHeightsRef.current[name];
      if (menuHeight) {
        setOuterDivHeight(menuHeight);
      }
    },
    [menuHeightsRef]
  );

  const handleMenuMount = useCallback(
    (name: string, node: HTMLElement | null): void => {
      menuHeightsRef.current[name] = node ? node.clientHeight : 0;
    },
    []
  );
  return (
    <header className={` ${className}`}>
      <p className="flex h-10 items-center -mb-10 justify-center bg-blue-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      <div className="relative">
        <Disclosure
          as="nav"
          onMouseLeave={() => setActiveMenu("")}
          style={{ height: activeMenu ? `${outerDivHeight}px` : "44px" }}
          className={classNames(
            "w-full h-11 relative bg-white dark:bg-zinc-900 border-b   dark:border-none z-10 duration-300 ease-in-out "
          )}
        >
          <div className="mx-auto hidden md:block container ">
            <div className=" flex text-center text-[0.8rem] font-normal text-slate-900 dark:text-gray-400 ">
              {/* 菜单区域 */}
              <div className="h-11 max-w-4xl w-full mx-auto">
                <ul className="flex items-center justify-between w-full h-full">
                  <li>
                    <Image src="vercel.svg" alt="me" width="64" height="32" />
                  </li>
                  {navigation?.map((item) => {
                    const isActive = activeMenu === item.name;
                    return (
                      <li key={item.id}>
                        <span
                          className={classNames(
                            isActive
                              ? "dark:text-white text-black "
                              : "text-gray-400",
                            " cursor-pointer z-10 text-xs font-semibold transition ease-out duration-700"
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
                            "absolute top-0 inset-x-0 -z-10 -mt-11 overflow-hidden transition-all duration-300 ease-in-out"
                          )}
                          ref={(node) => handleMenuMount(item.name, node)}
                          style={{ maxHeight: "calc(100vh - 44px)" }}
                        >
                          <div className="mt-11 overflow-y-auto">
                            <div className="max-w-5xl pt-[20px] mx-auto text-black dark:text-white my-10 flex">
                              {item.baseGroups?.map(
                                ({ title, id, baseLinks }) => (
                                  <div
                                    key={id}
                                    className="text-left mx-10 w-auto"
                                  >
                                    <span className="text-gray-600 font-semibold ">
                                      {title}
                                    </span>
                                    <ul className=" leading-10 text-lg font-semibold text-black dark:text-white">
                                      {baseLinks.map((item) => (
                                        <li
                                          key={item.id}
                                          className="cursor-pointer "
                                        >
                                          {item.text}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )
                              )}
                              {item.elevatedGroups?.map(
                                ({ title, id, elevatedLinks }) => (
                                  <div
                                    key={id}
                                    className="text-left mx-10 w-auto"
                                  >
                                    <span className=" text-gray-600 font-semibold  ">
                                      {title}
                                    </span>
                                    <ul className="text-lg font-semibold text-black dark:text-white leading-10">
                                      {elevatedLinks.map((item) => (
                                        <li
                                          key={item.id}
                                          className="cursor-pointer"
                                        >
                                          {item.text}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li>
                    <Popover className="relative mt-1">
                      <Popover.Button>
                        <UserCircleIcon className="w-5 h-5" />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-60 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="bg-gray-50 p-2">
                              <div className="  rounded-lg p-2 flex items-center">
                                <div className="w-14 h-14 rounded-full bg-yellow-200"></div>
                                <div className=" text-left ml-2">
                                  <span className=" font-semibold text-base">
                                    Erpan
                                  </span>
                                  <p className="text-gray-400 text-xs truncate max-w-[8rem]">
                                    3014119383@qq.com
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </li>
                  <li>
                    <Popover className="relative mt-1">
                      <Popover.Button>
                        <BellIcon className="w-5 h-5" />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="bg-gray-50 p-2">
                              <div className="rounded-lg p-2 flex items-center">
                                <ul>
                                  <li>
                                    {/* <div className="border h-14">
                                      <div></div>
                                      <div></div>
                                    </div> */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 手机菜单 */}
          <div className=" md:hidden px-2 flex items-center justify-between">
            <div className="text-black dark:text-white">
              <Image src="vercel.svg" alt="me" width="64" height="32" />
            </div>
            <Disclosure.Button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="inline-flex items-center justify-center rounded-md p-2 z-10 text-gray-400  "
            >
              <span className="sr-only">Open main menu</span>
              {openMobileMenu ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          {/* 下拉菜单 */}
          <div
            className={classNames(
              openMobileMenu
                ? "h-screen visible opacity-100"
                : "h-0 invisible opacity-0",
              "sm:hidden bg-white dark:bg-zinc-900 overflow-hidden absolute top-0 w-full transition-all duration-300 ease-in-out p-11"
            )}
          >
            <ul className=" font-semibold text-black dark:text-white text-3xl leading-[4rem]">
              {navigation?.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        </Disclosure>
        <div
          className={classNames(
            activeMenu !== ""
              ? " opacity-100 visible overflow-y-none"
              : "opacity-0 invisible",
            "absolute top-0 w-full h-screen -z-10 backdrop-blur-md bg-white/30 transition-all duration-300 ease-in-out"
          )}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
