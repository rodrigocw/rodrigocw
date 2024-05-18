"use client"

import CardArtigo from "@/app/components/templates/CardArtigo";
import Layout from "../Layout";
import Link from "next/link";
import { IconLinkedin } from "@/app/components/icons";
import ImageSvg from "@/app/components/templates/ImageSvg";
import { useAppContext } from "@/app/context";

export default function Articles() {

    const { getIsDark } = useAppContext()
    const isDark = getIsDark()
    const urlRaspberry = "https://www.linkedin.com/pulse/instala%25C3%25A7%25C3%25A3o-do-alpine-linux-raspberry-pi-4-como-home-lab-wansovicz/?trackingId=HnXtZrm5QxK%2B8uST2MtQMg%3D%3D"

    return (
        <Layout>
            <CardArtigo
                imagem={<ImageSvg src="/images/rasperry_mini.png" width={205} height={129} alt="Raspberry PI" />}
                url={urlRaspberry}
                titulo="Instalação do Alpine Linux no Raspberry Pi 4 como servidor Home Lab utilizando Btrfs e ssd externo"
                subtitulo="11 de outubro de 2023"
                isDark={isDark}
                bgDark="bg-black"
                bgLight="bg-white">

        <div>
        <p className="flex mt-2 text-[14px]">
          Apresenta o passo a passo da instalação e configuração do Alpine Linux versão 3.18.4 no Raspberry Pi 4 Modelo B, utilizando o file system Btrfs em um ssd externo. Trata da instalação e configuração do Alpine Linux, desde o processo de download da iso do sistema até a instalação dos aplicativos e serviços necessários.
        </p>
        <p className="mt-1 text-[14px]">
          O objetivo principal é tornar o Raspberry Pi um servidor Home Lab completo e eficiente procurando minimizar ao máximo suas restrições inerentes ao projeto de ser uma placa compacta de baixo custo e baixo consumo energético.
        </p>
        </div>

        <div className="flex flex-col mt-4 items-center justify-center">
        <Link href={urlRaspberry} target="_blank">
          <button
            className={`flex bg-gradient-to-r from-blue-800 via-purple-700 to-purple-950 py-2 px-4 rounded`}>
            {IconLinkedin}
            <span className="ml-2">Ler</span>
          </button>
          </Link>
        </div>
      </CardArtigo>
        </Layout>
    )
}