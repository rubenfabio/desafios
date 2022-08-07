import { NextPage } from 'next'
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import Layout from '../../components/Layout'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderDesafio01 from '../../components/Header/HeaderDesafio01'
import { InView } from 'react-intersection-observer'

interface Inview {
  inView?: boolean
}

const Main = tw.main`bg-desafio01-white-200 min-h-screen font-Lexend-Deca`

const Section = tw.section`px-5 py-12 sm:py-24`
const Row = tw.div`max-w-[900px] mx-auto h-full`
const Container = tw.div`container mx-auto flex flex-col gap-12`

const Article = styled.article(({ inView }: Inview) => [
  tw`p-6 bg-white flex flex-col rounded`,
  inView && tw``,
])
const BoxDate = styled.div(({ inView }: Inview) => [
  tw`flex place-content-between mb-5`,
  inView && tw`animate-fadeInUp animate-delay-300`,
])
const Date = tw.span`text-sm md:text-base text-desafio01-gray`
const Title = styled.h1(({ inView }: Inview) => [
  tw`text-lg sm:text-2xl text-desafio01-gray-dark mb-2`,
  inView && tw`animate-fadeInUp animate-delay-500`,
])
const Paragraph = styled.p(({ inView }: Inview) => [
  tw`text-sm sm:text-lg text-desafio01-gray`,
  inView && tw`animate-fadeInUp animate-delay-700`,
])

const Desafio01: NextPage = () => {
  return (
    <Layout ogTitle="Desafio 01" ogDescription="Desafio do IuriCode 01">
      <HeaderDesafio01 />
      <Main>
        <Section>
          <Row>
            <Container>
              <InView>
                {({ inView, ref, entry }) => (
                  <Article ref={ref} inView={inView}>
                    <BoxDate inView={inView}>
                      <Date>02 de jul, 2021</Date>
                      <AiOutlineHeart tw="text-lg sm:text-2xl text-desafio01-Dark" />
                    </BoxDate>
                    <Title inView={inView}>
                      Agora é oficial: o Windows 11 está vindo
                    </Title>
                    <Paragraph inView={inView}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                      Duis lobortis tellus vel diam fringilla, eu ullamcorper ex
                      iaculis.
                    </Paragraph>
                  </Article>
                )}
              </InView>
              <InView>
                {({ inView, ref, entry }) => (
                  <Article ref={ref} inView={inView}>
                    <BoxDate inView={inView}>
                      <Date>02 de jul, 2021</Date>
                      <AiOutlineHeart tw="text-lg sm:text-2xl text-desafio01-Dark" />
                    </BoxDate>
                    <Title inView={inView}>
                      Tim Berners-Lee vai leiloar código-fonte da web
                    </Title>
                    <Paragraph inView={inView}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                      Duis lobortis tellus vel diam fringilla, eu ullamcorper ex
                      iaculis. Praesent et auctor justo. Vestibulum nisl orci,
                      lacinia venenatis leo sit amet, pulvinar tincidunt risus.
                      Phasellus nisl dui, cursus a lectus et, interdum
                      ullamcorper libero.
                    </Paragraph>
                  </Article>
                )}
              </InView>
              <InView>
                {({ inView, ref, entry }) => (
                  <Article ref={ref} inView={inView}>
                    <BoxDate inView={inView}>
                      <Date>02 de jul, 2021</Date>
                      <AiOutlineHeart tw="text-lg sm:text-2xl text-desafio01-Dark" />
                    </BoxDate>
                    <Title inView={inView}>
                      Tem Firefox novo no pedaço e você vai querer migrar
                    </Title>
                    <Paragraph inView={inView}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum vestibulum auctor est.
                    </Paragraph>
                  </Article>
                )}
              </InView>
              <InView>
                {({ inView, ref, entry }) => (
                  <Article ref={ref} inView={inView}>
                    <BoxDate inView={inView}>
                      <Date>02 de jul, 2021</Date>
                      <AiOutlineHeart tw="text-lg sm:text-2xl text-desafio01-Dark" />
                    </BoxDate>
                    <Title inView={inView}>
                      John McAfee, criador do antivírus McAfee, morre
                    </Title>
                    <Paragraph inView={inView}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                      Duis lobortis tellus vel diam fringilla, eu ullamcorper ex
                      iaculis. Praesent et auctor justo. Vestibulum nisl orci,
                      lacinia venenatis leo sit amet, pulvinar tincidunt risus.
                      Phasellus nisl dui, cursus a lectus et, interdum
                      ullamcorper libero.
                    </Paragraph>
                  </Article>
                )}
              </InView>
              <InView>
                {({ inView, ref, entry }) => (
                  <Article ref={ref} inView={inView}>
                    <BoxDate inView={inView}>
                      <Date>02 de jul, 2021</Date>
                      <AiOutlineHeart tw="text-lg sm:text-2xl text-desafio01-Dark" />
                    </BoxDate>
                    <Title inView={inView}>
                      John McAfee, criador do antivírus McAfee, morre
                    </Title>
                    <Paragraph inView={inView}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                      Duis lobortis tellus vel diam fringilla, eu ullamcorper ex
                      iaculis. Praesent et auctor justo. Vestibulum nisl orci,
                      lacinia venenatis leo sit amet, pulvinar tincidunt risus.
                      Phasellus nisl dui, cursus a lectus et, interdum
                      ullamcorper libero.
                    </Paragraph>
                  </Article>
                )}
              </InView>
              <InView>
                {({ inView, ref, entry }) => (
                  <Article ref={ref} inView={inView}>
                    <BoxDate inView={inView}>
                      <Date>02 de jul, 2021</Date>
                      <AiOutlineHeart tw="text-lg sm:text-2xl text-desafio01-Dark" />
                    </BoxDate>
                    <Title inView={inView}>
                      John McAfee, criador do antivírus McAfee, morre
                    </Title>
                    <Paragraph inView={inView}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                      Duis lobortis tellus vel diam fringilla, eu ullamcorper ex
                      iaculis. Praesent et auctor justo. Vestibulum nisl orci,
                      lacinia venenatis leo sit amet, pulvinar tincidunt risus.
                      Phasellus nisl dui, cursus a lectus et, interdum
                      ullamcorper libero.
                    </Paragraph>
                  </Article>
                )}
              </InView>
              <InView>
                {({ inView, ref, entry }) => (
                  <Article ref={ref} inView={inView}>
                    <BoxDate inView={inView}>
                      <Date>02 de jul, 2021</Date>
                      <AiOutlineHeart tw="text-lg sm:text-2xl text-desafio01-Dark" />
                    </BoxDate>
                    <Title inView={inView}>
                      John McAfee, criador do antivírus McAfee, morre
                    </Title>
                    <Paragraph inView={inView}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                      Duis lobortis tellus vel diam fringilla, eu ullamcorper ex
                      iaculis. Praesent et auctor justo. Vestibulum nisl orci,
                      lacinia venenatis leo sit amet, pulvinar tincidunt risus.
                      Phasellus nisl dui, cursus a lectus et, interdum
                      ullamcorper libero.
                    </Paragraph>
                  </Article>
                )}
              </InView>
            </Container>
          </Row>
        </Section>
      </Main>
    </Layout>
  )
}

export default Desafio01
