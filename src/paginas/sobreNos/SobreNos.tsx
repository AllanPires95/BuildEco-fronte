import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './SobreNos.css';
import { IconButton } from '@mui/material';
import { flexbox } from '@mui/system';
function SobreNos() {
    return (
        <>
        <Grid  className='body' justifyContent='flex-end' style={{marginLeft:"60px"}} >
            <Grid className='flexContainer'>
        
            <img className='Ze' src="https://images-ext-2.discordapp.net/external/8KZpnIEv3ngXOnG9soQQOmaPK6R7-txtzeBT0jMsDjk/https/i.imgur.com/qcgk1tC.png?width=425&height=427" alt="Logotipo Build Eco" />

            
            </Grid>
            <Box >
       <Typography variant="h2"  align="center" >
                    Sobre nós</Typography>
                    <br />
                    <br />
                    
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
         
            <Grid item md={4} xs={6} >
                <img className="foto" src="https://i.imgur.com/lAhm8Fu.jpeg" alt="Logotipo Build Eco" />
            </Grid>

            <Grid item md={6} xs={5} >
         
           
                <Typography variant="body1" align="justify">
                Olá, meu nome é Evandro e eu venho de uma formação em metalúrgica e atualmente trabalho como motoboy para o Zé Delivery.
Recentemente, me inscrevi no bootcamp da Generation Brasil para aprimorar minhas habilidades em tecnologia.
Eu sempre tive um grande interesse por tecnologia e quero expandir minhas habilidades nesta área,
pois acredito que posso ajudar a minha família de maneiras novas e significativas.

Eu aprendi muitas habilidades valiosas em meu trabalho anterior em metalurgia, incluindo atenção aos detalhes e a capacidade de trabalhar em equipe para atingir metas.
Como motoboy, aprendi a ser ágil, pontual e a prestar um serviço de qualidade aos clientes.
Agora, estou animado em aplicar essas habilidades e aprender novas, em um novo desafio na área de tecnologia.

Meu objetivo é trabalhar na área de tecnologia para criar um futuro melhor para mim e minha família.
Estou pronto para aprender, trabalhar duro e contribuir com minha equipe. Obrigado por me ouvir, estou ansioso para saber mais sobre as oportunidades disponíveis</Typography>
                    
               
                    <IconButton href="https://www.linkedin.com/in/evandro-miranda/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton  href='https://github.com/EvandroGMiranda' target='-blank' >
                        <GitHubIcon/>
                    </IconButton>
                   
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item md={6} >
                <Typography variant="body1" align="justify">
                Olá, meu nome é Beatriz e tenho 22 anos. Sou formada em Pedagogia, mas percebi que minha verdadeira paixão é a tecnologia. Por isso, participei de um bootcamp pela Generation Brasil e me tornei uma Desenvolvedora Full Stack Jr.
Minha experiência na área da educação contribuiu para desenvolver minhas Soft Skills, como comunicação, colaboração, empatia, adaptabilidade, inteligência emocional e autocontrole. Agora, como desenvolvedora, estou aprimorando minhas habilidades técnicas em Java, MySQL, Spring Boot, JavaScript, Git, GitHub e React, e também minhas habilidades comportamentais, como a mentalidade de crescimento, gestão de tempo, trabalho em equipe, orientação ao detalhe e etc.
Sou uma pessoa curiosa e sempre busco aprender mais sobre a área da tecnologia. Estou pronta para enfrentar novos desafios e sempre dou o meu melhor em tudo o que faço.                  </Typography>                  
                    <IconButton href="http://linkedin.com/in/beatriz-motta-60b76525b" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton  href='https://github.com/MBeatrizMotta' target='-blank' >
                        <GitHubIcon/>
                    </IconButton>
            </Grid>
            <Grid item md={4} alignItems="center" style={{paddingLeft:"50px"}} >
                <img className="foto" src="https://i.imgur.com/OQRY7Z4.jpeg" alt="Logotipo Build Eco" />
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center"  >
            <Grid item md={4}  >
                <img className="foto" src="https://i.imgur.com/2GtCytd.png" alt="Logotipo Build Eco" />
            </Grid>
            <Grid item md={6} style={{paddingLeft:"80px"}} >
                <Typography variant="body1" align="justify">
                Olá, meu nome é Daniela. Tenho 29 anos, sou casada e me tornei mãe no ano passado, minha familia é minha maior motivação. Comecei a me interessar por tecnologia quando tinha apenas 12 anos e me formei em técnica júnior de computação. Desde então, venho desenvolvendo minhas habilidades como autodidata. Estudei comunicação visual e design de interiores, trabalhei em empresas importantes como o Tribunal de Justiça e a OAB/SP, e até comecei meu próprio negócio de e-commerce de cosméticos e produtos femininos. No entanto, com a chegada da maternidade, decidi me reinventar novamente e me tornei uma desenvolvedora Java Full Stack pela Generation, onde aprimorei minhas habilidades técnicas em Java, MySQL, Spring Boot, TypeScript, Git, GitHub e React, além de desenvolver habilidades comportamentais como mentalidade de crescimento, gestão de tempo, orientação a detalhes e proatividade.</Typography>
              
                    <IconButton href="https://www.linkedin.com/in/danidzah/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton  href='https://github.com/danidzah' target='-blank' >
                        <GitHubIcon/>
                    </IconButton>
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item md={6}>
                <Box>
                <Typography variant="body1" align="justify">
                Olá, meu nome é Allan e tenho 27 anos. Trabalhei por muito tempo na área do comércio varejista mas sempre fui cativado pela área da técnologia. Meu trabalho sempre sustentou minha família, então não conseguia tempo o suficiente para conseguir me dedicar a essa virada de carreira, trabalhava em shoppings que consumia muito tempo. Estudei Marketing, abri uma loja em um shopping em Mongaguá e após a minha separação comecei a trabalhar como motoboy, consegui me tornar Desenvolvedor Full Stack Jr.  pela Generation, aonde desenvolvi habilidades técnicas em Java,  Spring Boot, MySql, TypeScript, React, Git e Github além de aprimorar minhas habilidades comportamentais como gestão de tempo, orientação a detalhes, mentalidade de crescimento, proatividade e gestão de pessoas .
                    </Typography>
                   
                    <IconButton href="https://www.linkedin.com/in/allanpires95/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton  href='https://github.com/AllanPires95' target='-blank' >
                        <GitHubIcon/>
                    </IconButton>
                    </Box>
            </Grid>
            <Grid item md={4} justifyContent="center" alignItems="center" style={{paddingLeft:"50px"}} >
                <img className="foto" src="https://i.imgur.com/xCHDpav.jpeg" alt="Logotipo Build Eco" />
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center"  >
            <Grid item md={4} alignItems="center">
                <img className="foto" src="https://i.imgur.com/mQ4rawj.jpeg" alt="Logotipo Build Eco" />
            </Grid>
            <Grid item md={6} >
                <Typography variant="body1" align="justify">
                    
                    Olá, eu sou o Gabriel tenho 22 anos, sou iniciante na área da programação e busco uma transição de carreira, trabalhei no departamento estadual de trânsito de São Paulo (DETRAN). Durante a pandemia de Coronavírus (COVID-19) comecei a fazer entregas de moto através de aplicativos de delivery, após o pior período da pandemia mesmo podendo retornar ao DETRAN optei por continuar com as entregas pois me garantia uma flexbilidade de tempo que me ajudava a estudar e trabalhar. Recebi por meio do aplicativo de entregas do Zé delivery a oportunidade de estudar desenvolvimento de software, área na qual eu já tinha bastante interesse de iniciar. Acredito que com esforço e trabalho duro podemos alcançar objetivos muito distantes. Gosto muito de aproveitar momentos e oportunidades como essa que me foi dada. Venho desenvolvendo habilidades técnicas em Java com Spring Boot, MySql, TypeScript, React, Git e Github acredito que com boa comunicação, respeito e dedicação construímos um bom ambiente de trabalho no qual colhemos muito aprendizado e desenvolvimento profissional e pessoal!. 
                </Typography>
                    
                    <IconButton href="https://www.linkedin.com/in/gabriel-dos-santos-232b7523b/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton  href='https://github.com/GabrielMSk8' target='-blank' >
                        <GitHubIcon/>
                    </IconButton>
            </Grid>
        </Grid>
        </Box>
        
        </Grid>
        <br />
        <br />
       
       
        </>


    )
}

export default SobreNos
