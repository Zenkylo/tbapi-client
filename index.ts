import axios from 'axios'

/**
 * A typescript class for the API at http://theblogapi.com.
 * This class should initiated with an API key and a blog ID.
 * @param {string} apiKey - The API key for the blog.
 * @param {string} blogId - The ID of the blog.
 */
export class BlogAPI {

    private apiKey: string
    private blogId: string
    private _axios: any

    constructor(apiKey: string, blogId: string) {
        this.apiKey = apiKey
        this.blogId = blogId
        this._axios = axios.create({
            baseURL: `http://theblogapi.com/blogs/${this.blogId}`,
            timeout: 1000,
            headers: { 'Authorization': `Bearer ${this.apiKey}` }
        })
    }

    /**
     * Get the blog's posts.
     * @returns {Promise} - A promise that resolves with the blog's posts.  
     */

    public async getPosts(params: Object) {
        return this._axios.get('/posts', { params })
    }

    /**
     * Get a blog post.
     * @param {string} postId - The ID of the post.
     * @returns {Promise} - A promise that resolves with the blog post.
     * @throws {Error} - If the post ID is not a string.
     */

    public async getPost(postId: string) {
        if (typeof postId !== 'string') {
            throw new Error('Post ID must be a string.')
        }
        return this._axios.get(`/posts/${postId}`)
    }

  }
