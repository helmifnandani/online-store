import { useEffect, useState } from "react";
import { users } from "../constants";
import Button from "../components/Button";
import { productItems } from "../constants";
import ProductItem from "../components/ProductItem";

const Account = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (isLogin) {
      setUser(users[0]);
    }
  }, [isLogin]);

  useEffect(() => {
    setIsLogin(false);
  }, []);
  const handleClickAccount = () => {
    setIsRegister((prev) => {
      return !prev;
    });
  };

  return (
    <>
      {isLogin ? (
        <>
          <div className="grid h-full grid-cols-12 gap-7">
            <div className="col-span-12 px-3 py-4 lg:col-span-4 lg:border-r">
              <h2 className="text-2xl font-semibold">Welcome, {user.name}</h2>
              <h3 className="text-lg">{user.email}</h3>
            </div>
            <div className="col-span-12 space-y-10 px-3 py-4 lg:col-span-8">
              <h2 className="text-2xl font-semibold">Wishlist</h2>
              <div className="mb-7 grid h-full grid-cols-12 gap-2 lg:gap-7">
                {productItems.map((item) => (
                  <div
                    className="col-span-6 h-full w-full lg:col-span-3"
                    key={item.productid}
                  >
                    <ProductItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex items-center justify-center">
          <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
            <div className="flex justify-center gap-7">
              <Button
                type={"link"}
                text={"LOGIN"}
                className={`${!isRegister ? "pointer-events-none text-slate-900" : "pointer-events-auto text-gray-300"}`}
                onClick={handleClickAccount}
              />
              <Button
                type={"link"}
                text={"REGISTER"}
                className={`${isRegister ? "pointer-events-none text-slate-900" : "pointer-events-auto text-gray-300"}`}
                onClick={handleClickAccount}
              />
            </div>
            <div className="w-full divide-y divide-gray-200">
              {isRegister ? (
                <div className="px-5 py-7">
                  <label className="block pb-1 text-sm font-semibold text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mb-5 mt-1 w-full border px-3 py-2 text-sm"
                  />
                  <label className="block pb-1 text-sm font-semibold text-gray-600">
                    E-mail
                  </label>
                  <input
                    type="text"
                    className="mb-5 mt-1 w-full border px-3 py-2 text-sm"
                  />
                  <Button className="w-full" text={"Register"} />
                </div>
              ) : (
                <div className="px-5 py-7">
                  <label className="block pb-1 text-sm font-semibold text-gray-600">
                    E-mail
                  </label>
                  <input
                    type="text"
                    className="mb-5 mt-1 w-full border px-3 py-2 text-sm"
                  />
                  <Button className="w-full" text={"Login"} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
