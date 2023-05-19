import axios from "axios";
export default class {
  constructor(apiBase, apiKey, blogId) {
    this.apiBase = apiBase;
    this.apiKey = apiKey;
    this.blogId = blogId;
    this._axios = axios.create({
      baseURL: this.apiBase,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }

  async getBlog() {
    return this._axios.get(`/api/blogs/${this.blogId}`);
  }

  async getBlogPosts(params) {
    return this._axios.get(`/api/blogs/${this.blogId}/posts`, { params });
  }

  async getBlogPost(postId) {
    return this._axios.get(`/api/blogs/${this.blogId}/posts/${postId}`);
  }

  async getPath(path) {
    return this._axios.get(path);
  }
}
