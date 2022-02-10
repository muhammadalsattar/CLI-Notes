import fs from 'fs'
import chalk from 'chalk'

// Loading notes function
const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString()
        return JSON.parse(jsonData)
    }
    catch (e) {
        return []
    }
}

// Saving notes function
const saveNotes = (notes)=>{
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('notes.json', jsonData)
}

// Adding notes function
const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicates = notes.filter((note)=>{
        return note.title === title
    })
    if (duplicates.length === 0){
        notes.push({title, body})
        saveNotes(notes)
        console.log('Note saved!')
    }
    else{
        console.log('Duplicate note title!')
    }
}

// Removing note function
const removeNote = (title)=>{
    const notes = loadNotes()
    const updatedNotes = notes.filter((note)=>{
        return note.title !== title
    })
    if(updatedNotes.length !== notes.length){
        saveNotes(updatedNotes)
        console.log(chalk.greenBright(`${title} Note removed. ${updatedNotes.length} note${updatedNotes.length > 1? 's remained.':' remained.'}`))
    }
    else{
        console.log(chalk.bgRed('Cannot find that note!'))
    }
}

// Listing notes function
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.bold('Your notes:'))
    notes.filter((note)=>{
        console.log(note.title)
    })
}

// Reading note function
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>(note.title === title))
    if(note)
    {
        console.log(chalk.bold(note.title))
        console.log(note.body)
    }
    else
    {
        console.log(chalk.redBright('Cannot find that note!'))
    }
}

export {addNote, loadNotes, saveNotes, removeNote, listNotes, readNote}