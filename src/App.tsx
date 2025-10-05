import { useState } from "react";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        iconPath="https://via:placeholder.com/24"
        iconAlt="icon"
        onChange={(e) => setEmail(e.target.value)}
        onIconClick={() => {}}
        errorMessage="Error"
        placeholder="Placeholder"
        value={email}
        isError={isError}
      />
      <div className="mt-4" />
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        iconPath="https://via:placeholder.com/24"
        iconAlt="icon"
        onChange={(e) => setAddress(e.target.value)}
        onIconClick={() => {}}
        errorMessage="Error"
        placeholder="Placeholder"
        value={address}
        isError={isError}
      />
      <Button onClick={() => setIsError(!isError)} label="에러토글" />
    </>
  );
}

export default App;
