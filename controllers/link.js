const nid = require('nid')
const URL = require('../models/link')
const isUrl = require("is-valid-http-url");

async function genShortenUrl(req,res) {
  
    const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" })
  if(!isUrl(body.url)) 
  return res.status(400).json({ error: "enter a valid URL e.g http://www.google.com" })
  
  const id = nid(7);
  await URL.create({
    shortId: id,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: id });
}

async function  getRedirected(req, res){
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectURL);
};

 async function getClicks(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOne(
    {
      shortId
    }
  )
  clicks = entry.visitHistory.length;
  timestamps = entry.visitHistory;
  return res.json( {  
      totalClicks: clicks,
      timestamps : timestamps,
  })
}


module.exports = {genShortenUrl,getClicks,getRedirected};