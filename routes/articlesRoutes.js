const express = require('express');
const router = express.Router();

const Article = require('../models/ArticleModel');

router.get('/',async(req, res) => {
    try{
        const article = await Article.find();
        res.status(200).json(article);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
})

router.post('/', async (req, res)=> {
    try{
        const {id, title, category ,userId, content, image} = req.body;
        const article = new Article({
            id, title, category ,userId, content, image
        });
        await article.save();
        res.status(200).json({"message": article});
    }catch(error){
        res.status(500).json({error: 'Server Error'});
    }
})

router.get('/:id', async (req, res)=> {
    try{
        const {id} = req.params;
        const article = await Article.findById(id);
        res.status(200).json(article);
    }catch(error){
        res.status(500).json({error: 'Server Error'});
    }
})

router.put('/:id', async (req, res)=> {
    try{
        const {id} = req.params;
        const { title, category ,userId, content, image} = req.body;
        const updatedArticle = await Article.findByIdAndUpdate(
            id,
            { title, category ,userId, content, image },
            {new: true}
        );
        res.status(200).json({updatedArticle});
    }catch(error){
        res.status(500).json({error: 'Server Error'});
    }
});

router.delete(':/id', async(req,res)=> {
    try{
        const {id} = req.params;
        await Article.findByIdAndDelete(id);
        res.json({message: 'Article Deleted'})
    }catch(error){
        res.status(500).json({error: 'Server Error'})
    }
})
module.exports = router;