import { addNote, removeNote, listNotes, readNote } from "./notes.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";


// Add note command
yargs(hideBin(process.argv)).command('add', 'Adding a note!', {
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    }
}, (argv)=>{
    addNote(argv.title, argv.body)
}).help().argv

// Remove node command
yargs(hideBin(process.argv)).command('remove', 'Removing a note!', {
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
}, (argv)=>{
    removeNote(argv.title)
}).help().argv

// Read note command
yargs(hideBin(process.argv)).command('read', 'Reading a note!', {
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
}, (argv)=>{
    readNote(argv.title)
}).help().argv

// List node command
yargs(hideBin(process.argv)).command('list', 'Listing a note!', {}, ()=>{
    listNotes()
}).help().argv