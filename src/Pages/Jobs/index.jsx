import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import useFetch from "../../Custom Hook/useFetch";

const Jobs = () => {


const [filters] = useFetch('https://api.hiringmine.com/api/filterations/all',true)
const [jobs] = useFetch("https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=")

  return (
    <>
      <Navbar />
      <h1>This is Jobs Page</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {filters?.filteration?.map((filter, index) => {
          return (
            <div>
              <select name="Category" id="">
                <option value="">{filter.filterationName}</option>

                {filter?.filterationOptions?.map((option) => {
                  return <option value="Developer">{option.title}</option>;
                })}
              </select>
            </div>
          );
        })}
      </div>

      <h1 style={{ textAlign: "center" }}>Our Jobs</h1>
      {jobs.map(
        ({ companyName, designation, payRangeStart, country, city,_id }) => {
          return (
            <Link to={`/jobs/${_id}`}
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
            </Link>
          );
        },
      )}
    </>
  );
};

export default Jobs;
