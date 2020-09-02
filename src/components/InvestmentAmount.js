import React from "react"
import {
  DuetCard,
  DuetSpacer,
  DuetSelect,
  DuetTable,
  DuetButton,
  DuetIcon,
  DuetInput,
  DuetVisuallyHidden
} from "@duetds/react"

function AgreementDetails({ agreement, formatter }) {
  return (
    <DuetTable variation="plain" className="hidden">
      <table>
        <thead>
          <tr>
            <th>Sijoituskohde</th>
            <th className="duet-text-right">Osuus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DuetButton
                variation="plain"
                margin="none"
                padding="none"
                url="https://www.duetds.com/assets/downloads/localtapiola-brand-guidelines.pdf"
                external
              >
                Kohde 1<DuetSpacer size="xx-small" direction="horizontal"></DuetSpacer>
                <DuetIcon name="action-new-window-small" margin="none" size="xx-small"></DuetIcon>
                <DuetVisuallyHidden>, avautuu uuteen ikkunaan</DuetVisuallyHidden>
              </DuetButton>
            </td>
            <td className="duet-text-right">25%</td>
          </tr>
          <tr>
            <td>
              <DuetButton
                variation="plain"
                margin="none"
                padding="none"
                url="https://www.duetds.com/assets/downloads/localtapiola-brand-guidelines.pdf"
                external
              >
                Kohde 2<DuetSpacer size="xx-small" direction="horizontal"></DuetSpacer>
                <DuetIcon name="action-new-window-small" margin="none" size="xx-small"></DuetIcon>
                <DuetVisuallyHidden>, avautuu uuteen ikkunaan</DuetVisuallyHidden>
              </DuetButton>
            </td>
            <td className="duet-text-right">25%</td>
          </tr>
          <tr>
            <td>
              <DuetButton
                variation="plain"
                margin="none"
                padding="none"
                url="https://www.duetds.com/assets/downloads/localtapiola-brand-guidelines.pdf"
                external
              >
                Kohde 3<DuetSpacer size="xx-small" direction="horizontal"></DuetSpacer>
                <DuetIcon name="action-new-window-small" margin="none" size="xx-small"></DuetIcon>
                <DuetVisuallyHidden>, avautuu uuteen ikkunaan</DuetVisuallyHidden>
              </DuetButton>
            </td>
            <td className="duet-text-right">50%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="duet-font-weight-semi-bold">Yhteisarvo</td>
            <td className="duet-text-right duet-font-weight-semi-bold duet-font-size-large">
              {formatter.format(agreement.price)}
            </td>
          </tr>
        </tfoot>
      </table>
    </DuetTable>
  )
}

export default function InvestmentAmount({ value, onChange, agreementOptions, formatter }) {
  function handleAdditionalInvestmentChange(e) {
    const additionalInvestment = e.target.value === "" ? 0 : parseInt(e.target.value)
    e.target.value = additionalInvestment

    onChange({
      ...value,
      additionalInvestment
    })
  }

  function handleAgreementChange(e) {
    onChange({
      ...value,
      agreement: e.detail.value
    })
  }

  const items = Object.entries(agreementOptions).map(([value, { label, price }]) => {
    return {
      value,
      label: `${label} - ${formatter.format(price)}`
    }
  })

  return (
    <div>
      <DuetSelect
        value={value.agreement}
        items={items}
        onDuetChange={handleAgreementChange}
        expand
        label="Valitse sopimus"
        placeholder="Valitse…"
      ></DuetSelect>

      {value.agreement && <AgreementDetails agreement={agreementOptions[value.agreement]} formatter={formatter} />}
      <DuetSpacer></DuetSpacer>

      <DuetCard variation="plain" background="gray-lighter">
        <DuetInput
          value={value.additionalInvestment}
          onDuetChange={handleAdditionalInvestmentChange}
          numericKeyboard
          expand
          label="Syötä summa"
          placeholder="50"
          icon="form-money"
          type="number"
        ></DuetInput>
      </DuetCard>
    </div>
  )
}
