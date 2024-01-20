import WebsiteCard from './WebsiteCard';

export default function JobsTab() {
  return (
    <>
        <WebsiteCard websiteName={"LinkedIn"} icon={"mdi:linkedin"} link={"https://www.linkedin.com/feed/"}/>
        <WebsiteCard websiteName={"InfoJobs"} icon={"arcticons:jobstreet"} link={"https://www.infojobs.net/"}/>
        <WebsiteCard websiteName={"Arc"} icon={"tabler:parentheses"} link={"https://arc.dev/"}/>
        <WebsiteCard websiteName={"Circular"} icon={"entypo:circular-graph"} link={"https://circular.io/"}/>
        <WebsiteCard websiteName={"LeetCode"} icon={"simple-icons:leetcode"} link={"https://leetcode.com/"}/>
        <WebsiteCard websiteName={"Codewars"} icon={"cib:codewars"} link={"https://www.codewars.com/dashboard"}/>
    </>
  )
}
