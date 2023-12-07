import { Icon } from '@iconify/react';
import SearchBar from './SearchBar';

export default function Header() {

    return (
        <header className="w-full bg-[#282b30] text-white p-4 grid grid-cols-2">
            <section>
                <h1 className="font-bold relative top-0.5 inline-flex items-center">
                    <Icon 
                        icon="mdi:internet" 
                        width="34" height="34" 
                        className="header-icon p-1.5 rounded text-white mr-2" 
                    /> BrowserHub
                </h1>
            </section>
            <section className="text-right">
                <div>
                    <SearchBar/>
                </div>
            </section>
            
        </header>
    )
}
