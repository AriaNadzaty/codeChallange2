'use client'
import { useState, useEffect, lazy } from "react";
import axios from "axios";
import RandomUser from "./MemberInterface";


const url : string ='https://randomuser.me/api/?results=6'
const UserRandom = async () => {
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (err) {
    throw new Error('Members gone');
  }
};

export default function RNG() {
  const [rng, setRNG] = useState<RandomUser[]>([]);

  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await UserRandom();
        setRNG(users);

      } catch (err:any) {
        setErr(err.message);
      
      }
    };

    fetchData();
  }, []);

const RNGMember = ({ user }: { user: RandomUser }) => (
  <div className="border pt-6 pb-24 rounded-lg mt-3 bg-blue-500  ">
    <img src={user.picture.large}  className=" mx-auto my-auto mt-5" loading={"lazy"} />
      <ul className="text-center regular-24 mt-3 text-white">
        <li>Name = {user.name.first}</li>
        <li>Email = {user.email}</li>
        <li>Phone = {user.phone}</li>
        <li>age = {user.registered.age}</li>
      </ul>   
  </div>
);

  return (
    <div >
      { err ?
      (<p>{err}</p>) : 
      ( <div >{rng.map((user) => (<RNGMember key={user.phone} user={user} />))}</div>)}
    </div>
  );
};
