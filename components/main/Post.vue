<template>
    <el-card 
        shadow ="hover"
        :body-style="{padding: 0}"
        class="post"
    >
        <header slot="header" class = "post-header">
            <h3>Post Title</h3>

            <small>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </small>
        </header>
        <div class="post-body">
            <img 
                src="https://cdn25.img.ria.ru/images/155635/45/1556354505_0:0:2000:2000_1440x900_80_0_1_c1068a401cb0caf693abed302575ea0b.jpg.webp"
                alt="post-image"
                class="post-img"> 
        </div>
        <footer class="post-footer">
             <el-button round @click="openPost">Открыть</el-button>
             <span>
                 <i class="el-icon-message"></i>

                 12
             </span>
        </footer>
    </el-card>
</template>

<script>

export default {
    methods: {
        openPost() {
            const id = 'test-id'
            this.$router.push(`/post/${id}`)
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem;
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .post-img {
        width: 100%;
        height: auto;
    }

    .post-footer {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>