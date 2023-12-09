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
        <main className="m-4 rounded bg-[#282b30] grid grid-cols-4">
            <div className="text-white p-4 rounded-l">
                <h1>Categories</h1>
                <div className="list text-sm mt-4">
                    <h2 onClick={() => handleTabClick('Default')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'Default' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="bxs:dashboard" className="inline-flex -mt-[2px] mr-1" />Default
                    </h2>
                    <h2 onClick={() => handleTabClick('Social Media')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'Social Media' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="bi:phone" className="inline-flex -mt-[2px] mr-1" />Social Media
                    </h2>
                    <h2 onClick={() => handleTabClick('Entertainment')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'Entertainment' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="bxs:videos" className="inline-flex -mt-[2px] mr-1" />Entertainment
                    </h2>
                    <h2 onClick={() => handleTabClick('Developer & Tools')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'Developer & Tools' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="ant-design:code-outlined" className="inline-flex -mt-[2px] mr-1" />Developer & Tools
                    </h2>
                    <h2 onClick={() => handleTabClick('Shopping')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'Shopping' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="mdi:shopping-outline" className="inline-flex -mt-[2px] mr-1" />Shopping
                    </h2>
                    <h2 onClick={() => handleTabClick('News')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'News' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="material-symbols:news" className="inline-flex -mt-[2px] mr-1" />News
                    </h2>
                    <h2 onClick={() => handleTabClick('Maps')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'Maps' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="material-symbols:map" className="inline-flex -mt-[2px] mr-1" />Maps
                    </h2>
                    <h2 onClick={() => handleTabClick('Jobs / Employment')} className={`select-none py-1 px-2 rounded mb-1 cursor-pointer ${
                            activeTab === 'Jobs / Employment' ? "bg-gradient-to-r from-[#7289DA] to-#241C83" : "text-[#5d6269]"
                        }`}>
                        <Icon icon="clarity:tools-solid" className="inline-flex -mt-[2px] mr-1" />Jobs / Employment
                    </h2>
                </div>
                
            </div>
            <div className="col-span-3 p-4 text-white bg-[#36393E] rounded-r">
                <h1>{activeTab}</h1>
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
