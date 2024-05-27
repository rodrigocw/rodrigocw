"use client"

import Image from "next/image";
import Layout from "./ui/Layout";
import CardHome from "./components/templates/CardHome";
import ImageSvg from "./components/templates/ImageSvg";
import { useAppContext } from "./context";
import { fontCursiva } from "./ui/fonts";
import { useRouter } from 'next/navigation'
import { IconCV, IconBook } from "./components/icons";
import Link from "next/link";

export default function Home() {
  const { getIsDark } = useAppContext()
  const isDark = getIsDark()
  const router = useRouter()
  const urlLivro = "https://desvendando-o-rust.vercel.app/"
  return (
    <Layout>
      <CardHome
        imagem={<ImageSvg src="/images/inklogo.svg" width={85} height={100} alt="RodrigoCW" />}
        url="/ui/curriculumvitae"
        titulo="Rodrigo Carlos Wansovicz"
        subtitulo="Analista de Sistemas Full Stack Sênior"
        isDark={isDark}
        bgDark="bg-gray-900"
        bgLight="bg-gray-50">
          <div className={`
            flex flex-col mt-2 ml-2 mr-2 items-center justify-center text-justify
            ${fontCursiva.className} text-[18px]
          `}>
            <p>
              {`"Ganhei meu primeiro computador com 15 anos, um MSX, como computador era um ótimo videogame, mas era possível fazer programas em basic,  de lá pra cá passei por pascal, c/c++, clipper, zim, delphi, javascript, java. Uma coisa é constante neste tempo todo, minha paixão em programar, gosto muito de desafios computacionais e ajudar as pessoas a resolvê-los. Atualmente estou aprofundando meus conhecimentos da Linguagem Rust e escrevendo o livro Desvendando o Rust, onde apresento na forma de exemplos os conceitos da linguagem, que percebo ser a substituta natural do C e C++."`}
            </p>
          </div>
          <div className="flex flex-col mt-4 items-center justify-center">
            <button
              className={`flex bg-gradient-to-r from-blue-800 via-purple-700 to-purple-950 py-2 px-4 rounded`}
              onClick={() => router.push('/ui/curriculumvitae')}>
              {IconCV}
              <span className="ml-2">Currículo</span>
            </button>
          </div>
      </CardHome>
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
  );
}
