import Head from 'next/head'
import Image from 'next/image';
import {WelcomeStep} from "../components/steps/WelcomeStep";
import React from "react";
import {GitHubStep} from "../components/steps/GitHubStep";
import {EnterNameStep} from "../components/steps/EnterNameStep";
import {ChooseAvatarStep} from "../components/steps/ChooseAvatarStep";
import {EnterPhoneStep} from "../components/steps/EnterPhoneStep";
import {EnterCodeStep} from "../components/steps/EnterCodeStep";

const stepsComponents = {
  0: WelcomeStep,
  1: GitHubStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

interface MainContextProps {
  onNextStep: () => void;
  step: number;
}

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

export default function Home() {
  const [step, setStep] = React.useState<number>(0);
  // @ts-ignore
  const Step = stepsComponents[step];
  const onNextStep = () => {
    setStep(prev => prev + 1)
  }

  return (
    <MainContext.Provider value={{step, onNextStep}}>
      <Step/>
    </MainContext.Provider>
  )
}
