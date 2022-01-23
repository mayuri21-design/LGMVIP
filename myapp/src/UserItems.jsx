const UserItems=(props)=>
{
    return(
        <>
              <div className="container-fluid mt-5">
            <div className="row user_inside">
              <div className="mx-auto col-11">
                <div className="row my-3">
                  {/* array-mapping */}
    
                  {props.users.map((ele) => {
                    const { id, email, first_name, last_name, image } = ele;
                    return (
                      <div className="col-12 col-md-6 col-lg-6 col-xl-4 my-5 mx-5 text-center">
                        <div className="row border shadow-lg p-3 mb-5-white-rounded rounded">
                          {/* for images */}
                          <div className="col-12 col-md-12 col-lg-4  img_div">
                            <img src={image} alt="userpic" className="img-fluid" />
                          </div>
                          {/* use description */}
                          <div className="col-12 col-md-12 col-lg-8 ">
                            <div className="main-title pt-4 pb-3">
                              <h2 style={{ color: "#E2053E" }}>{first_name} {last_name}</h2>
                              <p>user-data</p>
                            </div>
                            <div className="user_first">
                              <div className="divide_data d-flex justify-content-between">
                                <h4>{email}</h4>
                                <a href="#">
                                  <button className=" btn btn-primary">Users</button>
                                </a>
                              </div>
                              <p>data may vary with users</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default UserItems;