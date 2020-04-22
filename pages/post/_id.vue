<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <i class="el-icon-time"></i>
                    {{ new Date().toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    42
                </small>
            </div>
            <div class="post-image">
                <img
                    src="https://cdn25.img.ria.ru/images/155635/45/1556354505_0:0:2000:2000_1440x900_80_0_1_c1068a401cb0caf693abed302575ea0b.jpg.webp"
                    alt="post-image"
                >
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, corporis rerum expedita dolorem voluptatum dicta sunt possimus iure assumenda quia qui temporibus consequuntur omnis commodi voluptatem suscipit. Tenetur, repellat maxime!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate illo adipisci ut quos nisi nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis debitis error, blanditiis quae est eum ipsa incidunt aperiam sapiente.</p>
        </main>
        <footer>
            <app-comment-form
                v-if="canAddComment"
                @created = "createCommentHandler"
            />
            <div class="comments" v-if="true">
                <app-comment
                    v-for="comment in 4"
                    :key="comment"
                    :comment="comment"
                />
            </div>
            <div class="text-center" v-else>Комментариев нет</div> 
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
    validate({params}) {
       return Boolean(params.id)
    },
    data() {
        return {
            canAddComment:true
        }
    },
    methods: {
        createCommentHandler () {
            this.canAddComment = false
        }
    },
    components: {AppComment, AppCommentForm}
}
</script>

<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;
    }

    .post-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;
    }

    .post-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        align-items: center;
    }

    .post-image img {
        width: 100%;
        height: auto;
    }

    .post-header {
        margin-bottom: 1.5rem;
    }

    .post-content {
        margin-bottom: 2rem;
    }
</style>