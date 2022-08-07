import React from 'react'
import tw from 'twin.macro'
import { GoSearch } from 'react-icons/go'

const Header = tw.header`px-5 py-10 bg-gradient-to-r from-desafio01-Dark to-desafio01-Light h-52 sm:h-64 font-Lexend-Deca`

const Navbar = tw.nav`flex place-content-between`
const NavLink = tw.a`text-white text-lg sm:text-2xl`

const SearchBar = tw.div`bg-white bg-opacity-20 p-3 sm:p-5 rounded flex items-center text-white gap-3`
const InputSearch = tw.input`placeholder-white placeholder-opacity-50 bg-transparent outline-none text-sm sm:text-lg font-inter font-medium flex-1`

const Row = tw.div`max-w-[900px] mx-auto h-full`
const Container = tw.div`container mx-auto`
const ContainerHeader = tw(
  Container,
)`flex flex-col place-content-between h-full w-full`

const HeaderDesafio01: React.FC = () => {
  return (
    <Header>
      <Row>
        <ContainerHeader>
          <Navbar>
            <NavLink href="">Codelândia</NavLink>
            <NavLink href="">blog</NavLink>
          </Navbar>
          <SearchBar>
            <div>
              <GoSearch tw="text-2xl text-base" />
            </div>
            <div tw="w-full flex flex-1">
              <InputSearch type="text" placeholder="Pesquisar no blog" />
            </div>
          </SearchBar>
        </ContainerHeader>
      </Row>
    </Header>
  )
}

export default HeaderDesafio01
