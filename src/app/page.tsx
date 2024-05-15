"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsuarios(json);
      });
  });

  return (
    <main className="container mx-auto">
      <h1 className="text-2xl mb-8 mt-6">Projeto site react</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img
            className="w-full"
            src="https://fastly.picsum.photos/id/38/720/360.jpg?hmac=02Xqi0q0hx7LqWMsH5x6UHh-gI9X_P1EZ43F72dSsA4"
            alt=""
          />
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            obcaecati quaerat quia, maiores est praesentium rerum culpa cumque
            hic. Ipsa odio voluptas hic quasi est neque vel culpa delectus quis.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, commodi?
          </p>
        </div>
      </div>

      <div>
        <table className="border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2 bg-lime-100">id</th>
              <th className="border border-slate-300 p-2 text-blue-600" >username</th>
              <th className="border border-slate-300 p-2">email</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => {
              return (
                <tr>
                  <td className="border border-slate-300 p-2">{usuario.id}</td> 
                  <td className="border border-slate-300 p-2">{usuario.username}</td>
                  <td className="border border-slate-300 p-2">{usuario.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
