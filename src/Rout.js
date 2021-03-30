function Rout(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/perfil">
                    <Perfil />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}