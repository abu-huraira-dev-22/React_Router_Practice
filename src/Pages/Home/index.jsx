import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([])
  console.log(jobs);
  console.log(users)
  function callApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        setJobs(data);
      })
      .catch((error) => console.log(error));
  }

  function callUsersApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    callApi(
      "https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=",
    );
    callUsersApi(
      "https://api.hiringmine.com/api/users/home?sortBy=mostViewed"
    );
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>This is Home Page</h1>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        {jobs
        .slice(0, 3)
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
      <div style={{display:'flex',justifyContent:'space-around'}}>
        {users.slice(0, 5).map(({firstName,jobTitle,lastName,profilePic,userName}) => {
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
              <img src={profilePic} alt="" />
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
