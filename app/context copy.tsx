"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface AppContextProps {
    params: string
    alternarMenu: () => void
    alterarTema: (tema: string) => void
    getOpenMenu: () => boolean
    getThemeColor: () => string
    getIsDark: () => boolean
}

const AppContext = createContext<AppContextProps>({
    params: "",
    alternarMenu: () => { },
    alterarTema: (tema: string) => { },
    getOpenMenu: () => true,
    getThemeColor: () => "",
    getIsDark: () => true
})

export function AppProvider(props: any) {

    const [param, setParam] = useState('')

    useEffect(()=> {
        setParam(localStorage.getItem("site-param") as string)
        //console.log(localStorage.getItem("site-param"))
        //console.log(param)
    },[])

    if (param === '') {
        return null
    }

    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
    console.log(formattedString)
    console.log("param->"+param)

    function getParam() {
        if (param) {
            return param
        }
        else {
            return {"theme_color":"system","open_menu":true}
        }
    }

    function alterarTemaTela(themeColor: string) {
        let tema = ""
        if (themeColor === "system") {
            const mediaQuery = "(prefers-color-scheme: dark)"
            const mql = window.matchMedia(mediaQuery)
            tema = mql.matches ? "dark" : "light"
        } else {
            tema = themeColor
        }
        document.documentElement.setAttribute("data-theme", tema)
      }

    function alterarTema(tema: string) {
        const objParams = JSON.parse(param)
        const openMenu = objParams.open_menu
        alterarParam(tema,openMenu)
        alterarTemaTela(tema)
    }

    function alternarMenu() {
        const objParams = JSON.parse(param)
        const openMenu = objParams.open_menu
        const themeColor = objParams.theme_color
        alterarParam(themeColor,!openMenu)
      }

    function alterarParam(tema: string, openMenu: boolean) {
        const newParam = {"theme_color": tema, "open_menu": openMenu }
        localStorage.setItem("site-param",JSON.stringify(newParam))
        setParam(JSON.stringify(newParam))
    }

    function getOpenMenu() {
        const objParams = JSON.parse(param)
        return objParams.open_menu
    }

    function getThemeColor() {
        const objParams = JSON.parse(param)
        return objParams.theme_color
    }

    function getIsDark() {
        var themeColor = "system"
        const objParams = JSON.parse(param || '{}'); 
        if (param && typeof param === 'string') {
            try {
              const objParams = JSON.parse(param);
              if (objParams.theme_color) {
                themeColor = objParams.theme_color;
              } else {
                // Lida com o caso em que 'theme_color' não está presente no objeto
                console.log('A propriedade "theme_color" não está presente no objeto.');
              }
            } catch (error) {
              // Lida com o erro de JSON inválido
              console.error('Erro ao analisar o JSON:', error);
            }
        } else {
            console.log('O parâmetro "param" não está definido ou não é uma string.');
        }
        /*const objParams = JSON.parse(param)
        if (objParams.theme_color) {
            var themeColor = objParams.theme_color
        }
        else {
            themeColor = "system"
        }
        var themeColor = objParams.theme_color
        if (themeColor === "system") {
            const mediaQuery = "(prefers-color-scheme: dark)"
            const mql = window.matchMedia(mediaQuery)
            themeColor = mql.matches ? "dark" : "light"
        }*/
        if (themeColor === "system") {
            const mediaQuery = "(prefers-color-scheme: dark)"
            const mql = window.matchMedia(mediaQuery)
            themeColor = mql.matches ? "dark" : "light"
        }
        return themeColor === "dark"
    }

    return (
        <AppContext.Provider value = {{
            params: param,
            alternarMenu: alternarMenu,
            alterarTema: alterarTema,
            getOpenMenu: getOpenMenu,
            getThemeColor: getThemeColor,
            getIsDark: getIsDark
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}