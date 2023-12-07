import WebsiteCard from './WebsiteCard';

export default function SocialMediaTab() {
  return (
    <>
        <WebsiteCard websiteName={"Instagram"} icon={"mdi:instagram"} link={"https://www.instagram.com/"}/>
        <WebsiteCard websiteName={"Twitter"} icon={"pajamas:twitter"} link={"https://twitter.com/"}/>
        <WebsiteCard websiteName={"Youtube"} icon={"mdi:youtube"} link={"https://www.youtube.com/"}/>
        <WebsiteCard websiteName={"Whatsapp"} icon={"ic:baseline-whatsapp"} link={"https://www.whatsapp.com/"}/>
        <WebsiteCard websiteName={"TikTok"} icon={"ic:baseline-tiktok"} link={"https://www.tiktok.com/"}/>
        <WebsiteCard websiteName={"Pinterest"} icon={"mdi:pinterest"} link={"https://www.pinterest.com/ideas/"}/>
        
    </>
  )
}
