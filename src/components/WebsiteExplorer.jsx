import { useState } from 'react';
import { Icon } from '@iconify/react';
import DefaultTab from './DefaultTab';
import SocialMediaTab from './SocialMediaTab';
import EntertainmentTab from './EntertainmentTab';
import DevTab from './DevTab';
import ShoppingTab from './ShoppingTab';
import NewsTab from './NewsTab';
import MapsTab from './MapsTab';
import JobsTab from './JobsTab';

export default function WebsiteExplorer() {

    const [activeTab, setActiveTab] = useState('Default'); // default is the initial active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <main className="rounded bg-[#0b0000a1] min-h-[86vh]">
            <div className="content text-white py-4 rounded-l px-3">
                <h1>Categories</h1>
                <div className="list text-md lg:text-lg mt-4">
                    <button onClick={() => handleTabClick('Default')} className={`select-none mb-1 cursor-pointer mr-5 ${
                            activeTab === 'Default' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="bxs:dashboard" className="inline-flex -mt-[2px] mr-1" /> Default
                    </button>

                    <button onClick={() => handleTabClick('Social Media')} className={`select-none mb-1 cursor-pointer mr-5 ${
                            activeTab === 'Social Media' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="bi:phone" className="inline-flex -mt-[2px] mr-1" /> Social Media
                    </button>

                    <button onClick={() => handleTabClick('Entertainment')} className={`select-none mb-1 cursor-pointer  mr-5 ${
                            activeTab === 'Entertainment' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="bxs:videos" className="inline-flex -mt-[2px] mr-1" /> Entertainment
                    </button>

                    <button onClick={() => handleTabClick('Developer & Tools')} className={`select-none mb-1 cursor-pointer  mr-5 ${
                            activeTab === 'Developer & Tools' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="ant-design:code-outlined" className="inline-flex -mt-[2px] mr-1" /> Developer & Tools
                    </button>

                    <button onClick={() => handleTabClick('Shopping')} className={`select-none mb-1 cursor-pointer  mr-5 ${
                            activeTab === 'Shopping' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="mdi:shopping-outline" className="inline-flex -mt-[2px] mr-1" /> Shopping
                    </button>

                    <button onClick={() => handleTabClick('News')} className={`select-none mb-1 cursor-pointer  mr-5 ${
                            activeTab === 'News' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="material-symbols:news" className="inline-flex -mt-[2px] mr-1" /> News
                    </button>

                    <button onClick={() => handleTabClick('Maps')} className={`select-none mb-1 cursor-pointer  mr-5 ${
                            activeTab === 'Maps' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="material-symbols:map" className="inline-flex -mt-[2px] mr-1" /> Maps
                    </button>

                    <button onClick={() => handleTabClick('Jobs / Employment')} className={`select-none mb-1 cursor-pointer  mr-5 ${
                            activeTab === 'Jobs / Employment' ? "text-[#7289DA]" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="clarity:tools-solid" className="inline-flex -mt-[2px] mr-1" /> Jobs
                    </button>
                </div>
                
            </div>
            <div className="content col-span-4 lg:col-span-3 p-4 text-white rounded-r px-3">
                
                <div className="mt-4 min-h-[35em]">
                    <div className="grid grid-cols-12 gap-4 overflow-hidden">
                        {activeTab === 'Default' && <DefaultTab />}
                        {activeTab === 'Social Media' && <SocialMediaTab />}
                        {activeTab === 'Entertainment' && <EntertainmentTab />}
                        {activeTab === 'Developer & Tools' && <DevTab />}
                        {activeTab === 'Shopping' && <ShoppingTab />}
                        {activeTab === 'News' && <NewsTab />}
                        {activeTab === 'Maps' && <MapsTab />}
                        {activeTab === 'Jobs / Employment' && <JobsTab />}
                    </div>
                </div>
            </div>
        </main>
    )
}
