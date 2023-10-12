function Register3(){
    return(
        <div className="Register3 d-flex align-items-center">
            <div className="container">
                <p className="display-4 text-center mb-4">LinkUp</p>
                <form action="" className="d-flex flex-column gap-5">
                    <div className="d-flex flex-column gap-3">
                        <input type="file" name="pp" id="pp"/>
                        <label htmlFor="pp" className="text-center">Choose profile picture</label>
                    </div>                
                    <button type="submit" className="p-2">Finish</button>
                </form>
            </div>
        </div>
    )
}
export default Register3;