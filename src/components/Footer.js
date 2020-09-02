import React from "react"
import { DuetFooter } from "@duetds/react"

const menu = [
  {
    label: "Turvallisuus ja käyttöehdot",
    href: "#",
    external: "true"
  },
  {
    label: "Evästeet",
    href: "#",
    external: "true"
  },
  {
    label: "Henkilötietojen käsittely",
    href: "#",
    external: "true"
  }
]

export default function Footer() {
  return <DuetFooter variation="simple" menu={menu}></DuetFooter>
}
