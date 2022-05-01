import type {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";

type Data = {
    commits: number
}

const ghAccounts: {readonly [username: string]: number} = {
    mrousavy: 1
}
const ghAuthUsername = process.env['GITHUB_USERNAME'] || ''
const ghAuthToken = process.env['GITHUB_PERSONNAL_ACCESS_TOKEN'] || '' 

async function getNumOfCommits (){
    try{
        const baseUrl ="https://api.github.com/repos/facebook/react-native/commits"
        let num = 0
        await Promise.all(
            Object.keys(ghAccounts).map(async username => {
                const perPage = 1000
                const startPage = ghAccounts[username]
                num+=(startPage -1) *perPage
                for (let page = startPage; page<100; ++page){
                    const { data : commits } = await axios.get(baseUrl, {
                        params: {
                            author : username,
                            since : '2000-01-01',
                            per_page: perPage,
                            page
                        },
                        auth: {
                            username: ghAuthUsername,
                            password: ghAuthToken
                        }
                    })
                    num += commits.length
                    if (commits.length < perPage) break
                            
                    } 
                })
        )
    }catch (e){
        console.error(e)
        return 0
    }

}

export default async function handler (_req: NextApiRequest, res: NextApiResponse<Data>){
    res.status(200).json({
        commits: 0
    })
}