import { useState } from "react";

const Account = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? (
        <>Logout</>
      ) : (
        <>
          <p>Login/Register</p>
        </>
      )}
    </>
  );
};

export default Account;
