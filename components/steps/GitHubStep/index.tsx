import clsx from 'clsx';
// import Cookies from 'js-cookie';
import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
// import { StepInfo } from '../../StepInfo';

// @ts-ignore
import styles from './GitHubStep.module.scss';
import React, {useEffect} from 'react';
import {MainContext} from '../../../pages';

export const GitHubStep = () => {
  const {onNextStep} = React.useContext(MainContext);

  const onClickAuth = () => {
    window.open(
      'http://localhost:3001/auth/github',
      'Auth',
      'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no'
    );
  };

  useEffect(() => {
    window.addEventListener('message', ({data}) => {
      const user = data;
      if (typeof user === 'string' && user.includes('avatarUrl')) {
        const json = JSON.parse(user);
        // setUserData(json);
        // onNextStep();
        // Cookies.set('token', json.token);
      }
    });
  }, []);

  return (
    <div className={styles.block}>
      {/*<StepInfo icon="/static/connect.png" title="Do you want import info from GitHub?"/>*/}
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <Button
          onClick={onClickAuth}
          className={clsx(styles.button, 'd-i-flex align-items-center')}>
          <img className="d-ib mr-10" src="/static/github.svg" alt={'github'}/>
          Import from GitHub
          <img className="d-ib ml-10" src="/static/arrow.svg" alt={'nextstep'}/>
        </Button>
        <div onClick={onNextStep} className="link mt-20 cup d-ib">Enter my info manually</div>
      </WhiteBlock>
    </div>
  );
};
