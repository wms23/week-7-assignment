<template>
    <div>
        <h1>Post Detail</h1>
        <h2>{{posts.title}}
            <router-link :to="{ name: 'detail' ,params: {post_id: posts.id}}"> Edit</router-link>
        </h2>

        <p>Written by : <strong>{{posts.author_name}}</strong></p>
        <p>Created by : <strong>{{posts.created_at}}</strong></p>
        <p>Is Published Post : <strong>{{posts.is_published ? 'Yes' : 'No' }}</strong></p>
        <p>{!!posts.content!!}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                posts: '',
                meta: null,
                links: null,
                url: `/api/v1/post/${this.$route.params.post_id}`
            };
        },
        created() {
            axios.get(this.url).then(this.init_data_handler);
        },
        methods: {
            init_data_handler(response) {
                this.posts = response.data.data;
                this.meta = response.data.meta;
                this.links = response.data.links;
            }
        }
    };
</script>
