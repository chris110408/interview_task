/**
 * Created by leichen on 11/02/2018.
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import LoginPage from '../Login'
import BasicLayout from '../../layouts/'
import UserInfoPage from '../UserInfo'
import RESTfulPage from '../RESTful'
import ETLPage from '../ETL'
import JSPage from '../JS'
import { withSaga } from '../Login/model/sagas'
import PropTypes from 'prop-types'


const App = ({  user }) => {
  return (
    <div>
      <Helmet>
        <meta name='description' content='Interview Project' />
      </Helmet>

      <Switch>
        <Route exact path='/' component={LoginPage} />
        <BasicLayout currentUser={user}>
          <Route path='/userinfo/main' component={UserInfoPage} />
          <Route path='/restful/main' component={RESTfulPage} />
          <Route path='/ETL/main' component={ETLPage} />
          <Route path='/js/search' component={JSPage} />
        </BasicLayout>
      </Switch>
    </div>
  )
}

App.propTypes = {
  user: PropTypes.object
}

export default withSaga(App)
