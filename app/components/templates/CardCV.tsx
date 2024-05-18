interface CardCVProps {
    empresa: string
    cargo: string
    periodo: string
    local: string
    isDark: boolean
    bgDark?: string
    bgLight?: string
    children?: React.ReactNode
}

export default function CardCV(props: CardCVProps) {
    return (
        <div>
            <div className="mt-4"></div>
            <div className={`
                flex flex-col
                ${props.isDark ? props.bgDark : props.bgLight}
            `}>
                <div className={`
                    flex flex-col mt-3 mb-3 ml-2 mr-2
                `}>
                    <h1 className="text-[16px]">
                        {props.empresa}
                    </h1>
                    <h2 className="text-[14px]">
                        {props.cargo}
                    </h2>
                    <h3 className="text-[12px]">
                        {props.periodo}
                    </h3>
                    <h4 className="text-[12px]">
                        {props.local}
                    </h4>
                    {props.children}
                </div>
            </div>
        </div>
        
    )
}