import axios from "axios";

/**
 * A typescript class for the API at http://theblogapi.com.
 * This class should initiated with an API key and a blog ID.
 * @param {string} apiKey - The API key for the blog.
 * @param {string} blogId - The ID of the blog.
 */
export class BlogAPI {
  private apiKey: string;
  private blogId: string;
  private _axios: any;
  // private baseUrl: string = 'http://theblogapi.com/api'
  private baseUrl: string = "http://localhost:3333/api";

  constructor(apiKey: string, blogId: string) {
    if (typeof apiKey !== "string")
      throw new Error("API key must be a string.");

    if (typeof blogId !== "string")
      throw new Error("Blog ID must be a string.");

    this.apiKey = apiKey;
    this.blogId = blogId;
    this._axios = axios.create({
      baseURL: `${this.baseUrl}/blogs/${this.blogId}`,
      timeout: 1000,
      headers: { Authorization: `Bearer ${this.apiKey}` },
    });
  }

  /**
   * Get the blog's posts.
   * @returns {Promise} - A promise that resolves with the blog's posts.
   */

  public async getBlogPosts(params: Object) {
    return this._axios("/posts", params);
  }

  /**
   * Get a blog post.
   * @param {string} postId - The ID of the post.
   * @returns {Promise} - A promise that resolves with the blog post.
   * @throws {Error} - If the post ID is not a string.
   */

  public async getBlogPost(postId: string) {
    if (typeof postId !== "string") {
      throw new Error("Post ID must be a string.");
    }
    return this._axios(`/posts/${postId}`);
  }
}
