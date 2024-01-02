import React from "react";

const Footer = () => {
  return (
    <footer class="text-center py-3">
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-lg-12 ">
            <div class="mb-3 d-flex flex-sm-row flex-column align-items-center justify-content-center">
              <a href="index.html">Home</a>|
              <a href="about.html">About</a>|
              <a href="product_list.html">Products</a>|
              <a href="#">Pages</a>|
              <a href="blog.html">Blog</a>|
              <a href="contact.html">Contact</a>|
            </div>
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved
            </p>
            <div class="">
              <a href="#">Terms & Conditions</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
