const posts = [
    {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id1'},
    {title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: 'id2'}
]

export const actions = {
    async fetch({commit}) {
        try {
            return await this.$axios.$get('/api/posts')
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }    
    },
    async fetchAdmin({commit}) {
        try {
            return await this.$axios.$get('/api/posts/admin')
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }    
    },
    async remove({commit}, id) {
        try {
            return await this.$axios.$delete(`/api/posts/admin/${id}`)
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }    
    },

    async update({commit}, {id, text}) {
        try {
            return await this.$axios.$put(`/api/posts/admin/${id}`, {text})
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }    
    },

    async create({}, {title, text, image}) {

        try {
            const fd = new FormData()
            fd.append('title', title)
            fd.append('text', text)
            fd.append('image', image, image.name)
            
            return await this.$axios.$post('/api/posts/admin', fd)
        } catch(e) {
            commit('setError', e, {root: true})
            throw e
        }
    },

    async fetchAdminById ({commit}, id) {
        try {
            return await this.$axios.$get(`/api/posts/admin/${id}`)
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }    
    },
    async fetchById ({commit}, id) {
        try {
            return await this.$axios.$get(`/api/posts/${id}`)
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }    
    },
    async addView({commit}, {views, _id}) {
        try {
            return await this.$axios.$put(`/api/posts/add/view/${_id}`, {views})
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }    
    }
}