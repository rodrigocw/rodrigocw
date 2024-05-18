"use client"

import { IconBars3, IconSol, IconDesk, IconLua } from "../components/icons";
import Image from 'next/image'
import { useAppContext } from "../context";
import ImageSvg from "../components/templates/ImageSvg";
import { fontYellow } from "../ui/fonts"

export default function Cabecalho() {
    const { alternarMenu, alterarTema, getThemeColor, getIsDark } = useAppContext()

    const themeColor = getThemeColor()
    const isDark = getIsDark()

    const menuClick = () => { 
        alternarMenu() 
    }

    const solClick = () => {
        alterarTema("light")
    }

    const deskClick = () => {
        alterarTema("system")
    }

    const luaClick = () => {
        alterarTema("dark")
    }

    return (

        <div className={`
            flex h-16 items-center
        `}>
            <div className="w-1"></div>
            <div className={`
                    flex items-center justify-center cursor-pointer hover:bg-slate-600 rounded-full
                    ml-2 h-10 w-10
                `}
                onClick={menuClick}>
                {IconBars3}
            </div>
            <div className={`
                    flex items-center justify-center ml-2
                `}>
                <ImageSvg src="/images/inklogo.svg" width={27} height={32} alt="RodrigoCW" />
                <span className={`${fontYellow.className} text-2xl`}>RodrigoCW</span>
            </div>
            <div className={`
                    flex flex-grow
                `}>
                    
            </div>
            <div className={`
                    flex last:mr-2 justify-end h-10 border border-gray-400 rounded-2xl cursor-pointer
                `}>
                <ul className={`
                        flex flex-row items-center ml-1 mr-1
                    `}>
                    <li className={`
                            flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8
                            ${themeColor === 'light' ? 'bg-gray-200 rounded-full' : ''} 
                        `}
                        onClick={solClick}>
                        {IconSol(isDark, themeColor === "light")}
                    </li>
                    <li className={`
                            flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8
                            ${themeColor === 'system' ? 'bg-gray-700 rounded-full' : ''} 
                        `}
                        onClick={deskClick}>
                        {IconDesk(isDark, themeColor === "system")}
                    </li>
                    <li className={`
                            flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8
                            ${themeColor === 'dark' ? 'bg-gray-700 rounded-full' : ''} 
                        `}
                        onClick={luaClick}>
                        {IconLua(isDark, themeColor === "dark")}
                    </li>
                </ul>
            </div>
        </div>
    )
}