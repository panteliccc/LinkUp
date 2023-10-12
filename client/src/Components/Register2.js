function Register2(){
    return(
        <div className="Register2 d-flex align-items-center">
            <div className="container">
                <p className="display-4 text-center mb-4">LinkUp</p>
                <form action="" className="d-flex flex-column gap-5">
                    <div className="d-flex flex-column gap-3">
                        <input type="text" placeholder="Username" className="p-2"/>
                        <input type="password" placeholder="Password" className="p-2"/>
                        <input type="password" placeholder="Confirm Password" className="p-2"/>
                    </div>                
                    <button type="submit" className="p-2">Continue</button>
                </form>
            </div>
        </div>
    )
}
export default Register2;