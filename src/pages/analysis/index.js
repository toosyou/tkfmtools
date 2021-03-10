import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Col, Form } from 'react-bootstrap';
import Head from 'components/Head';
import ImageSupplier from 'components/ImageSupplier';
import { NumForm, Select, TwoStageForm } from 'components/CharPotential';
import { calcStats } from 'components/CharStats';
import MyHeader from 'components/MyHeader';
import MySnackbar from 'components/MySnackbar';
import { ScrollableModal } from 'components/MyModal';
import { LanguageContext } from 'components/LanguageProvider';
import charsData from 'gamedata/character.json';

const charByPositionData = [...Array(5)].map(i => [])
charsData.forEach((c, idx) => {
    charByPositionData[c.tags.position - 5].push({ id: c.id, idx: idx })
})

const StyledForm = styled(Form)`
    width: 12rem;
    div {
        margin-bottom: .2rem;
    }
    > div:last-child > div {
    margin-bottom: 0;
    }
`
const StyledCharContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    margin-right: 2rem;
`
const CharImgWrapper = styled(ImageSupplier)`
    width: 7rem;
    margin-right: .6rem;
`
const CharContainer = ({ character, state, handleSelect }) => {
    const { pageString, charString } = useContext(LanguageContext)

    return (
        <StyledCharContainer>
            <CharImgWrapper
                name={`char_small_${character.id}`}
                alt={charString.name[character.id]}
            />
            <StyledForm onSubmit={(event) => event.preventDefault()}>
                <Form.Row>
                    <Col>
                        {pageString.analysis.index.levelTitle}
                    </Col>
                    <Col>
                        {pageString.analysis.index.starTitle}
                    </Col>
                    <Col>
                        {pageString.analysis.index.disciplineTitle}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Select
                            type='number'
                            value={state.level}
                            min='0'
                            max='60'
                            onChange={handleSelect('level')}
                            placeholder='-'
                        />
                    </Col>
                    <NumForm
                        as={Col}
                        defaultValue={state.star}
                        minNum={4 - character.id[0]}
                        maxNum={5}
                        onChange={handleSelect('star')}
                    />
                    <NumForm
                        as={Col}
                        defaultValue={state.discipline}
                        minNum={0}
                        maxNum={3}
                        disabled={character.id[0] === '4'}
                        onChange={handleSelect('discipline')}
                    />
                </Form.Row>
                <TwoStageForm
                    title={pageString.analysis.index.potentialTitle}
                    defaultValues={[state.potential, state.potentialSub]}
                    subMinNum={state.potential === 1 ? 0 : 1}
                    minNum={1}
                    maxNum={character.id[0] === '4' || character.id[0] === '3' ? 6 : 12}
                    selectAttrs={['potential', 'potentialSub']}
                    handleSelect={handleSelect}
                />
            </StyledForm>
        </StyledCharContainer>
    )
}

const BtnWrapper = styled.span`
    && > button {
        padding: .4rem .6rem;
        margin-right: .6rem;
        background-color: ${props => props.$type === 'save'
        ? props.theme.colors.success
        : props.$type === 'load'
            ? props.theme.colors.blue
            : props.theme.colors.error
    };
        color: ${props => props.$type === 'save'
        ? props.theme.colors.onSuccess
        : props.$type === 'load'
            ? props.theme.colors.onBlue
            : props.theme.colors.onError
    };
    }
    > button:hover {
        box-shadow: inset 0 0 10rem 10rem rgba(255, 255, 255, 0.25);
    }
`
const StyledButton = ({ children, type, onClick }) => (
    <BtnWrapper $type={type}>
        <Button onClick={onClick}>
            {children}
        </Button>
    </BtnWrapper>
)

const DataButtonContainer = styled.div`
    position: absolute;
    right: 0;
    top: -.6rem;
    margin-bottom : 0;
    > span:last-child button {
        margin: 0;
    }
`
const DataManageButton = ({ handleData, handleModalOpen }) => {
    const { pageString } = useContext(LanguageContext)

    return (
        <DataButtonContainer>
            <StyledButton type='save' onClick={handleData('save')} >
                {pageString.analysis.index.saveButton}
            </StyledButton>
            <StyledButton type='load' onClick={handleModalOpen} >
                {pageString.analysis.index.loadButton}
            </StyledButton>
        </DataButtonContainer>
    )
}

const ModalItemContainer = styled(MyHeader)`
    border: none;
`
const DataModal = ({ handleData }) => {
    const { pageString } = useContext(LanguageContext)

    const localData = localStorage.getItem('analysis-data')
    const data = localData ? JSON.parse(localData) : []

    return (
        data.map((d, idx) => (
            <ModalItemContainer
                title={d.time}
                end={
                    <>
                        <StyledButton type='load' onClick={handleData('load', idx)} >
                            {pageString.analysis.index.loadButton}
                        </StyledButton>
                        <StyledButton type='delete' onClick={handleData('delete', idx)} >
                            {pageString.analysis.index.deleteButton}
                        </StyledButton>
                    </>
                }
                key={idx}
            />
        ))
    )
}

const CharGroupsContainer = styled.div`
    width: 100%;
    > div:nth-child(even) > div > span {
        display: flex;
        align-items: center;
        margin-bottom: .4rem;
    }
`
const UiImgWrapper = styled(ImageSupplier)`
    width: 2rem;
    margin-right: .2rem;
`
const CharsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Index = ({ pageState, handlePageState }) => {
    const { pageString, charString } = useContext(LanguageContext)

    const [state, setState] = useState({
        data: charsData.map(c => ({
            id: c.id,
            attribute: c.tags.attribute,
            position: c.tags.position - 5,
            level: 1,
            potential: 1,
            potentialSub: 0,
            discipline: 0,
            star: c.rarity,
            ATK: c.stats.initATK,
            HP: c.stats.initHP,
            owned: true,
        })),
        isModalOpen: false,
        isSuccessSnackbarOpen: false,
        isErrorSnackbarOpen: false
    })

    // read state when page loaded
    useEffect(() => {
        if (pageState) {
            setState(state => ({ ...state, data: pageState }))
        }
    }, [])

    const handleSelect = (idx) => (attr) => (event) => {
        const selected = parseInt(event.target.value)

        let charState = { ...state.data[idx], [attr]: parseInt(selected) }

        if (isNaN(parseInt(charState.level)) || charState.level < 0 || charState.level > 60) {
            // not valid
            return
        }

        if (charState.potential !== 1 && state.data[idx].potentialSub === 0) {
            charState.potentialSub = 1
        }

        const { stats } = charsData[idx]
        const { rarity, attribute, position, ATK, HP, owned, ...rest } = charState
        const result = calcStats(...Object.values(rest), ...Object.values(stats))

        let newState = state.data.slice()
        newState[idx] = { ...charState, ...result, owned: true }
        setState(state => ({ ...state, data: newState }))
        handlePageState(newState)
    }

    const handleData = (action, idx) => () => {
        const localData = localStorage.getItem('analysis-data')

        if (action === 'save' && pageState) {
            if (localData) {
                let data = JSON.parse(localData)
                data.push({
                    time: new Date().toISOString().slice(0, 10),
                    data: state.data
                })
                localStorage.setItem('analysis-data', JSON.stringify(data))
                setState(state => ({ ...state, isSuccessSnackbarOpen: true }))
                return
            } else {
                localStorage.setItem('analysis-data', JSON.stringify([{
                    time: new Date().toISOString().slice(0, 10),
                    data: state.data
                }]))
                setState(state => ({ ...state, isSuccessSnackbarOpen: true }))
                return
            }
        } else if (action === 'load') {
            if (localData) {
                const data = JSON.parse(localData)
                if (data[idx] && data[idx].data[0].id === '101') {
                    setState(state => ({
                        ...state,
                        data: data[idx].data,
                        isSuccessSnackbarOpen: true,
                        isModalOpen: false
                    }))
                    handlePageState(data[idx].data)
                    return
                }
            }
        } else if (action === 'delete') {
            if (localData) {
                const data = JSON.parse(localData)
                if (data[idx] && data[idx].data[0].id === '101') {
                    data.splice(idx, 1)
                    localStorage.setItem('analysis-data', JSON.stringify(data))
                    setState(state => ({
                        ...state,
                        isModalOpen: true,
                    }))
                    return
                }
            }
        }
        setState(state => ({
            ...state,
            isErrorSnackbarOpen: true,
        }))
    }

    const handleSuccessSnackbarClose = () => {
        setState((state) => ({ ...state, isSuccessSnackbarOpen: false }))
    }

    const handleErrorSnackbarClose = () => {
        setState((state) => ({ ...state, isErrorSnackbarOpen: false }))
    }

    const handleModalOpen = () => {
        setState(state => ({ ...state, isModalOpen: true }))
    }

    const handleModalClose = () => {
        setState((state) => ({ ...state, isModalOpen: false }))
    }

    const positionImg = [
        'attacker',
        'defender',
        'healer',
        'obsructer',
        'supporter'
    ]

    return (
        <CharGroupsContainer>
            <Head
                title={pageString.analysis.index.helmet.title}
                description={pageString.analysis.index.helmet.description}
                path='/analysis/'
            />
            <DataManageButton handleData={handleData} handleModalOpen={handleModalOpen} />
            {charByPositionData.map((group, idx) => (
                <React.Fragment key={idx}>
                    <MyHeader
                        title={charString.tags[idx + 5]}
                        titleIcon={
                            <UiImgWrapper
                                name={`ui_${positionImg[idx]}`}
                                alt=''
                            />
                        }
                    />
                    <CharsContainer>
                        {group.map((c, i) => (
                            <CharContainer
                                character={c}
                                state={state.data[c.idx]}
                                handleSelect={handleSelect(c.idx)}
                                key={i}
                            />
                        ))}
                    </CharsContainer>
                </React.Fragment>
            ))}
            <MySnackbar
                open={state.isSuccessSnackbarOpen}
                onClose={handleSuccessSnackbarClose}
                message={pageString.analysis.index.successMsg}
                type='success'
            />
            <MySnackbar
                open={state.isErrorSnackbarOpen}
                onClose={handleErrorSnackbarClose}
                message={pageString.analysis.index.errorMsg}
                type='error'
            />
            <ScrollableModal
                title={pageString.analysis.index.modalTitle}
                open={state.isModalOpen}
                onClose={handleModalClose}
                ariaLabelledby='load-data-modal-title'
                ariaDescribedby='load-data-modal-description'
            >
                <DataModal
                    handleData={handleData}
                />
            </ScrollableModal>
        </CharGroupsContainer>
    )
}

export default Index