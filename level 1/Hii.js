import React from 'react'

const Hii = () => {
  return (
    <>
    <div>
      <h2 className="d-flex justify-content-center bg-primary text-dark">
       CRICKET GROUND
    </h2>

    <div className='img'>
      <img src="https://cdn.pixabay.com/photo/2017/07/17/00/46/cricket-2511043_1280.jpg" alt="" width="500" />
    </div>
    
    <div>
      <h1>Ground Description</h1>
    </div>
      <p className='span bg-warning'>
      This well-maintained cricket ground offers the perfect setting for professional matches, training sessions, and tournaments. Featuring a lush green outfield, high-quality pitch surfaces, and spacious boundary dimensions, it ensures an excellent playing experience. The ground is equipped with practice nets, comfortable seating areas, floodlights for night matches, and ample parking facilities. Its prime location with easy accessibility makes it an ideal choice for cricket academies, sports clubs, corporate events, and local leagues. Whether you are an investor, a sports enthusiast, or an academy owner, this cricket ground presents a fantastic opportunity to own a premium sports facility. Don’t miss out on this chance—contact us today for more details!
      </p>
    </div>

    <div>
      <h1>Ground Price</h1>
     <strong> <p className='text-danger'>Range: Rs.4000 To Rs.25000</p></strong>
    </div>
     </>

  )
}

export default Hii
