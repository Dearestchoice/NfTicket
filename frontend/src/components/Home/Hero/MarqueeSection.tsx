import seprator from "../../../assets/starSeparator.png"

function MarqueeSection() {
  return (
    <div className="marquee-container">
    <div className="marquee-content">
      <div className="marquee-item">Concert in NYC – 15th Oct</div> 
      <img src={seprator} alt="" />
      <div className="marquee-item">10,000+ NFT Tickets Sold</div>
      <img src={seprator} alt="" />
      <div className="marquee-item">Partnership with WID</div>
      <img src={seprator} alt="" />
      <div className="marquee-item">50% Off Early Bird Tickets</div>
      <img src={seprator} alt="" />
      <div className="marquee-item"> New: QR Code Verification for Easy Entry</div>
      <img src={seprator} alt="" />
    </div>
  </div> 
  )
}

export default MarqueeSection