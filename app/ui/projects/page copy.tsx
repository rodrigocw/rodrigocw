import Layout from "../Layout";


export default function Projects() {
    return (
        <Layout>
            <div className="flex flex-1 overflow-hidden">

                <aside className="w-full max-w-[400px] bg-slate-500 overflow-y-auto">
<div className="[&_:is(ol,ul)]:pl-4">
<ul className="list-inside mt-10">
    <li className="mt-10">1 First level item</li>
    <li className="mt-10">2 First level item

        <ul className="list-inside  mt-10">
            <li className="mt-10">2.1 Second level item</li>
            <li className="mt-10">2.2 Second level item

                <ul className="list-inside  mt-10">
                    <li className="mt-10">2.2.1 Third level item</li>
                    <li className="mt-10">2.2.2 Third level item</li>
                </ul>
            </li>
        </ul>
    </li>
    <li className="mt-10">3 First level item</li>
</ul>

<ul className="list-inside mt-10">
    <li className="mt-10">1 First level item</li>
    <li className="mt-10">2 First level item

        <ul className="list-inside  mt-10">
            <li className="mt-10">2.1 Second level item</li>
            <li className="mt-10">2.2 Second level item

                <ul className="list-inside  mt-10">
                    <li className="mt-10">2.2.1 Third level item</li>
                    <li className="mt-10">2.2.2 Third level item</li>
                </ul>
            </li>
        </ul>
    </li>
    <li className="mt-10">3 First level item</li>
</ul>

</div>


                </aside>

                <div className="flex flex-col flex-1 overflow-y-auto">
                    <h1>Desvendando o Rust</h1>
conteudo
                </div>

            </div>
        </Layout>
    )
}