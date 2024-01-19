import { Icon } from '@iconify/react';
import SearchBar from './SearchBar';

export default function Header() {

    return (
        <header className="w-full bg-[#1818185e] text-white py-4">
            <div className="content grid grid-cols-2 px-3">
                <section>
                    <h1 className="select-none font-bold relative top-0.5 inline-flex items-center">
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
            </div>
            
        </header>
    )
}
