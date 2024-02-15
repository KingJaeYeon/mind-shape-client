"use client";
import Col from "@/components/layout/Col";
import EmailInput from "@/components/share/input/EmailInput";
import PasswordInput from "@/components/share/input/PasswordInput";
import { useState } from "react";

export default function Body() {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password",
  );
  return (
    <form
      onSubmit={(e) => {
        const target = e.currentTarget;
        const key = Object.keys(target).filter((item) => !isNaN(Number(item)));
        console.dir(target);
        console.log(key);
        e.preventDefault();
      }}
    >
      <Col>
        <label htmlFor={"email"}>email</label>
        <EmailInput id={"email"} />
      </Col>
      <Col>
        <label htmlFor={"password"}>password</label>
        <PasswordInput id={"password"} type={passwordType} />
      </Col>
      <button type={"submit"}>submit</button>
    </form>
  );
}
