"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogAPI = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * A typescript class for the API at http://theblogapi.com.
 * This class should initiated with an API key and a blog ID.
 * @param {string} apiKey - The API key for the blog.
 * @param {string} blogId - The ID of the blog.
 */
class BlogAPI {
    constructor(apiKey, blogId) {
        // private baseUrl: string = 'http://theblogapi.com/api'
        this.baseUrl = 'http://localhost:3333/api';
        if (typeof apiKey !== 'string')
            throw new Error('API key must be a string.');
        if (typeof blogId !== 'string')
            throw new Error('Blog ID must be a string.');
        this.apiKey = apiKey;
        this.blogId = blogId;
        this._axios = axios_1.default.create({
            baseURL: `${this.baseUrl}/blogs/${this.blogId}`,
            timeout: 1000,
            headers: { 'Authorization': `Bearer ${this.apiKey}` }
        });
    }
    /**
     * Get the blog's posts.
     * @returns {Promise} - A promise that resolves with the blog's posts.
     */
    getBlogPosts(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._axios('/posts', params);
        });
    }
    /**
     * Get a blog post.
     * @param {string} postId - The ID of the post.
     * @returns {Promise} - A promise that resolves with the blog post.
     * @throws {Error} - If the post ID is not a string.
     */
    getBlogPost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof postId !== 'string') {
                throw new Error('Post ID must be a string.');
            }
            return this._axios(`/posts/${postId}`);
        });
    }
}
exports.BlogAPI = BlogAPI;
