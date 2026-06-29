import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  function callApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        setJobs(data)
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    callApi(
      "https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=",
    );
  }, []);

  return (
    <>
      <Navbar />
      <h1>This is Home Page</h1>
    </>
  );
};

export default Home;
