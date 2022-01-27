const axios = require("axios");
require('dotenv').config();

const getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`${process.env.BASE_URL}${username}`);
        const data = await response.data
        return res.send(data)
    } catch (error) {
        res.status(404).send(error)
    }
}

const getUserBySkill = async (req, res) => {
    try {
        const { skill } = req.params;
        const body = {
            "skill/role": {
                text: skill,
                proficiency: "expert"
            }
        }
        const response = await axios.post(`${process.env.SEARCH_URL}`, body);
        const data = await response.data
        const users = data?.results?.map(user => ({
            name: user.name,
            picture: user.picture,
            username: user.username,
            verified: user.verified,
            professionalHeadline: user.professionalHeadline,
            locationName: user.locationName,
            skills: user.skills?.map(skill => skill.name)
        }))

        return res.send(users)
    } catch (error) {
        res.status(404).send(error)
    }

}

module.exports = {
    getUser,
    getUserBySkill
}
