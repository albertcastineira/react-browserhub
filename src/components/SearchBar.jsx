import { Icon } from '@iconify/react';
export default function SearchBar() {

    return (
        <>
            <form className="relative top-0.5" action="https://www.google.com/search" method="GET" target='_blank'>   
                <label htmlFor="search-input" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#5d6269]">
                        <Icon 
                            icon="material-symbols:search" 
                            width="20" height="20"
                        />
                    </div>
                    <input 
                        type="text"
                        id="search-input"
                        name="q"
                        autoComplete='off'
                        spellCheck={false}
                        autoFocus={true}
                        className="block w-full p-2 ps-10 text-sm bg-[#36393e] text-white placeholder:text-[#5d6269] rounded outline-none" placeholder="Search anything..." 
                        required 
                    />
                </div>
            </form>
        </>

    )
}
