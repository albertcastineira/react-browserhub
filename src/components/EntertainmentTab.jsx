import WebsiteCard from './WebsiteCard';

export default function EntertainmentTab() {
  return (
    <>
        <WebsiteCard websiteName={"Instagram"} icon={"mdi:instagram"} link={"https://www.instagram.com/"}/>
        <WebsiteCard websiteName={"Twitter"} icon={"pajamas:twitter"} link={"https://twitter.com/"}/>
        <WebsiteCard websiteName={"Youtube"} icon={"mdi:youtube"} link={"https://www.youtube.com/"}/>
        <WebsiteCard websiteName={"Twitch"} icon={"mdi:twitch"} link={"https://www.twitch.tv/"}/>
        <WebsiteCard websiteName={"Netflix"} icon={"mdi:netflix"} link={"https://www.netflix.com"}/>
        <WebsiteCard websiteName={"Prime Video"} icon={"simple-icons:prime"} link={"https://www.primevideo.com"}/>
        <WebsiteCard websiteName={"Animefenix"} icon={"ph:video-light"} link={"https://animefenix.tv"}/>
        <WebsiteCard websiteName={"Animeflv"} icon={"octicon:video-24"} link={"https://www3.animeflv.net/"}/>
        <WebsiteCard websiteName={"Crunchyroll"} icon={"simple-icons:crunchyroll"} link={"https://www.crunchyroll.com/es-es/"}/>
    </>
  )
}
