import { useEffect, useState } from "react";
import Button from "../components/Button";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import placeholderImgEmpty from "../assets/images/placeholder-empty.png";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";
import Icon from "../components/Icons";

const Account = ({
  onLogin,
  setErrorLogIn,
  errorLogIn,
  isAuthenticated,
  user,
  wishlist,
  imgData,
  isLoadingCustomers,
  handleLogout,
  onRegister,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [customeremail, setCustomerEmail] = useState("");
  const [customername, setCustomerName] = useState("");
  const [error, setError] = useState("");

  const handleClickAccount = () => {
    setIsRegister((prev) => {
      return !prev;
    });
    setError("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (customeremail) {
      const user = {
        customeremail,
      };
      onLogin(user);
    } else {
      setError("Please fill in valid email");
    }
  };
  const handleRegister = (event) => {
    event.preventDefault();
    if (!isValidEmail(customeremail)) {
      setError("Please fill in valid email");
      return;
    }
    if (customeremail && customername) {
      const user = {
        customeremail,
        customername,
      };
      onRegister(user);
    } else {
      setError("Please fill in the form");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <>
      {isLoadingCustomers && (
        <div className="space-y-7">
          <Skeleton
            className="h-7 w-6/12 lg:w-3/12"
            classContainer="flex justify-center"
          />
          <Skeleton
            className="h-7 w-6/12 lg:w-3/12"
            classContainer="flex justify-center"
          />
          <Skeleton
            className="h-7 w-6/12 lg:w-3/12"
            classContainer="flex justify-center"
          />
        </div>
      )}
      {!isLoadingCustomers && (
        <>
          {isAuthenticated ? (
            <div className="grid h-full grid-cols-12 gap-7">
              <div className="col-span-12 px-3 py-4 lg:col-span-4 lg:border-r">
                <div className="flex h-full flex-row items-center justify-between lg:flex-col lg:items-stretch">
                  <h2 className="text-2xl font-semibold">
                    Welcome, {user.customeremail}
                  </h2>
                  <Button
                    iconName={"logout"}
                    iconWidth={16}
                    onClick={handleLogout}
                  />
                </div>
              </div>
              <div className="col-span-12 space-y-10 px-3 py-4 lg:col-span-8">
                <h2 className="text-2xl font-semibold">Wishlist</h2>
                {wishlist.length < 1 && (
                  <div className="mb-7 flex flex-col items-center space-y-4 lg:space-y-8">
                    <p className="text-xl font-bold tracking-wider">
                      Add item to your wishlist!
                    </p>
                    <Image
                      imgSrc={placeholderImgEmpty}
                      ratio="aspect-20x9"
                      objectFit="object-contain"
                    />
                  </div>
                )}
                <div className="mb-7 grid h-full grid-cols-12 gap-2 lg:gap-7">
                  {wishlist.map((item) => (
                    <div
                      className="col-span-6 h-full w-full lg:col-span-3"
                      key={item.productid}
                    >
                      <ProductItem
                        item={item.Product}
                        isWishlistPage={true}
                        imgData={imgData}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex items-center justify-center">
              <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
                <div className="flex justify-center gap-7">
                  <Button
                    type={"link"}
                    text={"LOGIN"}
                    className={`${!isRegister ? "pointer-events-none !text-slate-900" : "pointer-events-auto !text-gray-300"}`}
                    onClick={handleClickAccount}
                  />
                  <Button
                    type={"link"}
                    text={"REGISTER"}
                    className={`${isRegister ? "pointer-events-none !text-slate-900" : "pointer-events-auto !text-gray-300"}`}
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
                        value={customername}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                      <label className="block pb-1 text-sm font-semibold text-gray-600">
                        E-mail
                      </label>
                      <input
                        type="text"
                        className="mb-5 mt-1 w-full border px-3 py-2 text-sm"
                        value={customeremail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                      />
                      {error && (
                        <p className="mb-4 text-center font-semibold text-red-500">
                          {error}
                        </p>
                      )}
                      <Button
                        className="w-full"
                        text={"Register"}
                        onClick={handleRegister}
                      />
                    </div>
                  ) : (
                    <div className="px-5 py-7">
                      <label className="block pb-1 text-sm font-semibold text-gray-600">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="customeremail"
                        value={customeremail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="mb-5 mt-1 w-full border px-3 py-2 text-sm"
                      />
                      {error && (
                        <p className="mb-4 text-center font-semibold text-red-500">
                          {error}
                        </p>
                      )}
                      <Button
                        className="w-full"
                        text={"Login"}
                        onClick={handleLogin}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Account;
