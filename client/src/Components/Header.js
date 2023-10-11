function Header(){
    return(
        <div className="Header">
            <div className="container d-flex justify-content-between py-3">
                <div className="logo">
                    <p>LinkUp</p>
                </div>
                <div className="messages">
                    <img src={`${process.env.PUBLIC_URL}/images/message-regular.svg`} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Header;