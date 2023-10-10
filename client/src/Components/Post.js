function Post(){
    return(
        <div className="Post mb-5">
            <div className="user d-flex align-items-center container">
                <img src={`${process.env.PUBLIC_URL}/images/pp.jpg`} alt=""  className="me-2"/>
                <p>f.tejic</p>
            </div>
            <div className="py-2">
               <img src={`${process.env.PUBLIC_URL}/images/gas.jpg`} alt="" /> 
            </div>
            <div className="icons container d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                    <img src={`${process.env.PUBLIC_URL}/images/heart-regular.svg`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/images/comment-dots-regular.svg`} alt="" />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/bookmark-regular.svg`} alt="" />
                </div>
            </div>
            <div className="commAndLikes container mt-1">
                <div className="likes">
                    <p><span>156</span> likes</p>
                </div>
                <div className="comm">
                    <p><span>milenko</span> Mozda cak i najbolja slika koju sam ikada video u svom zivotu.</p>
                    <p>View all 24 comments</p>
                    <p className="mt-2">12 minutes ago</p>
                </div>
            </div>
        </div>
    )
}
export default Post;