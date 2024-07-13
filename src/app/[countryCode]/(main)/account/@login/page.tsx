import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Anmelden",
  description: "Melde dich in deinem Salanitro Store-Konto an.",
}

export default function Login() {
  return <LoginTemplate />
}
