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
    const urlLivro = "https://www.rodrigocw.com"
    return (
        <Layout>
        <CardHome
            imagem={<ImageSvg src="/images/inkRust1.svg" width={255} height={100} alt="Rust" />}
            url="/ui/projects"
            titulo="Livro"
            subtitulo="Desvendando o Rust"
            isDark={isDark}
            bgDark="bg-black"
            bgLight="bg-white">
            <div className="flex flex-col mt-4 items-center justify-center">
            <Link href={urlLivro} target="_blank">
            <button
                className={`flex bg-gradient-to-r from-blue-800 via-purple-700 to-purple-950 py-2 px-4 rounded`}>
                {IconBook}
                <span className="ml-2">Projetos</span>
            </button>
            </Link>
            </div>
        </CardHome>
        </Layout>
    )
}