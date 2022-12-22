import React from "react";
import { Card, CardBody, Input, Button } from "@material-tailwind/react";
import { getErrorMessage } from "../services/utils/utils.js";
import WithoutProtected from "../components/hoc/WithoutProtected.js";
import {
  signInWithEmail,
  signUpWithEmail,
} from "../services/firebase/utilsFirebase.js";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [login, setLogin] = React.useState(true);

  const [error, setError] = React.useState("");

  React.useEffect(() => {
    login
      ? setUser((prevState) => ({ ...prevState, username: "filled" }))
      : setUser((prevState) => ({ ...prevState, username: "" }));
  }, [login]);

  const inputHandler = (e) => {
    setError("");
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevStates) => ({ ...prevStates, [name]: value }));
  };

  const submitHandler = () => {
    login
      ? signInWithEmail(user.email, user.password).then(
          (error) => error && setError(getErrorMessage(error))
        )
      : signUpWithEmail(user.email, user.password, user.username).then(
          (error) => error && setError(getErrorMessage(error))
        );
  };

  const disableHandler = () => {
    const isEmpty = Object.values(user).some((x) => x === null || x === "");
    return isEmpty;
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter" && !disableHandler()) {
      submitHandler();
    }
  };

  return (
    <>
      <Card
        style={{ maxWidth: 400 }}
        className="rounded-none mx-auto border-2 w-full"
      >
        <div className="w-full border-b-2 text-lg font-bold p-4">{`${
          login ? "MASUK" : "DAFTAR"
        }`}</div>
        <CardBody className="border-0 px-4 flex flex-col gap-2">
          <div className={`${login ? "hidden" : "block"}`}>
            <Input
              name="username"
              value={user.username}
              onChange={inputHandler}
              label="Nama"
              variant="standard"
              onKeyPress={(e) => handleKeypress(e)}
            />
          </div>
          <Input
            name="email"
            value={user.email}
            onChange={inputHandler}
            label="Email"
            variant="standard"
            onKeyPress={(e) => handleKeypress(e)}
          />
          <Input
            name="password"
            value={user.password}
            onChange={inputHandler}
            label="Password"
            type="password"
            variant="standard"
            onKeyPress={(e) => handleKeypress(e)}
          />
          <div className={`${!error && "hidden"} text-red-600`}>{error}</div>
          <Button
            onClick={() => submitHandler()}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none"
            disabled={disableHandler()}
            tabIndex={`${disableHandler() ? -1 : 0}`}
          >
            {`${login ? "MASUK" : "DAFTAR"}`}
          </Button>
          <div className="mt-4">
            {`${
              login
                ? "Belum punya akun? silahkan "
                : "Sudah punya akun? silahkan "
            }`}
            <span
              className="text-blue-400 cursor-pointer w-max"
              onClick={() => setLogin(!login)}
            >{`${login ? "daftar" : "masuk"}`}</span>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default WithoutProtected(Login);
