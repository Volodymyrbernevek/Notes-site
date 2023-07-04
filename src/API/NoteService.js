import axios from "axios";

export default class NoteService {
    static async getMyNotes(id) {
        const response = await axios.get('http://localhost:50100/statistics/mynotes/'+id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response;
    }

    static async getAvailableNotes(id) {
        const response = await axios.get('http://localhost:50100/statistics/access/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response;
    }

    static async getNoteById(id) {
        const response = await axios.get('http://localhost:50100/note/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response;
    }

    static async createNote(note) {
        console.log(note)
        const response = await axios.post('http://localhost:50100/note',
            {name: note.name,
                  text: note.text,
                  author: note.author} ,


            {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response;
    }

    static async updateNote(note, id) {
        const response = await axios.put('http://localhost:50100/note/'+id,
            {name: note.name,
                text: note.text} ,


            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
        return response;
    }

    static async deleteNote(id) {
        const response = await axios.delete('http://localhost:50100/note/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response;
    }

    static async addUser(username, id) {
        const response = await axios.put('http://localhost:50100/note/user',
            {} ,

            {
                params: {username: username,
                         note_id: id},
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
        return response;
    }

    static async removeUser(username, id) {
        const response = await axios.delete('http://localhost:50100/note/user',

            {
                params: {username: username,
                    note_id: id},
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
        return response;
    }

    static async getUsers(id) {
        const response = await axios.get('http://localhost:50100/statistics/user/'+id,

            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
        return response;
    }

}
