import React from 'react';
import StringQuery from 'query-string'
import {handleRedirect} from '../../util/redirectPage'
import history from '../../util/history';

const AuthAction = () => {
  const {search} = history.location;
  const query = StringQuery.parse(search)
  console.log(query);

switch (query.mode) {
  case "verifyEmail": {
    handleRedirect('/EmailValidate', {oobCode: query.oobCode})
    break;
  }
  case "resetPassword": {
    handleRedirect('/ForgotPassword', {oobCode: query.oobCode})
    break;
  }
  default:
    handleRedirect('/')
}

  return(
    <div>
    </div>
  )
}

export default AuthAction;
