import React from "react";

const TempForm = () => {
  return (
    <>
      <form>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last Name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Email" />
          </div>
        </div>
      </form>
    </>
  );
};

export default TempForm;
