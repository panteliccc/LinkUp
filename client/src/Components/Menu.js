function Menu(){
    return(
        <div className="Menu fixed-bottom">
            <div className="container d-flex justify-content-between py-3">
                <img src={`${process.env.PUBLIC_URL}/images/house-solid.svg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/images/magnifying-glass-solid.svg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/images/square-plus-regular.svg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/images/user-regular.svg`} alt="" />
            </div>
        </div>
    )
}
export default Menu;