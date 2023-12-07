import WebsiteCard from './WebsiteCard';

export default function JobsTab() {
  return (
    <>
        <WebsiteCard websiteName={"LinkedIn"} icon={"mdi:linkedin"} link={"https://www.linkedin.com/feed/"}/>
        <WebsiteCard websiteName={"InfoJobs"} icon={"arcticons:jobstreet"} link={"https://www.infojobs.net/"}/>
        <WebsiteCard websiteName={"Arc"} icon={"iconoir:laptop-dev-mode"} link={"https://arc.dev/"}/>
    </>
  )
}
