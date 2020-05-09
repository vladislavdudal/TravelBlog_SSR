export const actions = {
    async create({commit}, data) {
        try {
            return await this.$axios.$post('/api/comments', data)
        } catch (e) {
            commit('setError', e, {root: true})
        }
    }
}