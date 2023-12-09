import { Icon } from '@iconify/react';

export default function WebsiteCard({ websiteName, icon, link}) {

    function openLink() {
        window.open(link, '_blank');
    }

    return (
        <div onClick={openLink} 
            className="card slide-top text-center bg-[#282b30] text-[#5d6269] hover:text-[#7289DA] hover:bg-gradient-to-b from-[#282B30] to-[#08090b] border-[#7289DA] group cursor-pointer rounded col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 max-h-[8em]"
        >
            <Icon icon={icon}width="30" height="30"  className="inline my-1" />
            <p className="">
                {websiteName}
            </p>
        </div>
    )
}
