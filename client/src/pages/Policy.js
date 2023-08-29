import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h4>Privacy Policies</h4>
          <p>Children's Privacy</p>
          <p> Data Security</p>
          <p>Sharing Your Information</p>
          <p>Registration Information</p>
          <p>Order Information</p>
          <p>Changes to This Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;