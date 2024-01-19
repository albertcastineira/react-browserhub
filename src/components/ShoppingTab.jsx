import WebsiteCard from './WebsiteCard';

export default function ShoppingTab() {
  return (
    <>
        <WebsiteCard websiteName={"Amazon"} icon={"ri:amazon-fill"} link={"https://www.amazon.com/"}/>
        <WebsiteCard websiteName={"Ebay"} icon={"jam:ebay"} link={"https://www.ebay.com/"}/>
        <WebsiteCard websiteName={"PCComp."} icon={"game-icons:pc"} link={"https://www.pccomponentes.com/"}/>
        <WebsiteCard websiteName={"Temu"} icon={"arcticons:temu-alt"} link={"https://www.temu.com/"}/>
        <WebsiteCard websiteName={"Shein"} icon={"fa6-solid:s"} link={"https://m.shein.com/es/"}/>
        <WebsiteCard websiteName={"AliExpress"} icon={"simple-icons:aliexpress"} link={"https://es.aliexpress.com/"}/>
        
        
    </>
  )
}
