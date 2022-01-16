// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const ideas = require('../../ideas.json');

export default function handler(req, res) {
	res.status(200).json({ idea: ideas[Math.random() * ideas.length | 0] });
}
