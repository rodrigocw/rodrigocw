import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "./context";
import { fontRoboto } from "./ui/fonts"

export const metadata: Metadata = {
  title: "RodrigoCW",
  description: "Criado por RodrigoCW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  function setInitialParams() {
    let theme = ""
    const params = getParams()
    if (!params) {
      setParams({"theme_color":"light","open_menu":true})
      theme = getSystemTheme();
    }
    else {
      theme = params.theme_color !== "system" ? params.theme_color : getSystemTheme()
    }
    document.documentElement.setAttribute("data-theme", theme)

    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
  }

  function getParams() {
    const lsParams = localStorage.getItem("site-param")
    const params = JSON.parse(lsParams as string)
    return params
  }

  function setParams(params: any) {
    localStorage.setItem("site-param",JSON.stringify(params))
  }

  function getSystemTheme() {
    const mediaQuery = "(prefers-color-scheme: dark)"
    const mql = window.matchMedia(mediaQuery)
    const theme = mql.matches ? "dark" : "light"
    return theme
  }

  const blockingSetParams = `(function() { 
    ${setInitialParams.toString()}
		${getParams.toString()}
    ${setParams.toString()}
    ${getSystemTheme.toString()}
		setInitialParams()})()`

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontRoboto} antialiased`}>
        {/*<script dangerouslySetInnerHTML={{__html: blockingSetParams}}></script>*/}
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
