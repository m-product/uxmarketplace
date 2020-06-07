import React from 'react';


function InterestForm() {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input type="text" className="form-control" id="inputFirstName" required />
                </div>

                <div className="form-group col-md">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="form-control" id="lastname" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="yourname@email.com" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md">
                    <label htmlFor="inputPhone">Phone Number (optional)</label>
                    <input type="tel" className="form-control" id="inputPhone" />
                </div>

                <div className="form-group col-md">
                    <label htmlFor="role">Role</label>
                    <select id="role" className="form-control" defaultValue="default">
                        <option value="default" disabled>Choose...</option>
                        <option value="ux professional">UX Professional (seller)</option>
                        <option value="beta tester">Beta Tester (buyer)</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Tell me More!</button>
        </form>
    );
}

export default InterestForm;
