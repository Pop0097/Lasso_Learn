import React, { useEffect, useState } from 'react'
/* commented out only because it doesn't compile right now!
function Sidebar() {
  const [user, setUsers] = useState([])
  useEffect(() => {
      db.collection("users").onSnapshot((snapshot) => {
          setFeaturedUsers(
              snapshot.docs.map((doc)=> doc.data()))
      })
  }, [])
  return (
    <div>
      <h1>I am a Sidebar!</h1>
    </div>
  )
}

export default Sidebar
*/