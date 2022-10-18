export const Form = () => {
    return (
        <>
        <div className="row g-5">
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">My custom form</h4>
                <form action="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" name="firstName" id="firstName" className="form-control" />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" name="lastName" id="lastName" className="form-control" />
                            </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}