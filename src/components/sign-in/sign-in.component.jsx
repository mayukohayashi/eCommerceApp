import React from 'react';

import './sign-in.styles.scss';
import { render } from '@testing-library/react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
}

render() {
  return(
    <div className='sign-in'>
      <h2>すでにアカウントをお持ちの方はこちら</h2>
      <span>Emailとパスワードを入力してください</span>

      <form>
        <input name></input>
      </form>
    </div>
  )
}