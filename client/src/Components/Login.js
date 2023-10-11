function Login(){
    return(
        <div className="Login d-flex align-items-center">
            <div className="container">
                <p className="display-4 text-center mb-4">LinkUp</p>
                <form action="" className="d-flex flex-column gap-4">
                    <div className="d-flex flex-column gap-3">
                        <input type="text" placeholder="Username" className="p-2"/>
                        <input type="password" placeholder="Password" className="p-2"/>
                    </div>                
                    <button type="submit" className="p-2">Log in</button>
                    <p className="text-center">Don’t have an account? <span>Sign up</span></p>
                </form>
            </div>
        </div>
    )
}
export default Login;