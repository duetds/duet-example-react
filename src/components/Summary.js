import React from "react"
import {
  DuetParagraph,
  DuetSpacer,
  DuetTable,
  DuetButton,
  DuetIcon,
  DuetInput,
  DuetVisuallyHidden
} from "@duetds/react"

export default function Summary({ agreement, formatter }) {
  agreement = agreement || { label: "", price: 0 }

  return (
    <div>
      <DuetInput expand disabled label="Sopimus" value={agreement.label}></DuetInput>
      <DuetSpacer></DuetSpacer>
      <DuetParagraph>Valitsemasi vaihtoehto jakautuu seuraavasti:</DuetParagraph>
      <DuetTable variation="plain">
        <table>
          <thead>
            <tr>
              <th>Sijoituskohde</th>
              <th>Osuus</th>
              <th className="duet-text-right">Summa</th>
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
              <td>25%</td>
              <td className="duet-text-right">{formatter.format(agreement.price * 0.25)}</td>
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
              <td>25%</td>
              <td className="duet-text-right">{formatter.format(agreement.price * 0.25)}</td>
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
              <td>50%</td>
              <td className="duet-text-right">{formatter.format(agreement.price * 0.5)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="duet-font-weight-semi-bold">
                Sijoitettava summa
              </td>
              <td className="duet-text-right duet-font-weight-semi-bold duet-font-size-large">
                {formatter.format(agreement.price)}
              </td>
            </tr>
          </tfoot>
        </table>
      </DuetTable>
    </div>
  )
}
