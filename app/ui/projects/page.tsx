"use client"

import CardHome from "@/app/components/templates/CardHome";
import Layout from "../Layout";
import ImageSvg from "@/app/components/templates/ImageSvg";
import { useAppContext } from "@/app/context";
import { IconBook } from "@/app/components/icons";
import Link from "next/link";

export default function Projects() {
    const { getIsDark } = useAppContext()
    const isDark = getIsDark()
    const urlLivro = "https://desvendando-o-rust.vercel.app"
    return (
        <Layout>
            <CardHome
                imagem={<ImageSvg src="/images/logo_rust.svg" width={100} height={100} alt="Rust" />}
                url="/ui/projects"
                titulo="Desvendando o Rust"
                //subtitulo="Desvendando o Rust"
                isDark={isDark}
                bgDark="bg-black"
                bgLight="bg-white">
                <span>Embarque comigo nesta incrível aventura e vamos juntos desvendar os segredos desta que é a linguagem mais comentada e amada do momento, sendo pelo sétimo ano consecutivo a escolha dos desenvolvedores no StackOverflow, vamos juntos mergulhar de cabeça nos conceitos mais obscuros, e aprender com exemplos práticos do mundo real. </span>
                <div className="flex flex-col mt-4 items-center justify-center">
                <Link href={urlLivro} target="_blank">
                    <button
                    className={`flex bg-gradient-to-r from-blue-800 via-purple-700 to-purple-950 py-2 px-4 rounded`}
                    //onClick={() => router.push('/ui/projects')}
                    >
                    {IconBook}
                    <span className="ml-2">Ler o livro</span>
                    </button>
                </Link>
                </div>
            </CardHome>
        </Layout>
    )
}