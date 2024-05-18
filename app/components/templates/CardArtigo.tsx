import Link from "next/link"
import ImageSvg from "./ImageSvg"

interface CardArtigoProps {
    imagem?: any
    url: string
    titulo: string
    subtitulo: string
    isDark: boolean
    bgDark: string
    bgLight: string
    children?: React.ReactNode
}

export default function CardArtigo(props: CardArtigoProps) {
    return (
        <div className={`
            flex flex-col items-center justify-center
            ${props.isDark ? props.bgDark : props.bgLight}
        `}>
            <div className={`
                flex flex-col mt-7 mb-7 ml-2 mr-2 items-center justify-center
            `}>
                <Link href={props.url} target="_blank"
                    className="flex flex-col items-center">
                    {props.imagem}
                    <h1 className="text-2xl">
                        {props.titulo}
                    </h1>
                    <h2 className="text-sm">
                        {props.subtitulo}
                    </h2>
                </Link>
                {props.children}
            </div>
        </div>
    )
}