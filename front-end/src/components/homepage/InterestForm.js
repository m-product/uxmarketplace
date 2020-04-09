import React from 'react'


const InterestForm = () => {
    return (
        <form>

        <div class="form-row">
            <div class="form-group col-md">
            <label for="inputFirstName">First Name</label>
            <input type="text" class="form-control" id="inputFirstName" required/>
            </div>

            <div class="form-group col-md">
            <label for="lastname">Last Name</label>
            <input type="text" class="form-control" id="lastname" required/>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="yourname@email.com" required/>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md">
            <label for="inputPhone">Phone Number (optional)</label>
            <input type="tel" class="form-control" id="inputPhone" />
            </div>

            <div class="form-group col-md">
            <label for="role">Role</label>
            <select id="role" class="form-control">
                <option selected>Choose...</option>
                <option>UX Professional ("seller")</option>
                <option>Beta Tester ("buyer")</option>
            </select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Tell me More!</button>
        </form>

    )
}

export default InterestForm;