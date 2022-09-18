import React from "react";
import BaseLayout from "@components/Layout/BaseLayout";
export default function EHR() {
  return (
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>Kshiti Ghelani</h5>
              <h6>Gwalior, MP</h6>
              <p class="proile-rating">
                ETH. ADDRESS : <span>82359938858</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>Kshiti Ghelani</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>kshitighelani@gmail.com</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div class="col-md-6">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Blood Group</label>
                  </div>
                  <div class="col-md-6">
                    <p>+A</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Diabetic</label>
                  </div>
                  <div class="col-md-6">
                    <p>No</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Blood Pressure</label>
                  </div>
                  <div class="col-md-6">
                    <p>Normal</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Alergic</label>
                  </div>
                  <div class="col-md-6">
                    <p>Yes (Peanut, Seasme)</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Past Gone Surgeries</label>
                  </div>
                  <div class="col-md-6">
                    <p>2 (Heart, Knee)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <style jsx>
        {`body{
    background: #e5e5e5;
}`}
      </style>
      <style jsx>{`.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;`}</style>
      <style jsx>{`.profile-img{
    text-align: center;
}`}</style>
      <style jsx>{`.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}`}</style>
      <style jsx>{`.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}`}</style>
      <style jsx>{`.profile-head h5{
    color: #333;
}`}</style>
      <style jsx>{`.profile-head h6{
    color: #0062cc;
}`}</style>
      <style jsx>{`.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}`}</style>
      <style jsx>{`.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}`}</style>
      <style jsx>{`.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}`}</style>
      <style jsx>{`.profile-head .nav-tabs{
    margin-bottom:5%;
}`}</style>
      <style jsx>{`.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}`}</style>
      <style jsx>{`.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}`}</style>
      <style jsx>{`.profile-work{
    padding: 14%;
    margin-top: -15%;
}`}</style>
      <style jsx>{`.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}`}</style>
      <style jsx>{`.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}`}</style>
      <style jsx>{`.profile-work ul{
    list-style: none;
}`}</style>
      <style jsx>{`.profile-tab label{
    font-weight: 600;
}`}</style>
      <style jsx>{``}</style>
      <style jsx>{`.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}`}</style>
    </div>
    
  );
}

EHR.Layout = BaseLayout;