import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {
  DuetLayout,
  DuetHeading,
  DuetParagraph,
  DuetSpacer,
  DuetStepper,
  DuetStep,
  DuetButton,
  DuetModal
} from "@duetds/react"
import InvestmentAmount from "./components/InvestmentAmount"
import InvestmentOrigin from "./components/InvestmentOrigin"
import Summary from "./components/Summary"

const agreementOptions = {
  1: { label: "Vakuutus 1", price: 2500 },
  2: { label: "Vakuutus 2", price: 1000 }
}

const formatter = new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" })

function App() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [formData, setFormData] = React.useState({
    investmentAmount: {
      agreement: "",
      additionalInvestment: 50
    },
    investmentOrigin: {
      salary: false,
      gift: false,
      heritage: false,
      entrepreneurialIncome: false,
      assets: false,
      otherIncome: false,
      investment: false,
      extras: ""
    }
  })
  const [complete, setComplete] = React.useState(false)

  function handleInvestmentAmountChange(investmentAmount) {
    setFormData(data => ({
      ...data,
      investmentAmount
    }))
  }

  function handleInvestmentOriginChange(investmentOrigin) {
    setFormData(data => ({
      ...data,
      investmentOrigin
    }))
  }

  function handleNextClick() {
    setCurrentStep(step => step + 1)
  }

  React.useEffect(() => {
    if (window.innerWidth > 992) {
      window.scrollTo(0, 160)
    } else {
      window.scrollTo(0, 110)
    }
  }, [currentStep])

  return (
    <>
      <Header />
      <DuetLayout center>
        <div slot="top" role="region">
          <DuetSpacer breakpoint="large" size="x-large" />
          <DuetHeading level="h1" visual-level="h2">
            Pääotsikko
          </DuetHeading>
          <DuetSpacer />
        </div>
        <div slot="main">
          <DuetStepper selected={currentStep} onDuetStepChange={e => setCurrentStep(e.detail.toStep)}>
            <DuetStep heading="Perustiedot">
              <DuetParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip.
              </DuetParagraph>
              <InvestmentAmount
                value={formData.investmentAmount}
                onChange={handleInvestmentAmountChange}
                agreementOptions={agreementOptions}
                formatter={formatter}
              />
              <DuetSpacer></DuetSpacer>
              <DuetButton
                id="step1"
                disabled={!formData.investmentAmount.agreement}
                margin="none"
                variation="primary"
                onClick={handleNextClick}
              >
                Seuraava
              </DuetButton>
            </DuetStep>
            <DuetStep heading="Tarkemmat tiedot">
              <DuetParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip.
              </DuetParagraph>
              <InvestmentOrigin value={formData.investmentOrigin} onChange={handleInvestmentOriginChange} />
              <DuetSpacer></DuetSpacer>
              <DuetButton id="step2" margin="none" variation="primary" onClick={handleNextClick}>
                Seuraava
              </DuetButton>
            </DuetStep>
            <DuetStep heading="Yhteenveto">
              <DuetSpacer></DuetSpacer>
              <Summary agreement={agreementOptions[formData.investmentAmount.agreement]} formatter={formatter} />
              <DuetSpacer></DuetSpacer>
              <DuetButton id="step3" margin="none" variation="primary" expand onClick={() => setComplete(true)}>
                Lähetä
              </DuetButton>
            </DuetStep>
          </DuetStepper>
        </div>
      </DuetLayout>
      <Footer />
      <DuetModal heading="You entered the following data:" active={complete}>
        <pre>{JSON.stringify(formData, null, "  ")}</pre>
      </DuetModal>
    </>
  )
}

export default App
