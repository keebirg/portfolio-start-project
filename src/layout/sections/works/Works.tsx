import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import imgWork1 from "../../../assets/images/realtor_test.png"
import imgWork2 from "../../../assets/images/to_do_lists.png"
import imgWork3 from "../../../assets/images/counter.png"
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container";


export type TypeTabMenuType = 'all' | 'landing' | 'react' | 'spa'
export type TabMenuType = {
    type: TypeTabMenuType
    title: string
}
// "All", "Landing page", "React", "spa"

const tabsMenu: Array<TabMenuType> = [
    {
        type: 'all',
        title: "All"
    },
    {
        type: 'landing',
        title: "Landing page"
    },
    {
        type: 'react',
        title: "React"
    },
    {
        type: 'spa',
        title: "spa"
    }

];
const worksData = [
    {
        type: 'react',
        src: imgWork1,
        title: "Риэлтор тест",
        text: "Мини приложения, которое позволяет подготовится для сдачи экзамена на получения статуса реэлтора.",
        github:'https://github.com/keebirg/realtor-test',
        url:'https://keebirg.github.io/realtor-test/'
    },
    {
        type: 'react',
        src: imgWork2,
        title: "ToDoLists",
        text: "Учебный проект, сделанный в связке react redux, для API использовалась библиока axios.",
        github:'https://github.com/keebirg/2-todolist',
        url:''
    },
    {
        type: 'react',
        src: imgWork3,
        title: "Counter",
        text: "Учебный проект счетчика, данный хранятся localstorage.",
        github:'https://github.com/keebirg/counter',
        url:''
    },
]


export const Works: React.FC = () => {
    const [currentTypeTabMenu, setCurrentTypeTabMenu] = useState<TypeTabMenuType>('all')

    let filterWorksData = worksData

    if (currentTypeTabMenu === 'landing') filterWorksData = worksData.filter(work => work.type === 'landing')
    if (currentTypeTabMenu === 'react') filterWorksData = worksData.filter(work => work.type === 'react')
    if (currentTypeTabMenu === 'spa') filterWorksData = worksData.filter(work => work.type === 'spa')

    const changeTabsMenu=(value:TypeTabMenuType)=>setCurrentTypeTabMenu(value)

    return (
        <StyledWorks id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu changeTabsMenu={changeTabsMenu} tabsMenu={tabsMenu} currentTypeTabMenu={currentTypeTabMenu}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filterWorksData.map((t, index) => {
                        return (
                            <Work key={index}
                                  src={t.src}
                                  title={t.title}
                                  text={t.text}
                                  github={t.github}
                                  url={t.url}
                            />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`
