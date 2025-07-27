import { AffichageImage } from "./affichage-images"
import { Recherche } from "./recherche"
import { AffichageGrille } from "./affichage-grille"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import { useState, useEffect } from "react"
import { ExportButton, GrilleDescription, GrilleObjectif, GrilleTitle, ResetButton } from "./grille-text"
import { GrilleForm } from "./grille-form"
import { ExportPDF } from "./export-pdf"
import {useCookies} from 'react-cookie'

export function GridCreation() {

    const [cookies, setCookie, removeCookie] = useCookies(['title'])

    const [inputSearch, setInputSearch] = useState('')
    const [inputTitle, setInputTitle] = useState((cookies.title ? cookies.title:'undefined'))
    const [inputDescription, setInputDescription] = useState((cookies.description ? cookies.description:'undefined'))

    const [sizeColumn, setSizeColumn] = useState((cookies.sizeColumn ? cookies.sizeColumn:4))
    const [sizeLine, setSizeLine] = useState((cookies.sizeLine ? cookies.sizeLine:4))

    const [arrayImages, setArrayImages] = useState(cookies.arrayImages ? cookies.arrayImages: initiateArray(sizeColumn, sizeLine))

    useEffect(() => {
        const newArray = []
        for(let i = 0; i < sizeColumn; i++){
            for(let j = 0; j < sizeLine; j++){
                if (arrayImages.length > i*sizeLine+j) {
                    newArray.push(arrayImages[i*sizeLine+j])
                }else{
                    newArray.push(null)
                }
            }
        }
        setArrayImages(newArray)
    }, [sizeColumn, sizeLine])
    
    useEffect(() => {setCookie('title', inputTitle, {path: '/'})}, [inputTitle])
    useEffect(() => {setCookie('description', inputDescription, {path: '/'})}, [inputDescription])
    useEffect(() => {setCookie('sizeColumn', sizeColumn, {path: '/'})}, [sizeColumn])
    useEffect(() => {setCookie('sizeLine', sizeLine, {path: '/'})}, [sizeLine])
    useEffect(() => {setCookie('arrayImages', arrayImages, {path: '/'})}, [arrayImages])

   const [objectif2, setObjectif2] = useState(0)
   const [objectif3, setObjectif3] = useState(0)
   const [objectif4, setObjectif4] = useState(0)
   const [objectif5, setObjectif5] = useState(0)
   const [objectif6, setObjectif6] = useState(0)

   const objectives = [objectif2, objectif3, objectif4, objectif5, objectif6]
   const objectivesSetter = [setObjectif2, setObjectif3, setObjectif4, setObjectif5, setObjectif6]

   const [activeId, setActiveId] = useState(null)


    return <DndContext onDragStart={(e)=>setActiveId(e.active.id)} onDragEnd={(e)=>handleDragEnd(e, setArrayImages, arrayImages)}>
        <div className="columns">
            <div className="column is-one-quarter">
                <Recherche onChange={setInputSearch} inputSearch={inputSearch}/>
                <AffichageImage filtered={inputSearch}/>
            </div>
            <div className="column">
                <AffichageGrille sizeColumn={sizeColumn} arrayImages={arrayImages}/>
            </div>
            <div className="column is-one-quarter">
                <GrilleTitle onChange={setInputTitle} initText={inputTitle}/>
                <GrilleDescription onChange={setInputDescription} initText={inputDescription}/>
                <GrilleForm onChangeColumn={setSizeColumn} onChangeLine={setSizeLine} initColumn={sizeColumn} initLine={sizeLine}/>
                <GrilleObjectif objectives={objectives} setter={objectivesSetter}/>
                <ExportButton onClick={ExportPDF} data={{title:inputTitle, description:inputDescription, array:arrayImages, nbCol:sizeColumn, objectives:[objectif2, objectif3, objectif4, objectif5, objectif6]}}/>
                <ResetButton onClick={setArrayImages} data={() => initiateArray(sizeColumn, sizeLine)}/>
            </div>
    </div>

    <DragOverlay>
        {activeId ? (<figure className="image is-128x128">
        <img src={'/RebusGridCreator/images/'+activeId+'.jpg'} alt='image 1'/>
    </figure>): null}
    </DragOverlay>

    </DndContext>
    
}

function handleDragEnd(event, changeArray, currentArray) {
    if (event.collisions.length > 0){
        const newArray = []
        for (let i = 1; i <= currentArray.length; i++){
            if (i == event.collisions[0].id){
                newArray.push(event.active.id)
            }
            else{
                newArray.push(currentArray[i-1])
            }
        }
        changeArray(newArray)
    }
}

function initiateArray(n_column, n_line){
    const lines = []
    for(let i = 0; i < n_line; i++){
        for(let j = 0; j < n_column; j++){
            lines.push(null)
        }
    }
    return lines
}