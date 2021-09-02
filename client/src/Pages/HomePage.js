import React from "react";

function HomePage({user}) {
  return (
    <main>
      <h1>Welcome Back {user.name}</h1>
    </main>
  )
}

export default HomePage;
