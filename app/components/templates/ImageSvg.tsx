import Image from 'next/image'

interface ImageSvgProps {
    src: string
    width: number
    height: number
    alt: string
}

export default function ImageSvg(props: ImageSvgProps) {
    return (
        <Image
            src={props.src}
            width={props.width}
            height={props.height}
            alt={props.alt}
            priority
        />
    )
}