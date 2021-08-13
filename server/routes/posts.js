import { createPost } from "../controllers/posts.js";
import { getPost } from "../controllers/posts.js";
import { getPosts } from "../controllers/posts.js";
import {Router} from "express";

const router = Router()
router.get('/',getPosts) // get request. all post
router.get('/:id',getPost) // single post
router.post('/',createPost)

export default router