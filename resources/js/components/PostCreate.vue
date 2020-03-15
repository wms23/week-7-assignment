<template>
    <div>
        <text-input name="title" @my_change="title_change" placeholder="Enter Title" label="Title :"></text-input>
        <textarea-input name="content" @my_change="content_change" placeholder="Awesome Content Here" label="Content :"> </textarea-input>
        <form-group label="Publish Post : ">
            <radio-item name="is_published" @my_change="radio_change" model="is_published" checked="true" label="Yes" id="is_published_yes" value="1"></radio-item>
            <radio-item name="is_published" @my_change="radio_change" model="is_published" id="is_published_no" label="No" value="0"></radio-item>
        </form-group>
        <categories-select @my_change='category_id_change'></categories-select>
        <button class='btn btn-primary' @click="create">Save</button>
    </div>
</template>
<script>
    export default {
        name: "PostCreate",
        data() {
            return {
                title : null,
                content : null,
                is_published : null,
                category_id : null,
                post_url : "/post"
            };
        },
        methods: {
            create() {
                const payLoad = {
                    title : this.title,
                    content : this.content,
                    is_published : this.is_published,
                    category_id : this.category_id,
                };
                console.log(payLoad);
                axios({
                    method: "POST",
                    url: this.post_url,
                    data: payLoad
                }).then(this.post_hander);
            },
            post_hander(response){
                console.log(response)
                if(response.data){
                }
                else{
                    alert("Fail to create");
                }
            },
            title_change(content){
                this.title = content;
            },
            content_change(content){
                this.content = content
            },
            category_id_change(content){
                this.category_id = content
            },
            radio_change(content){
                this.is_published = content
            }
        }
    };
</script>
<style scoped>
</style>
