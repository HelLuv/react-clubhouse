import Head from 'next/head'
import Image from 'next/image';
import {WelcomeStep} from "../components/steps/WelcomeStep";
import {FC, useState} from "react";
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
  5:EnterCodeStep,
};

export default function Home<FC>() {
  const [step, setStep] = useState<number>(5);
  // @ts-ignore
  const Step = stepsComponents[step];
  return (
    <div >
        <Step/>
    </div>
  )
}
