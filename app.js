// const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json())
const {Configuration,OpenAIApi} = require("openai")

require("dotenv").config()


app.get('/',(req,res)=>{
    // runPrompt();
    res.send('<h1>Hello this is only start</h1>')
})
const config= new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

const openai= new OpenAIApi(config)

const runPrompt1 =async(req,res)=>{
    const Text = req.body.text
    console.log(Text);
    const response = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        max_tokens:2048,
        messages:[
            {
              "role": "user",
              "content": Text
            }
          ]
        
    });
    // console.log(response.data.choices[0].message.content);
    res.send ({"data":response.data.choices[0].message.content});
}

app.post('/get_result',runPrompt1);







  app.listen(3000,console.log('Server is listening on 3000'))
