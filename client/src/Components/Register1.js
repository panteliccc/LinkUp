function Register1(){
    return(
        <div className="Register1 d-flex align-items-center">
            <div className="container">
                <p className="display-4 text-center mb-4">LinkUp</p>
                <form action="" className="d-flex flex-column gap-5">
                    <div className="d-flex flex-column gap-3">
                        <input type="text" placeholder="First Name" className="p-2"/>
                        <input type="text" placeholder="Last Name" className="p-2"/>
                        <input type="text" placeholder="Date of Birth" className="p-2"/>
                    </div>                
                    <button type="submit" className="p-2">Continue</button>
                    <p className="text-center">You have an account? <span>Log in</span></p>
                </form>
            </div>
        </div>
    )
}
export default Register1;