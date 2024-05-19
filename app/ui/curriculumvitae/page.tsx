"use client"

import { useAppContext } from "@/app/context";
import Layout from "../Layout";
import CardCV from "@/app/components/templates/CardCV";
import ImageSvg from "@/app/components/templates/ImageSvg";
import { IconEnvelopeSolid, IconPhoneSolid, IconLinkedin, IconGithub } from "@/app/components/icons";
import Link from "next/link";

import { dataCV } from "@/app/components/data/cv"; '../../components/data/cv'

export default function CurriculumVitae() {

    const { getIsDark } = useAppContext()
    const isDark = getIsDark()

    const localPalmeira = "Palmeira, Paraná, Brasil"
    const localPontaGrossa = "Ponta Grossa, Paraná, Brasil"
    const localJoinville = "Joinville, Santa Catarina, Brasil"
    const localCrambei = "Carambeí, Paraná, Brasil"

    const h1Text = 16
    const h2Text = 14
    const h3Text = 12

    const data = dataCV
    let count = 0

    return (
        <Layout>
            <div className={`flex`}>
                <div className={`flex flex-col w-full max-w-[300px] bg-gradient-to-b from-blue-950 via-purple-700 to-purple-950`}>
                    <div className="flex justify-center items-center mt-10">
                        <ImageSvg src="/images/Rodrigo.png" width={150} height={150} alt="RodrigoCW" />
                    </div>
                    <div className="flex flex-col ml-2 mr-8">
                        <h1 className={`text-[${h1Text}px] mt-4`}>Contato</h1>
                        <div className={`flex items-center text-[${h2Text}px] mt-2 ml-2`}>
                            {IconEnvelopeSolid}
                            <span className="ml-2">rodrigocw@gmail.com</span>
                        </div>
                        <div className={`flex items-center text-[${h2Text}px] mt-4 ml-2`}>
                            {IconPhoneSolid}
                            <span className="ml-2">(42) 93300-4638</span>
                        </div>
                        <div className={`flex items-center text-[${h2Text}px] mt-4 ml-2`}>
                            {IconLinkedin}
                            <Link href={"https://linkedin.com/in/rodrigocw/"} target="_blank">
                            <span className="ml-2">linkedin.com/in/rodrigocw</span>
                            </Link>
                        </div>
                        <div className={`flex items-center text-[${h2Text}px] mt-4 ml-2`}>
                            {IconGithub}
                            <Link href={"https://github.com/rodrigocw/"} target="_blank">
                            <span className="ml-2">github.com/rodrigocw</span>
                            </Link>
                        </div>
                        <h1 className={`text-[${h1Text}px] mt-4`}>Formação acadêmica</h1>
                        <h2 className={`text-[${h2Text}px] mt-2 ml-2`}>MBA</h2>
                        <h2 className={`text-[${h2Text}px] ml-2`}>Business Intelligence</h2>
                        <h3 className={`text-[${h3Text}px] ml-2`}>Universidade Positivo</h3>
                        <h3 className={`text-[${h3Text}px] ml-2`}>2019 - 2020</h3>
                        <h2 className={`text-[${h2Text}px] mt-2 ml-2`}>Especialização</h2>
                        <h2 className={`text-[${h2Text}px] ml-2`}>Administração de Banco de Dados</h2>
                        <h3 className={`text-[${h3Text}px] ml-2`}>Universidade Estadual de Ponta Grossa</h3>
                        <h3 className={`text-[${h3Text}px] ml-2`}>2001</h3>
                        <h2 className={`text-[${h2Text}px] mt-2 ml-2`}>Graduação</h2>
                        <h2 className={`text-[${h2Text}px] ml-2`}>Bacharelado em Informatica</h2>
                        <h3 className={`text-[${h3Text}px] ml-2`}>Universidade Estadual de Ponta Grossa</h3>
                        <h3 className={`text-[${h3Text}px] ml-2`}>1989 - 1993</h3>
                        <h1 className={`text-[${h1Text}px] mt-4`}>Competências</h1>
                        <h2 className={`text-[${h2Text}px] mt-2 ml-2`}>Resolução de problemas complexos buscando codificação simples</h2>
                        <h2 className={`text-[${h2Text}px] ml-2`}>Uso de orientação ao objeto</h2>
                        <h2 className={`text-[${h2Text}px] ml-2`}>Resiliência</h2>
                        <h2 className={`text-[${h2Text}px] ml-2`}>Trabalho em equipe</h2>
                        <h2 className={`text-[${h2Text}px] mt-1 ml-2`}>Back End</h2>
                        <h3 className={`text-[${h3Text}px] ml-4`}>Windows, Linux (Alpine, Arch, Open SUSE, Ubuntu), Node.js</h3>
                        <h3 className={`text-[${h3Text}px] mt-1 ml-4`}>Banco de Dados</h3>
                        <h3 className={`text-[${h3Text}px] ml-6`}>Oracle, SQL Server, Interbase, Firebase</h3>
                        <h3 className={`text-[${h3Text}px] mt-1 ml-4`}>Linguagens</h3>
                        <h3 className={`text-[${h3Text}px] ml-6`}>PL/SQL, Angular</h3>
                        <h2 className={`text-[${h2Text}px] mt-1 ml-2`}>Front End</h2>
                        <h3 className={`text-[${h3Text}px] mt-1 ml-4`}>Linguagens</h3>
                        <h3 className={`text-[${h3Text}px] ml-6`}>Angular, Next.js, React, Typescript, Delphi, Java, Rust, HTML, CSS</h3>
                        <h3 className={`text-[${h3Text}px] mt-1 ml-4`}>Report</h3>
                        <h3 className={`text-[${h3Text}px] ml-6`}>JasperReports</h3>
                        <h1 className={`text-[${h1Text}px] mt-4`}>Idiomas</h1>
                        <h2 className={`text-[${h2Text}px] mt-2 ml-2`}>Inglês Técnico</h2>
                        <h1 className={`text-[${h1Text}px] mt-4`}>Hobbies</h1>
                        <h2 className={`text-[${h2Text}px] mt-2 ml-2`}>Aquarista, Audiófilo</h2>
                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col mt-2 mb-2 ml-2 mr-2`}>

                        <h1 className="text-[28px]">Rodrigo Carlos Wansovicz</h1>
                        <h2 className="text-[20px]">Analista de Sistemas Full Stack Sênior</h2>
                        <h2 className="text-[16px]">Palmeira, Paraná, Brasil</h2>
                        
                        <h1 className="text-[20px] mt-4">Resumo</h1>
                        <p className="text-[12px]">
                            Ganhei meu primeiro computador com 15 anos, um MSX, como computador era um ótimo videogame, mas era possível fazer programas em basic,  de lá pra cá passei por pascal, c/c++, clipper, zim, delphi, javascript, java. Uma coisa é constante neste tempo todo, minha paixão em programar, gosto muito de desafios computacionais e ajudar as pessoas a resolvê-los. Atualmente estou aprofundando meus conhecimentos da Linguagem Rust e escrevendo o livro Desvendando o Rust, onde apresento na forma de exemplos os conceitos da linguagem, que percebo ser a substituta natural do C e C++.
                        </p>
                        
                        <h1 className="text-[20px] mt-4">Experiência</h1>

                        {data.empresas.map((item,num) => (
                            <CardCV key={num}
                                empresa={item.empresa}
                                cargo={item.cargo}
                                periodo={item.periodo}
                                local={item.local}
                                isDark={isDark}
                                bgDark={num % 2 === 0 ? "bg-gray-900" : "bg-black"}
                                bgLight={num % 2 === 0 ? "bg-gray-50" : "bg-white"}>

                                {item.jobs.map((item,num) => (
                                    <p key={num} className={item.class === "" ? "text-[12px] mt-1" : item.class }>
                                        {item.job}
                                    </p>
                                ))}                                
                            </CardCV>
                        ))}

                        <h1 className={`text-[${h1Text}px] mt-4`}>Disclamer</h1>

                        <p className="text-[12px] mt-2">
                            Se você chegou até aqui Parabéns por ter lido toda a história da minha vida profissional. No dia de hoje 15/05/2024 são 33 anos (seria um presságio sobre os anos de vida do nosso Senhor Jesus?) vivendo e respirando desenvolvimento de sistemas, uma vida inteira desde os primórdios do MS DOS até a revolução da IA na atualidade. Sempre que preciso formatar e reler meu currículo, como foi este caso para o meu novo site, faço uma retrospectiva pela minha vida pessoal e profissional. Nossa sem dúvida, como diria o Roberto, foram Grandes Emoções. Muito trabalho, muito aprendizado, muitas horas de debug em tantos sistemas e tantas tecnologias diversas. Mas sempre fica a certeza, a satisfação em se fazer o que se gosta e a recompensa em estar ajudando as pessoas a realizar seu trabalho com o melhor do meu trabalho. 
                        </p>

                    </div>
                </div>
            </div>
        </Layout>
    )
}