import { Icon } from '@iconify/react';

export default function WebsiteCard({ websiteName, icon, link}) {

    function openLink() {
        window.open(link, '_blank');
    }

    return (
        <div onClick={openLink} 
            className="card select-none slide-top text-center border-b border-[#1818185e] bg-[#1818185e] text-[#5d6269] hover:text-[#7289DA] hover:border-[#7289DA] group cursor-pointer col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 max-h-[8em]"
        >
            <Icon icon={icon}width="30" height="30"  className="inline my-1" />
            <p className="text-sm lg:text-lg">
                {websiteName}
            </p>
        </div>
    )
}
