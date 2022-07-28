import React from "react";

export default function NavBar(){
    return (<div class="h-12 sm:justify-center py-8">
            <nav className = "flex sm:justify-center space-x-8">
                {[
                    ['Home', '/home'],
                    ['Sell', '/sell'],
                    ['Rent', '/rent'],
                    ['Buy', '/buy'],
                ].map(([title,url]) => (
                    <a href = {url} className = "rounded-lg px-3 py-3 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav>
        </div>
        );
}