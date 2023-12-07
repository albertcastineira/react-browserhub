import WebsiteCard from './WebsiteCard';

export default function NewsTab() {
  return (
    <>
        <WebsiteCard websiteName={"Google News"} icon={"bxs:news"} link={"https://news.google.com/"}/>
        <WebsiteCard websiteName={"20 Minutos"} icon={"typcn:news"} link={"https://www.20minutos.es/"}/>
        <WebsiteCard websiteName={"El Pais"} icon={"fluent:news-24-filled"} link={"https://elpais.com/"}/>
        <WebsiteCard websiteName={"BBC Weather"} icon={"material-symbols:weather-mix"} link={"https://www.bbc.com/weather"}/>
    </>
  )
}
