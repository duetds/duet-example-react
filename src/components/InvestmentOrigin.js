import React from "react"
import { DuetInput, DuetCheckbox } from "@duetds/react"

export default function InvestmentOrigin({ value, onChange }) {
  const [hasExtras, setHasExtras] = React.useState(false)

  function handleAssetOriginChange(e) {
    onChange({
      ...value,
      [e.target.name]: e.detail.checked
    })
  }

  function handleExtraDetailsChange(e) {
    onChange({
      ...value,
      extras: e.detail.value
    })
  }

  function handleExtrasChange(e) {
    setHasExtras(e.target.checked)

    if (!e.target.checked) {
      onChange({
        ...value,
        extras: ""
      })
    }
  }

  return (
    <div>
      <DuetCheckbox
        name="salary"
        checked={value.salary}
        onDuetChange={handleAssetOriginChange}
        label="Valinta 1"
      ></DuetCheckbox>
      <DuetCheckbox
        name="gift"
        checked={value.gift}
        onDuetChange={handleAssetOriginChange}
        label="Valinta 2"
      ></DuetCheckbox>
      <DuetCheckbox
        name="heritage"
        checked={value.heritage}
        onDuetChange={handleAssetOriginChange}
        label="Valinta 3"
      ></DuetCheckbox>
      <DuetCheckbox
        name="entrepreneurialIncome"
        checked={value.entrepreneurialIncome}
        onDuetChange={handleAssetOriginChange}
        label="Valinta 4"
      ></DuetCheckbox>
      <DuetCheckbox
        name="assets"
        checked={value.assets}
        onDuetChange={handleAssetOriginChange}
        label="Valinta 5"
      ></DuetCheckbox>
      <DuetCheckbox
        name="otherIncome"
        checked={value.otherIncome}
        onDuetChange={handleAssetOriginChange}
        label="Valinta 6"
      ></DuetCheckbox>

      <DuetCheckbox
        name="extras"
        checked={hasExtras}
        onDuetChange={handleExtrasChange}
        label="Muu, mikä?"
      ></DuetCheckbox>
      {hasExtras && (
        <div>
          <DuetInput
            value={value.extras}
            onDuetChange={handleExtraDetailsChange}
            label="Kerro sijoitettavien varojen muu alkuperä"
            labelHidden
          ></DuetInput>
        </div>
      )}
    </div>
  )
}
