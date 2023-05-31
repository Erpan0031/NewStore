import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface ILoginProps {}
type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC<ILoginProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {};
  return (
    <>
      <div className=" relative  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-zinc-900 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            登录你的账户享受优质的服务
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...register("email")}
                  placeholder="请输入邮箱地址"
                  className="block w-full rounded-md border md:border-0 py-3 px-2 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && (
                <span className=" text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register("password")}
                  placeholder="请输入账号密码"
                  className="block w-full rounded-md border md:border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.password && (
                <span className=" text-red-600">This field is required</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-500"
                >
                  忘记密码？
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                登录
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            没有账号？
            <a
              href="#"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              立即注册
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
