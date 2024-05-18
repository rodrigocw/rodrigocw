import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-col h-screen">

            {/*<News />*/}
            <header className="flex flex-col h-16">
                <Cabecalho />
            </header>

            <div className="flex flex-1 overflow-hidden">

                <aside className="hidden sm:block overflow-y-auto">
                    <Menu />
                </aside>

                <main className="flex flex-col flex-1 overflow-y-auto">
                    {children}
                </main>

            </div>

            <footer className="flex">
                <Rodape />    
            </footer>

        </div>
    );
  }