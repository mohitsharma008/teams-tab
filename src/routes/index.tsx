import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const DashBoard = React.lazy(() => import("../container/DashBoard"))

const RoutesList = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Suspense fallback={"Loading...."}>
                    <DashBoard />
                </Suspense>
            </Route>
        </Switch>
    )
}

export default RoutesList
