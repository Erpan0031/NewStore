import * as React from "react";

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <div className="w-full h-full bg-[url('/images/Hero.jpg')]">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5"></nav>
      </div>
    </div>
  );
};

export default Auth;
