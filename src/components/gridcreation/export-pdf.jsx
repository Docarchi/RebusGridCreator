import {jsPDF} from "jspdf"
import "jspdf-autotable"

export function ExportPDF({data}) {

    let x = 10
    let y = 10
    const img_w = 25
    const img_h = 25

    const doc = jsPDF()
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    doc.text(data.title, width/2, y, { align: "center"})
    y += 10

    doc.text('taille des rébus à trouver :', x, y)
    y += 10
    for(let i = 0; i < data.objectives.length; i++){
        if(data.objectives[i] !== 0){
            doc.text(data.objectives[i]+' rébus de '+String(i+2)+' images', x, y)
            y+=10
        }
    }

    let n = 0
    for(let k =0; k < data.array.length; k++){
        n++
        doc.roundedRect(x, y, img_w+2, img_h+2, 2, 2)
        if(data.array[k] !== null){
            doc.addImage('/RebusGridCreator/images/'+data.array[k]+'.jpg', 'JPEG', x+1, y+1, img_w, img_h)
        }
        x += img_w + 5
        if(n >= data.nbCol){
            y+= img_h + 5
            x = 10
            n = 0
        }
    }

    y+=10
    var splitDescription = doc.splitTextToSize(data.description, width*2/3);
    doc.text(splitDescription, x, y)

    doc.text('d\'après le jeu REBUS de Henri Molliné et Gaspard Fontanille', width-5, height-5, {align:'right'})

    doc.save("grille_rebus.pdf")
}