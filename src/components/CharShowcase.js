import React from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageProvider';
import MyAccordion from './MyAccordion';
import MyMasonry from './MyMasonry'
import { ItemCardBody } from './ItemShowcase'
import {
    TypeIcon,
    CategoryIcon,
    RaceIcon,
    BodysizeIcon,
    OppaiIcon,
    RankIcon,
    ElseIcon,
} from './Icon';
import charTagData from '../characters.json'

const Img = styled.img`
    width: 6rem;
    height: 6rem;
    margin-top: -1.6rem;
    margin-bottom: -.8rem;
    margin-left: .4rem;
    margin-right: calc((100% - 13.4rem) / 2);
`

const CardHeader = (props) => (
    <>
        <Img
            src={`${process.env.PUBLIC_URL}/img/char_small_${props.id}.png`}
            alt=''
        />
        <div>
            <div>{props.name.split(" ").slice(0, -1).join(' ')}</div>
            <div>{props.name.split(" ").slice(-1)[0]}</div>
        </div>
    </>
)

const IconWrapper = styled.div`
    margin-bottom: .1rem;
    margin-left: .25rem;
    margin-right: .4rem;
    > svg {
        width: 1.2rem;
        fill: ${props => props.theme.colors.secondary};
        color:  ${props => props.theme.colors.secondary};
    }
`
const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const CardBody = (props) => {
    const { stringData } = React.useContext(LanguageContext)

    const attrIcons = {
        type: TypeIcon,
        category: CategoryIcon,
        race: RaceIcon,
        body: BodysizeIcon,
        oppai: OppaiIcon,
        rank: RankIcon,
        else: ElseIcon
    }

    if (props.id >= 6 && props.id <= 8) {
        return (
            <ItemCardBody>
                <tbody><tr><td>
                    {stringData.characters.tagWarnMsg}
                </td></tr></tbody>
            </ItemCardBody>
        )
    }

    return (
        <ItemCardBody>
            <tbody>
                {Object.entries(charTagData[props.id]).map((entry, idx) => {
                    if (idx < 2)
                        return true

                    if (idx < 8) {
                        if (entry[1].length !== 0) {
                            return (
                                <tr key={idx}>
                                    <td>
                                        <TagWrapper>
                                            <IconWrapper>
                                                {attrIcons[entry[0]]}
                                            </IconWrapper>
                                            {stringData.characters.tags[entry[1]]}
                                        </TagWrapper>
                                    </td>
                                </tr>
                            )
                        } else {
                            return true
                        }
                    }

                    return (
                        entry[1].map((tag, i) => (
                            <tr key={idx + i + 1}>
                                <td>
                                    <TagWrapper>
                                        <IconWrapper>
                                            {attrIcons[entry[0]]}
                                        </IconWrapper>
                                        {stringData.characters.tags[tag]}
                                    </TagWrapper>
                                </td>
                            </tr>
                        ))
                    )
                })}
            </tbody>
        </ItemCardBody>
    )
}

const AccordionWrapper = styled.div`
    margin-bottom: 1rem;
    > .MuiAccordion-root {
        background-color: ${props => props.theme.colors.surface};
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: .25rem;
        box-shadow: 0 0 .15em lightgray;
        > .MuiAccordionSummary-root,
        > .MuiAccordionSummary-root.Mui-expanded {
            padding: 0;
            border-radius: .25rem;
            > .MuiAccordionSummary-content {
                display: flex;
                align-items: center;
                justify-content: start;
                overflow: hidden;
                border-radius: .25rem;
                padding: 0;
                margin: 0;
            }
        }
        > .MuiAccordionSummary-root {
            border-bottom: 0px solid ${props => props.theme.colors.border};
        }
        > .MuiAccordionSummary-root.Mui-expanded {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom: 1px solid ${props => props.theme.colors.border};
        }
        > .MuiCollapse-container {
            border-radius: .2rem;
            > div > div > div > .MuiAccordionDetails-root {
                margin: 0;
                padding: 0;
            }
        }
    }
`

const CharCard = (props) => {
    const [isExpanded, setExpanded] = React.useState(false)

    return (
        <AccordionWrapper>
            <MyAccordion
                expanded={isExpanded}
                onChange={() => setExpanded(!isExpanded)}
                square={false}
                title={props.header}
                content={props.body}
            />
        </AccordionWrapper>
    )
}

export default function CharShowcase() {
    const { stringData } = React.useContext(LanguageContext)
    const characters = stringData.characters.name
    const tags = stringData.characters.tags

    const breakpointColumnsConfig = {
        default: 5,
        1360: 5,
        1200: 4,
        992: 3,
        768: 2
    };

    return (
        <MyMasonry
            breakpointCols={breakpointColumnsConfig}
        >
            {characters.slice(0, characters.length - 1).map((char, idx) => (
                <CharCard
                    header={<CardHeader id={idx + 1} name={char} />}
                    body={<CardBody id={idx} />}
                    key={idx}
                />
            ))}
        </MyMasonry>
    )
}