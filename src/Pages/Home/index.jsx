import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import useFetch from "../../Custom Hook/useFetch";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  const [jobs] = useFetch("https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=",)
  const [users] = useFetch('https://api.hiringmine.com/api/users/home?sortBy=mostViewed',)
  
  function pageChanger(){
    navigate('/jobs?keyWord=react')
  }

  return (
    <>
      <Navbar />
      <button onClick={pageChanger} style={{fontSize:'100px', margin:'50px auto', display:'block'}}>React Jobs</button>
      <h1 style={{ textAlign: "center" }}>This is Home Page</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {jobs
          .slice(0, 4)
          .map(({ companyName, designation, payRangeStart, country, city }) => {
            return (
              <div
                style={{
                  border: "2px solid black",
                  textAlign: "center",
                  marginTop: "30px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h2>{companyName}</h2>
                <h1>{designation}</h1>
                <h4>{payRangeStart || "No salary mentioned"}</h4>
                <h5>{country}</h5>
                <h5>{city}</h5>
              </div>
            );
          })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {users
          .slice(0, 5)
          .map(({ firstName, jobTitle, lastName, profilePic, userName }) => {
            return (
              <div
                style={{
                  border: "2px solid black",
                  textAlign: "center",
                  marginTop: "30px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  src={profilePic}
                  alt=""
                />
                <h1>{firstName}</h1>
                <h2>{jobTitle}</h2>
                <h3>{lastName}</h3>
                <h4>{userName}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
