export function Loading() {
  return (
    // <div className="loadingScreen"><p style={{fontFamily:"Times New Roman', Times, serif"}}>佐 久 間</p>
    //   <span></span>
    // </div>
    <div className="bg-[#333] w-[100vw] h-[100vh]">
      <div className="e-loadholder bg-[#333]">
        <div className="m-loader bg-[#333]">
          <div className="e-text" >
            <span className="front-text">H S K</span>
          </div>
        </div>
      </div>
      <div id="particleCanvas-Blue"></div>
      <div id="particleCanvas-White"></div>
    </div>
  )
}
