"use client";
import pet from "@/lib/victor.js";
import { useState } from "react";

export default function Home() {
  const [victor, setVictor] = useState(pet);



  // <img src="/victor.png" alt="friendly dog" />

  return (
    <main>
      <h1>Cloner</h1>
      <p>
        You will store your clones as an array of objects.<br/>
        You must utilize the Spread Operator to make your clones (...).<br/>
        The only thing about your clone (each object) that changes is the id.<br/>
        You can use Victor or your own pet's image.<br/>
      </p>

      

      <h2>Use the filter method and a select box to remove the clones that didn't turn out right.</h2>
    </main>
  );
}
