import React, { useState } from "react";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import { FormDataOne, FormDataTwo } from "./formData.interface";
import styles from "./style.module.scss";

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [stepOneData, setStepOneData] = useState<FormDataOne | null>(null);
  const [stepTwoData, setStepTwoData] = useState<FormDataTwo | null>(null);

  const onSubmitStepOne = (data: FormDataOne): void => {
    setStepOneData(data);
    setStep(2);
  };

  const onSubmitStepTwo = (data: FormDataTwo): void => {
    setStepTwoData(data);
    setStep(0);
  };

  const handleStartOver = (): void => {
    setStep(1);
    setStepOneData(null);
    setStepTwoData(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepTracker}>Step {step === 0 ? 2 : step} of 2</div>

      {step === 0 && (
        <>
          <p>You have successfully completed the form!</p>
          <button className={styles.startOverbutton} onClick={handleStartOver}>
            Start Over
          </button>
        </>
      )}

      {step === 1 && <StepOne onSubmitStepOne={onSubmitStepOne} />}
      {step === 2 && <StepTwo onSubmitStepTwo={onSubmitStepTwo} />}

      {stepOneData && stepTwoData && (
        <div className={styles.result}>
          <h2>Result</h2>
          <p>Step 1 Data: {JSON.stringify(stepOneData)}</p>
          <p>Step 2 Data: {JSON.stringify(stepTwoData)}</p>
        </div>
      )}
    </div>
  );
};

export default App;
