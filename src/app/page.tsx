"use client"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/results").then((response) => {
      setUser(response.data);
    })
  }, []);

  return (
    <>

      <h1>Rick and Morty - API</h1>     
            <ul>
            
           {user.map((results: any) => (  
              <li key={results.id}>
                {results.name} - {results.status}
              </li>
              
            ))}

            </ul>;
           
    </>
  );
}
