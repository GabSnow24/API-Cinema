import cron from 'node-cron';
import prismaClient from '../prisma';

export default async function ToRemoveJob(){
    cron.schedule('* 19 * * *', async (params:any) => {
                /* | | | | day of week 
                   | | | month
                   | | day of month 
                   | hour 
                   | minute */
        let ts = Date.now()           
        let date = new Date(ts)
        let day = date.getDate();
        let month = date.getMonth() +1
        let year = date.getFullYear()
        let fd = `${day}${month}${year}`    
        const remove_date = parseInt(fd);      
        const getFilms = await prismaClient.filme.updateMany({
            where:{
                cartaz:{
                    lt: remove_date
                },
                to_remove:false
            },
            data:{
                to_remove:true
            }
        })
        
                    
        })
}