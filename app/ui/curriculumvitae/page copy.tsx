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

                        <CardCV
                            empresa="KMM"
                            cargo="Analista de Sistemas Pleno"
                            periodo="Agosto de 2020 - abril de 2023 (2 anos 9 meses)"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-gray-900"
                            bgLight="bg-gray-50">
                            <p className="text-[12px] mt-2">
                                Manutenção e desenvolvimento de sistemas na equipe de TMS da empresa, dando manutenção em sistemas utilizando banco de dados Oracle, linguagens de programação Delphi, Java, PL/SQL. Últimos projetos foram no desenvolvimento de integração com web services de gerenciadoras de risco como Angel Lira, Brasil Risk, desenvolvendo cadastros em Delphi e Java e fazendo a integração em PL/SQL.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Baston Aerossol"
                            cargo="Analista de Sistemas"
                            periodo="Janeiro de 2019 - agosto de 2020 (1 ano 8 meses)"
                            local={localPalmeira}
                            isDark={isDark}
                            bgDark="bg-black"
                            bgLight="bg-white">
                            <p className="text-[12px] mt-2">
                                Auxiliando na implantação do ERP Totvs. Criação do fluxograma dos processos usando Bizagi Modeler. Criação do manual responsivo das telas do Totvs utilizando HTML.
                            </p>
                        </CardCV>

                        <CardCV
                            empresa="KMM"
                            cargo="Desenvolvedor de Sistemas"
                            periodo="Abril de 2018 - dezembro de 2018 (9 meses)"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-gray-900"
                            bgLight="bg-gray-50">
                            <p className="text-[12px] mt-2">
                                Desenvolvimento de novos módulos do ERP da empresa utilizando a linguagem Java, componentes Swing, Banco de Dados Oracle 11g e PL/SQL Developer. Alguns dos módulos desenvolvidos: SPED Fiscal. Mapeamento relatório contábil da empresa CJ Logística do Brasil. Desenvolvimento novo cockpit faturamento do ERP trazendo CTE, NFES, NFST e CRT. Assim como diversas manutenções do sistema de ERP.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Baston Aerossol"
                            cargo="Analista de Sistemas"
                            periodo="Julho de 2017 - abril de 2018 (10 meses)"
                            local={localPalmeira}
                            isDark={isDark}
                            bgDark="bg-black"
                            bgLight="bg-white">
                            <p className="text-[12px] mt-2">
                                Auxiliando o processo de implantação do ERP da Totvs, sendo a ponte entre os consultores da Totvs e usuários chave do processo da Baston. Juntamente com o Gerente de Sistemas foi feita a definição dos diversos módulos específicos para atender o processo de negócio da Baston, participando da especificação, modelagem, testes e validações dos mesmos. Desenvolvendo o manual interno de definição de parâmetros e processos do ERP à medida que os módulos foram repassados pelos consultores Totvs. Treinamento e acompanhamento dos usuários do Datasul.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="WS Sistemas Ltda"
                            cargo="Analista de Sistemas"
                            periodo="2009 - 2017 (8 anos)"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-gray-900"
                            bgLight="bg-gray-50">

                            <p className="text-[12px] mt-2">
                                Consultor contratado prestando serviços para o Sebrae Nacional e Construtora Plaenge.
                            </p>

                            <p className="text-[12px] font-bold mt-2">
                                Sebrae Nacional
                            </p>

                            <p className="text-[12px] mt-2 ml-2">
                                Desenvolvimento de site de questionário para empresas Startup. Tecnologias utilizadas: Java, Spring, SQLServer, AngularJS, JQuery, Javascript, HTML5, CSS.
                            </p>

                            <p className="text-[12px] font-bold mt-2">
                                Construtora Plaenge
                            </p>

                            <p className="text-[12px] mt-2 ml-2">
                                Manutenção no sistema de CRM (Customer Relationship Management), sistema de custeio de vendas x integração com sistema de vendas, envio e recebimento de cotações e ordens de compra aos fornecedores por email, portal dos fornecedores (iss fornecedores). Oracle, Java, Struts, PL/SQL.   
                            </p>
                            <p className="text-[12px] mt-2 ml-2">
                                Desenvolvimentos dos comprovantes de pagamentos e demonstrativos de IR dos funcionários de todas as empresas do grupo, sistema integra com sistema de RH, faz a geração e envios dos demonstrativos por email para os colaboradores. Java, Struts, PL/SQL.
                            </p>
                            <p className="text-[12px] mt-2 ml-2">
                                Desenvolvimento do site de SAC da empresa, onde os clientes podem acessar os boletos de pagamento das suas unidades habitacionais, dados sobre o andamento das obras, manuais e plantas da sua unidade, abertura de reclamações e acompanhamento das mesmas. Este sistema integra-se com o ERP da empresa. Java, Struts, Oracle, PL/SQL, HTML5, CSS, Web Services.
                            </p>
                            <p className="text-[12px] mt-2 ml-2">
                                Desenvolvimento dos relatórios contábil/financeiros de venda dos empreendimentos, composto por mais de 40 relatórios integrados com o ERP. Relatórios disponibilizados em PDF e XLS. Java, Jasper Report, PL/SQL.
                            </p>
                            <p className="text-[12px] mt-2 ml-2">
                                Desenvolvimento de um sistema para recebimento das NF-e's. Este sistema é responsável por receber os xml's das notas enviadas pelos fornecedores, arquivamento, e confirmação de recebimento na SEFAZ da UF emissora. Construção de um site para pesquisa das notas recebidas. Integração com o ERP para confirmar recebimento. Java, Oracle, PL/SQL, HTML5, CSS.
                            </p>
                            <p className="text-[12px] mt-2 ml-2">
                                Desenvolvimento de um Data Warehouse do erp IFS, compreendendo todo processo de compras: requisição, ordem de compra, nota fiscal e pagamento. Disponibilizando informações unificadas para análise. Oracle, PL/SQL.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Ibema Cia Brasileira de Papel"
                            cargo="Auditor de Informática"
                            periodo="2004 - 2009 (5 anos)"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-black"
                            bgLight="bg-white">
                            <p className="text-[12px] mt-2">
                                Auditoria geral nos sistemas da empresa tomando como base as normas desenvolvidas, documentação dos sistemas e processos, levantamento de falhas. Aproximadamente 30 sistemas.
                            </p>
                            <p className="text-[12px] mt-2">
                                Desenvolvimento da Normatização do departamento de TI, para se adequar a obtenção da certificação ISO 9001:2000.
                            </p>
                            <p className="text-[12px] mt-2">
                                Desenvolvimento das normas do departamento no ambito do desenvolvimento de sistemas, banco de dados, backup, segurança, instalação de computadores e software, ambiente de rede, fornecedores, manutenção e melhorias. Não existia um padrão rígido de desenvolvimento e cada desenvolvedor fazia a sua maneira.
                            </p>
                            <p className="text-[12px] mt-2">
                                Desenvolvimento do MER (Modelo Entidade Relacionamento) de todo o banco de dados da empresa utilizando principalmente ERWin e Together. Com mais de 550 tabelas.
                            </p>
                            <p className="text-[12px] mt-2">
                                Ambiente de produção da empresa: Banco de Dados Oracle 9 (sob Linux Suse), Linguagem de Programação Delphi 6 com componente de acesso a Dados DOA. Banco de dados distribuído em três unidades de negócio.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Horizonte Tecnologia da Informação"
                            cargo="Analista de Sistemas"
                            periodo="2004"
                            local={localJoinville}
                            isDark={isDark}
                            bgDark="bg-gray-900"
                            bgLight="bg-gray-50">
                            <p className="text-[12px] mt-2">
                                Desenvolvimento em parceria com a Microimagem (Bureaux de digitalização de Imagens) um aplicativo de Gerenciamento Eletrônico de Documentos – GED, utilizando a plataforma Genexus 8, Visual Fox Pro 7, Postgresql. Este aplicativo é responsável pela digitalização de imagens, indexação da imagem digitalizada e recuperação das imagens com base em seus índices, disponibilizando estas imagens para consulta, em CD ou via Web. O maior desafio deste projeto foi criar este sistema utilizando Genexus e Visual Fox Pro, linguagens que tinha pouquíssimo conhecimento.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Vector Informática Ltda"
                            cargo="Analista de Sistemas"
                            periodo="2003"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-black"
                            bgLight="bg-white">
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento de um aplicativo para gerenciamento de projetos, que possibilita a criação e acompanhamento de um projeto, no que diz respeito a seu cronograma físico e financeiro, agenda de eventos, apresentando gráficos sobre a evolução física e financeira do projeto, além de outras funcionalidades. Delphi 7 e Banco de Dados Interbase 6.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Ibema Cia Brasileira de Papel"
                            cargo="Analista de Sistemas"
                            periodo="1999 - 2003 (4 anos)"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-gray-900"
                            bgLight="bg-gray-50"
                        >
                            <p className="text-[12px] mt-2">
                                Participação da equipe no desenvolvimento e manutenção de sistemas nas áreas de Gestão Administrativa, Financeira, Contábil, Material, Florestal, Industrial e Gerencial. Utilizando plataforma Windows/Linux, Delphi 6, Oracle 9, PL/SQL.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema para o controle do projeto de expansão da empresa, que construiu em 2001 uma nova máquina de papel que duplicou sua capacidade produtiva. Este sistema foi responsável por acompanhar o desenvolvimento do projeto, comparando valores previstos e realizados das diversas atividades. Este sistema também disponibiliza estas informações na forma de uma extranet para acesso de fornecedores e instituições que financiaram o projeto.
                            </p>
                            <p className="text-[12px] mt-2">
                                Participação da equipe na conversão dos sistemas corporativos da empresa de Delphi 2 para Delphi 6.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento da intranet da empresa, utilizando páginas dinâmicas através da tecnologia WebBroker do Delphi, HTML e JavaScript.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema de controle de registro de cartão ponto que anteriormente era terceirizado, este sistema veio sanar os diversos problemas de integração com a folha de pagamento e diversos erros no processamento do ponto.
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Vector Informática Ltda"
                            cargo="Analista de Sistemas"
                            periodo="1998"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-black"
                            bgLight="bg-white">
                            <p className="text-[12px] mt-2">
                                Consultor contratado pela Ibema Cia Brasileira de Papel
                            </p>
                            <p className="text-[12px] mt-2">
                                Os sistemas foram desenvolvidos em Delphi 2, Oracle 9, PL/SQL.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema de controle de exaustão de florestas.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema de custeio por atividade da empresa Ibema Empreendimentos Florestais, responsável pelo rateio de todas as despesas dos centros de custos, bem como da apuração do resultado da atividade florestal da empresa.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema de controle de projetos de reflorestamentos, responsável pela medição, acompanhamento do crescimento das florestas bem como da emissão dos relatórios finais para o plano de corte da área reflorestada.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema de registro de informações do processo industrial da fábrica de papel, responsável pelo apontamento das variáveis de qualidade do processo e emissão do laudo de fabricação do produto.
                            </p>

                        </CardCV>

                        <CardCV 
                            empresa="Vector Informática Ltda"
                            cargo="Analista de Sistemas"
                            periodo="1995 - 1998 (3 anos)"
                            local={localPontaGrossa}
                            isDark={isDark}
                            bgDark="bg-gray-900"
                            bgLight="bg-gray-50">
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema para controle de entrega de água, empresa Rei das Águas. Delphi/Paradox.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema de cobranças para empresa de cobrança AJ Cobrança. Delphi/Paradox.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema integrado de controle administrativo para empresa Bowens e Cia Ltda (representante Parmalat, para Ponta Grossa e região). Módulos de emissão de notas fiscais, controle de pedidos e controle de estoques. Clipper/Dbase
                            </p>
                        </CardCV>

                        <CardCV 
                            empresa="Cooperativa Agropecuária Batavo"
                            cargo="Programador/Analista"
                            periodo="1991 - 1995 (4 anos)"
                            local={localCrambei}
                            isDark={isDark}
                            bgDark="bg-black"
                            bgLight="bg-white">

                            <p className="text-[12px] mt-2">
                                Iniciei na Batavo como estagiário quando cursava o segundo ano da faculdade sendo promovido a analista na conclusão do curso.
                            </p>
                            <p className="text-[12px] mt-2">
                                Participação da equipe de manutenção e desenvolvimento de sistemas integrados na área Fiscal, Contábil, Insumos, Patrimonial, Material, Posto de Combustível, Recebimento de Cereais, Supermercado e Fomento. Utilizando plataforma HP-UX, Dos, ZIM 5.00, Clipper 5.02.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema para cálculo de correção de cotas de capital dos sócios da cooperativa. ZIM.
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema de controle de recebimento de leite do Setor de Fomento. Este sistema foi meu projeto de conclusão da faculdade. Clipper/Dbase
                            </p>
                            <p className="text-[12px] mt-2">
                                Análise e desenvolvimento do sistema para controle de mão de obra dos funcionários do Setor de Manutenção. Clipper/Dbase
                            </p>
                        </CardCV>

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